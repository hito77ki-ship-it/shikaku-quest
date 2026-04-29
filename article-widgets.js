(function(){
'use strict';

const ARTICLES = {
  'boki.html':           {label:'簿記3級・2級',    title:'日商簿記3級・2級の独学勉強法と合格スケジュール'},
  'boki2.html':          {label:'簿記2級',          title:'簿記2級の勉強時間・独学合格ロードマップ'},
  'boki1.html':          {label:'簿記1級',          title:'日商簿記1級の独学合格ガイド'},
  'cpa.html':            {label:'公認会計士',        title:'公認会計士試験の勉強法・独学ロードマップ'},
  'fp.html':             {label:'FP2級',            title:'FP2級・3級の独学合格ガイド'},
  'takken.html':         {label:'宅建',             title:'宅建士の独学合格ガイド・スケジュール'},
  'gyosei.html':         {label:'行政書士',          title:'行政書士試験の独学合格ガイド'},
  'sharoshi.html':       {label:'社労士',           title:'社会保険労務士の独学合格ガイド'},
  'zeirishi.html':       {label:'税理士',           title:'税理士試験の科目選択と独学戦略'},
  'shihoshoshi.html':    {label:'司法書士',          title:'司法書士の独学合格ガイド'},
  'mansion.html':        {label:'マンション管理士',  title:'マンション管理士の独学合格ガイド'},
  'toeic.html':          {label:'TOEIC',            title:'TOEIC L&Rの独学スコアアップ戦略'},
  'eiken.html':          {label:'英検2級',           title:'英検2級の独学合格ガイド'},
  'itp.html':            {label:'ITパスポート',      title:'ITパスポートの独学合格ガイド'},
  'fe.html':             {label:'基本情報',          title:'基本情報技術者試験の独学合格ガイド'},
  'ap.html':             {label:'応用情報',          title:'応用情報技術者試験の完全ガイド'},
  'mos.html':            {label:'MOS',              title:'MOS（Microsoft Office Specialist）の独学合格ガイド'},
  'shindanshi.html':     {label:'中小企業診断士',    title:'中小企業診断士の独学合格ガイド'},
  'kiken.html':          {label:'危険物乙4',         title:'危険物取扱者（乙4）の独学合格ガイド'},
  'denki.html':          {label:'電気工事士',        title:'電気工事士2種の独学合格ガイド'},
  'chori.html':          {label:'調理師免許',        title:'調理師免許の独学合格ガイド'},
  'kaigo.html':          {label:'ケアマネ',          title:'ケアマネジャー試験の独学合格ガイド'},
  'nurse.html':          {label:'看護師',            title:'看護師国家試験の勉強法と合格戦略'},
  'hoikushi.html':       {label:'保育士',            title:'保育士試験の独学合格ガイド'},
  'shakai-fukushi.html': {label:'社会福祉士',        title:'社会福祉士の独学合格ガイド'},
  'iryo-jimu.html':      {label:'医療事務',          title:'医療事務の独学合格ガイド'},
  'kaigo-fukushi.html':  {label:'介護福祉士',        title:'介護福祉士の独学合格ガイド'},
  'keizoku.html':        {label:'勉強継続',          title:'資格勉強が続かない原因と解決策7つ'},
  'shikaku-app.html':    {label:'アプリ比較',        title:'資格勉強アプリ比較ランキング2026'},
};

const CATS = {
  'IT・技術系':      {color:'#10B981', files:['itp.html','fe.html','ap.html','mos.html']},
  'ビジネス・経済系': {color:'#3B82F6', files:['boki.html','boki2.html','boki1.html','fp.html','shindanshi.html']},
  '法律・会計系':    {color:'#8B5CF6', files:['cpa.html','takken.html','gyosei.html','sharoshi.html','zeirishi.html','shihoshoshi.html','mansion.html']},
  '医療・福祉系':    {color:'#EC4899', files:['kaigo.html','nurse.html','hoikushi.html','shakai-fukushi.html','iryo-jimu.html','kaigo-fukushi.html']},
  '技術・工業系':    {color:'#F97316', files:['kiken.html','denki.html','chori.html']},
  '語学・教養系':    {color:'#F59E0B', files:['toeic.html','eiken.html']},
  '継続・ツール':    {color:'#8CC63F', files:['keizoku.html','shikaku-app.html']},
};

const LATEST = ['mansion.html','boki1.html','kaigo-fukushi.html','chori.html','mos.html','shihoshoshi.html','iryo-jimu.html','shakai-fukushi.html'];

const PAGE = location.pathname.split('/').pop() || '';

/* ── スタイル ── */
function injectStyles(){
  const s = document.createElement('style');
  s.textContent = `
/* サイドバー：fixed で記事の右に配置（1100px以上のみ） */
@media(min-width:1100px){
  .sq-sidebar{
    position:fixed;
    top:72px;
    left:min(calc(50% + 420px), calc(100vw - 276px - 12px));
    width:260px;
    max-height:calc(100vh - 88px);
    overflow-y:auto;
    scrollbar-width:thin;
    scrollbar-color:#E2E8F0 transparent;
    display:flex;
    flex-direction:column;
    gap:16px;
    padding-bottom:40px;
    z-index:10;
  }
  .sq-sidebar::-webkit-scrollbar{width:3px;}
  .sq-sidebar::-webkit-scrollbar-thumb{background:#E2E8F0;}
  .sq-sidebar-box{background:#F7FAFC;border:1px solid #E2E8F0;border-radius:10px;padding:16px;}
  .sq-sidebar-box-title{font-size:11px;font-weight:700;color:#6AAF2B;margin-bottom:10px;letter-spacing:.08em;text-transform:uppercase;}
  .sq-sidebar-cta{background:linear-gradient(135deg,#1A2A0A,#2D4A10);border-radius:10px;padding:16px;text-align:center;}
  .sq-sidebar-cta p{font-size:12px;color:#A0C070;margin-bottom:12px;line-height:1.7;}
  .sq-sidebar-cta a{background:#8CC63F;color:#0A0A0F;font-size:12px;font-weight:700;padding:8px 16px;border-radius:100px;text-decoration:none;display:inline-block;transition:opacity .2s;}
  .sq-sidebar-cta a:hover{opacity:.85;text-decoration:none;}
  .sq-sidebar-ad{background:#F7FAFC;border:1px dashed #CBD5E0;border-radius:8px;min-height:250px;display:flex;align-items:center;justify-content:center;color:#A0AEC0;font-size:11px;}
}
/* TOC（サイドバー内） */
.sq-toc-title{font-weight:700;color:#1A202C;margin-bottom:10px;font-size:12px;letter-spacing:.04em;}
.sq-toc ol{margin:0;padding-left:16px;}
.sq-toc li{margin-bottom:5px;line-height:1.6;}
.sq-toc a{font-size:12px;color:#6AAF2B;text-decoration:none;}
.sq-toc a:hover{text-decoration:underline;}
/* TOC（モバイル：インライン） */
@media(max-width:959px){
  .sq-toc-inline{background:#F7FAFC;border:1px solid #E2E8F0;border-left:3px solid #8CC63F;border-radius:0 8px 8px 0;padding:16px 20px;margin:24px 0 32px;font-size:13px;}
  .sq-toc-inline ol{margin:0;padding-left:18px;}
  .sq-toc-inline li{margin-bottom:5px;}
  .sq-toc-inline a{color:#6AAF2B;text-decoration:none;}
}
/* カテゴリーバッジ */
.sq-cat-badge{margin-bottom:8px;}
.sq-cat-badge span{display:inline-block;font-size:11px;font-weight:700;padding:3px 12px;border-radius:100px;color:#fff;letter-spacing:.04em;}
/* 途中CTA */
.sq-mid-cta{background:linear-gradient(135deg,#F0FFF4,#DCFCE7);border:1px solid #9AE6B4;border-radius:10px;padding:16px 20px;margin:32px 0;display:flex;align-items:center;gap:16px;flex-wrap:wrap;}
.sq-mid-cta p{font-size:13px;color:#1A202C;margin:0;flex:1;line-height:1.7;}
.sq-mid-cta a{background:#8CC63F;color:#fff;font-size:12px;font-weight:700;padding:8px 18px;border-radius:100px;text-decoration:none;white-space:nowrap;flex-shrink:0;transition:opacity .2s;}
.sq-mid-cta a:hover{opacity:.85;text-decoration:none;}
/* 広告プレースホルダー（本文内） */
.sq-ad-slot{background:#F7FAFC;border:1px dashed #CBD5E0;border-radius:8px;min-height:90px;display:flex;align-items:center;justify-content:center;color:#A0AEC0;font-size:11px;margin:24px 0;}
/* 新着・同カテゴリ */
.sq-widget{padding:40px 24px;background:#fff;}
.sq-widget-inner{max-width:800px;margin:0 auto;}
.sq-widget-title{font-size:15px;font-weight:700;color:#1A202C;margin:0 0 16px;padding-left:12px;border-left:3px solid #8CC63F;}
.sq-card-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(210px,1fr));gap:10px;margin-bottom:36px;}
.sq-card{display:block;background:#F7FAFC;border:1px solid #E2E8F0;border-radius:10px;padding:14px 16px;color:inherit;text-decoration:none;transition:box-shadow .2s;}
.sq-card:hover{box-shadow:0 4px 16px rgba(0,0,0,.08);text-decoration:none;}
.sq-card-label{font-size:10px;font-weight:700;color:#8CC63F;margin-bottom:5px;letter-spacing:.06em;}
.sq-card-title{font-size:13px;font-weight:700;color:#1A202C;line-height:1.5;}
.sq-new-badge{display:inline-block;background:#EF4444;color:#fff;font-size:9px;font-weight:700;padding:1px 5px;border-radius:4px;margin-left:5px;vertical-align:middle;}
  `;
  document.head.appendChild(s);
}

/* ── サイドバー構築（position:fixed、コンテナは触らない） ── */
function buildLayout(){
  if(window.innerWidth < 1100) return null;
  const sidebar = document.createElement('aside');
  sidebar.className = 'sq-sidebar';
  document.body.appendChild(sidebar);
  return sidebar;
}

/* ── TOC ── */
function buildTOC(sidebar){
  const container = document.querySelector('.container');
  if(!container) return;
  const h2s = Array.from(container.querySelectorAll('h2'));
  if(h2s.length < 3) return;
  h2s.forEach((h,i)=>{ if(!h.id) h.id='sec'+i; });

  const ol = '<ol>' + h2s.map(h=>`<li><a href="#${h.id}">${h.textContent.trim()}</a></li>`).join('') + '</ol>';

  if(sidebar){
    // サイドバーに配置
    const box = document.createElement('div');
    box.className = 'sq-sidebar-box';
    box.innerHTML = `<div class="sq-toc-title">📋 目次</div><div class="sq-toc">${ol}</div>`;
    sidebar.appendChild(box);
  } else {
    // モバイル：lead直後にインライン配置
    const toc = document.createElement('div');
    toc.className = 'sq-toc-inline';
    toc.innerHTML = `<div class="sq-toc-title">📋 この記事の目次</div>${ol}`;
    const lead = container.querySelector('.lead');
    if(lead) lead.insertAdjacentElement('afterend', toc);
  }
}

/* ── カテゴリーバッジ ── */
function buildCatBadge(){
  let catName='', catColor='';
  for(const [name,cat] of Object.entries(CATS)){
    if(cat.files.includes(PAGE)){ catName=name; catColor=cat.color; break; }
  }
  if(!catName) return;
  const badge = document.createElement('div');
  badge.className = 'sq-cat-badge';
  badge.innerHTML = `<span style="background:${catColor}">${catName}</span>`;
  const h1 = document.querySelector('h1');
  if(h1) h1.insertAdjacentElement('beforebegin', badge);
}

/* ── サイドバーCTA ── */
function buildSidebarCTA(sidebar){
  if(!sidebar) return;
  const box = document.createElement('div');
  box.className = 'sq-sidebar-cta';
  box.innerHTML = `<p>⚔ 資格勉強をRPGに変える<br>学習管理アプリ</p><a href="index.html">無料で試してみる →</a>`;
  sidebar.appendChild(box);
}

/* ── サイドバー広告枠 ── */
function buildSidebarAd(sidebar){
  if(!sidebar) return;
  const box = document.createElement('div');
  box.className = 'sq-sidebar-box sq-sidebar-ad';
  box.textContent = '広告';
  sidebar.appendChild(box);
}

/* ── 本文内広告枠（lead後・記事末） ── */
function insertContentAds(){
  const container = document.querySelector('.container');
  if(!container) return;

  // lead直後
  const lead = container.querySelector('.lead');
  if(lead){
    const ad = document.createElement('div');
    ad.className = 'sq-ad-slot';
    ad.textContent = '広告';
    lead.insertAdjacentElement('afterend', ad);
  }

  // まとめの直前（記事末）
  const h2s = Array.from(container.querySelectorAll('h2'));
  const matome = h2s.find(h=>h.textContent.includes('まとめ'));
  if(matome){
    const ad = document.createElement('div');
    ad.className = 'sq-ad-slot';
    ad.textContent = '広告';
    matome.insertAdjacentElement('beforebegin', ad);
  }
}

/* ── 途中CTA ── */
function insertMidCTA(){
  const container = document.querySelector('.container');
  if(!container) return;
  const h2s = Array.from(container.querySelectorAll('h2'));
  const idx = Math.ceil(h2s.length / 2);
  const target = h2s[idx];
  if(!target) return;
  const cta = document.createElement('div');
  cta.className = 'sq-mid-cta';
  cta.innerHTML = '<p>📱 <strong>Study Quest</strong> — 資格勉強をRPGに変える学習アプリ。毎日の勉強時間を経験値に変えてレベルアップしよう。</p><a href="index.html">無料で試してみる →</a>';
  target.insertAdjacentElement('beforebegin', cta);
}

/* ── 新着・同カテゴリウィジェット ── */
function buildWidgets(){
  let catFiles=[], catName='';
  for(const [name,cat] of Object.entries(CATS)){
    if(cat.files.includes(PAGE)){ catFiles=cat.files.filter(f=>f!==PAGE); catName=name; break; }
  }
  const latestFiles = LATEST.filter(f=>f!==PAGE).slice(0,5);
  if(latestFiles.length===0 && catFiles.length===0) return;

  const wrap = document.createElement('div');
  wrap.className = 'sq-widget';
  const inner = document.createElement('div');
  inner.className = 'sq-widget-inner';
  wrap.appendChild(inner);

  if(latestFiles.length > 0){
    const t = document.createElement('div');
    t.className = 'sq-widget-title';
    t.textContent = '🆕 新着記事';
    inner.appendChild(t);
    const grid = document.createElement('div');
    grid.className = 'sq-card-grid';
    latestFiles.forEach(f=>{
      const a = ARTICLES[f]; if(!a) return;
      const isNew = LATEST.indexOf(f) < 3;
      grid.innerHTML += `<a href="${f}" class="sq-card"><div class="sq-card-label">${a.label}${isNew?'<span class="sq-new-badge">NEW</span>':''}</div><div class="sq-card-title">${a.title}</div></a>`;
    });
    inner.appendChild(grid);
  }

  if(catFiles.length > 0){
    const t = document.createElement('div');
    t.className = 'sq-widget-title';
    t.textContent = `📂 同カテゴリの記事（${catName}）`;
    inner.appendChild(t);
    const grid = document.createElement('div');
    grid.className = 'sq-card-grid';
    catFiles.forEach(f=>{
      const a = ARTICLES[f]; if(!a) return;
      grid.innerHTML += `<a href="${f}" class="sq-card"><div class="sq-card-label">${a.label}</div><div class="sq-card-title">${a.title}</div></a>`;
    });
    inner.appendChild(grid);
  }

  const related = document.querySelector('section[style*="F7FAFC"]');
  if(related) related.insertAdjacentElement('afterend', wrap);
  else {
    const footer = document.querySelector('footer');
    if(footer) footer.insertAdjacentElement('beforebegin', wrap);
  }
}

document.addEventListener('DOMContentLoaded',function(){
  injectStyles();
  const sidebar = buildLayout();
  buildTOC(sidebar);
  buildCatBadge();
  buildSidebarCTA(sidebar);
  buildSidebarAd(sidebar);
  insertContentAds();
  insertMidCTA();
  buildWidgets();
});
})();
