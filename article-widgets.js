(function(){
'use strict';

const ARTICLES = {
  'boki.html':           {label:'簿記3級・2級',    title:'日商簿記3級・2級の独学勉強法と合格スケジュール'},
  'boki2.html':          {label:'簿記2級',          title:'簿記2級の勉強時間・独学合格ロードマップ'},
  'boki1.html':          {label:'簿記1級',          title:'日商簿記1級の独学合格ガイド'},
  'boki1-yobikou.html':  {label:'勉強法',           title:'日商簿記1級は予備校と独学どっちがいい？'},
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
  'shakaijin-benkyou-jikan.html': {label:'勉強時間', title:'社会人が勉強時間を確保する方法7選'},
  'shikaku-app.html':    {label:'アプリ比較',        title:'資格勉強アプリ比較ランキング2026'},
  'boki-vs-fp.html':           {label:'資格比較',    title:'簿記2級 vs FP2級 どっちを先に取るべき？'},
  'takken-vs-gyosei.html':     {label:'資格比較',    title:'宅建 vs 行政書士 どっちを先に取るべき？'},
  'itp-vs-fe.html':            {label:'資格比較',    title:'ITパスポート vs 基本情報 どっちを先に取るべき？'},
  'sharoshi-vs-gyosei.html':   {label:'資格比較',    title:'社労士 vs 行政書士 どっちを先に取るべき？'},
  'fe-vs-ap.html':             {label:'資格比較',    title:'基本情報 vs 応用情報 どっちを先に取るべき？'},
  'zeirishi-vs-cpa.html':      {label:'資格比較',    title:'税理士 vs 公認会計士 どっちを目指すべき？'},
  'sharoshi-vs-shindanshi.html':{label:'資格比較',   title:'社労士 vs 中小企業診断士 どっちを先に取るべき？'},
  'toeic-vs-eiken.html':       {label:'資格比較',    title:'TOEIC vs 英検 どっちを取るべき？'},
  'takken-vs-mansion.html':    {label:'資格比較',    title:'宅建 vs マンション管理士 どっちを先に取るべき？'},
  'osusume-shikaku.html':      {label:'まとめ',      title:'社会人におすすめの資格ランキング2026'},
  'cospa-shikaku.html':        {label:'まとめ',      title:'コスパがいい資格ランキング10選'},
  'tenshoku-shikaku.html':     {label:'まとめ',      title:'転職に有利な資格ランキング10選'},
  'shikaku-jinsei-kawaru.html':{label:'考え方',      title:'資格を取っても人生が変わりやすい人・変わりにくい人'},
  'daigakusei-shikaku-heiyou.html':{label:'大学生',  title:'大学生は資格勉強を2つ以上併用すべき？1つに絞るべき？'},
  'cpa-akirameta-boki1.html': {label:'会計士→簿記1級', title:'公認会計士を諦めたら簿記1級は狙える？勉強時間はどれくらい活きるのか'},
  'cpa-akirameta-shinro.html': {label:'会計士の進路', title:'公認会計士を諦めた後の進路は？後悔しにくい選び方を正直に整理'},
  'shikaku-zasetsu-riyu.html': {label:'挫折・再開', title:'資格勉強を途中でやめる人のよくある理由｜挫折しやすいタイミングと立て直し方'},
  'hatarakinagara-shikaku.html': {label:'社会人向け', title:'働きながら取れる資格ランキング10選｜社会人でも続けやすい資格を厳選'},
  'shukatsu-shikaku.html': {label:'大学生向け', title:'就活で強い資格ランキング10選｜大学生のうちに取る価値がある資格を厳選'},
  'daigakusei-keizoku.html': {label:'大学生向け', title:'大学生が資格勉強を続ける方法｜授業・バイト・就活と両立するコツ'},
  'shikaku-women.html':        {label:'まとめ',      title:'女性におすすめ資格ランキング2026'},
  'shikaku-30dai.html':        {label:'まとめ',      title:'30代が取るべき資格ランキング2026'},
  'dokugaku-shikaku.html':     {label:'まとめ',      title:'独学で取れる資格ランキング2026'},
  'shikaku-20dai.html':        {label:'まとめ',      title:'20代におすすめ資格ランキング2026'},
  'shikaku-eigyo.html':        {label:'まとめ',      title:'営業職におすすめ資格ランキング2026'},
  'shikaku-3months.html':      {label:'まとめ',      title:'3ヶ月で取れる資格ランキング2026'},
  'toroku-hanbai.html':        {label:'登録販売者',  title:'登録販売者の独学合格ガイド'},
  'eisei-kanri.html':          {label:'衛生管理者',  title:'衛生管理者（第一種・第二種）の独学合格ガイド'},
  'hisho.html':                {label:'秘書検定',    title:'秘書検定2級・準1級の独学合格ガイド'},
  'kanken.html':               {label:'漢字検定',    title:'漢字検定（漢検）2級の独学合格ガイド'},
  'gaibuin.html':              {label:'証券外務員',  title:'証券外務員一種・二種の独学合格ガイド'},
  'kenchiku.html':             {label:'二級建築士',  title:'二級建築士の独学合格ガイド'},
  'toefl.html':                {label:'TOEFL',       title:'TOEFL iBTの独学スコアアップ戦略'},
  'eiken1.html':               {label:'英検準1級',   title:'英検準1級の独学合格ガイド'},
  'fp3.html':                  {label:'FP3級',       title:'FP3級の勉強時間・独学合格スケジュール'},
  'cpa-yobikou.html':          {label:'勉強法',      title:'公認会計士・税理士は予備校と独学どっちがいい？'},
};

const CATS = {
  'IT・技術系':      {color:'#10B981', files:['itp.html','fe.html','ap.html','mos.html']},
  'ビジネス・経済系': {color:'#3B82F6', files:['boki.html','boki2.html','boki1.html','boki1-yobikou.html','fp.html','shindanshi.html','gaibuin.html','hisho.html','eisei-kanri.html']},
  '法律・会計系':    {color:'#8B5CF6', files:['cpa.html','takken.html','gyosei.html','sharoshi.html','zeirishi.html','shihoshoshi.html','mansion.html']},
  '医療・福祉系':    {color:'#EC4899', files:['kaigo.html','nurse.html','hoikushi.html','shakai-fukushi.html','iryo-jimu.html','kaigo-fukushi.html']},
  '技術・工業系':    {color:'#F97316', files:['kiken.html','denki.html','chori.html','kenchiku.html']},
  '語学・教養系':    {color:'#F59E0B', files:['toeic.html','eiken.html','toefl.html','eiken1.html','kanken.html']},
  '継続・ツール':    {color:'#8CC63F', files:['keizoku.html','shakaijin-benkyou-jikan.html','shikaku-app.html']},
};

const LATEST = ['boki1-yobikou.html','daigakusei-keizoku.html','shukatsu-shikaku.html','hatarakinagara-shikaku.html','shikaku-zasetsu-riyu.html','cpa-akirameta-shinro.html','cpa-akirameta-boki1.html','daigakusei-shikaku-heiyou.html'];

const PAGE = location.pathname.split('/').pop() || '';
const ARTICLE_THEME_KEY = 'sq2_theme';
const ARTICLE_THEME_MANUAL_KEY = 'sq2_theme_manual';
const ARTICLE_THEME_MODE_KEY = 'sq2_theme_mode';

function getArticleThemeMode(){
  const mode = localStorage.getItem(ARTICLE_THEME_MODE_KEY);
  if(mode === 'system' || mode === 'light' || mode === 'dark') return mode;

  const saved = localStorage.getItem(ARTICLE_THEME_KEY);
  const manual = localStorage.getItem(ARTICLE_THEME_MANUAL_KEY);
  if(saved && manual && (saved === 'light' || saved === 'dark')) return saved;
  return 'system';
}

function resolveArticleTheme(mode = getArticleThemeMode()){
  if(mode === 'light' || mode === 'dark') return mode;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyArticleTheme(theme){
  document.documentElement.setAttribute('data-theme', theme);
  document.documentElement.setAttribute('data-theme-mode', getArticleThemeMode());
}

function setArticleThemeMode(mode){
  if(mode === 'system'){
    localStorage.setItem(ARTICLE_THEME_MODE_KEY, 'system');
    localStorage.removeItem(ARTICLE_THEME_MANUAL_KEY);
  } else {
    localStorage.setItem(ARTICLE_THEME_MODE_KEY, mode);
    localStorage.setItem(ARTICLE_THEME_KEY, mode);
    localStorage.setItem(ARTICLE_THEME_MANUAL_KEY, '1');
  }
  applyArticleTheme(resolveArticleTheme(mode));
  syncThemeControls();
}

function syncThemeControls(){
  const group = document.getElementById('sq-article-theme-toggle');
  if(!group) return;
  const mode = getArticleThemeMode();
  group.querySelectorAll('[data-theme-mode]').forEach(btn => {
    const active = btn.getAttribute('data-theme-mode') === mode;
    btn.classList.toggle('is-active', active);
    btn.setAttribute('aria-pressed', active ? 'true' : 'false');
  });
}

applyArticleTheme(resolveArticleTheme());
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
  if(getArticleThemeMode() === 'system'){
    applyArticleTheme(e.matches ? 'dark' : 'light');
    syncThemeControls();
  }
});

/* ── スタイル ── */
function injectStyles(){
  const s = document.createElement('style');
  s.textContent = `
html[data-theme="light"]{
  --sq-text:#1A202C;
  --sq-muted:#718096;
  --sq-soft:#4A5568;
  --sq-border:rgba(26,32,44,.10);
  --sq-border-strong:rgba(140,198,63,.28);
  --sq-page:#FFFFFF;
  --sq-surface:#FFFFFF;
  --sq-surface-soft:#F7FAFC;
  --sq-surface-strong:#EEF3FB;
  --sq-accent:#8CC63F;
  --sq-accent-bright:#A9D86F;
  --sq-highlight-text:#547C17;
  --sq-highlight-bg:rgba(140,198,63,.16);
  --sq-marker-bg:rgba(140,198,63,.18);
  --sq-marker-shadow:rgba(140,198,63,.26);
  --sq-cta-text:#0A0A0F;
  --sq-shadow:0 12px 28px rgba(15,23,42,.08);
  --sq-shadow-strong:0 18px 36px rgba(15,23,42,.10);
  --bg:#FFFFFF;
  --light:#F7FAFC;
  --text:#1A202C;
  --muted:#718096;
  --border:#E2E8F0;
  --green:#8CC63F;
  --green2:#6AAF2B;
}
html[data-theme="dark"]{
  --sq-text:#E8EEF8;
  --sq-muted:#9BA7BB;
  --sq-soft:#CCD6E5;
  --sq-border:#273247;
  --sq-border-strong:rgba(140,198,63,.24);
  --sq-page:#0B0F17;
  --sq-surface:#121826;
  --sq-surface-soft:#151A2A;
  --sq-surface-strong:#101522;
  --sq-accent:#8CC63F;
  --sq-accent-bright:#B6E27C;
  --sq-highlight-text:#C8F08D;
  --sq-highlight-bg:rgba(140,198,63,.18);
  --sq-marker-bg:rgba(140,198,63,.20);
  --sq-marker-shadow:rgba(140,198,63,.30);
  --sq-cta-text:#0A0A0F;
  --sq-shadow:0 12px 28px rgba(0,0,0,.18);
  --sq-shadow-strong:0 18px 36px rgba(5,10,20,.26);
  --bg:#0B0F17;
  --light:#151A2A;
  --text:#E8EEF8;
  --muted:#9BA7BB;
  --border:#273247;
  --green:#8CC63F;
  --green2:#B6E27C;
}
html[data-theme="light"] body{
  background:#FFFFFF !important;
  color:var(--sq-text) !important;
}
html[data-theme="light"] nav{
  background:#FFFFFF !important;
  border-bottom:1px solid rgba(26,32,44,.08) !important;
}
html[data-theme="light"] .nav-inner{max-width:1100px;}
html[data-theme="light"] .nav-logo{color:#8CC63F;}
html[data-theme="light"] .nav-cta{box-shadow:0 10px 24px rgba(140,198,63,.16);}
html[data-theme="light"] .breadcrumb,
html[data-theme="light"] .breadcrumb a,
html[data-theme="light"] .meta{color:#718096;}
html[data-theme="light"] h1,
html[data-theme="light"] h2,
html[data-theme="light"] h3{color:#1A202C !important;}
html[data-theme="light"] p,
html[data-theme="light"] ul,
html[data-theme="light"] ol,
html[data-theme="light"] li,
html[data-theme="light"] td{color:#2D3748;}
html[data-theme="light"] strong{color:#1A202C;}
html[data-theme="light"] .lead{
  background:#F7FAFC;
  border:1px solid rgba(26,32,44,.06);
  border-left:3px solid #8CC63F;
  color:#2D3748;
}
html[data-theme="light"] h2{border-left-color:#8CC63F;}
html[data-theme="light"] h3{color:#2D3748;}
html[data-theme="light"] th{background:#8CC63F;color:#0A0A0F;}
html[data-theme="light"] td{border-bottom-color:rgba(26,32,44,.06);}
html[data-theme="light"] tr:nth-child(even) td{background:#F8FAFC;}
html[data-theme="light"] table{border-color:rgba(26,32,44,.08);}
html[data-theme="light"] .tip-box{background:linear-gradient(180deg,#F4FBEA,#EDF8DF);border-color:rgba(140,198,63,.22);}
html[data-theme="light"] .tip-box strong{color:#547C17;}
html[data-theme="light"] .warn-box{background:linear-gradient(180deg,#FFF9E8,#FFF3CF);border-color:rgba(246,224,94,.34);}
html[data-theme="light"] .warn-box strong{color:#A06A00;}
html[data-theme="light"] .app-cta{
  background:linear-gradient(180deg,#F6FBEF,#EEF6DF);
  border:1px solid rgba(140,198,63,.22);
  box-shadow:var(--sq-shadow);
}
html[data-theme="light"] .app-cta p,
html[data-theme="light"] .app-cta h2{color:#1A202C !important;}
html[data-theme="light"] details{
  background:#FFFFFF;
  border-color:rgba(26,32,44,.10) !important;
}
html[data-theme="light"] details summary{color:#1A202C !important;}
html[data-theme="light"] details div{color:#2D3748 !important;}
html[data-theme="light"] footer{
  background:#FFFFFF !important;
  border-top:1px solid rgba(26,32,44,.08) !important;
}
html[data-theme="light"] footer a{color:#718096;}
html[data-theme="light"] footer p{color:#718096;}
html[data-theme="light"] .num-box{
  background:#F7FAFC !important;
  border:1px solid rgba(26,32,44,.08) !important;
  box-shadow:var(--sq-shadow);
}
html[data-theme="light"] .num-box .num{
  background:#8CC63F !important;
  color:#0A0A0F !important;
}
html[data-theme="light"] .num-box .body strong{color:#1A202C !important;}
html[data-theme="light"] .num-box .body p{color:#718096 !important;}
html[data-theme="light"] .rank-card{
  background:#FFFFFF !important;
  border-color:rgba(26,32,44,.08) !important;
  box-shadow:var(--sq-shadow);
}
html[data-theme="light"] .rank-card .rank-title,
html[data-theme="light"] .rank-card strong{color:#1A202C !important;}
html[data-theme="light"] .rank-card .rank-meta,
html[data-theme="light"] .rank-card p,
html[data-theme="light"] .rank-card li{color:#4A5568 !important;}
html[data-theme="light"] .tip-box,
html[data-theme="light"] .warn-box,
html[data-theme="light"] .app-cta,
html[data-theme="light"] .sq-author,
html[data-theme="light"] .sq-mid-cta,
html[data-theme="light"] .sq-sidebar-box,
html[data-theme="light"] .sq-mini-card,
html[data-theme="light"] .sq-side-link,
html[data-theme="light"] .sq-card{
  color:#1A202C !important;
}
html[data-theme="light"] .sq-sidebar-box,
html[data-theme="light"] .sq-mini-card,
html[data-theme="light"] .sq-side-link,
html[data-theme="light"] .sq-card,
html[data-theme="light"] .sq-author{
  background:linear-gradient(180deg,#FFFFFF,#F7FAFC) !important;
  border-color:rgba(26,32,44,.10) !important;
  box-shadow:var(--sq-shadow);
}
html[data-theme="light"] .sq-mid-cta{
  background:linear-gradient(180deg,#F6FBEF,#EEF6DF) !important;
  border-color:rgba(140,198,63,.22) !important;
}
html[data-theme="light"] .sq-sidebar-cta{
  background:linear-gradient(180deg,#F6FBEF,#EDF7E0) !important;
  border-color:rgba(140,198,63,.22) !important;
  box-shadow:var(--sq-shadow-strong);
}
html[data-theme="light"] .sq-sidebar-cta p,
html[data-theme="light"] .sq-author-bio,
html[data-theme="light"] .sq-mini-card-text,
html[data-theme="light"] .sq-sidebar-box p,
html[data-theme="light"] .sq-sidebar-box div,
html[data-theme="light"] .sq-sidebar-box li,
html[data-theme="light"] .sq-sidebar-box span{color:#4A5568 !important;}
html[data-theme="light"] .sq-card-title,
html[data-theme="light"] .sq-side-link-title,
html[data-theme="light"] .sq-mini-card-title,
html[data-theme="light"] .sq-author-name,
html[data-theme="light"] .sq-toc-title,
html[data-theme="light"] .sq-widget-title{color:#1A202C !important;}
html[data-theme="light"] .sq-side-link-label,
html[data-theme="light"] .sq-card-label,
html[data-theme="light"] .sq-sidebar-box-title,
html[data-theme="light"] .sq-author-title,
html[data-theme="light"] .sq-toc a{color:#6AAF2B !important;}
html[data-theme="light"] section[style*="background:#F7FAFC"],
html[data-theme="light"] div[style*="background:#F7FAFC"]{
  background:#F7FAFC !important;
}
html[data-theme="light"] section[style*="background:#F7FAFC"] a[style*="background:#fff"],
html[data-theme="light"] section[style*="background:#F7FAFC"] div[style*="background:#fff"],
html[data-theme="light"] div[style*="background:#F7FAFC"] a[style*="background:#fff"],
html[data-theme="light"] div[style*="background:#F7FAFC"] div[style*="background:#fff"]{
  background:#FFFFFF !important;
  border-color:rgba(26,32,44,.08) !important;
  box-shadow:var(--sq-shadow);
}
html[data-theme="dark"] body{background:
  radial-gradient(circle at top right, rgba(140,198,63,.08), transparent 24%),
  linear-gradient(180deg,#0B0F17,#0F1421 55%,#0B1019) !important;
  color:var(--sq-text) !important;
}
html[data-theme="dark"] nav{background:rgba(10,14,22,.9) !important;border-bottom:1px solid rgba(140,198,63,.14) !important;}
html[data-theme="dark"] .nav-inner{max-width:1100px;}
html[data-theme="dark"] .nav-logo{color:#C4EB89;}
html[data-theme="dark"] .nav-cta{box-shadow:0 10px 24px rgba(140,198,63,.22);}
html[data-theme="dark"] .breadcrumb,
html[data-theme="dark"] .breadcrumb a,
html[data-theme="dark"] .meta{color:#8F9BB0;}
html[data-theme="dark"] h1,
html[data-theme="dark"] h2,
html[data-theme="dark"] h3{color:#F8FAFC !important;}
html[data-theme="dark"] p,
html[data-theme="dark"] ul,
html[data-theme="dark"] ol,
html[data-theme="dark"] li,
html[data-theme="dark"] td{color:#CCD6E5;}
html[data-theme="dark"] strong{color:#F8FAFC;}
html[data-theme="dark"] .lead{background:linear-gradient(180deg,#121826,#0F1523);border:1px solid rgba(140,198,63,.18);border-left:3px solid #8CC63F;color:#E4ECF8;}
html[data-theme="dark"] h2{border-left-color:#8CC63F;}
html[data-theme="dark"] h3{color:#B6E27C;}
html[data-theme="dark"] th{background:#8CC63F;color:#0A0A0F;}
html[data-theme="dark"] td{border-bottom-color:rgba(255,255,255,.06);}
html[data-theme="dark"] tr:nth-child(even) td{background:#111827;}
html[data-theme="dark"] table{border-color:rgba(255,255,255,.06);}
html[data-theme="dark"] .tip-box{background:linear-gradient(180deg,#102218,#0E1A15);border-color:rgba(140,198,63,.26);}
html[data-theme="dark"] .tip-box strong{color:#B6E27C;}
html[data-theme="dark"] .warn-box{background:linear-gradient(180deg,#2A210E,#1C160A);border-color:rgba(246,224,94,.32);}
html[data-theme="dark"] .warn-box strong{color:#F7D774;}
html[data-theme="dark"] .app-cta{background:radial-gradient(circle at top right, rgba(140,198,63,.16), transparent 34%),linear-gradient(135deg,#12192A,#152233 68%, #172A21 100%);border:1px solid rgba(140,198,63,.24);box-shadow:0 0 0 1px rgba(140,198,63,.04), 0 14px 30px rgba(5,10,20,.16);}
html[data-theme="dark"] .app-cta p{color:#D9E6C7;}
html[data-theme="dark"] details{background:linear-gradient(180deg,#13192A,#101522);border-color:rgba(140,198,63,.14) !important;}
html[data-theme="dark"] details summary{color:#F8FAFC !important;}
html[data-theme="dark"] details div{color:#CCD6E5 !important;}
html[data-theme="dark"] section[style*="background:#F7FAFC"],
html[data-theme="dark"] div[style*="background:#F7FAFC"]{background:linear-gradient(180deg,#0F1523,#0B1019) !important;}
html[data-theme="dark"] section[style*="background:#F7FAFC"] a[style*="background:#fff"],
html[data-theme="dark"] section[style*="background:#F7FAFC"] div[style*="background:#fff"],
html[data-theme="dark"] div[style*="background:#F7FAFC"] a[style*="background:#fff"],
html[data-theme="dark"] div[style*="background:#F7FAFC"] div[style*="background:#fff"]{
  background:linear-gradient(180deg,#151A2A,#111728) !important;
  border-color:rgba(140,198,63,.16) !important;
  box-shadow:0 0 0 1px rgba(140,198,63,.03), 0 12px 28px rgba(5,10,20,.12);
}
html[data-theme="dark"] section[style*="background:#F7FAFC"] a[style*="background:#fff"] div[style*="color:#1A202C"],
html[data-theme="dark"] div[style*="background:#F7FAFC"] div[style*="color:#1A202C"]{color:#F8FAFC !important;}
html[data-theme="dark"] section[style*="background:#F7FAFC"] a[style*="background:#fff"] div[style*="color:#8CC63F"],
html[data-theme="dark"] div[style*="background:#F7FAFC"] div[style*="color:#8CC63F"]{color:#A9D86F !important;}
html[data-theme="dark"] footer{background:#080B12 !important;border-top:1px solid rgba(140,198,63,.10) !important;}
html[data-theme="dark"] footer a{color:#8F9BB0;}
html[data-theme="dark"] footer p{color:#6B7280;}
html[data-theme="dark"] .num-box{
  background:linear-gradient(180deg,#151A2A,#111728) !important;
  border:1px solid rgba(140,198,63,.16) !important;
  box-shadow:0 0 0 1px rgba(140,198,63,.03), 0 12px 28px rgba(5,10,20,.12);
}
html[data-theme="dark"] .num-box .num{
  background:#8CC63F !important;
  color:#0A0A0F !important;
}
html[data-theme="dark"] .num-box .body strong{color:#F8FAFC !important;}
html[data-theme="dark"] .num-box .body p{color:#9BA7BB !important;}
html[data-theme="dark"] .rank-card{
  background:linear-gradient(180deg,#151A2A,#111728) !important;
  border-color:rgba(140,198,63,.16) !important;
  box-shadow:0 0 0 1px rgba(140,198,63,.03), 0 12px 28px rgba(5,10,20,.12);
}
html[data-theme="dark"] .rank-card .rank-title,
html[data-theme="dark"] .rank-card strong{color:#F8FAFC !important;}
html[data-theme="dark"] .rank-card .rank-meta,
html[data-theme="dark"] .rank-card p,
html[data-theme="dark"] .rank-card li{color:#CCD6E5 !important;}
html[data-theme="dark"] .sq-sidebar-box,
html[data-theme="dark"] .sq-mini-card,
html[data-theme="dark"] .sq-side-link,
html[data-theme="dark"] .sq-card,
html[data-theme="dark"] .sq-author{
  background:linear-gradient(180deg,#151A2A,#111728) !important;
  border-color:rgba(140,198,63,.16) !important;
}
html[data-theme="dark"] .sq-mid-cta{
  background:radial-gradient(circle at top right, rgba(140,198,63,.16), transparent 34%),linear-gradient(135deg,#12192A,#152233 68%, #172A21 100%) !important;
  border-color:rgba(140,198,63,.24) !important;
}
html[data-theme="dark"] .sq-sidebar-cta{
  background:radial-gradient(circle at top right, rgba(140,198,63,.16), transparent 38%),linear-gradient(135deg,#12192A 0%, #152233 60%, #172A21 100%) !important;
  border-color:rgba(140,198,63,.24) !important;
}
html[data-theme="dark"] .sq-card-title,
html[data-theme="dark"] .sq-side-link-title,
html[data-theme="dark"] .sq-mini-card-title,
html[data-theme="dark"] .sq-author-name,
html[data-theme="dark"] .sq-toc-title,
html[data-theme="dark"] .sq-widget-title{color:#F8FAFC !important;}
html[data-theme="dark"] .sq-sidebar-box p,
html[data-theme="dark"] .sq-sidebar-box div,
html[data-theme="dark"] .sq-sidebar-box li,
html[data-theme="dark"] .sq-sidebar-box span,
html[data-theme="dark"] .sq-author-bio,
html[data-theme="dark"] .sq-mini-card-text{color:#9BA7BB !important;}
html[data-theme="dark"] .sq-side-link-label,
html[data-theme="dark"] .sq-card-label,
html[data-theme="dark"] .sq-sidebar-box-title,
html[data-theme="dark"] .sq-author-title,
html[data-theme="dark"] .sq-toc a{color:#B6E27C !important;}
.sq-key,
.sq-important{
  color:var(--sq-highlight-text);
  font-weight:800;
}
.sq-underline{
  text-decoration:underline;
  text-decoration-color:var(--sq-accent);
  text-decoration-thickness:2px;
  text-underline-offset:3px;
}
.sq-marker,
mark{
  color:inherit;
  background:linear-gradient(transparent 42%, var(--sq-marker-bg) 42%);
  box-shadow:inset 0 -1px 0 var(--sq-marker-shadow);
  padding:0 .16em;
  border-radius:.2em;
}
.sq-badge{
  display:inline-flex;
  align-items:center;
  gap:6px;
  padding:3px 9px;
  border-radius:999px;
  border:1px solid var(--sq-border-strong);
  background:var(--sq-highlight-bg);
  color:var(--sq-highlight-text);
  font-size:.84em;
  font-weight:800;
  vertical-align:middle;
}
.sq-note-inline{
  display:inline;
  padding:.06em .38em;
  border-radius:.32em;
  background:var(--sq-surface-soft);
  border:1px solid var(--sq-border);
}
.sq-article-theme-group{
  display:inline-flex;
  align-items:center;
  gap:6px;
  padding:4px;
  border:1px solid var(--sq-border-strong);
  background:var(--sq-surface);
  color:var(--sq-text);
  border-radius:999px;
  box-shadow:0 10px 24px rgba(15,23,42,.08);
}
.sq-article-theme-option{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  gap:6px;
  min-width:74px;
  border:none;
  background:transparent;
  color:var(--sq-soft);
  border-radius:999px;
  padding:8px 12px;
  font-size:12px;
  font-weight:700;
  cursor:pointer;
  transition:transform .2s, box-shadow .2s, color .2s, background .2s;
}
.sq-article-theme-option:hover{
  transform:translateY(-1px);
  color:var(--sq-text);
}
.sq-article-theme-option.is-active{
  background:#8CC63F;
  color:var(--sq-cta-text);
  box-shadow:0 8px 22px rgba(140,198,63,.22);
}
.sq-theme-icon{font-size:13px;line-height:1;}
.sq-theme-text{letter-spacing:.04em;}
html[data-theme="dark"] .sq-article-theme-group{
  background:rgba(17,24,39,.82);
  border-color:rgba(140,198,63,.24);
  box-shadow:0 10px 28px rgba(0,0,0,.18);
}
.nav-inner{
  display:grid;
  grid-template-columns:minmax(0,1fr) auto minmax(0,1fr);
  align-items:center;
  column-gap:16px;
}
.nav-logo{justify-self:start;}
#sq-article-theme-toggle{justify-self:center;}
.nav-cta{justify-self:end;}
@media(max-width:640px){
  .nav-inner{
    grid-template-columns:1fr auto;
    row-gap:10px;
  }
  .nav-logo{grid-column:1 / 2;}
  #sq-article-theme-toggle{grid-column:1 / 2;justify-self:start;}
  .nav-cta{grid-column:2 / 3;grid-row:1 / 3;align-self:center;}
  .sq-article-theme-option{min-width:auto;padding:8px 10px;}
  .sq-theme-text{display:none;}
}
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
  .sq-sidebar-left{
    position:fixed;
    top:72px;
    left:max(12px, calc(50% - 696px));
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
  .sq-sidebar::-webkit-scrollbar-thumb{background:rgba(140,198,63,.28);}
  .sq-sidebar-left::-webkit-scrollbar{width:3px;}
  .sq-sidebar-left::-webkit-scrollbar-thumb{background:rgba(140,198,63,.28);}
  .sq-sidebar-box{background:linear-gradient(180deg,var(--sq-surface-soft) 0%, var(--sq-surface-strong) 100%);border:1px solid var(--sq-border-strong);box-shadow:var(--sq-shadow-strong);border-radius:12px;padding:16px;}
  .sq-sidebar-box-title{font-size:10px;font-weight:700;color:var(--sq-accent-bright);margin-bottom:10px;letter-spacing:.14em;text-transform:uppercase;}
  .sq-sidebar-box p,
  .sq-sidebar-box div,
  .sq-sidebar-box li,
  .sq-sidebar-box span{color:var(--sq-soft);}
  .sq-sidebar-cta{background:radial-gradient(circle at top right, rgba(140,198,63,.16), transparent 38%),linear-gradient(135deg,var(--sq-surface) 0%, var(--sq-surface-soft) 60%, color-mix(in srgb, var(--sq-surface-strong) 70%, #20311a 30%) 100%);border:1px solid var(--sq-border-strong);box-shadow:var(--sq-shadow-strong);border-radius:12px;padding:18px 16px;text-align:center;}
  .sq-sidebar-cta p{font-size:12px;color:var(--sq-text);margin-bottom:12px;line-height:1.75;}
  .sq-sidebar-cta a{background:#8CC63F;color:var(--sq-cta-text);font-size:12px;font-weight:700;padding:8px 16px;border-radius:100px;text-decoration:none;display:inline-block;transition:opacity .2s, transform .2s, box-shadow .2s;box-shadow:0 8px 22px rgba(140,198,63,.22);}
  .sq-sidebar-cta a:hover{opacity:.85;text-decoration:none;transform:translateY(-1px);box-shadow:0 10px 26px rgba(140,198,63,.28);}
  .sq-sidebar-ad{background:linear-gradient(180deg,var(--sq-surface-soft),var(--sq-surface-strong));border:1px dashed var(--sq-border-strong);border-radius:12px;min-height:250px;display:flex;align-items:center;justify-content:center;color:var(--sq-muted);font-size:11px;}
  .sq-mini-card{background:radial-gradient(circle at top left, rgba(140,198,63,.12), transparent 34%),linear-gradient(180deg,var(--sq-surface-soft),var(--sq-surface-strong));border:1px solid var(--sq-border-strong);box-shadow:var(--sq-shadow-strong);border-radius:12px;padding:16px;}
  .sq-mini-card-title{font-size:13px;font-weight:700;color:var(--sq-text);line-height:1.65;margin-bottom:8px;}
  .sq-mini-card-text{font-size:12px;color:var(--sq-soft);line-height:1.85;}
  .sq-side-links{display:flex;flex-direction:column;gap:8px;}
  .sq-side-link{display:block;background:linear-gradient(180deg, color-mix(in srgb, var(--sq-surface) 82%, transparent 18%), color-mix(in srgb, var(--sq-surface-soft) 88%, transparent 12%));border:1px solid var(--sq-border);border-radius:10px;padding:12px 13px;text-decoration:none;color:inherit;transition:box-shadow .2s,border-color .2s,transform .2s;}
  .sq-side-link:hover{box-shadow:0 10px 24px rgba(0,0,0,.16);border-color:rgba(140,198,63,.32);transform:translateY(-1px);text-decoration:none;}
  .sq-side-link-label{font-size:10px;font-weight:700;color:var(--sq-accent-bright);letter-spacing:.08em;margin-bottom:4px;}
  .sq-side-link-title{font-size:12px;font-weight:700;color:var(--sq-text);line-height:1.65;}
}
/* TOC（サイドバー内） */
.sq-toc-title{font-weight:700;color:var(--sq-text);margin-bottom:10px;font-size:12px;letter-spacing:.08em;}
.sq-toc ol{margin:0;padding-left:16px;}
.sq-toc li{margin-bottom:5px;line-height:1.6;}
.sq-toc a{font-size:12px;color:var(--sq-accent-bright);text-decoration:none;}
.sq-toc a:hover{text-decoration:underline;}
/* TOC（モバイル：インライン） */
@media(max-width:959px){
  .sq-toc-inline{background:radial-gradient(circle at top right, rgba(140,198,63,.12), transparent 30%),linear-gradient(180deg,var(--sq-surface-soft),var(--sq-surface-strong));border:1px solid var(--sq-border-strong);border-left:3px solid #8CC63F;border-radius:0 12px 12px 0;padding:16px 20px;margin:24px 0 32px;font-size:13px;}
  .sq-toc-inline ol{margin:0;padding-left:18px;}
  .sq-toc-inline li{margin-bottom:5px;}
  .sq-toc-inline a{color:var(--sq-accent-bright);text-decoration:none;}
}
/* カテゴリーバッジ */
.sq-cat-badge{margin-bottom:8px;}
.sq-cat-badge span{display:inline-block;font-size:10px;font-weight:700;padding:4px 12px;border-radius:100px;color:#fff;letter-spacing:.12em;box-shadow:0 8px 20px rgba(0,0,0,.12);}
/* 途中CTA */
.sq-mid-cta{background:radial-gradient(circle at top right, rgba(140,198,63,.16), transparent 34%),linear-gradient(135deg,var(--sq-surface-soft),var(--sq-surface-strong) 68%, color-mix(in srgb, var(--sq-surface-strong) 78%, #1d2e18 22%) 100%);border:1px solid var(--sq-border-strong);box-shadow:var(--sq-shadow);border-radius:12px;padding:18px 20px;margin:32px 0;display:flex;align-items:center;gap:16px;flex-wrap:wrap;}
.sq-mid-cta p{font-size:13px;color:var(--sq-text);margin:0;flex:1;line-height:1.8;}
.sq-mid-cta a{background:#8CC63F;color:var(--sq-cta-text);font-size:12px;font-weight:700;padding:8px 18px;border-radius:100px;text-decoration:none;white-space:nowrap;flex-shrink:0;transition:opacity .2s, transform .2s, box-shadow .2s;box-shadow:0 8px 22px rgba(140,198,63,.22);}
.sq-mid-cta a:hover{opacity:.88;text-decoration:none;transform:translateY(-1px);}
/* 広告プレースホルダー（本文内） */
.sq-ad-slot{background:var(--sq-surface-soft);border:1px dashed var(--sq-border);border-radius:8px;min-height:90px;display:flex;align-items:center;justify-content:center;color:var(--sq-muted);font-size:11px;margin:24px 0;}
/* 著者プロフィール */
.sq-author{display:flex;align-items:center;gap:14px;background:linear-gradient(180deg,var(--sq-surface-soft),var(--sq-surface-strong));border:1px solid var(--sq-border-strong);box-shadow:var(--sq-shadow);border-radius:12px;padding:14px 18px;margin:24px 0 32px;}
.sq-author-avatar{width:44px;height:44px;border-radius:50%;background:radial-gradient(circle at 30% 30%,#E8F7B8,#8CC63F 55%,#416F14);display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0;box-shadow:0 0 24px rgba(140,198,63,.22);}
.sq-author-name{font-size:13px;font-weight:700;color:var(--sq-text);margin-bottom:2px;}
.sq-author-title{font-size:11px;color:var(--sq-accent-bright);font-weight:700;margin-bottom:4px;letter-spacing:.06em;}
.sq-author-bio{font-size:12px;color:var(--sq-soft);line-height:1.7;}
/* シェアボタン */
.sq-share{max-width:800px;margin:0 auto;padding:32px 24px 0;}
.sq-share-title{font-size:11px;font-weight:700;color:var(--sq-muted);letter-spacing:.16em;margin-bottom:12px;text-transform:uppercase;}
.sq-share-btns{display:flex;gap:10px;flex-wrap:wrap;}
.sq-share-btn{display:inline-flex;align-items:center;gap:7px;padding:10px 20px;border-radius:100px;font-size:13px;font-weight:700;text-decoration:none;transition:opacity .2s, transform .2s, box-shadow .2s;}
.sq-share-btn:hover{opacity:.9;text-decoration:none;transform:translateY(-1px);}
.sq-share-btn-x{background:#000;color:#fff;}
.sq-share-btn-line{background:#06C755;color:#fff;}
/* 新着・同カテゴリ */
.sq-widget{padding:44px 24px;background:linear-gradient(180deg,var(--sq-surface-soft),color-mix(in srgb, var(--sq-surface-strong) 85%, #dbe7f4 15%));}
.sq-widget-inner{max-width:800px;margin:0 auto;}
.sq-widget-title{font-size:15px;font-weight:700;color:var(--sq-text);margin:0 0 16px;padding-left:12px;border-left:3px solid #8CC63F;letter-spacing:.04em;}
.sq-card-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(210px,1fr));gap:10px;margin-bottom:36px;}
.sq-card{display:block;background:linear-gradient(180deg,var(--sq-surface-soft),var(--sq-surface-strong));border:1px solid var(--sq-border-strong);box-shadow:var(--sq-shadow);border-radius:12px;padding:14px 16px;color:inherit;text-decoration:none;transition:box-shadow .2s,border-color .2s,transform .2s;}
.sq-card:hover{box-shadow:0 16px 34px rgba(0,0,0,.16);border-color:rgba(140,198,63,.3);transform:translateY(-2px);text-decoration:none;}
.sq-card-label{font-size:10px;font-weight:700;color:var(--sq-accent-bright);margin-bottom:5px;letter-spacing:.08em;}
.sq-card-title{font-size:13px;font-weight:700;color:var(--sq-text);line-height:1.6;}
.sq-new-badge{display:inline-block;background:#EF4444;color:#fff;font-size:9px;font-weight:700;padding:1px 5px;border-radius:4px;margin-left:5px;vertical-align:middle;}
  `;
  document.head.appendChild(s);
}

function buildThemeToggle(){
  const navInner = document.querySelector('.nav-inner');
  if(!navInner) return;
  const group = document.createElement('div');
  group.id = 'sq-article-theme-toggle';
  group.className = 'sq-article-theme-group';
  group.setAttribute('role', 'group');
  group.setAttribute('aria-label', '記事テーマ');
  [
    {mode:'system', icon:'◐', label:'System'},
    {mode:'light', icon:'☀', label:'Light'},
    {mode:'dark', icon:'☾', label:'Dark'}
  ].forEach(({mode, icon, label}) => {
    const btn = document.createElement('button');
    btn.className = 'sq-article-theme-option';
    btn.type = 'button';
    btn.setAttribute('data-theme-mode', mode);
    btn.setAttribute('title', `${label} モード`);
    btn.innerHTML = `<span class="sq-theme-icon">${icon}</span><span class="sq-theme-text">${label}</span>`;
    btn.addEventListener('click', () => setArticleThemeMode(mode));
    group.appendChild(btn);
  });
  const cta = navInner.querySelector('.nav-cta');
  if(cta) navInner.insertBefore(group, cta);
  else navInner.appendChild(group);
  syncThemeControls();
}

/* ── サイドバー構築（position:fixed、コンテナは触らない） ── */
function buildLayout(){
  const isDesktop = window.innerWidth >= 1100;
  const isWideDesktop = window.innerWidth >= 1500;
  const layout = {right:null,left:null};
  if(isDesktop){
    const sidebar = document.createElement('aside');
    sidebar.className = 'sq-sidebar';
    document.body.appendChild(sidebar);
    layout.right = sidebar;
  }
  if(isWideDesktop){
    const leftbar = document.createElement('aside');
    leftbar.className = 'sq-sidebar-left';
    document.body.appendChild(leftbar);
    layout.left = leftbar;
  }
  return layout;
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
  box.innerHTML = `<p>⚔ 勉強記録を経験値に変えて、<br>毎日の資格学習を冒険として積み上げる。</p><a href="index.html">Study Quest を起動する →</a>`;
  sidebar.appendChild(box);
}

/* ── 左サイドバー（回遊導線） ── */
function buildLeftSidebar(leftbar){
  if(!leftbar) return;

  const intro = document.createElement('div');
  intro.className = 'sq-mini-card';
  intro.innerHTML = `
    <div class="sq-mini-card-title">🚪 未知の合格ルートに入るための案内板。</div>
    <div class="sq-mini-card-text">このページのまわりに、資格選び・勉強法・進路整理の導線をまとめています。気になったところから辿れば、次の一歩が見えやすくなります。</div>
  `;
  leftbar.appendChild(intro);

  const rec = document.createElement('div');
  rec.className = 'sq-sidebar-box';
  rec.innerHTML = `<div class="sq-sidebar-box-title">おすすめ記事</div><div class="sq-side-links"></div>`;
  const list = rec.querySelector('.sq-side-links');
  LATEST.filter(f=>f!==PAGE).slice(0,4).forEach(f=>{
    const a = ARTICLES[f]; if(!a) return;
    list.innerHTML += `<a href="${f}" class="sq-side-link"><div class="sq-side-link-label">${a.label}</div><div class="sq-side-link-title">${a.title}</div></a>`;
  });
  leftbar.appendChild(rec);

  let catFiles=[], catName='';
  for(const [name,cat] of Object.entries(CATS)){
    if(cat.files.includes(PAGE)){ catFiles=cat.files.filter(f=>f!==PAGE).slice(0,4); catName=name; break; }
  }
  if(catFiles.length > 0){
    const rel = document.createElement('div');
    rel.className = 'sq-sidebar-box';
    rel.innerHTML = `<div class="sq-sidebar-box-title">同カテゴリ（${catName}）</div><div class="sq-side-links"></div>`;
    const relList = rel.querySelector('.sq-side-links');
    catFiles.forEach(f=>{
      const a = ARTICLES[f]; if(!a) return;
      relList.innerHTML += `<a href="${f}" class="sq-side-link"><div class="sq-side-link-label">${a.label}</div><div class="sq-side-link-title">${a.title}</div></a>`;
    });
    leftbar.appendChild(rel);
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
  cta.innerHTML = '<p>📱 <strong>Study Quest</strong> は、停滞しがちな資格勉強を「積み上がりが見える冒険」に変える学習アプリです。今日の勉強を、次のレベルアップに変えましょう。</p><a href="index.html">無料で試してみる →</a>';
  target.insertAdjacentElement('beforebegin', cta);
}

/* ── BreadcrumbList JSON-LD ── */
function injectBreadcrumbLD(){
  const base = 'https://hito77ki-ship-it.github.io/study-quest/';
  const items = Array.from(document.querySelectorAll('.breadcrumb a, .breadcrumb')).reduce((acc, el) => {
    if(el.tagName === 'A'){
      acc.push({name: el.textContent.trim(), url: base.replace(/\/$/, '') + '/' + el.getAttribute('href')});
    }
    return acc;
  }, []);

  // ホームのURLを正規化
  if(items[0]) items[0].url = base + 'lp.html';

  // 現在ページをラストに追加
  const h1 = document.querySelector('h1');
  if(h1) items.push({name: h1.textContent.trim(), url: base + PAGE});

  if(items.length < 2) return;

  const ld = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": item.name,
      "item": item.url
    }))
  };
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(ld);
  document.head.appendChild(script);
}

