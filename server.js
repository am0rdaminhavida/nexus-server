const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
app.use(express.json({ limit: '10mb' }));
app.use(cors());

// ===== KEYS DATABASE =====
const KEYS_DB = {
  "sk_live_bob2k4c3-6a28-pium-eyas-kjsffz7pwaqk": {
    "credits": 100,
    "active": true
  },
  "sk_live_x78zkkay-xmzo-miq8-spn6-j3h3u0bv3a1x": {
    "credits": 100,
    "active": true
  },
  "sk_live_xzmt1eia-7ph1-c8ml-lji5-xuf1bmyrxbsi": {
    "credits": 100,
    "active": true
  },
  "sk_live_kps23w00-lsqh-p7yi-77kw-6bi27bauwhji": {
    "credits": 100,
    "active": true
  },
  "sk_live_4thl7t74-d99g-76ef-nx4y-cwbt9d2hikt3": {
    "credits": 100,
    "active": true
  },
  "sk_live_fn7qivfy-sb8u-1wgc-sfxi-o5floawp2oai": {
    "credits": 100,
    "active": true
  },
  "sk_live_gfc7bisr-xtz0-ia69-w0mm-zy770l5z3elq": {
    "credits": 100,
    "active": true
  },
  "sk_live_i4i7y6cc-h9l6-1im3-duht-v77bj8zqs4t3": {
    "credits": 100,
    "active": true
  },
  "sk_live_1901y1qz-pg17-roa6-con1-4ntj8wuxygx7": {
    "credits": 100,
    "active": true
  },
  "sk_live_fvealgp1-dgsl-w4l2-u811-amewn6x0gjc9": {
    "credits": 100,
    "active": true
  },
  "sk_live_v6nq7lo8-jdbl-5ooh-els4-kyipjw47z6du": {
    "credits": 100,
    "active": true
  },
  "sk_live_8guzybsj-1krl-16ov-rxn9-9awj129au1ms": {
    "credits": 100,
    "active": true
  },
  "sk_live_1fodbtms-dug9-bxp1-hodc-p1pmeiqot9iy": {
    "credits": 100,
    "active": true
  },
  "sk_live_p8tz0l61-xbpe-3xnf-3xbv-vqypm1sqsfz8": {
    "credits": 100,
    "active": true
  },
  "sk_live_jhel5ggd-7vpt-w8gb-7dgm-dxv1f5ponpjh": {
    "credits": 100,
    "active": true
  },
  "sk_live_nyio0pp9-wwoy-uwu4-ro3n-tcxstxyr3qtr": {
    "credits": 100,
    "active": true
  },
  "sk_live_8hvinhck-zfko-n77w-v3ya-hc5w1tpa4wrr": {
    "credits": 100,
    "active": true
  },
  "sk_live_rnw9ym7b-3lfh-16us-qe9o-u310tvedgam9": {
    "credits": 100,
    "active": true
  },
  "sk_live_yhgpqg0n-4eyi-sg2u-jzo2-pw8ls6upnear": {
    "credits": 100,
    "active": true
  },
  "sk_live_uqyl10b7-3ggo-79hy-9ebm-b5m1v49gqc0h": {
    "credits": 100,
    "active": true
  },
  "sk_live_ns4oaupt-yhbk-ydxg-avqg-zkah8q8d1r4o": {
    "credits": 100,
    "active": true
  },
  "sk_live_dfvkrxgz-mzi0-kgbn-79ao-ttboinbp1t1m": {
    "credits": 100,
    "active": true
  },
  "sk_live_xo3onxnp-khhz-blmb-lp6b-h4kcjx75s38y": {
    "credits": 100,
    "active": true
  },
  "sk_live_mkssu9r4-l5iq-92mh-25h6-8rj79i38eigi": {
    "credits": 100,
    "active": true
  },
  "sk_live_3lua71q4-vpar-zh6t-bpse-ihx23tl5c5d2": {
    "credits": 100,
    "active": true
  },
  "sk_live_kru1ftpx-nhcm-e5t2-44lb-gpf715fel2bx": {
    "credits": 100,
    "active": true
  },
  "sk_live_x1hx2mnf-suyi-tx4u-xjg7-91mtj1nwgv7a": {
    "credits": 100,
    "active": true
  },
  "sk_live_xjn4hg18-psap-8eta-k1s5-bondllbvf4kp": {
    "credits": 100,
    "active": true
  },
  "sk_live_qutfwtbp-bzzi-8hxl-9m0j-kfivc6bysnav": {
    "credits": 100,
    "active": true
  },
  "sk_live_iv7gm03q-xzkb-nlr8-aknp-ehwh2vnqkl9b": {
    "credits": 100,
    "active": true
  },
  "sk_live_ls1y61po-9v4t-bztl-2npg-y2dn2csl9ojv": {
    "credits": 100,
    "active": true
  },
  "sk_live_h0fvgw0t-gfti-60mg-8qam-b5u1eoy4v6y7": {
    "credits": 100,
    "active": true
  },
  "sk_live_o13iod1m-17x6-klxv-dugm-5l3t4hrp6xc9": {
    "credits": 100,
    "active": true
  },
  "sk_live_1ube1owg-wza0-bsuq-w5o4-kuglz9adswqz": {
    "credits": 100,
    "active": true
  },
  "sk_live_tpiouoxk-1dpu-oulk-sqsp-donnm2ggu19d": {
    "credits": 100,
    "active": true
  },
  "sk_live_snx09emp-24jr-3nrm-4lqe-vt7khf7djv4f": {
    "credits": 100,
    "active": true
  },
  "sk_live_gs60y6vv-eho3-yrax-r82j-chy1p9el2qcy": {
    "credits": 100,
    "active": true
  },
  "sk_live_xazd38fq-pcm3-b0e8-w4sy-bfsg3hh12j8u": {
    "credits": 100,
    "active": true
  },
  "sk_live_ozzudkx4-mgz0-2zdt-5nuf-alc9heswgcye": {
    "credits": 100,
    "active": true
  },
  "sk_live_a77g5op3-4cb1-n7b1-uqdl-xd7qrs810xou": {
    "credits": 100,
    "active": true
  },
  "sk_live_wn2ndh88-qxn4-y8do-jeks-m4mht7oidfzv": {
    "credits": 100,
    "active": true
  },
  "sk_live_dw6jyesd-1e71-obhb-avt4-z8xvz4z3k7yd": {
    "credits": 100,
    "active": true
  },
  "sk_live_tmgmovwv-gu2s-born-n5t4-0yc3te3yt4sv": {
    "credits": 100,
    "active": true
  },
  "sk_live_zyijf0mm-hz7j-cx79-klt8-vsmswqhphm5k": {
    "credits": 100,
    "active": true
  },
  "sk_live_dc7dubh0-041b-nci6-921u-6qyivc53wtgl": {
    "credits": 100,
    "active": true
  },
  "sk_live_nmsz2j4n-vy8m-r451-d3dn-zmphkickqudf": {
    "credits": 100,
    "active": true
  },
  "sk_live_tokipcne-f431-3gmf-akj0-64yscqj1hi7c": {
    "credits": 100,
    "active": true
  },
  "sk_live_w1ynwa0m-pb1a-bsqe-mxwp-s4czd6ox89ji": {
    "credits": 100,
    "active": true
  },
  "sk_live_sygm5v8w-0gnw-jewt-wcgt-wyz2i8jxwx7m": {
    "credits": 100,
    "active": true
  },
  "sk_live_8nm9htgl-f391-k99d-2jx6-rsnn66n1g6tq": {
    "credits": 100,
    "active": true
  },
  "sk_live_ncdvl773-206k-7sj6-5zqf-hlb5264w7tn2": {
    "credits": 100,
    "active": true
  },
  "sk_live_6km9cm4p-ubwe-ct8f-7jih-fgfoy95vwqey": {
    "credits": 100,
    "active": true
  },
  "sk_live_cew3fkt8-82a5-npb1-vkvw-ilya1ng3q1w6": {
    "credits": 100,
    "active": true
  },
  "sk_live_bkp16ovy-1hg6-wcd0-wrr4-bamh2qicvxcq": {
    "credits": 100,
    "active": true
  },
  "sk_live_wb5wance-svz2-z6no-qcdg-8mvzryddcmgc": {
    "credits": 100,
    "active": true
  },
  "sk_live_dz3kf7aq-rxui-e78d-zp2u-iuffz1ih1iwz": {
    "credits": 100,
    "active": true
  },
  "sk_live_jhqm76x0-uwga-hms7-smfb-5v92g4co9q4d": {
    "credits": 100,
    "active": true
  },
  "sk_live_mjbrpgw9-iijg-b2ts-zzxz-qa0o2uw046ro": {
    "credits": 100,
    "active": true
  },
  "sk_live_7yiwpq42-nj5u-7n0r-xshx-7bae6gmy8cjq": {
    "credits": 100,
    "active": true
  },
  "sk_live_i2yxbx3r-5h7l-dkyl-mf4r-1fwk2juxcgm2": {
    "credits": 100,
    "active": true
  },
  "sk_live_0jfepplb-5e7j-11l7-7n6n-3hvx8h5xigzd": {
    "credits": 100,
    "active": true
  },
  "sk_live_5bkt62zc-3wyy-8310-selo-flxjmuzccxxa": {
    "credits": 100,
    "active": true
  },
  "sk_live_zmw88o07-mpwi-13s5-a6mk-c5rexarwwo4r": {
    "credits": 100,
    "active": true
  },
  "sk_live_a4yzspb4-gywo-gbwh-38mt-ieu4a8t5f9dj": {
    "credits": 100,
    "active": true
  },
  "sk_live_1j0trnvk-ppzw-47ft-wrbz-5uf2zjxuqliy": {
    "credits": 100,
    "active": true
  },
  "sk_live_e9e0inf7-qq3i-ya4c-wi40-zp462qlk8kry": {
    "credits": 100,
    "active": true
  },
  "sk_live_gxvzizgt-xqty-ia45-g0lp-utvhf59jdy1d": {
    "credits": 100,
    "active": true
  },
  "sk_live_ujekurce-rocz-49xi-3q9m-08m5v7t2q9oe": {
    "credits": 100,
    "active": true
  },
  "sk_live_jnt11jl1-5mm6-xxht-oko2-i18g2wjknbmy": {
    "credits": 100,
    "active": true
  },
  "sk_live_iu3rc9ku-1q4d-p3zx-rudu-58vf99wr9lnq": {
    "credits": 100,
    "active": true
  },
  "sk_live_gfd669qy-rqrf-7adu-nazc-20vb5sxvdnqe": {
    "credits": 100,
    "active": true
  },
  "sk_live_lla2q7cj-bpm5-4fau-lwyx-rpj63j0dqidc": {
    "credits": 100,
    "active": true
  },
  "sk_live_s72s9sej-174r-gsb5-dg7i-y8jrk1e0obda": {
    "credits": 100,
    "active": true
  },
  "sk_live_lzcbbaex-v2l3-80i4-9377-o89682pzyqhw": {
    "credits": 100,
    "active": true
  },
  "sk_live_x6ltui9j-xv8i-g92j-sqdh-pxevrszyiu7l": {
    "credits": 100,
    "active": true
  },
  "sk_live_n8dxmvbl-zyn0-9jjy-by9p-qxi1w10j22rj": {
    "credits": 100,
    "active": true
  },
  "sk_live_d6d65d37-ql3a-w83h-a18d-1y7we09avr3u": {
    "credits": 100,
    "active": true
  },
  "sk_live_bnje0dlx-pyll-hpq2-ndt3-6ug14kcfjacx": {
    "credits": 100,
    "active": true
  },
  "sk_live_ps0dude8-hdsz-diwl-4jki-f9sl38l6z9x1": {
    "credits": 100,
    "active": true
  },
  "sk_live_7w7puftg-axak-7vpl-g5wp-14uiyd5p93ek": {
    "credits": 100,
    "active": true
  },
  "sk_live_aj01w9hy-2oym-cemp-26lc-qmqfnj04uqzs": {
    "credits": 100,
    "active": true
  },
  "sk_live_ybujg0ry-i7vf-n1ar-47f0-vabx37n8diz8": {
    "credits": 100,
    "active": true
  },
  "sk_live_q2izpy2b-kl8u-9x6a-2rp8-ozeuht0ewv1f": {
    "credits": 100,
    "active": true
  },
  "sk_live_zgg70jlk-h3cw-fpgx-7bf9-6sppxsqk5dn8": {
    "credits": 100,
    "active": true
  },
  "sk_live_mxld5co0-2gye-1rvc-gusz-6fg5g988hxkn": {
    "credits": 100,
    "active": true
  },
  "sk_live_t2km77mt-l4uf-d11g-27b9-g9924vtjpo07": {
    "credits": 100,
    "active": true
  },
  "sk_live_s1o0eqht-1vse-z3br-fijt-m6an7pp83bke": {
    "credits": 100,
    "active": true
  },
  "sk_live_iwz0u6nd-832g-musx-7000-bc15et1xo5tb": {
    "credits": 100,
    "active": true
  },
  "sk_live_bd0u0t3m-el60-6mor-sz8r-qreyehj63juc": {
    "credits": 100,
    "active": true
  },
  "sk_live_c1wap6n6-d2eq-3ie5-q1iu-dx0kvzcndwdw": {
    "credits": 100,
    "active": true
  },
  "sk_live_q0fb9zj6-nota-g079-ol02-p85tyzo0q4lk": {
    "credits": 100,
    "active": true
  },
  "sk_live_6hppwr63-ldj5-h7ui-sj8t-ezdfxgms8i4j": {
    "credits": 100,
    "active": true
  },
  "sk_live_gt0bhich-mb28-narw-5w9c-myymof7es8ee": {
    "credits": 100,
    "active": true
  },
  "sk_live_yc0in28s-6y9c-lvnp-2fcy-x03wng701ik4": {
    "credits": 100,
    "active": true
  },
  "sk_live_osj27hii-es31-ag89-5s71-u0i5vpry4j1r": {
    "credits": 100,
    "active": true
  },
  "sk_live_6v345rqd-vyy8-uitx-gch8-sje9phc0f4sj": {
    "credits": 100,
    "active": true
  },
  "sk_live_n6argqpt-ii9e-qj4n-vaxz-4ntsh6hepz0m": {
    "credits": 100,
    "active": true
  },
  "sk_live_70oxp017-88ko-n8uj-vo6x-e95l1f673ej2": {
    "credits": 100,
    "active": true
  },
  "sk_live_56xhhgee-ntsa-swxq-0phf-w6ngelcm94hj": {
    "credits": 100,
    "active": true
  },
  "sk_live_k5j1c5sr-sf7e-fokm-wo7c-lkdlm8wvuxho": {
    "credits": 100,
    "active": true
  }
};

