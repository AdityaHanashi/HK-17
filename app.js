:root{
  --bg1:#e7d1ff; --bg2:#b9f3c5; --bg3:#ffd3c3;
  --card:rgba(255,255,255,.72); --text:#0d0e10; --muted:#5d6370;
  --blue:#2e8fff; --orange:#ff7b47; --radius:20px;
}
*{box-sizing:border-box}
html,body{height:100%}
body{
  margin:0; font:16px/1.4 system-ui,Segoe UI,Roboto,Arial;
  color:var(--text);
  background: linear-gradient(160deg,var(--bg1),var(--bg2) 45%,var(--bg3));
  min-height:100vh;
}
a{color:inherit}
.topbar{
  position:sticky; top:0; z-index:10;
  display:flex; align-items:center; justify-content:space-between;
  padding:12px 16px; backdrop-filter: blur(10px);
  background:linear-gradient(180deg,rgba(255,255,255,.8),rgba(255,255,255,.4));
  border-bottom:1px solid rgba(0,0,0,.05);
}
.brand{display:flex; align-items:center; gap:10px; font-weight:700}
.logo{width:28px; height:28px}
.icon-btn{border:0; background:transparent; font-size:22px; cursor:pointer}

main{max-width:960px; margin:24px auto; padding:0 16px; display:grid; gap:16px}

.card{
  background:var(--card); border:1px solid rgba(0,0,0,.08);
  border-radius:var(--radius); padding:18px; box-shadow:0 6px 30px rgba(0,0,0,.08);
  position:relative; z-index:1;
}

.hero{ text-align:center; padding:28px; position:relative; z-index:1 }
.hero h1{ margin:8px 0 6px }
.hero .sub{ color:var(--muted); margin:0 auto 16px; max-width:640px }
.cta-row{ display:flex; flex-wrap:wrap; gap:12px; justify-content:center; position:relative; z-index:1 }

/* Buttons and label styled the same */
.cta{
  border:0; padding:14px 18px; border-radius:18px; cursor:pointer;
  color:#fff; font-weight:700; min-width:190px; display:flex; flex-direction:column; gap:2px;
  box-shadow:0 8px 20px rgba(0,0,0,.15); text-align:center; user-select:none;
}
.cta.blue{ background:linear-gradient(180deg,#4aa3ff,#2e8fff) }
.cta.orange{ background:linear-gradient(180deg,#ff9a6e,#ff7b47) }
.cta small{font-weight:500; opacity:.9}
label.cta{ display:inline-flex; align-items:center; justify-content:center }

.hero-art{ display:flex; justify-content:center; margin-bottom:10px }
.road{
  width:160px; height:100px; background:#333; border-radius:10px; position:relative;
  clip-path: polygon(15% 100%,85% 100%,65% 0,35% 0);
}
.center-line{ position:absolute; top:10px; bottom:10px; left:50%; width:6px; transform:translateX(-50%);
  background: repeating-linear-gradient(180deg,#ffd24d 0 12px, transparent 12px 22px);
}

h2,h3{ margin:8px 0 10px }
.muted{ color:var(--muted) }

.steps{ margin:10px 0 0; padding-left:18px }
.steps li{ margin:8px 0 }

.chips{ display:flex; gap:8px; flex-wrap:wrap }
.chip{
  background:#fff; border:1px solid rgba(0,0,0,.1); border-radius:999px;
  padding:10px 14px; text-decoration:none; font-weight:600; cursor:pointer;
}

.contact{ margin-top:12px; color:var(--muted) }

.fab{
  position:fixed; right:18px; bottom:18px;
  background:#6d40ff; color:#fff; border:0; border-radius:999px;
  padding:14px 16px; font-weight:800; cursor:pointer;
  box-shadow:0 10px 26px rgba(0,0,0,.22);
  z-index:2;
}

/* Modal */
.modal{ border:0; padding:0; width:min(520px,92%); border-radius:18px; }
.modal::backdrop{ background:rgba(0,0,0,.35) }
.modal-card{ background:#fff; padding:18px; border-radius:18px }
.field{ display:flex; flex-direction:column; gap:6px; margin:10px 0 }
.field input,.field textarea{
  padding:10px 12px; border:1px solid rgba(0,0,0,.15); border-radius:12px;
}
.modal-actions{ display:flex; justify-content:flex-end; gap:10px; margin-top:8px }
.primary{ background:#2e8fff; color:#fff; border:0; padding:10px 14px; border-radius:12px; cursor:pointer }

/* Keep file input off-screen (not display:none) so label still works */
input[type="file"][data-hidden]{
  position: fixed;
  left: -9999px;
  top: -9999px;
  width: 1px;
  height: 1px;
  opacity: 0;
}