/* ── 著者プロフィール ── */
function buildAuthorBox(){
  const container = document.querySelector('.container');
  if(!container) return;
  const meta = container.querySelector('.meta');
  if(!meta) return;

  const box = document.createElement('div');
  box.className = 'sq-author';
  box.innerHTML = `
    <div class="sq-author-avatar">⚔</div>
    <div>
      <div class="sq-author-name">若葉（わかば）</div>
      <div class="sq-author-title">現役CPA受験生 ／ Study Quest 開発者</div>
      <div class="sq-author-bio">大学在学中に公認会計士試験の勉強を開始。「勉強が続かない」課題を解決するため、資格学習RPGアプリ Study Quest を個人開発。自身の受験経験をもとに、各資格の勉強法・スケジュールを発信中。X: @wakaba_sq</div>
    </div>`;
  meta.insertAdjacentElement('afterend', box);
}

/* ── SNSシェアボタン ── */
function buildShareButtons(){
  const title = encodeURIComponent(document.title);
  const url   = encodeURIComponent(location.href);
  const xUrl    = `https://twitter.com/intent/tweet?text=${title}&url=${url}&via=wakaba_sq`;
  const lineUrl = `https://social-plugins.line.me/lineit/share?url=${url}`;

  const wrap = document.createElement('div');
  wrap.className = 'sq-share';
  wrap.innerHTML = `
    <div class="sq-share-title">この記事をシェアする</div>
    <div class="sq-share-btns">
      <a href="${xUrl}" target="_blank" rel="noopener" class="sq-share-btn sq-share-btn-x">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.259 5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
        Xでシェア
      </a>
      <a href="${lineUrl}" target="_blank" rel="noopener" class="sq-share-btn sq-share-btn-line">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/></svg>
        LINEでシェア
      </a>
    </div>`;

  const related = document.querySelector('section[style*="F7FAFC"]');
  if(related) related.insertAdjacentElement('beforebegin', wrap);
  else {
    const footer = document.querySelector('footer');
    if(footer) footer.insertAdjacentElement('beforebegin', wrap);
  }
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
  buildThemeToggle();
  injectBreadcrumbLD();
  const layout = buildLayout();
  buildTOC(layout.right);
  buildCatBadge();
  buildSidebarCTA(layout.right);
  buildLeftSidebar(layout.left);
  buildAuthorBox();
  insertMidCTA();
  buildShareButtons();
  buildWidgets();
});
})();