// ===== STORAGE DE CRÉDITOS EM MEMÓRIA =====
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

// ===== HEALTH CHECK =====
app.get('/', (req, res) => {
  res.json({ status: 'ok', service: 'Nexus Painel Server', keys: Object.keys(KEYS_DB).length });
});

// ===== VALIDAR CHAVE =====
app.post('/api/validate', async (req, res) => {
  try {
    const { api_key } = req.body;
    if (!api_key) return res.status(400).json({ success: false, error: 'Chave não fornecida.' });
    if (!KEYS_DB[api_key]) return res.status(401).json({ success: false, error: 'Chave inválida ou não encontrada.' });
    const credits = getCredits(api_key);
    if (credits <= 0) return res.status(402).json({ success: false, error: 'Sem créditos restantes.', remaining: 0 });
    return res.json({ success: true, remaining: credits });
  } catch (e) {
    return res.status(500).json({ success: false, error: 'Erro interno.' });
  }
});

// ===== ENVIAR MENSAGEM =====
app.post('/api/send', async (req, res) => {
  try {
    const { api_key, message, token, projectId, images, creditAmount } = req.body;

    if (!api_key || !KEYS_DB[api_key]) return res.status(401).json({ success: false, error: 'Chave inválida ou revogada.' });

    const currentCredits = getCredits(api_key);
    const cost = parseFloat(creditAmount) || 1;

    if (currentCredits < cost) {
      setCredits(api_key, 0);
      return res.status(402).json({ success: false, error: 'Sem créditos suficientes.', remaining: 0 });
    }

    if (!token) return res.status(400).json({ success: false, error: 'Token não encontrado. Abra o lovable.dev primeiro.' });
    if (!projectId) return res.status(400).json({ success: false, error: 'Project ID não encontrado.' });

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
      return res.status(502).json({ success: false, error: `Erro da Lovable: ${lovableRes.status} - ${lovableText}`, remaining: currentCredits });
    }

    const newCredits = currentCredits - cost;
    setCredits(api_key, newCredits);
    console.log(`[Nexus] Enviado! Key: ...${api_key.slice(-6)} | Créditos: ${currentCredits} → ${newCredits}`);

    return res.json({ success: true, data: lovableData, remaining: newCredits, charged: cost });
  } catch (e) {
    console.error('[/api/send] Erro:', e.message);
    return res.status(500).json({ success: false, error: e.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`[Nexus Server] Rodando na porta ${PORT}`);
  console.log(`[Nexus Server] Keys carregadas: ${Object.keys(KEYS_DB).length}`);
});
