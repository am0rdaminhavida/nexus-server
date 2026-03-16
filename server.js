const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
app.use(express.json({ limit: '10mb' }));
app.use(cors());

// ===== KEYS DATABASE (embutido no servidor) =====
// Carregado do arquivo keys.json via variável de ambiente ou inline
let KEYS_DB = {};

function loadKeys() {
  try {
    if (process.env.KEYS_JSON) {
      KEYS_DB = JSON.parse(process.env.KEYS_JSON);
      console.log(`[Nexus] ${Object.keys(KEYS_DB).length} keys carregadas via ENV`);
    }
  } catch (e) {
    console.error('[Nexus] Erro ao carregar keys:', e.message);
  }
}
loadKeys();

// ===== STORAGE DE CRÉDITOS EM MEMÓRIA =====
// (persiste enquanto o servidor estiver rodando)
const creditsStore = {};

function getCredits(apiKey) {
  if (creditsStore[apiKey] !== undefined) return creditsStore[apiKey];
  if (KEYS_DB[apiKey]) {
    creditsStore[apiKey] = KEYS_DB[apiKey].credits;
    return creditsStore[apiKey];
  }
  return null;
}

function setCredits(apiKey, value) {
  creditsStore[apiKey] = Math.max(0, value);
}

// ===== ROTA: health check =====
app.get('/', (req, res) => {
  res.json({ status: 'ok', service: 'Nexus Painel Server' });
});

// ===== ROTA: validar chave =====
app.post('/api/validate', async (req, res) => {
  try {
    const { api_key } = req.body;

    if (!api_key) {
      return res.status(400).json({ success: false, error: 'Chave não fornecida.' });
    }

    if (!KEYS_DB[api_key]) {
      return res.status(401).json({ success: false, error: 'Chave inválida ou não encontrada.' });
    }

    const credits = getCredits(api_key);

    if (credits <= 0) {
      return res.status(402).json({ success: false, error: 'Sem créditos restantes.', remaining: 0 });
    }

    return res.json({ success: true, remaining: credits });

  } catch (e) {
    console.error('[/api/validate] Erro:', e.message);
    return res.status(500).json({ success: false, error: 'Erro interno do servidor.' });
  }
});

// ===== ROTA: enviar mensagem para Lovable =====
app.post('/api/send', async (req, res) => {
  try {
    const { api_key, message, token, projectId, images, creditAmount } = req.body;

    // 1. Validar key
    if (!api_key || !KEYS_DB[api_key]) {
      return res.status(401).json({ success: false, error: 'Chave inválida ou revogada.' });
    }

    // 2. Verificar créditos
    const currentCredits = getCredits(api_key);
    const cost = parseFloat(creditAmount) || 1;

    if (currentCredits < cost) {
      setCredits(api_key, 0);
      return res.status(402).json({ success: false, error: 'Sem créditos suficientes.', remaining: 0 });
    }

    // 3. Validar token e projectId
    if (!token) {
      return res.status(400).json({ success: false, error: 'Token não encontrado. Abra o lovable.dev primeiro.' });
    }
    if (!projectId) {
      return res.status(400).json({ success: false, error: 'Project ID não encontrado. Abra um projeto no lovable.dev.' });
    }

    // 4. Enviar mensagem para a API da Lovable
    const lovableBody = { messages: [{ role: 'user', content: message }] };
    if (images && images.length > 0) lovableBody.images = images;

    const lovableRes = await fetch(`https://api.lovable.dev/api/v1/projects/${projectId}/messages`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
        'Origin': 'https://lovable.dev',
        'Referer': 'https://lovable.dev/',
      },
      body: JSON.stringify(lovableBody)
    });

    const lovableText = await lovableRes.text();
    let lovableData;
    try { lovableData = JSON.parse(lovableText); } catch { lovableData = { raw: lovableText }; }

    if (!lovableRes.ok) {
      console.error(`[/api/send] Lovable retornou ${lovableRes.status}:`, lovableText);
      return res.status(502).json({
        success: false,
        error: `Erro da Lovable: ${lovableRes.status}`,
        remaining: currentCredits
      });
    }

    // 5. Descontar créditos SOMENTE se a Lovable aceitou
    const newCredits = currentCredits - cost;
    setCredits(api_key, newCredits);

    console.log(`[Nexus] Mensagem enviada. Key: ...${api_key.slice(-6)} | Créditos: ${currentCredits} → ${newCredits}`);

    return res.json({
      success: true,
      data: lovableData,
      remaining: newCredits,
      charged: cost
    });

  } catch (e) {
    console.error('[/api/send] Erro:', e.message);
    return res.status(500).json({ success: false, error: 'Erro interno do servidor.' });
  }
});

// ===== INICIAR SERVIDOR =====
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`[Nexus Server] Rodando na porta ${PORT}`);
  console.log(`[Nexus Server] Keys carregadas: ${Object.keys(KEYS_DB).length}`);
});
