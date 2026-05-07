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
  'boki-zero-01.html':  {label:'簿記3級', title:'ゼロからの簿記①取引・簿記とは？'},
  'boki-zero-02.html':  {label:'簿記3級', title:'ゼロからの簿記②なぜ簿記が大事？'},
  'boki-zero-03.html':  {label:'簿記3級', title:'ゼロからの簿記③簿記の流れ'},
  'boki-zero-04.html':  {label:'簿記3級', title:'ゼロからの簿記④仕訳のしくみ'},
  'boki-zero-05.html':  {label:'簿記3級', title:'ゼロからの簿記⑤仕訳から財務諸表へ'},
  'boki3-genkin.html':  {label:'簿記3級', title:'現金・当座預金の違いと仕訳'},
  'boki3-kafusoku.html':{label:'簿記3級', title:'現金過不足（雑損・雑益）'},
  'boki3-kashidaore.html':{label:'簿記3級',title:'貸倒引当金の仕訳と計算'},
  'boki3-genka.html':   {label:'簿記3級', title:'減価償却（定額法）の計算と仕訳'},
  'boki3-keika.html':   {label:'簿記3級', title:'経過勘定（前払・未払・前受・未収）'},
  'boki3-keika2.html':  {label:'簿記3級', title:'毎年同額の前払い（18か月の理由）'},
  'boki3-shisanhyo.html':{label:'簿記3級',title:'試算表3種類の違い'},
  'boki3-denpyo.html':  {label:'簿記3級', title:'伝票会計（３伝票制）の仕訳と解き方'},
  'boki3-nikkei.html':  {label:'簿記3級', title:'仕訳日計表の書き方と集計ステップ'},
  'boki3-sanpou.html':  {label:'簿記3級', title:'商品売買の仕訳（三分法）仕入・売上・繰越商品'},
  'boki3-kake.html':    {label:'簿記3級', title:'掛取引（売掛金・買掛金）の仕訳'},
  'boki3-tegata.html':  {label:'簿記3級', title:'受取手形・支払手形・電子記録債権の仕訳'},
  'boki3-kyuryo.html':  {label:'簿記3級', title:'給料の仕訳と源泉所得税・社会保険料の預り金'},
  'boki3-kotei.html':  {label:'簿記3級', title:'固定資産の取得・売却の仕訳（付随費用・売却損益）'},
  'boki3-sonota.html': {label:'簿記3級', title:'その他の債権・債務（前払金・前受金・仮払金・仮受金・立替金・預り金）'},
  'boki3-kabushiki.html':{label:'簿記3級',title:'株式会社の取引の仕訳（株式発行・剰余金の配当・利益準備金）'},
  'boki3-shohi.html':  {label:'簿記3級', title:'消費税の仕訳（税抜方式）仮払消費税・仮受消費税'},
  'boki3-seisanhyo.html':{label:'簿記3級',title:'精算表の書き方（8桁精算表）決算整理から財務諸表まで'},
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

/* ── Supabase / Auth ── */
const _SB_URL  = 'https://ydexcwnwrbrfikujocon.supabase.co';
const _SB_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlkZXhjd253cmJyZmlrdWpvY29uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM5ODk5ODAsImV4cCI6MjA4OTU2NTk4MH0.dO4PGYDlVrYsrcPgPuQFgzU8fCVvJ0R4gdGBmeAs-OQ';

let _sb = null;
let _artUser = null;

async function _initSB() {
  if (_sb) return;
  return new Promise(resolve => {
    const init = () => {
      _sb = window.supabase.createClient(_SB_URL, _SB_ANON);
      _sb.auth.getSession().then(({ data }) => {
        _artUser = data.session?.user || null;
        resolve();
      }).catch(() => resolve());
    };
    if (window.supabase && window.supabase.createClient) { init(); return; }
    const s = document.createElement('script');
    s.src = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/umd/supabase.js';
    s.onload = init;
    s.onerror = () => resolve();
    document.head.appendChild(s);
  });
}

function _loginGoogle() {
  if (!_sb) return;
  _sb.auth.signInWithOAuth({ provider: 'google', options: { redirectTo: location.href } });
}

async function _logoutArt() {
  if (_sb) await _sb.auth.signOut();
  _artUser = null;
  location.reload();
}

async function _getToken() {
  if (!_sb) return _SB_ANON;
  const { data } = await _sb.auth.getSession();
  return data.session?.access_token || _SB_ANON;
}

async function _fetchCounts(id) {
  try {
    const r = await fetch(
      `${_SB_URL}/rest/v1/article_reactions?article_id=eq.${encodeURIComponent(id)}&select=reaction_type`,
      { headers: { 'apikey': _SB_ANON, 'Authorization': 'Bearer ' + _SB_ANON } }
    );
    const data = await r.json();
    const c = { helpful: 0, learned: 0, motivated: 0 };
    if (Array.isArray(data)) data.forEach(row => { if (c[row.reaction_type] !== undefined) c[row.reaction_type]++; });
    return c;
  } catch { return { helpful: 0, learned: 0, motivated: 0 }; }
}

function _relTime(ts) {
  const diff = Date.now() - new Date(ts).getTime();
  const min = Math.floor(diff / 60000);
  if (min < 1) return 'たった今';
  if (min < 60) return min + '分前';
  const h = Math.floor(min / 60);
  if (h < 24) return h + '時間前';
  const d = Math.floor(h / 24);
  if (d < 30) return d + '日前';
  return new Date(ts).toLocaleDateString('ja-JP');
}

function _escHtml(str) {
  return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

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
  background:#F7FAFC !important;
  border:1px solid rgba(26,32,44,.06) !important;
  border-left:3px solid #8CC63F !important;
  color:#2D3748 !important;
}
html[data-theme="light"] h2{border-left-color:#8CC63F;}
html[data-theme="light"] h3{color:#2D3748;}
html[data-theme="light"] th{background:#8CC63F;color:#0A0A0F;}
html[data-theme="light"] td{border-bottom-color:rgba(26,32,44,.06);}
html[data-theme="light"] tr:nth-child(even) td{background:#F8FAFC;}
html[data-theme="light"] table{border-color:rgba(26,32,44,.08);}
html[data-theme="light"] .tip-box{background:linear-gradient(180deg,#F4FBEA,#EDF8DF) !important;border-color:rgba(140,198,63,.22) !important;}
html[data-theme="light"] .tip-box strong{color:#547C17;}
html[data-theme="light"] .warn-box{background:linear-gradient(180deg,#FFF9E8,#FFF3CF) !important;border-color:rgba(246,224,94,.34) !important;}
html[data-theme="light"] .warn-box strong{color:#A06A00;}
html[data-theme="light"] .app-cta{
  background:linear-gradient(180deg,#F6FBEF,#EEF6DF) !important;
  border:1px solid rgba(140,198,63,.22) !important;
  box-shadow:var(--sq-shadow) !important;
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
html[data-theme="light"] .container [style*="background:#111827"],
html[data-theme="light"] .container [style*="background:#151A2A"],
html[data-theme="light"] .container [style*="background:#121826"],
html[data-theme="light"] .sq-sidebar [style*="background:#111827"],
html[data-theme="light"] .sq-sidebar [style*="background:#151A2A"],
html[data-theme="light"] .sq-sidebar [style*="background:#121826"]{
  background:#FFFFFF !important;
  border-color:rgba(26,32,44,.08) !important;
  box-shadow:var(--sq-shadow) !important;
}
html[data-theme="light"] .container [style*="color:#F8FAFC"],
html[data-theme="light"] .container [style*="color:#E8EEF8"],
html[data-theme="light"] .container [style*="color:#CCD6E5"],
html[data-theme="light"] .container [style*="color:#9BA7BB"],
html[data-theme="light"] .sq-sidebar [style*="color:#F8FAFC"],
html[data-theme="light"] .sq-sidebar [style*="color:#E8EEF8"],
html[data-theme="light"] .sq-sidebar [style*="color:#CCD6E5"],
html[data-theme="light"] .sq-sidebar [style*="color:#9BA7BB"]{
  color:#2D3748 !important;
}
html[data-theme="light"] .container [style*="color:#B6E27C"],
html[data-theme="light"] .container [style*="color:#A9D86F"],
html[data-theme="light"] .sq-sidebar [style*="color:#B6E27C"],
html[data-theme="light"] .sq-sidebar [style*="color:#A9D86F"]{
  color:#6AAF2B !important;
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
html[data-theme="dark"] .lead{background:linear-gradient(180deg,#121826,#0F1523) !important;border:1px solid rgba(140,198,63,.18) !important;border-left:3px solid #8CC63F !important;color:#E4ECF8 !important;}
html[data-theme="dark"] h2{border-left-color:#8CC63F;}
html[data-theme="dark"] h3{color:#B6E27C;}
html[data-theme="dark"] th{background:#8CC63F;color:#0A0A0F;}
html[data-theme="dark"] td{border-bottom-color:rgba(255,255,255,.06);}
html[data-theme="dark"] tr:nth-child(even) td{background:#111827;}
html[data-theme="dark"] table{border-color:rgba(255,255,255,.06);}
html[data-theme="dark"] .tip-box{background:linear-gradient(180deg,#102218,#0E1A15) !important;border-color:rgba(140,198,63,.26) !important;}
html[data-theme="dark"] .tip-box strong{color:#B6E27C;}
html[data-theme="dark"] .warn-box{background:linear-gradient(180deg,#2A210E,#1C160A) !important;border-color:rgba(246,224,94,.32) !important;}
html[data-theme="dark"] .warn-box strong{color:#F7D774;}
html[data-theme="dark"] .app-cta{background:radial-gradient(circle at top right, rgba(140,198,63,.16), transparent 34%),linear-gradient(135deg,#12192A,#152233 68%, #172A21 100%) !important;border:1px solid rgba(140,198,63,.24) !important;box-shadow:0 0 0 1px rgba(140,198,63,.04), 0 14px 30px rgba(5,10,20,.16) !important;}
html[data-theme="dark"] .app-cta p{color:#D9E6C7;}
html[data-theme="dark"] details{background:linear-gradient(180deg,#13192A,#101522);border-color:rgba(140,198,63,.14) !important;}
html[data-theme="dark"] details summary{color:#F8FAFC !important;}
html[data-theme="dark"] details div{color:#CCD6E5 !important;}
html[data-theme="dark"] section[style*="background:#F7FAFC"],
html[data-theme="dark"] div[style*="background:#F7FAFC"]{background:linear-gradient(180deg,#0F1523,#0B1019) !important;}
html[data-theme="dark"] .container [style*="background:#fff"],
html[data-theme="dark"] .container [style*="background:#FFFFFF"],
html[data-theme="dark"] .container [style*="background:#F7FAFC"],
html[data-theme="dark"] .container [style*="background:#FFFBEB"],
html[data-theme="dark"] .container [style*="background:#F0FFF4"],
html[data-theme="dark"] .sq-sidebar [style*="background:#fff"],
html[data-theme="dark"] .sq-sidebar [style*="background:#FFFFFF"],
html[data-theme="dark"] .sq-sidebar [style*="background:#F7FAFC"],
html[data-theme="dark"] .sq-sidebar [style*="background:#FFFBEB"],
html[data-theme="dark"] .sq-sidebar [style*="background:#F0FFF4"]{
  background:linear-gradient(180deg,#151A2A,#111728) !important;
  border-color:rgba(140,198,63,.16) !important;
  box-shadow:0 0 0 1px rgba(140,198,63,.03), 0 12px 28px rgba(5,10,20,.12) !important;
}
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
html[data-theme="dark"] .container [style*="color:#1A202C"],
html[data-theme="dark"] .container [style*="color:#374151"],
html[data-theme="dark"] .container [style*="color:#4A5568"],
html[data-theme="dark"] .container [style*="color:#2D3748"],
html[data-theme="dark"] .container [style*="color:#718096"],
html[data-theme="dark"] .sq-sidebar [style*="color:#1A202C"],
html[data-theme="dark"] .sq-sidebar [style*="color:#374151"],
html[data-theme="dark"] .sq-sidebar [style*="color:#4A5568"],
html[data-theme="dark"] .sq-sidebar [style*="color:#2D3748"],
html[data-theme="dark"] .sq-sidebar [style*="color:#718096"]{
  color:#CCD6E5 !important;
}
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

/* ── 簿記3級記事 固有コンポーネント ダークモード ── */
/* 仕訳ボックス */
html[data-theme="dark"] .shiwake-col.kari{background:rgba(59,130,246,.12) !important;border-color:rgba(59,130,246,.3) !important;}
html[data-theme="dark"] .shiwake-col.kashi{background:rgba(237,137,54,.10) !important;}
html[data-theme="dark"] .shiwake-col.kari .shiwake-label{color:#90CDF4 !important;}
html[data-theme="dark"] .shiwake-col.kashi .shiwake-label{color:#FBD38D !important;}
html[data-theme="dark"] .shiwake-item .kamoku{color:#F8FAFC !important;}
html[data-theme="dark"] .shiwake-item .amount{color:#9BA7BB !important;}
/* 例題・解答 */
html[data-theme="dark"] .mondai{background:linear-gradient(180deg,#111826,#0E1421) !important;border-color:rgba(140,198,63,.14) !important;}
html[data-theme="dark"] .mondai p{color:#CCD6E5 !important;}
html[data-theme="dark"] .kaitou-label{color:#B6E27C !important;}
/* ポイントカード */
html[data-theme="dark"] .point-card{background:linear-gradient(180deg,#151A2A,#111728) !important;border-color:rgba(140,198,63,.3) !important;}
html[data-theme="dark"] .point-card p{color:#F8FAFC !important;}
/* ○×グリッド */
html[data-theme="dark"] .mb-card.maru{background:linear-gradient(180deg,#0E2218,#0B1A14) !important;border-color:rgba(140,198,63,.3) !important;}
html[data-theme="dark"] .mb-card.batu{background:linear-gradient(180deg,#2A0E0E,#1E0A0A) !important;border-color:rgba(252,129,129,.28) !important;}
html[data-theme="dark"] .mb-card.maru .mb-badge{color:#B6E27C !important;}
html[data-theme="dark"] .mb-card.batu .mb-badge{color:#FC8181 !important;}
html[data-theme="dark"] .mb-item{color:#CCD6E5 !important;border-bottom-color:rgba(255,255,255,.06) !important;}
html[data-theme="dark"] .mb-item .note{color:#9BA7BB !important;}
/* フローステップ（現金過不足） */
html[data-theme="dark"] .flow-step.s1{background:rgba(59,130,246,.12) !important;border-color:rgba(59,130,246,.3) !important;}
html[data-theme="dark"] .flow-step.s2{background:rgba(140,198,63,.10) !important;border-color:rgba(140,198,63,.28) !important;}
html[data-theme="dark"] .flow-step.s3{background:rgba(246,224,94,.08) !important;border-color:rgba(246,224,94,.28) !important;}
html[data-theme="dark"] .flow-step.s1 .flow-num{color:#90CDF4 !important;}
html[data-theme="dark"] .flow-step.s2 .flow-num{color:#B6E27C !important;}
html[data-theme="dark"] .flow-step.s3 .flow-num{color:#F7D774 !important;}
html[data-theme="dark"] .flow-title{color:#F8FAFC !important;}
/* 比較カード（現金過不足） */
html[data-theme="dark"] .compare-card.over{background:linear-gradient(180deg,#0E2218,#0B1A14) !important;border-color:rgba(140,198,63,.3) !important;}
html[data-theme="dark"] .compare-card.under{background:linear-gradient(180deg,#2A0E0E,#1E0A0A) !important;border-color:rgba(252,129,129,.28) !important;}
html[data-theme="dark"] .compare-card.over .compare-badge{background:rgba(140,198,63,.22) !important;color:#B6E27C !important;}
html[data-theme="dark"] .compare-card.under .compare-badge{background:rgba(252,129,129,.22) !important;color:#FC8181 !important;}
html[data-theme="dark"] .compare-card p{color:#CCD6E5 !important;}
html[data-theme="dark"] .compare-card .compare-eg{background:rgba(255,255,255,.05) !important;color:#9BA7BB !important;}
/* 計算ボックス（貸倒引当金） */
html[data-theme="dark"] .calc-box{background:linear-gradient(180deg,#151A2A,#111728) !important;border-color:rgba(140,198,63,.3) !important;}
html[data-theme="dark"] .calc-row .label{color:#9BA7BB !important;}
html[data-theme="dark"] .calc-row .val{color:#F8FAFC !important;}
html[data-theme="dark"] .calc-operator{color:#9BA7BB !important;}
/* パターンカード（貸倒引当金） */
html[data-theme="dark"] .pattern-card.enough{background:linear-gradient(180deg,#0E2218,#0B1A14) !important;border-color:rgba(140,198,63,.3) !important;}
html[data-theme="dark"] .pattern-card.short{background:linear-gradient(180deg,#2A0E0E,#1E0A0A) !important;border-color:rgba(252,129,129,.28) !important;}
html[data-theme="dark"] .pattern-card.enough .pattern-badge{background:rgba(140,198,63,.22) !important;color:#B6E27C !important;}
html[data-theme="dark"] .pattern-card.short .pattern-badge{background:rgba(252,129,129,.22) !important;color:#FC8181 !important;}
html[data-theme="dark"] .pattern-card p{color:#CCD6E5 !important;}
html[data-theme="dark"] .pattern-card .pattern-note{color:#9BA7BB !important;}
/* まとめカード（共通） */
html[data-theme="dark"] .matome{background:linear-gradient(135deg,#0E2218,#0B1A12) !important;border-color:rgba(140,198,63,.3) !important;}
html[data-theme="dark"] .matome h3{color:#B6E27C !important;}
html[data-theme="dark"] .matome-row{color:#CCD6E5 !important;border-bottom-color:rgba(255,255,255,.06) !important;}
html[data-theme="dark"] .matome-row .trigger{color:#F8FAFC !important;}
html[data-theme="dark"] .matome-row .result{color:#B6E27C !important;}
/* ── ここまで ── */

/* ── 試算表記事 固有コンポーネント ダークモード ── */
html[data-theme="dark"] .type-card.t-gokei{background:rgba(59,130,246,.12) !important;border-color:rgba(59,130,246,.3) !important;}
html[data-theme="dark"] .type-card.t-both{background:rgba(140,198,63,.10) !important;border-color:rgba(140,198,63,.28) !important;}
html[data-theme="dark"] .type-card.t-zandaka{background:rgba(251,211,141,.08) !important;border-color:rgba(251,211,141,.3) !important;}
html[data-theme="dark"] .type-card.t-gokei .tc-badge{background:rgba(59,130,246,.25) !important;color:#90CDF4 !important;}
html[data-theme="dark"] .type-card.t-both .tc-badge{background:rgba(140,198,63,.22) !important;color:#B6E27C !important;}
html[data-theme="dark"] .type-card.t-zandaka .tc-badge{background:rgba(251,211,141,.2) !important;color:#F7D774 !important;}
html[data-theme="dark"] .tc-name{color:#F8FAFC !important;}
html[data-theme="dark"] .tc-desc{color:#CCD6E5 !important;}
html[data-theme="dark"] .type-card.t-gokei .tc-rule{color:#90CDF4 !important;}
html[data-theme="dark"] .type-card.t-both .tc-rule{color:#B6E27C !important;}
html[data-theme="dark"] .type-card.t-zandaka .tc-rule{color:#F7D774 !important;}
html[data-theme="dark"] .rule-item.ri-gokei{background:rgba(59,130,246,.12) !important;border-color:rgba(59,130,246,.3) !important;}
html[data-theme="dark"] .rule-item.ri-zandaka{background:rgba(140,198,63,.10) !important;border-color:rgba(140,198,63,.28) !important;}
html[data-theme="dark"] .rule-item.ri-gokei .ri-title{color:#90CDF4 !important;}
html[data-theme="dark"] .rule-item.ri-zandaka .ri-title{color:#B6E27C !important;}
html[data-theme="dark"] .rule-item .ri-body{color:#CCD6E5 !important;}
html[data-theme="dark"] .shisan-table th.kamoku-head{background:#151A2A !important;color:#9BA7BB !important;}
html[data-theme="dark"] .shisan-table th.gokei-kari{background:rgba(59,130,246,.18) !important;color:#90CDF4 !important;}
html[data-theme="dark"] .shisan-table th.gokei-kashi{background:rgba(237,137,54,.14) !important;color:#FBD38D !important;}
html[data-theme="dark"] .shisan-table th.zandaka-kari{background:rgba(140,198,63,.14) !important;color:#B6E27C !important;}
html[data-theme="dark"] .shisan-table th.zandaka-kashi{background:rgba(246,224,94,.10) !important;color:#F7D774 !important;}
html[data-theme="dark"] .shisan-table td{background:#121826 !important;color:#CCD6E5 !important;border-color:rgba(255,255,255,.06) !important;}
html[data-theme="dark"] .shisan-table td.kamoku-cell{color:#F8FAFC !important;}
html[data-theme="dark"] .shisan-table td.gokei-kari{background:rgba(59,130,246,.07) !important;}
html[data-theme="dark"] .shisan-table td.gokei-kashi{background:rgba(237,137,54,.06) !important;}
html[data-theme="dark"] .shisan-table td.zandaka-kari{background:rgba(140,198,63,.07) !important;}
html[data-theme="dark"] .shisan-table td.zandaka-kashi{background:rgba(246,224,94,.05) !important;}
html[data-theme="dark"] .shisan-table tfoot td{border-color:rgba(255,255,255,.12) !important;}
html[data-theme="dark"] .shisan-table tfoot td.gokei-kari{background:rgba(59,130,246,.18) !important;color:#90CDF4 !important;}
html[data-theme="dark"] .shisan-table tfoot td.gokei-kashi{background:rgba(237,137,54,.14) !important;color:#FBD38D !important;}
html[data-theme="dark"] .shisan-table tfoot td.zandaka-kari{background:rgba(140,198,63,.18) !important;color:#B6E27C !important;}
html[data-theme="dark"] .shisan-table tfoot td.zandaka-kashi{background:rgba(246,224,94,.12) !important;color:#F7D774 !important;}
html[data-theme="dark"] .shisan-table td.empty{color:#4A5568 !important;}
html[data-theme="dark"] .legend-item{color:#9BA7BB !important;}
/* ── ここまで ── */

/* ── 伝票会計記事 固有コンポーネント ダークモード ── */
html[data-theme="dark"] .dp-card.nyukin{background:rgba(59,130,246,.12) !important;border-color:rgba(59,130,246,.3) !important;}
html[data-theme="dark"] .dp-card.shukin{background:rgba(252,129,129,.10) !important;border-color:rgba(252,129,129,.3) !important;}
html[data-theme="dark"] .dp-card.furikae{background:rgba(140,198,63,.10) !important;border-color:rgba(140,198,63,.28) !important;}
html[data-theme="dark"] .dp-card.nyukin .dp-badge{background:rgba(59,130,246,.25) !important;color:#90CDF4 !important;}
html[data-theme="dark"] .dp-card.shukin .dp-badge{background:rgba(252,129,129,.22) !important;color:#FC8181 !important;}
html[data-theme="dark"] .dp-card.furikae .dp-badge{background:rgba(140,198,63,.22) !important;color:#B6E27C !important;}
html[data-theme="dark"] .dp-name{color:#F8FAFC !important;}
html[data-theme="dark"] .dp-cond{color:#9BA7BB !important;}
html[data-theme="dark"] .dp-shiwake{background:rgba(255,255,255,.05) !important;color:#CCD6E5 !important;}
html[data-theme="dark"] .shiwake-row{background:rgba(255,255,255,.05) !important;}
html[data-theme="dark"] .shiwake-row .sw-kari{color:#90CDF4 !important;}
html[data-theme="dark"] .shiwake-row .sw-sep{color:#4A5568 !important;}
html[data-theme="dark"] .shiwake-row .sw-kashi{color:#FBD38D !important;}
html[data-theme="dark"] .shiwake-row .sw-amt{color:#9BA7BB !important;}
html[data-theme="dark"] .ticket.t-nyukin{background:rgba(59,130,246,.12) !important;border-color:rgba(59,130,246,.4) !important;}
html[data-theme="dark"] .ticket.t-shukin{background:rgba(252,129,129,.10) !important;border-color:rgba(252,129,129,.4) !important;}
html[data-theme="dark"] .ticket.t-furikae{background:rgba(140,198,63,.10) !important;border-color:rgba(140,198,63,.35) !important;}
html[data-theme="dark"] .ticket.t-nyukin .tk-badge{background:rgba(59,130,246,.25) !important;color:#90CDF4 !important;}
html[data-theme="dark"] .ticket.t-shukin .tk-badge{background:rgba(252,129,129,.22) !important;color:#FC8181 !important;}
html[data-theme="dark"] .ticket.t-furikae .tk-badge{background:rgba(140,198,63,.22) !important;color:#B6E27C !important;}
html[data-theme="dark"] .ticket.t-nyukin .tk-shiwake{color:#90CDF4 !important;}
html[data-theme="dark"] .ticket.t-shukin .tk-shiwake{color:#FC8181 !important;}
html[data-theme="dark"] .ticket.t-furikae .tk-shiwake{color:#B6E27C !important;}
html[data-theme="dark"] .mc-card.m-bunkai{background:rgba(59,130,246,.12) !important;border-color:rgba(59,130,246,.3) !important;}
html[data-theme="dark"] .mc-card.m-gisei{background:rgba(140,198,63,.10) !important;border-color:rgba(140,198,63,.28) !important;}
html[data-theme="dark"] .mc-card.m-bunkai .mc-badge{background:rgba(59,130,246,.25) !important;color:#90CDF4 !important;}
html[data-theme="dark"] .mc-card.m-gisei .mc-badge{background:rgba(140,198,63,.22) !important;color:#B6E27C !important;}
html[data-theme="dark"] .mc-title{color:#F8FAFC !important;}
html[data-theme="dark"] .mc-cond{color:#9BA7BB !important;}
html[data-theme="dark"] .mc-card.m-bunkai .mc-key{color:#90CDF4 !important;}
html[data-theme="dark"] .mc-card.m-gisei .mc-key{color:#B6E27C !important;}
html[data-theme="dark"] .step-body{color:#CCD6E5 !important;}
html[data-theme="dark"] .step-body strong{color:#F8FAFC !important;}
/* ── ここまで ── */

/* ── 仕訳日計表記事 固有コンポーネント ダークモード ── */
html[data-theme="dark"] .dd-row.r-nyukin{background:rgba(59,130,246,.12) !important;}
html[data-theme="dark"] .dd-row.r-shukin{background:rgba(252,129,129,.10) !important;}
html[data-theme="dark"] .dd-row.r-furikae{background:rgba(140,198,63,.10) !important;}
html[data-theme="dark"] .dd-row .kari{color:#90CDF4 !important;}
html[data-theme="dark"] .dd-row .kashi{color:#FBD38D !important;}
html[data-theme="dark"] .dd-row .sep{color:#4A5568 !important;}
html[data-theme="dark"] .dd-type-label.nyukin{background:rgba(59,130,246,.25) !important;color:#90CDF4 !important;}
html[data-theme="dark"] .dd-type-label.shukin{background:rgba(252,129,129,.22) !important;color:#FC8181 !important;}
html[data-theme="dark"] .dd-type-label.furikae{background:rgba(140,198,63,.22) !important;color:#B6E27C !important;}
html[data-theme="dark"] .collect-item.c-kari{background:rgba(59,130,246,.12) !important;border-color:rgba(59,130,246,.3) !important;}
html[data-theme="dark"] .collect-item.c-kashi{background:rgba(237,137,54,.10) !important;border-color:rgba(237,137,54,.3) !important;}
html[data-theme="dark"] .ci-kamoku{color:#F8FAFC !important;}
html[data-theme="dark"] .ci-calc{color:#9BA7BB !important;}
html[data-theme="dark"] .collect-item.c-kari .ci-total{color:#90CDF4 !important;}
html[data-theme="dark"] .collect-item.c-kashi .ci-total{color:#FBD38D !important;}
html[data-theme="dark"] .nikkei-table th.kamoku-head{background:#151A2A !important;color:#9BA7BB !important;}
html[data-theme="dark"] .nikkei-table th.n-kari{background:rgba(59,130,246,.18) !important;color:#90CDF4 !important;}
html[data-theme="dark"] .nikkei-table th.n-kashi{background:rgba(237,137,54,.14) !important;color:#FBD38D !important;}
html[data-theme="dark"] .nikkei-table td{background:#121826 !important;color:#CCD6E5 !important;border-color:rgba(255,255,255,.06) !important;}
html[data-theme="dark"] .nikkei-table td.kamoku-cell{color:#F8FAFC !important;}
html[data-theme="dark"] .nikkei-table td.n-kari{background:rgba(59,130,246,.07) !important;}
html[data-theme="dark"] .nikkei-table td.n-kashi{background:rgba(237,137,54,.06) !important;}
html[data-theme="dark"] .nikkei-table tfoot td{border-color:rgba(255,255,255,.12) !important;}
html[data-theme="dark"] .nikkei-table tfoot td.n-kari{background:rgba(59,130,246,.18) !important;color:#90CDF4 !important;}
html[data-theme="dark"] .nikkei-table tfoot td.n-kashi{background:rgba(237,137,54,.14) !important;color:#FBD38D !important;}
html[data-theme="dark"] .nikkei-table td.empty{color:#4A5568 !important;}
/* ── ここまで ── */

/* ── 毎年同額前払い記事 固有コンポーネント ダークモード ── */
html[data-theme="dark"] .tl-month-cell.m-rev{background:rgba(246,173,85,.12) !important;border-color:rgba(246,173,85,.3) !important;color:#FBD38D !important;}
html[data-theme="dark"] .tl-month-cell.m-paid{background:rgba(59,130,246,.18) !important;color:#90CDF4 !important;}
html[data-theme="dark"] .tl-month-cell.m-next{background:rgba(237,137,54,.18) !important;border-color:rgba(237,137,54,.4) !important;color:#FBD38D !important;}
html[data-theme="dark"] .tl-month-nums span{color:#9BA7BB !important;}
html[data-theme="dark"] .tl-legend{color:#9BA7BB !important;}
html[data-theme="dark"] .balance-box{border-color:rgba(140,198,63,.16) !important;}
html[data-theme="dark"] .bb-item.rev{background:rgba(246,173,85,.10) !important;border-color:rgba(246,173,85,.3) !important;}
html[data-theme="dark"] .bb-item.paid{background:rgba(59,130,246,.12) !important;}
html[data-theme="dark"] .bb-item.rev .bb-label{color:#FBD38D !important;}
html[data-theme="dark"] .bb-item.paid .bb-label{color:#90CDF4 !important;}
html[data-theme="dark"] .bb-item.rev .bb-val{color:#F6AD55 !important;}
html[data-theme="dark"] .bb-item.paid .bb-val{color:#90CDF4 !important;}
html[data-theme="dark"] .bb-item .bb-sub{color:#9BA7BB !important;}
html[data-theme="dark"] .bb-plus{background:transparent !important;color:#9BA7BB !important;border-color:rgba(140,198,63,.16) !important;}
html[data-theme="dark"] .ba-col.before{background:rgba(252,129,129,.10) !important;border-color:rgba(252,129,129,.28) !important;}
html[data-theme="dark"] .ba-col.after{background:rgba(140,198,63,.10) !important;border-color:rgba(140,198,63,.28) !important;}
html[data-theme="dark"] .ba-col.before .ba-title{color:#FC8181 !important;}
html[data-theme="dark"] .ba-col.after .ba-title{color:#B6E27C !important;}
html[data-theme="dark"] .ba-item{color:#CCD6E5 !important;}
html[data-theme="dark"] .ba-item strong{color:#F8FAFC !important;}
html[data-theme="dark"] .ba-arrow{color:#9BA7BB !important;}
/* ── ここまで ── */

/* ── 経過勘定記事 固有コンポーネント ダークモード ── */
html[data-theme="dark"] .pc-card.type-a{background:rgba(59,130,246,.12) !important;border-color:rgba(59,130,246,.3) !important;}
html[data-theme="dark"] .pc-card.type-b{background:rgba(140,198,63,.10) !important;border-color:rgba(140,198,63,.28) !important;}
html[data-theme="dark"] .pc-card.type-a .pc-badge{background:rgba(59,130,246,.25) !important;color:#90CDF4 !important;}
html[data-theme="dark"] .pc-card.type-b .pc-badge{background:rgba(140,198,63,.22) !important;color:#B6E27C !important;}
html[data-theme="dark"] .pc-title{color:#F8FAFC !important;}
html[data-theme="dark"] .pc-sub{color:#9BA7BB !important;}
html[data-theme="dark"] .pc-card.type-a .pc-examples{color:#90CDF4 !important;}
html[data-theme="dark"] .pc-card.type-b .pc-examples{color:#B6E27C !important;}
html[data-theme="dark"] .fg-card.maebara{background:rgba(59,130,246,.12) !important;border-color:#3B82F6 !important;}
html[data-theme="dark"] .fg-card.mibarai{background:rgba(252,129,129,.10) !important;border-color:#FC8181 !important;}
html[data-theme="dark"] .fg-card.maeuke{background:rgba(246,224,94,.08) !important;border-color:#F6E05E !important;}
html[data-theme="dark"] .fg-card.mishuu{background:rgba(140,198,63,.10) !important;border-color:#9AE6B4 !important;}
html[data-theme="dark"] .fg-card.maebara .fg-name{color:#90CDF4 !important;}
html[data-theme="dark"] .fg-card.mibarai .fg-name{color:#FC8181 !important;}
html[data-theme="dark"] .fg-card.maeuke .fg-name{color:#F7D774 !important;}
html[data-theme="dark"] .fg-card.mishuu .fg-name{color:#B6E27C !important;}
html[data-theme="dark"] .fg-card .fg-type{color:#9BA7BB !important;}
html[data-theme="dark"] .fg-card .fg-body{color:#CCD6E5 !important;}
html[data-theme="dark"] .timeline-box{background:linear-gradient(180deg,#111826,#0E1421) !important;border-color:rgba(140,198,63,.14) !important;}
html[data-theme="dark"] .tl-label{color:#9BA7BB !important;}
html[data-theme="dark"] .tl-bar .tl-next{background:rgba(59,130,246,.14) !important;border-color:rgba(59,130,246,.3) !important;color:#90CDF4 !important;}
html[data-theme="dark"] .tl-legend{color:#9BA7BB !important;}
/* ── ここまで ── */

/* ── ゼロからの簿記シリーズ 共通ダークモード ── */
/* シリーズナビ */
html[data-theme="dark"] .series-nav{background:linear-gradient(180deg,#0E2218,#0B1A14) !important;border-color:rgba(140,198,63,.3) !important;}
html[data-theme="dark"] .series-nav-title{color:#B6E27C !important;}
html[data-theme="dark"] .series-nav li{color:#CCD6E5 !important;}
html[data-theme="dark"] .series-nav li a{color:#90CDF4 !important;}
/* メリットカード（第2回） */
html[data-theme="dark"] .merit-card{background:linear-gradient(180deg,#151A2A,#111728) !important;border-color:rgba(140,198,63,.16) !important;}
html[data-theme="dark"] .merit-card .title{color:#F8FAFC !important;}
html[data-theme="dark"] .merit-card .desc{color:#9BA7BB !important;}
/* ポイントカード（全記事共通） */
html[data-theme="dark"] .point-card{background:linear-gradient(180deg,#151A2A,#111728) !important;border-color:rgba(140,198,63,.3) !important;}
html[data-theme="dark"] .point-card p{color:#F8FAFC !important;}
/* フローステップ（第3回 簿記の流れ） */
html[data-theme="dark"] .flow-step{background:linear-gradient(180deg,#151A2A,#111728) !important;border-color:rgba(140,198,63,.14) !important;}
html[data-theme="dark"] .flow-step-body strong{color:#F8FAFC !important;}
html[data-theme="dark"] .flow-step-body p{color:#9BA7BB !important;}
/* 財務諸表カード（第3・5回） */
html[data-theme="dark"] .fs-card.pl{background:linear-gradient(135deg,#0E2218,#0B1A12) !important;border-color:rgba(140,198,63,.3) !important;}
html[data-theme="dark"] .fs-card.bs{background:linear-gradient(135deg,rgba(59,130,246,.12),rgba(59,130,246,.06)) !important;border-color:rgba(59,130,246,.3) !important;}
html[data-theme="dark"] .fs-card .name{color:#F8FAFC !important;}
html[data-theme="dark"] .fs-card .desc{color:#CCD6E5 !important;}
/* 比較カード（第4回 貸方/借方） */
html[data-theme="dark"] .compare-card.tan{background:rgba(246,224,94,.08) !important;border-color:rgba(246,224,94,.28) !important;}
html[data-theme="dark"] .compare-card.fuku{background:rgba(140,198,63,.10) !important;border-color:rgba(140,198,63,.28) !important;}
html[data-theme="dark"] .compare-card.tan .badge{background:rgba(246,224,94,.2) !important;color:#F7D774 !important;}
html[data-theme="dark"] .compare-card.fuku .badge{background:rgba(140,198,63,.2) !important;color:#B6E27C !important;}
html[data-theme="dark"] .compare-card .eg{background:rgba(255,255,255,.05) !important;color:#9BA7BB !important;}
html[data-theme="dark"] .compare-card p{color:#CCD6E5 !important;}
/* 借方・貸方 記憶カード（第4回） */
html[data-theme="dark"] .memory-card{border-color:rgba(140,198,63,.16) !important;}
html[data-theme="dark"] .memory-half.left{background:rgba(59,130,246,.14) !important;}
html[data-theme="dark"] .memory-half.right{background:rgba(237,137,54,.12) !important;}
html[data-theme="dark"] .memory-half.left .memory-char{color:#90CDF4 !important;}
html[data-theme="dark"] .memory-half.right .memory-char{color:#FBD38D !important;}
html[data-theme="dark"] .memory-title{color:#F8FAFC !important;}
html[data-theme="dark"] .memory-desc{color:#9BA7BB !important;}
/* 仕訳エントリー（第5回 je-kari/je-kashi） */
html[data-theme="dark"] .je-kari{background:rgba(59,130,246,.12) !important;border-color:rgba(59,130,246,.3) !important;color:#CCD6E5 !important;}
html[data-theme="dark"] .je-kashi{background:rgba(237,137,54,.10) !important;border-color:rgba(237,137,54,.25) !important;color:#CCD6E5 !important;}
/* 財務諸表ボックス（第5回） */
html[data-theme="dark"] .fs-row .label{color:#CCD6E5 !important;}
html[data-theme="dark"] .grad-card p{color:#CCD6E5 !important;}
/* ── ここまで ── */

/* ── 新4記事 共通コンポーネント ダークモード ── */
/* shiwake-box（三分法・掛取引・手形・給料で共通使用） */
html[data-theme="dark"] .shiwake-box{background:rgba(255,255,255,.04) !important;}
html[data-theme="dark"] .sw-row .kari{color:#90CDF4 !important;}
html[data-theme="dark"] .sw-row .kashi{color:#FBD38D !important;}
html[data-theme="dark"] .sw-row .sep{color:#4A5568 !important;}
html[data-theme="dark"] .sw-row .amt{color:#9BA7BB !important;}
/* ── 三分法記事 ── */
html[data-theme="dark"] .san-card.s-shii{background:rgba(59,130,246,.12) !important;border-color:rgba(59,130,246,.3) !important;}
html[data-theme="dark"] .san-card.s-uriage{background:rgba(140,198,63,.10) !important;border-color:rgba(140,198,63,.28) !important;}
html[data-theme="dark"] .san-card.s-kuri{background:rgba(251,211,141,.08) !important;border-color:rgba(251,211,141,.3) !important;}
html[data-theme="dark"] .san-card.s-shii .san-badge{background:rgba(59,130,246,.25) !important;color:#90CDF4 !important;}
html[data-theme="dark"] .san-card.s-uriage .san-badge{background:rgba(140,198,63,.22) !important;color:#B6E27C !important;}
html[data-theme="dark"] .san-card.s-kuri .san-badge{background:rgba(251,211,141,.2) !important;color:#F7D774 !important;}
html[data-theme="dark"] .san-card.s-shii .san-name{color:#90CDF4 !important;}
html[data-theme="dark"] .san-card.s-uriage .san-name{color:#B6E27C !important;}
html[data-theme="dark"] .san-card.s-kuri .san-name{color:#F7D774 !important;}
html[data-theme="dark"] .san-desc{color:#CCD6E5 !important;}
html[data-theme="dark"] .c2-card.buy{background:rgba(59,130,246,.12) !important;border-color:rgba(59,130,246,.25) !important;}
html[data-theme="dark"] .c2-card.sell{background:rgba(140,198,63,.10) !important;border-color:rgba(140,198,63,.25) !important;}
html[data-theme="dark"] .c2-card.buy .c2-title{color:#90CDF4 !important;}
html[data-theme="dark"] .c2-card.sell .c2-title{color:#B6E27C !important;}
/* ── 掛取引記事 ── */
html[data-theme="dark"] .kake-card.urikake{background:rgba(59,130,246,.12) !important;border-color:rgba(59,130,246,.3) !important;}
html[data-theme="dark"] .kake-card.kaikake{background:rgba(252,129,129,.10) !important;border-color:rgba(252,129,129,.3) !important;}
html[data-theme="dark"] .kake-card.urikake .kake-badge{background:rgba(59,130,246,.25) !important;color:#90CDF4 !important;}
html[data-theme="dark"] .kake-card.kaikake .kake-badge{background:rgba(252,129,129,.22) !important;color:#FC8181 !important;}
html[data-theme="dark"] .kake-card.urikake .kake-name{color:#90CDF4 !important;}
html[data-theme="dark"] .kake-card.kaikake .kake-name{color:#FC8181 !important;}
html[data-theme="dark"] .kake-type{color:#9BA7BB !important;}
html[data-theme="dark"] .kake-desc{color:#CCD6E5 !important;}
html[data-theme="dark"] .flow-node{background:rgba(255,255,255,.06) !important;border-color:rgba(255,255,255,.1) !important;color:#CCD6E5 !important;}
html[data-theme="dark"] .flow-node.highlight{background:rgba(59,130,246,.15) !important;border-color:rgba(59,130,246,.3) !important;color:#90CDF4 !important;}
/* ── 手形記事 ── */
html[data-theme="dark"] .role-card.meiate{background:rgba(59,130,246,.12) !important;border-color:rgba(59,130,246,.3) !important;}
html[data-theme="dark"] .role-card.furidashi{background:rgba(252,129,129,.10) !important;border-color:rgba(252,129,129,.3) !important;}
html[data-theme="dark"] .role-card.meiate .role-badge{background:rgba(59,130,246,.25) !important;color:#90CDF4 !important;}
html[data-theme="dark"] .role-card.furidashi .role-badge{background:rgba(252,129,129,.22) !important;color:#FC8181 !important;}
html[data-theme="dark"] .role-card.meiate .role-name{color:#90CDF4 !important;}
html[data-theme="dark"] .role-card.furidashi .role-name{color:#FC8181 !important;}
html[data-theme="dark"] .role-desc{color:#CCD6E5 !important;}
html[data-theme="dark"] .denshi-card.urike{background:rgba(59,130,246,.12) !important;border-color:rgba(59,130,246,.4) !important;}
html[data-theme="dark"] .denshi-card.shiike{background:rgba(252,129,129,.10) !important;border-color:rgba(252,129,129,.4) !important;}
html[data-theme="dark"] .denshi-title{color:#F8FAFC !important;}
html[data-theme="dark"] .denshi-sub{color:#9BA7BB !important;}
html[data-theme="dark"] .denshi-card.urike .denshi-kamoku{color:#90CDF4 !important;}
html[data-theme="dark"] .denshi-card.shiike .denshi-kamoku{color:#FC8181 !important;}
/* ── 給料記事 ── */
html[data-theme="dark"] .kyuryo-breakdown{border-color:rgba(255,255,255,.1) !important;}
html[data-theme="dark"] .kb-row{border-bottom-color:rgba(255,255,255,.06) !important;}
html[data-theme="dark"] .kb-row.total{background:rgba(59,130,246,.12) !important;}
html[data-theme="dark"] .kb-row.deduct{background:rgba(252,129,129,.08) !important;}
html[data-theme="dark"] .kb-row.net{background:rgba(140,198,63,.10) !important;}
html[data-theme="dark"] .kb-label{color:#CCD6E5 !important;}
html[data-theme="dark"] .kb-row.deduct .kb-label{color:#FC8181 !important;}
html[data-theme="dark"] .kb-row.net .kb-label{color:#B6E27C !important;}
html[data-theme="dark"] .kb-amt{color:#F8FAFC !important;}
html[data-theme="dark"] .kb-row.deduct .kb-amt{color:#FC8181 !important;}
html[data-theme="dark"] .kb-row.net .kb-amt{color:#B6E27C !important;}
html[data-theme="dark"] .kb-row.total .kb-amt{color:#90CDF4 !important;}
/* ── 固定資産記事 ── */
html[data-theme="dark"] .uriage-calc{border-color:rgba(255,255,255,.12) !important;}
html[data-theme="dark"] .uc-row{border-bottom-color:rgba(255,255,255,.08) !important;background:#1A2232 !important;color:#CCD6E5 !important;}
html[data-theme="dark"] .uc-row.uc-total{background:rgba(59,130,246,.14) !important;}
html[data-theme="dark"] .uc-row.uc-total .uc-label{color:#90CDF4 !important;}
html[data-theme="dark"] .uc-row.uc-total .uc-amt{color:#90CDF4 !important;}
html[data-theme="dark"] .uc-row.uc-sub{background:rgba(255,255,255,.04) !important;}
html[data-theme="dark"] .uc-row.uc-result-loss{background:rgba(252,129,129,.10) !important;}
html[data-theme="dark"] .uc-row.uc-result-loss .uc-label{color:#FC8181 !important;}
html[data-theme="dark"] .uc-row.uc-result-loss .uc-amt{color:#FC8181 !important;}
html[data-theme="dark"] .uc-row.uc-result-gain{background:rgba(140,198,63,.10) !important;}
html[data-theme="dark"] .uc-row.uc-result-gain .uc-label{color:#B6E27C !important;}
html[data-theme="dark"] .uc-row.uc-result-gain .uc-amt{color:#B6E27C !important;}
html[data-theme="dark"] .lg-card.loss{background:rgba(252,129,129,.10) !important;border-color:rgba(252,129,129,.35) !important;}
html[data-theme="dark"] .lg-card.gain{background:rgba(140,198,63,.10) !important;border-color:rgba(140,198,63,.35) !important;}
html[data-theme="dark"] .lg-card.loss .lg-badge{background:rgba(252,129,129,.18) !important;color:#FC8181 !important;}
html[data-theme="dark"] .lg-card.gain .lg-badge{background:rgba(140,198,63,.18) !important;color:#B6E27C !important;}
html[data-theme="dark"] .lg-card.loss .lg-name{color:#FC8181 !important;}
html[data-theme="dark"] .lg-card.gain .lg-name{color:#B6E27C !important;}
html[data-theme="dark"] .lg-desc{color:#9BA7BB !important;}
/* ── その他の債権債務記事 ── */
html[data-theme="dark"] .st-card.saiken{background:rgba(59,130,246,.10) !important;border-color:rgba(59,130,246,.35) !important;}
html[data-theme="dark"] .st-card.saimu{background:rgba(252,129,129,.08) !important;border-color:rgba(252,129,129,.35) !important;}
html[data-theme="dark"] .st-badge{background:transparent !important;}
html[data-theme="dark"] .st-card.saiken .st-badge{background:rgba(59,130,246,.18) !important;color:#90CDF4 !important;}
html[data-theme="dark"] .st-card.saimu .st-badge{background:rgba(252,129,129,.18) !important;color:#FC8181 !important;}
html[data-theme="dark"] .st-card.saiken .st-name{color:#90CDF4 !important;}
html[data-theme="dark"] .st-card.saimu .st-name{color:#FC8181 !important;}
html[data-theme="dark"] .st-desc{color:#9BA7BB !important;}
html[data-theme="dark"] .pair-table th{background:#1A2232 !important;border-color:rgba(255,255,255,.08) !important;color:#CCD6E5 !important;}
html[data-theme="dark"] .pair-table td{border-color:rgba(255,255,255,.08) !important;color:#9BA7BB !important;}
html[data-theme="dark"] .pair-table .col-saiken{color:#90CDF4 !important;}
html[data-theme="dark"] .pair-table .col-saimu{color:#FC8181 !important;}
/* ── 株式会社記事 ── */
html[data-theme="dark"] .equity-diagram{border-color:rgba(255,255,255,.12) !important;}
html[data-theme="dark"] .eq-header{background:rgba(139,92,246,.15) !important;color:#C4B5FD !important;}
html[data-theme="dark"] .eq-row{border-top-color:rgba(255,255,255,.08) !important;}
html[data-theme="dark"] .eq-row.cap .eq-label{color:#C4B5FD !important;}
html[data-theme="dark"] .eq-row.rep .eq-label{color:#90CDF4 !important;}
html[data-theme="dark"] .eq-row.prep .eq-label{color:#B6E27C !important;}
html[data-theme="dark"] .eq-note{color:#9BA7BB !important;}
html[data-theme="dark"] .haito-calc{border-color:rgba(255,255,255,.12) !important;}
html[data-theme="dark"] .hc-row{border-bottom-color:rgba(255,255,255,.08) !important;background:#1A2232 !important;color:#CCD6E5 !important;}
html[data-theme="dark"] .hc-row.hc-total{background:rgba(139,92,246,.12) !important;}
html[data-theme="dark"] .hc-row.hc-total .hc-label,.hc-row.hc-total .hc-amt{color:#C4B5FD !important;}
html[data-theme="dark"] .hc-row.hc-haito{background:rgba(59,130,246,.10) !important;}
html[data-theme="dark"] .hc-row.hc-haito .hc-label,.hc-row.hc-haito .hc-amt{color:#90CDF4 !important;}
html[data-theme="dark"] .hc-row.hc-junbi{background:rgba(140,198,63,.10) !important;}
html[data-theme="dark"] .hc-row.hc-junbi .hc-label,.hc-row.hc-junbi .hc-amt{color:#B6E27C !important;}
/* ── 消費税記事 ── */
html[data-theme="dark"] .tf-card.kari-tax{background:rgba(59,130,246,.10) !important;border-color:rgba(59,130,246,.35) !important;}
html[data-theme="dark"] .tf-card.kashi-tax{background:rgba(252,129,129,.08) !important;border-color:rgba(252,129,129,.35) !important;}
html[data-theme="dark"] .tf-card.kari-tax .tf-title{color:#90CDF4 !important;}
html[data-theme="dark"] .tf-card.kashi-tax .tf-title{color:#FC8181 !important;}
html[data-theme="dark"] .tf-body{color:#9BA7BB !important;}
html[data-theme="dark"] .zei-calc{border-color:rgba(255,255,255,.12) !important;}
html[data-theme="dark"] .zc-row{border-bottom-color:rgba(255,255,255,.08) !important;background:#1A2232 !important;color:#CCD6E5 !important;}
html[data-theme="dark"] .zc-row.zc-uriage{background:rgba(252,129,129,.08) !important;}
html[data-theme="dark"] .zc-row.zc-uriage .zc-label,.zc-row.zc-uriage .zc-amt{color:#FC8181 !important;}
html[data-theme="dark"] .zc-row.zc-shii{background:rgba(59,130,246,.10) !important;}
html[data-theme="dark"] .zc-row.zc-shii .zc-label,.zc-row.zc-shii .zc-amt{color:#90CDF4 !important;}
html[data-theme="dark"] .zc-row.zc-nofu{background:rgba(140,198,63,.10) !important;}
html[data-theme="dark"] .zc-row.zc-nofu .zc-label,.zc-row.zc-nofu .zc-amt{color:#B6E27C !important;}
/* ── 精算表記事 ── */
html[data-theme="dark"] .seisan-table th{background:#1A2232 !important;border-color:rgba(255,255,255,.08) !important;color:#CCD6E5 !important;}
html[data-theme="dark"] .seisan-table th.h-shisan{background:rgba(59,130,246,.12) !important;color:#90CDF4 !important;}
html[data-theme="dark"] .seisan-table th.h-keika{background:rgba(252,129,129,.10) !important;color:#FC8181 !important;}
html[data-theme="dark"] .seisan-table th.h-pl{background:rgba(140,198,63,.10) !important;color:#B6E27C !important;}
html[data-theme="dark"] .seisan-table th.h-bs{background:rgba(139,92,246,.10) !important;color:#C4B5FD !important;}
html[data-theme="dark"] .seisan-table td{border-color:rgba(255,255,255,.06) !important;background:#111827 !important;color:#9BA7BB !important;}
html[data-theme="dark"] .seisan-table td.col-name{color:#CCD6E5 !important;}
html[data-theme="dark"] .seisan-table .row-total td{background:#1A2232 !important;}
html[data-theme="dark"] .seisan-table .row-rieki td{background:rgba(255,248,220,.04) !important;}
html[data-theme="dark"] .seisan-table .val-blue{color:#90CDF4 !important;}
html[data-theme="dark"] .seisan-table .val-red{color:#FC8181 !important;}
html[data-theme="dark"] .seisan-table .val-green{color:#B6E27C !important;}
html[data-theme="dark"] .seisan-table .val-purple{color:#C4B5FD !important;}
html[data-theme="dark"] .step-item{border-color:rgba(255,255,255,.10) !important;background:#111827 !important;}
html[data-theme="dark"] .step-text{color:#9BA7BB !important;}
html[data-theme="dark"] .step-text strong{color:#CCD6E5 !important;}
/* ── ここまで ── */

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
/* TOC（モバイル：アコーディオン） */
@media(max-width:959px){
  .sq-toc-inline{background:radial-gradient(circle at top right, rgba(140,198,63,.12), transparent 30%),linear-gradient(180deg,var(--sq-surface-soft),var(--sq-surface-strong));border:1px solid var(--sq-border-strong);border-left:3px solid #8CC63F;border-radius:0 12px 12px 0;margin:20px 0 28px;overflow:hidden;}
  .sq-toc-inline details{padding:0;}
  .sq-toc-inline summary{list-style:none;padding:14px 18px;cursor:pointer;font-size:13px;font-weight:700;color:var(--sq-text);display:flex;align-items:center;justify-content:space-between;gap:8px;user-select:none;}
  .sq-toc-inline summary::-webkit-details-marker{display:none;}
  .sq-toc-inline summary::after{content:'▼';font-size:10px;color:var(--sq-muted);transition:transform .2s;flex-shrink:0;}
  .sq-toc-inline details[open] summary::after{transform:rotate(-180deg);}
  .sq-toc-inline ol{margin:0;padding:0 18px 14px 32px;}
  .sq-toc-inline li{margin-bottom:7px;line-height:1.6;}
  .sq-toc-inline a{color:var(--sq-accent-bright);text-decoration:none;font-size:13px;}
  /* コンテナのモバイル余白 */
  body .container{padding-left:16px !important;padding-right:16px !important;}
  /* シェアボタンモバイル */
  .sq-share-btns{flex-direction:column;gap:10px;}
  .sq-share-btn{justify-content:center;}
  /* リアクションモバイル */
  .sq-reaction{padding:24px 16px;}
  .sq-reaction-btn{padding:14px 16px;flex:1;min-width:90px;}
  .sq-reaction-emoji{font-size:22px;}
  .sq-reaction-btns{gap:8px;}
  /* 関連記事グリッドモバイル */
  .sq-card-grid{grid-template-columns:1fr !important;}
  /* 途中CTAモバイル */
  .sq-mid-cta{flex-direction:column;gap:12px;text-align:center;}
  .sq-mid-cta a{width:100%;text-align:center;padding:12px 20px;font-size:14px;}
  /* 著者モバイル */
  .sq-author{flex-direction:column;text-align:center;gap:10px;}
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
/* 会話UI */
.sq-chat{margin:28px 0;display:flex;flex-direction:column;gap:16px;}
.sq-chat-row{display:flex;align-items:flex-start;gap:12px;}
.sq-chat-avatar{width:44px;height:44px;border-radius:50%;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:22px;box-shadow:0 2px 8px rgba(0,0,0,.10);}
.sq-chat-avatar.student{background:linear-gradient(135deg,#E0F0FF,#BAD9F5);}
.sq-chat-avatar.teacher{background:linear-gradient(135deg,#E8F7B8,#8CC63F);}
.sq-chat-name{font-size:10px;font-weight:700;color:var(--sq-muted);margin-bottom:4px;letter-spacing:.05em;}
.sq-chat-bubble{position:relative;background:var(--sq-surface-soft);border:1px solid var(--sq-border);border-radius:0 12px 12px 12px;padding:12px 16px;font-size:13px;color:var(--sq-text);line-height:1.8;max-width:calc(100% - 60px);}
.sq-chat-row.teacher .sq-chat-bubble{background:linear-gradient(135deg,rgba(140,198,63,.08),rgba(140,198,63,.03));border-color:rgba(140,198,63,.3);border-radius:0 12px 12px 12px;}
html[data-theme="dark"] .sq-chat-bubble{background:rgba(255,255,255,.04);}
html[data-theme="dark"] .sq-chat-row.teacher .sq-chat-bubble{background:rgba(140,198,63,.06);}
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
/* リアクション */
.sq-reaction{padding:32px 24px;background:var(--sq-surface-soft);border-top:1px solid var(--sq-border);border-bottom:1px solid var(--sq-border);}
.sq-reaction-inner{max-width:800px;margin:0 auto;text-align:center;}
.sq-reaction-title{font-size:14px;font-weight:700;color:var(--sq-muted);letter-spacing:.06em;margin-bottom:16px;}
.sq-reaction-btns{display:flex;gap:10px;justify-content:center;flex-wrap:wrap;}
.sq-reaction-btn{display:flex;flex-direction:column;align-items:center;gap:4px;padding:12px 22px;background:var(--sq-surface);border:1.5px solid var(--sq-border);border-radius:14px;cursor:pointer;transition:border-color .2s,background .2s,transform .2s,box-shadow .2s;font-family:inherit;color:var(--sq-muted);}
.sq-reaction-btn:hover{border-color:#8CC63F;transform:translateY(-2px);box-shadow:0 6px 18px rgba(140,198,63,.15);}
.sq-reaction-btn.sq-reacted{border-color:#8CC63F;background:rgba(140,198,63,.12);color:var(--sq-accent-bright);box-shadow:0 4px 14px rgba(140,198,63,.18);}
.sq-reaction-emoji{font-size:26px;line-height:1;}
.sq-reaction-label{font-size:11px;font-weight:700;letter-spacing:.04em;}
.sq-reaction-count{font-size:14px;font-weight:700;color:#8CC63F;font-family:'Share Tech Mono',monospace;}
.sq-reaction-note{font-size:12px;color:#8CC63F;margin-top:12px;min-height:18px;font-weight:700;}
.sq-reaction-login-hint{font-size:12px;color:var(--sq-muted);font-weight:400;}
/* Auth bar */
.sq-art-auth-bar{display:flex;align-items:center;justify-content:flex-end;gap:10px;max-width:800px;margin:0 auto 12px;}
.sq-google-login-btn{display:inline-flex;align-items:center;gap:8px;padding:8px 18px;border-radius:100px;border:1px solid var(--sq-border-strong);background:var(--sq-surface);color:var(--sq-text);font-size:13px;font-weight:700;cursor:pointer;transition:transform .2s,box-shadow .2s;font-family:inherit;}
.sq-google-login-btn:hover{transform:translateY(-1px);box-shadow:0 6px 18px rgba(0,0,0,.14);}
.sq-art-user-info{display:flex;align-items:center;gap:8px;}
.sq-art-avatar{width:28px;height:28px;border-radius:50%;object-fit:cover;}
.sq-art-avatar-ph{width:28px;height:28px;border-radius:50%;background:#8CC63F;color:#0A0A0F;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;}
.sq-art-user-name{font-size:13px;font-weight:700;color:var(--sq-text);}
.sq-art-logout-btn{font-size:11px;color:var(--sq-muted);background:none;border:1px solid var(--sq-border);border-radius:100px;padding:4px 10px;cursor:pointer;font-family:inherit;transition:color .2s;}
.sq-art-logout-btn:hover{color:var(--sq-text);}
/* Comments */
.sq-comment-section{padding:32px 24px;background:var(--sq-surface-soft);border-top:1px solid var(--sq-border);}
.sq-comment-inner{max-width:800px;margin:0 auto;}
.sq-comment-heading{font-size:15px;font-weight:700;color:var(--sq-text);margin-bottom:20px;padding-left:12px;border-left:3px solid #8CC63F;letter-spacing:.04em;}
.sq-comment-form-wrap{background:var(--sq-surface);border:1px solid var(--sq-border-strong);border-radius:12px;padding:16px;margin-bottom:24px;}
.sq-comment-form-title{font-size:13px;font-weight:700;color:var(--sq-text);margin-bottom:10px;}
.sq-comment-textarea{width:100%;min-height:90px;background:var(--sq-surface-soft);border:1px solid var(--sq-border);border-radius:8px;padding:10px 12px;font-size:14px;color:var(--sq-text);font-family:inherit;resize:vertical;box-sizing:border-box;transition:border-color .2s;}
.sq-comment-textarea:focus{outline:none;border-color:#8CC63F;}
.sq-comment-textarea::placeholder{color:var(--sq-muted);}
.sq-comment-form-footer{display:flex;align-items:center;justify-content:space-between;margin-top:8px;}
.sq-comment-char{font-size:11px;color:var(--sq-muted);}
.sq-comment-submit{background:#8CC63F;color:#0A0A0F;border:none;border-radius:100px;padding:9px 20px;font-size:13px;font-weight:700;cursor:pointer;transition:opacity .2s,transform .2s;font-family:inherit;}
.sq-comment-submit:hover{opacity:.88;transform:translateY(-1px);}
.sq-comment-submit:disabled{opacity:.45;cursor:default;transform:none;}
.sq-comment-login-prompt{text-align:center;padding:20px;color:var(--sq-muted);font-size:13px;background:var(--sq-surface);border:1px solid var(--sq-border);border-radius:12px;margin-bottom:24px;line-height:1.8;}
.sq-comment-list{display:flex;flex-direction:column;gap:12px;}
.sq-comment-card{background:var(--sq-surface);border:1px solid var(--sq-border);border-radius:12px;padding:14px 16px;}
.sq-comment-card-header{display:flex;align-items:center;gap:10px;margin-bottom:8px;}
.sq-comment-c-avatar{width:32px;height:32px;border-radius:50%;object-fit:cover;flex-shrink:0;}
.sq-comment-c-avatar-ph{width:32px;height:32px;border-radius:50%;background:var(--sq-accent);color:#0A0A0F;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:700;flex-shrink:0;}
.sq-comment-c-name{font-size:13px;font-weight:700;color:var(--sq-text);}
.sq-comment-c-time{font-size:11px;color:var(--sq-muted);margin-left:auto;}
.sq-comment-c-body{font-size:14px;color:var(--sq-text);line-height:1.75;margin-bottom:10px;white-space:pre-wrap;word-break:break-word;}
.sq-comment-c-actions{display:flex;gap:8px;align-items:center;}
.sq-comment-like-btn,.sq-comment-report-btn,.sq-comment-del-btn{display:inline-flex;align-items:center;gap:4px;padding:4px 10px;border-radius:100px;border:1px solid var(--sq-border);background:transparent;color:var(--sq-muted);font-size:12px;cursor:pointer;transition:border-color .2s,color .2s,background .2s;font-family:inherit;}
.sq-comment-like-btn:hover{border-color:#8CC63F;color:#8CC63F;}
.sq-comment-like-btn.sq-liked{border-color:#8CC63F;color:#8CC63F;background:rgba(140,198,63,.1);}
.sq-comment-like-btn:disabled{opacity:.5;cursor:default;}
.sq-comment-report-btn{margin-left:auto;}
.sq-comment-report-btn:hover{border-color:#EF4444;color:#EF4444;}
.sq-comment-report-btn.sq-reported{border-color:#EF4444;color:#EF4444;opacity:.6;cursor:default;}
.sq-comment-del-btn:hover{border-color:#EF4444;color:#EF4444;}
.sq-comment-empty{text-align:center;color:var(--sq-muted);font-size:13px;padding:24px 0;}
@media(max-width:959px){
  .sq-art-auth-bar{justify-content:flex-start;}
  .sq-comment-section{padding:24px 16px;}
}
/* ── 読了プログレスバー ── */
.sq-read-progress{position:fixed;top:0;left:0;height:3px;background:linear-gradient(90deg,#8CC63F,#A3E635);z-index:10001;width:0%;transition:width .08s linear;pointer-events:none;}
/* ── 前後記事ナビ ── */
.sq-prevnext{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:36px 0 8px;max-width:800px;margin-left:auto;margin-right:auto;padding:0 24px;}
.sq-pn-btn{display:flex;align-items:center;gap:12px;padding:14px 18px;border:1px solid var(--sq-border);border-radius:12px;text-decoration:none;color:var(--sq-text);transition:border-color .2s,background .2s;}
.sq-pn-btn:hover{border-color:#8CC63F;background:var(--sq-surface-soft);text-decoration:none;}
.sq-pn-next{justify-content:flex-end;}
.sq-pn-arrow{font-size:18px;color:#8CC63F;flex-shrink:0;font-weight:700;line-height:1;}
.sq-pn-info{display:flex;flex-direction:column;gap:3px;min-width:0;}
.sq-pn-next .sq-pn-info{text-align:right;}
.sq-pn-label{font-size:10px;color:var(--sq-muted);font-weight:700;letter-spacing:.07em;}
.sq-pn-title{font-size:12px;font-weight:700;line-height:1.5;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;}
@media(max-width:540px){
  .sq-prevnext{grid-template-columns:1fr;padding:0 16px;}
  .sq-pn-next{justify-content:flex-start;}
  .sq-pn-next .sq-pn-info{text-align:left;}
}
/* ── 読んだ！ボタン ── */
.sq-read-btn-wrap{max-width:800px;margin:0 auto 8px;padding:0 24px;text-align:center;}
.sq-read-btn{display:inline-flex;align-items:center;gap:8px;padding:12px 28px;border:2px solid var(--sq-border);border-radius:100px;background:transparent;color:var(--sq-muted);font-size:14px;font-weight:700;cursor:pointer;font-family:inherit;transition:all .2s;}
.sq-read-btn:hover{border-color:#8CC63F;color:#8CC63F;}
.sq-read-btn.sq-read-btn--done{border-color:#8CC63F;background:rgba(140,198,63,.12);color:#276749;}
.sq-read-btn .sq-rb-icon{font-size:16px;}
/* ── 検索モーダル ── */
.sq-search-btn{background:none;border:none;cursor:pointer;padding:6px 10px;color:var(--sq-muted);border-radius:8px;transition:color .15s,background .15s;display:flex;align-items:center;gap:5px;font-size:14px;font-family:inherit;line-height:1;}
.sq-search-btn:hover{color:var(--sq-text);background:var(--sq-surface-soft);}
.sq-search-btn svg{flex-shrink:0;}
.sq-search-modal{display:none;position:fixed;inset:0;z-index:9999;}
.sq-search-modal.open{display:block;}
.sq-search-overlay{position:absolute;inset:0;background:rgba(0,0,0,.55);backdrop-filter:blur(3px);}
.sq-search-box{position:absolute;top:72px;left:50%;transform:translateX(-50%);width:min(560px,90vw);background:var(--sq-surface);border-radius:14px;box-shadow:0 24px 64px rgba(0,0,0,.3);overflow:hidden;border:1px solid var(--sq-border-strong);}
.sq-search-input{width:100%;padding:16px 20px;font-size:15px;border:none;outline:none;border-bottom:1px solid var(--sq-border);background:transparent;color:var(--sq-text);font-family:inherit;}
.sq-search-input::placeholder{color:var(--sq-muted);}
.sq-search-results{max-height:360px;overflow-y:auto;}
.sq-search-item{display:flex;align-items:center;gap:10px;padding:12px 20px;border-bottom:1px solid var(--sq-border);text-decoration:none;color:var(--sq-text);transition:background .12s;}
.sq-search-item:hover{background:var(--sq-surface-soft);text-decoration:none;}
.sq-search-item:last-child{border-bottom:none;}
.sq-search-item--current{border-left:3px solid #8CC63F;background:rgba(140,198,63,.06);}
.sq-search-label{font-size:10px;font-weight:700;background:rgba(140,198,63,.18);color:#276749;padding:2px 8px;border-radius:100px;flex-shrink:0;white-space:nowrap;}
.sq-search-title{font-size:13px;font-weight:500;line-height:1.5;}
.sq-search-empty{padding:24px;text-align:center;color:var(--sq-muted);font-size:13px;}
.sq-search-hint{padding:8px 20px 12px;font-size:11px;color:var(--sq-muted);text-align:right;border-top:1px solid var(--sq-border);}
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

/* ── 読了プログレスバー ── */
function buildReadProgress(){
  const bar = document.createElement('div');
  bar.className = 'sq-read-progress';
  document.body.appendChild(bar);
  function update(){
    const st = window.scrollY;
    const dh = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (dh > 0 ? Math.min(100, st / dh * 100) : 0) + '%';
  }
  window.addEventListener('scroll', update, {passive: true});
}

/* ── 前後記事ナビ（簿記3級シリーズ） ── */
function buildPrevNextNav(){
  if(!BOKI3_FILES.includes(PAGE)) return;
  const idx = BOKI3_FILES.indexOf(PAGE);
  const prev = idx > 0 ? BOKI3_FILES[idx - 1] : null;
  const next = idx < BOKI3_FILES.length - 1 ? BOKI3_FILES[idx + 1] : null;
  if(!prev && !next) return;

  const nav = document.createElement('div');
  nav.className = 'sq-prevnext';
  nav.innerHTML =
    (prev && ARTICLES[prev]
      ? `<a href="${prev}" class="sq-pn-btn sq-pn-prev"><span class="sq-pn-arrow">←</span><span class="sq-pn-info"><span class="sq-pn-label">前の記事</span><span class="sq-pn-title">${ARTICLES[prev].title}</span></span></a>`
      : '<div></div>') +
    (next && ARTICLES[next]
      ? `<a href="${next}" class="sq-pn-btn sq-pn-next"><span class="sq-pn-info"><span class="sq-pn-label">次の記事</span><span class="sq-pn-title">${ARTICLES[next].title}</span></span><span class="sq-pn-arrow">→</span></a>`
      : '<div></div>');

  const footer = document.querySelector('footer');
  if(footer) footer.insertAdjacentElement('beforebegin', nav);
}

/* ── 「読んだ！」ボタン（簿記3級シリーズ） ── */
const _READ_KEY = f => `sq_read_${f}`;
function buildReadButton(){
  if(!BOKI3_FILES.includes(PAGE)) return;
  const done = !!localStorage.getItem(_READ_KEY(PAGE));

  const wrap = document.createElement('div');
  wrap.className = 'sq-read-btn-wrap';
  const btn = document.createElement('button');
  btn.className = 'sq-read-btn' + (done ? ' sq-read-btn--done' : '');
  btn.innerHTML = done
    ? '<span class="sq-rb-icon">✓</span> 読了済み'
    : '<span class="sq-rb-icon">📖</span> 読んだ！';
  btn.addEventListener('click', () => {
    localStorage.setItem(_READ_KEY(PAGE), '1');
    btn.className = 'sq-read-btn sq-read-btn--done';
    btn.innerHTML = '<span class="sq-rb-icon">✓</span> 読了済み！';
  });
  wrap.appendChild(btn);

  const footer = document.querySelector('footer');
  if(footer) footer.insertAdjacentElement('beforebegin', wrap);
}

/* ── 検索モーダル ── */
function buildSearchModal(){
  const navInner = document.querySelector('.nav-inner');
  if(!navInner) return;

  const btn = document.createElement('button');
  btn.className = 'sq-search-btn';
  btn.title = '記事を検索（/ キー）';
  btn.innerHTML = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg><span style="font-size:12px">検索</span>';
  const cta = navInner.querySelector('.nav-cta');
  if(cta) navInner.insertBefore(btn, cta);
  else navInner.appendChild(btn);

  const modal = document.createElement('div');
  modal.id = 'sq-search-modal';
  modal.className = 'sq-search-modal';
  modal.innerHTML = '<div class="sq-search-overlay"></div><div class="sq-search-box"><input class="sq-search-input" type="text" placeholder="記事タイトルで検索... 例：試算表、経過勘定"><div class="sq-search-results"></div><div class="sq-search-hint">Esc で閉じる　　/ キーで開く</div></div>';
  document.body.appendChild(modal);

  const input  = modal.querySelector('.sq-search-input');
  const results= modal.querySelector('.sq-search-results');

  function openModal(){
    modal.classList.add('open');
    setTimeout(()=>input.focus(),40);
    input.value='';
    render('');
  }
  function closeModal(){ modal.classList.remove('open'); }

  function render(q){
    const entries = Object.entries(ARTICLES);
    const filtered = q.trim()===''
      ? entries
      : entries.filter(([,a])=>a.title.includes(q)||a.label.includes(q));
    if(!filtered.length){
      results.innerHTML=`<div class="sq-search-empty">「${q}」に一致する記事はありませんでした</div>`;
      return;
    }
    results.innerHTML = filtered.slice(0,10).map(([f,a])=>
      `<a href="${f}" class="sq-search-item${f===PAGE?' sq-search-item--current':''}">
        <span class="sq-search-label">${a.label}</span>
        <span class="sq-search-title">${a.title}</span>
      </a>`
    ).join('');
  }

  btn.addEventListener('click', openModal);
  modal.querySelector('.sq-search-overlay').addEventListener('click', closeModal);
  input.addEventListener('input', ()=>render(input.value));
  document.addEventListener('keydown', e=>{
    if(e.key==='Escape'){ closeModal(); return; }
    if(e.key==='/' && !modal.classList.contains('open') && e.target.tagName!=='INPUT' && e.target.tagName!=='TEXTAREA'){
      e.preventDefault(); openModal();
    }
  });
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
    box.querySelectorAll('a').forEach(a=> a.addEventListener('click', ()=> _gaEvent('toc_click', {article_id: PAGE, heading: a.textContent.trim()})));
    sidebar.appendChild(box);
  } else {
    // モバイル：lead直後にアコーディオン配置
    const toc = document.createElement('div');
    toc.className = 'sq-toc-inline';
    toc.innerHTML = `<details><summary>📋 この記事の目次</summary>${ol}</details>`;
    toc.querySelectorAll('a').forEach(a=> a.addEventListener('click', ()=>{
      _gaEvent('toc_click', {article_id: PAGE, heading: a.textContent.trim()});
      // タップ後に閉じる（モバイルUX）
      const det = toc.querySelector('details');
      if(det && window.innerWidth < 960) setTimeout(()=>{ det.open=false; }, 300);
    }));
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
  box.querySelector('a').addEventListener('click', ()=> _gaEvent('cta_click', {article_id: PAGE, cta_position: 'sidebar'}));
  sidebar.appendChild(box);
}

/* ── 簿記3級 記事一覧サイドバー ── */
const BOKI3_FILES = [
  'boki-zero-01.html','boki-zero-02.html','boki-zero-03.html',
  'boki-zero-04.html','boki-zero-05.html',
  'boki3-genkin.html','boki3-kafusoku.html','boki3-kashidaore.html',
  'boki3-genka.html','boki3-keika.html','boki3-keika2.html',
  'boki3-shisanhyo.html','boki3-denpyo.html','boki3-nikkei.html',
  'boki3-sanpou.html','boki3-kake.html','boki3-tegata.html','boki3-kyuryo.html',
  'boki3-kotei.html','boki3-sonota.html','boki3-kabushiki.html','boki3-shohi.html',
  'boki3-seisanhyo.html',
];

function buildBoki3Sidebar(sidebar){
  if(!sidebar) return;
  if(!BOKI3_FILES.includes(PAGE)) return;

  const readCount = BOKI3_FILES.filter(f => localStorage.getItem(_READ_KEY(f))).length;
  const total = BOKI3_FILES.length;
  const pct = Math.round(readCount / total * 100);

  const box = document.createElement('div');
  box.className = 'sq-sidebar-box';
  box.innerHTML =
    `<div class="sq-sidebar-box-title" style="color:#3B82F6">📘 日商簿記3級 記事一覧</div>` +
    `<a href="boki3-progress.html" style="display:block;margin-bottom:8px;font-size:11px;color:#3B82F6;text-decoration:none;">` +
    `<div style="background:rgba(59,130,246,.08);border-radius:6px;padding:6px 10px;">` +
    `<div style="display:flex;justify-content:space-between;margin-bottom:4px;"><span>学習進捗</span><span style="font-weight:700;">${readCount}/${total}</span></div>` +
    `<div style="height:4px;background:rgba(59,130,246,.15);border-radius:2px;"><div style="height:4px;background:#3B82F6;border-radius:2px;width:${pct}%;transition:width .4s;"></div></div>` +
    `</div></a>` +
    `<div class="sq-side-links"></div>`;

  const list = box.querySelector('.sq-side-links');
  BOKI3_FILES.forEach(f => {
    const a = ARTICLES[f]; if(!a) return;
    const isCurrent = f === PAGE;
    const isRead = !!localStorage.getItem(_READ_KEY(f));
    list.innerHTML += `<a href="${f}" class="sq-side-link${isCurrent ? ' sq-side-link--active' : ''}" style="${isCurrent ? 'border-left:3px solid #3B82F6;font-weight:700;' : ''}"><div class="sq-side-link-title" style="font-size:0.82rem">${isRead ? '✓ ' : ''}${a.title}</div></a>`;
  });
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
  cta.querySelector('a').addEventListener('click', ()=> _gaEvent('cta_click', {article_id: PAGE, cta_position: 'mid'}));
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
      <div class="sq-author-name">大谷 一輝（おおたに かずき）</div>
      <div class="sq-author-title">大阪経済大学3回生 ／ 日商簿記1級勉強中 ／ Study Quest 開発者</div>
      <div class="sq-author-bio">公認会計士試験を約1年間勉強し、現在は日商簿記1級を目標に学習中。「勉強が続かない」課題を解決するため、資格学習RPGアプリ Study Quest を個人開発。実際の受験経験をもとに、各資格の勉強法・スケジュールを発信中。X: @wakaba_sq</div>
    </div>`;
  meta.insertAdjacentElement('afterend', box);
}

/* ── SNSシェアボタン ── */
function buildShareButtons(){
  const artTitle = ARTICLES[PAGE]?.title || document.title;
  const tweetText = encodeURIComponent(`「${artTitle}」を読んだ！ #簿記3級 #スタディクエスト\n`);
  const url   = encodeURIComponent(location.href);
  const xUrl    = `https://twitter.com/intent/tweet?text=${tweetText}&url=${url}&via=wakaba_sq`;
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

  wrap.querySelector('.sq-share-btn-x').addEventListener('click', ()=> _gaEvent('share', {article_id: PAGE, method: 'x'}));
  wrap.querySelector('.sq-share-btn-line').addEventListener('click', ()=> _gaEvent('share', {article_id: PAGE, method: 'line'}));

  const related = document.querySelector('section[style*="F7FAFC"]');
  if(related) related.insertAdjacentElement('beforebegin', wrap);
  else {
    const footer = document.querySelector('footer');
    if(footer) footer.insertAdjacentElement('beforebegin', wrap);
  }
}

/* ── Auth bar ── */
const _GOOGLE_ICON = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" style="flex-shrink:0"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>`;

function buildAuthBar(container) {
  const bar = document.createElement('div');
  bar.className = 'sq-art-auth-bar';
  if (!_artUser) {
    bar.innerHTML = `<button class="sq-google-login-btn">${_GOOGLE_ICON}Googleでログイン</button>`;
    bar.querySelector('button').addEventListener('click', _loginGoogle);
  } else {
    const name = _artUser.user_metadata?.full_name || _artUser.email || 'ユーザー';
    const avatarUrl = _artUser.user_metadata?.avatar_url;
    const avatarHtml = avatarUrl
      ? `<img src="${avatarUrl}" class="sq-art-avatar" alt="">`
      : `<div class="sq-art-avatar-ph">${_escHtml(name[0] || '?')}</div>`;
    bar.innerHTML = `<div class="sq-art-user-info">${avatarHtml}<span class="sq-art-user-name">${_escHtml(name)}</span></div><button class="sq-art-logout-btn">ログアウト</button>`;
    bar.querySelector('.sq-art-logout-btn').addEventListener('click', _logoutArt);
  }
  container.appendChild(bar);
}

/* ── リアクションウィジェット（要ログイン） ── */
async function buildReactionWidget() {
  if (!PAGE) return;
  const articleId = PAGE;
  const REACTIONS = [
    { type: 'helpful',   emoji: '👍', label: '参考になった' },
    { type: 'learned',   emoji: '💡', label: '勉強になった' },
    { type: 'motivated', emoji: '🔥', label: 'モチベ上がった' },
  ];

  const wrap = document.createElement('div');
  wrap.className = 'sq-reaction';
  const footer = document.querySelector('footer');
  if (footer) footer.insertAdjacentElement('beforebegin', wrap);

  const inner = document.createElement('div');
  inner.className = 'sq-reaction-inner';
  wrap.appendChild(inner);

  buildAuthBar(inner);

  inner.insertAdjacentHTML('beforeend', `
    <div class="sq-reaction-title">この記事はどうでしたか？</div>
    <div class="sq-reaction-btns">
      ${REACTIONS.map(r => `<button class="sq-reaction-btn" data-type="${r.type}">
        <span class="sq-reaction-emoji">${r.emoji}</span>
        <span class="sq-reaction-label">${r.label}</span>
        <span class="sq-reaction-count" id="sqRc-${r.type}">—</span>
      </button>`).join('')}
    </div>
    <div class="sq-reaction-note" id="sqRNote">${!_artUser ? '<span class="sq-reaction-login-hint">↑ Googleログインでリアクションできます</span>' : ''}</div>
  `);

  // カウント表示（認証不要）
  _fetchCounts(articleId).then(c => {
    REACTIONS.forEach(r => {
      const el = document.getElementById('sqRc-' + r.type);
      if (el) el.textContent = c[r.type] || 0;
    });
  });

  if (!_artUser) {
    wrap.querySelectorAll('.sq-reaction-btn').forEach(btn => {
      btn.addEventListener('click', _loginGoogle);
      btn.style.opacity = '.65';
      btn.title = 'Googleでログインしてリアクション';
    });
    return;
  }

  // ログイン済み：DB から既存リアクション確認
  let myReaction = null;
  try {
    const token = await _getToken();
    const r = await fetch(
      `${_SB_URL}/rest/v1/article_reactions?article_id=eq.${encodeURIComponent(articleId)}&user_id=eq.${_artUser.id}&select=reaction_type&limit=1`,
      { headers: { 'apikey': _SB_ANON, 'Authorization': 'Bearer ' + token } }
    );
    const rows = await r.json();
    if (Array.isArray(rows) && rows[0]) myReaction = rows[0].reaction_type;
  } catch {}

  if (myReaction) {
    wrap.querySelectorAll('.sq-reaction-btn').forEach(b => b.classList.toggle('sq-reacted', b.dataset.type === myReaction));
    const note = document.getElementById('sqRNote');
    if (note) note.textContent = 'リアクション済みです';
  }

  wrap.querySelectorAll('.sq-reaction-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
      if (myReaction) return;
      const type = btn.dataset.type;
      wrap.querySelectorAll('.sq-reaction-btn').forEach(b => b.disabled = true);
      try {
        const token = await _getToken();
        const res = await fetch(`${_SB_URL}/rest/v1/article_reactions`, {
          method: 'POST',
          headers: {
            'apikey': _SB_ANON,
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json',
            'Prefer': 'return=minimal'
          },
          body: JSON.stringify({ article_id: articleId, reaction_type: type, user_id: _artUser.id })
        });
        if (res.ok) {
          myReaction = type;
          wrap.querySelectorAll('.sq-reaction-btn').forEach(b => b.classList.toggle('sq-reacted', b.dataset.type === type));
          _gaEvent('article_reaction', { article_id: articleId, reaction_type: type });
          const c = await _fetchCounts(articleId);
          REACTIONS.forEach(r => {
            const el = document.getElementById('sqRc-' + r.type);
            if (el) el.textContent = c[r.type] || 0;
          });
          const note = document.getElementById('sqRNote');
          if (note) note.textContent = 'ありがとうございます！';
        }
      } catch {}
      wrap.querySelectorAll('.sq-reaction-btn').forEach(b => b.disabled = false);
    });
  });
}

/* ── コメントウィジェット ── */
async function buildCommentWidget() {
  if (!PAGE) return;
  const articleId = PAGE;

  const wrap = document.createElement('div');
  wrap.className = 'sq-comment-section';
  const footer = document.querySelector('footer');
  if (footer) footer.insertAdjacentElement('beforebegin', wrap);

  const inner = document.createElement('div');
  inner.className = 'sq-comment-inner';
  wrap.appendChild(inner);

  // コメント一覧取得（公開）
  let comments = [];
  try {
    const r = await fetch(
      `${_SB_URL}/rest/v1/article_comments?article_id=eq.${encodeURIComponent(articleId)}&order=created_at.desc&limit=50`,
      { headers: { 'apikey': _SB_ANON, 'Authorization': 'Bearer ' + _SB_ANON } }
    );
    const d = await r.json();
    if (Array.isArray(d)) comments = d;
  } catch {}

  // いいね数・自分のいいね取得
  const likeMap = {};
  const myLikedSet = new Set();
  if (comments.length > 0) {
    try {
      const ids = comments.map(c => c.id).join(',');
      const lr = await fetch(
        `${_SB_URL}/rest/v1/comment_reactions?comment_id=in.(${ids})&select=comment_id`,
        { headers: { 'apikey': _SB_ANON, 'Authorization': 'Bearer ' + _SB_ANON } }
      );
      const likes = await lr.json();
      if (Array.isArray(likes)) likes.forEach(l => { likeMap[l.comment_id] = (likeMap[l.comment_id] || 0) + 1; });
      if (_artUser) {
        const token = await _getToken();
        const mr = await fetch(
          `${_SB_URL}/rest/v1/comment_reactions?comment_id=in.(${ids})&user_id=eq.${_artUser.id}&select=comment_id`,
          { headers: { 'apikey': _SB_ANON, 'Authorization': 'Bearer ' + token } }
        );
        const myLikes = await mr.json();
        if (Array.isArray(myLikes)) myLikes.forEach(l => myLikedSet.add(l.comment_id));
      }
    } catch {}
  }

  // 見出し
  const heading = document.createElement('div');
  heading.className = 'sq-comment-heading';
  heading.textContent = `💬 コメント（${comments.length}）`;
  inner.appendChild(heading);

  // フォームまたはログイン促進
  if (!_artUser) {
    inner.insertAdjacentHTML('beforeend', `
      <div class="sq-comment-login-prompt">
        コメント・いいねをするには <strong>Googleログイン</strong> が必要です。<br>
        記事の閲覧はログインなしでできます。<br><br>
        <button class="sq-google-login-btn" id="sqCommentLoginBtn">${_GOOGLE_ICON}Googleでログインする</button>
      </div>
    `);
    document.getElementById('sqCommentLoginBtn').addEventListener('click', _loginGoogle);
  } else {
    const userName = _escHtml(_artUser.user_metadata?.full_name || _artUser.email || 'ユーザー');
    const formWrap = document.createElement('div');
    formWrap.className = 'sq-comment-form-wrap';
    formWrap.innerHTML = `
      <div class="sq-comment-form-title">コメントを投稿する（${userName} として）</div>
      <textarea class="sq-comment-textarea" id="sqCommentBody" placeholder="この記事の感想・質問など（500文字以内）" maxlength="500"></textarea>
      <div class="sq-comment-form-footer">
        <span class="sq-comment-char"><span id="sqCommentLen">0</span> / 500</span>
        <button class="sq-comment-submit" id="sqCommentSubmit" disabled>投稿する</button>
      </div>
    `;
    inner.appendChild(formWrap);

    const textarea = document.getElementById('sqCommentBody');
    const submitBtn = document.getElementById('sqCommentSubmit');
    const lenSpan = document.getElementById('sqCommentLen');

    textarea.addEventListener('input', () => {
      lenSpan.textContent = textarea.value.length;
      submitBtn.disabled = textarea.value.trim().length === 0;
    });

    submitBtn.addEventListener('click', async () => {
      const body = textarea.value.trim();
      if (!body) return;
      submitBtn.disabled = true;
      submitBtn.textContent = '投稿中...';
      try {
        const token = await _getToken();
        const res = await fetch(`${_SB_URL}/rest/v1/article_comments`, {
          method: 'POST',
          headers: {
            'apikey': _SB_ANON,
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json',
            'Prefer': 'return=representation'
          },
          body: JSON.stringify({
            article_id: articleId,
            user_id: _artUser.id,
            user_name: _artUser.user_metadata?.full_name || _artUser.email,
            avatar_url: _artUser.user_metadata?.avatar_url || null,
            body: body
          })
        });
        if (res.ok) {
          const [newComment] = await res.json();
          textarea.value = '';
          lenSpan.textContent = '0';
          submitBtn.disabled = true;
          const list = document.getElementById('sqCommentList');
          if (list) {
            const emptyEl = list.querySelector('.sq-comment-empty');
            if (emptyEl) emptyEl.remove();
            list.insertAdjacentElement('afterbegin', _buildCommentCard(newComment, 0, false));
          }
          heading.textContent = `💬 コメント（${document.querySelectorAll('.sq-comment-card').length}）`;
        } else {
          alert('投稿に失敗しました。しばらくしてから再試行してください。');
        }
      } catch {
        alert('エラーが発生しました。');
      }
      submitBtn.disabled = false;
      submitBtn.textContent = '投稿する';
    });
  }

  // コメント一覧
  const list = document.createElement('div');
  list.className = 'sq-comment-list';
  list.id = 'sqCommentList';
  if (comments.length === 0) {
    list.innerHTML = '<div class="sq-comment-empty">まだコメントはありません。最初のコメントを投稿しましょう！</div>';
  } else {
    comments.forEach(c => list.appendChild(_buildCommentCard(c, likeMap[c.id] || 0, myLikedSet.has(c.id))));
  }
  inner.appendChild(list);
}

function _buildCommentCard(comment, likeCount, isLiked) {
  const card = document.createElement('div');
  card.className = 'sq-comment-card';
  card.dataset.cid = comment.id;

  const avatarHtml = comment.avatar_url
    ? `<img src="${comment.avatar_url}" class="sq-comment-c-avatar" alt="">`
    : `<div class="sq-comment-c-avatar-ph">${_escHtml((comment.user_name || '?')[0])}</div>`;

  const isOwn = _artUser && _artUser.id === comment.user_id;

  card.innerHTML = `
    <div class="sq-comment-card-header">
      ${avatarHtml}
      <span class="sq-comment-c-name">${_escHtml(comment.user_name || '匿名')}</span>
      <span class="sq-comment-c-time">${_relTime(comment.created_at)}</span>
    </div>
    <div class="sq-comment-c-body">${_escHtml(comment.body)}</div>
    <div class="sq-comment-c-actions">
      <button class="sq-comment-like-btn${isLiked ? ' sq-liked' : ''}" data-liked="${isLiked}">
        👍 <span class="sq-like-count">${likeCount}</span>
      </button>
      ${isOwn ? '<button class="sq-comment-del-btn">🗑 削除</button>' : ''}
      ${(_artUser && !isOwn) ? '<button class="sq-comment-report-btn">🚩 通報</button>' : ''}
    </div>
  `;

  // いいねボタン
  const likeBtn = card.querySelector('.sq-comment-like-btn');
  if (!_artUser) {
    likeBtn.addEventListener('click', _loginGoogle);
    likeBtn.title = 'Googleログインでいいねできます';
  } else {
    likeBtn.addEventListener('click', async () => {
      const wasLiked = likeBtn.dataset.liked === 'true';
      const countEl = likeBtn.querySelector('.sq-like-count');
      likeBtn.disabled = true;
      try {
        const token = await _getToken();
        if (wasLiked) {
          await fetch(`${_SB_URL}/rest/v1/comment_reactions?comment_id=eq.${comment.id}&user_id=eq.${_artUser.id}`, {
            method: 'DELETE',
            headers: { 'apikey': _SB_ANON, 'Authorization': 'Bearer ' + token }
          });
          likeBtn.dataset.liked = 'false';
          likeBtn.classList.remove('sq-liked');
          countEl.textContent = Math.max(0, parseInt(countEl.textContent) - 1);
        } else {
          await fetch(`${_SB_URL}/rest/v1/comment_reactions`, {
            method: 'POST',
            headers: { 'apikey': _SB_ANON, 'Authorization': 'Bearer ' + token, 'Content-Type': 'application/json', 'Prefer': 'return=minimal' },
            body: JSON.stringify({ comment_id: comment.id, user_id: _artUser.id })
          });
          likeBtn.dataset.liked = 'true';
          likeBtn.classList.add('sq-liked');
          countEl.textContent = parseInt(countEl.textContent) + 1;
        }
      } catch {}
      likeBtn.disabled = false;
    });
  }

  // 削除ボタン
  const delBtn = card.querySelector('.sq-comment-del-btn');
  if (delBtn) {
    delBtn.addEventListener('click', async () => {
      if (!confirm('このコメントを削除しますか？')) return;
      try {
        const token = await _getToken();
        const res = await fetch(`${_SB_URL}/rest/v1/article_comments?id=eq.${comment.id}`, {
          method: 'DELETE',
          headers: { 'apikey': _SB_ANON, 'Authorization': 'Bearer ' + token }
        });
        if (res.ok) {
          card.remove();
          const heading = document.querySelector('.sq-comment-heading');
          if (heading) heading.textContent = `💬 コメント（${document.querySelectorAll('.sq-comment-card').length}）`;
        }
      } catch {}
    });
  }

  // 通報ボタン
  const reportBtn = card.querySelector('.sq-comment-report-btn');
  if (reportBtn) {
    reportBtn.addEventListener('click', async () => {
      if (!confirm('このコメントを通報しますか？')) return;
      try {
        const token = await _getToken();
        await fetch(`${_SB_URL}/rest/v1/rpc/report_comment`, {
          method: 'POST',
          headers: { 'apikey': _SB_ANON, 'Authorization': 'Bearer ' + token, 'Content-Type': 'application/json' },
          body: JSON.stringify({ p_comment_id: comment.id })
        });
        reportBtn.classList.add('sq-reported');
        reportBtn.textContent = '🚩 通報済み';
        reportBtn.disabled = true;
      } catch {}
    });
  }

  return card;
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

function _gaEvent(name, params){
  try{ if(window.gtag) gtag('event', name, params); }catch{}
}

function injectGA(){
  if(document.querySelector('script[src*="googletagmanager"]')) return;
  const s1 = document.createElement('script');
  s1.async = true;
  s1.src = 'https://www.googletagmanager.com/gtag/js?id=G-WL5KSKG1JK';
  document.head.appendChild(s1);
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  window.gtag = window.gtag || gtag;
  gtag('js', new Date());
  gtag('config', 'G-WL5KSKG1JK');
}

function trackScrollDepth(){
  const fired = new Set();
  window.addEventListener('scroll', ()=>{
    const el = document.documentElement;
    const pct = Math.round((el.scrollTop + el.clientHeight) / el.scrollHeight * 100);
    [50, 100].forEach(d=>{
      if(pct >= d && !fired.has(d)){
        fired.add(d);
        _gaEvent('scroll_depth', {article_id: PAGE, depth: d});
      }
    });
  }, {passive: true});
}

function trackRelatedArticleClicks(){
  document.querySelectorAll('.sq-card, .sq-side-link').forEach(a=>{
    a.addEventListener('click', ()=> _gaEvent('related_article_click', {from: PAGE, to: a.getAttribute('href')}));
  });
}

function trackPageView(){
  if(!PAGE) return;
  fetch(`${_SB_URL}/rest/v1/rpc/increment_view`,{
    method:'POST',
    headers:{'apikey':_SB_ANON,'Authorization':'Bearer '+_SB_ANON,'Content-Type':'application/json'},
    body:JSON.stringify({p_article_id:PAGE})
  }).catch(()=>{});
}

document.addEventListener('DOMContentLoaded', async function(){
  injectGA();
  trackPageView();
  injectStyles();
  buildReadProgress();
  buildThemeToggle();
  buildSearchModal();
  injectBreadcrumbLD();
  const layout = buildLayout();
  buildTOC(layout.right);
  buildBoki3Sidebar(layout.right);
  buildCatBadge();
  buildSidebarCTA(layout.right);
  buildLeftSidebar(layout.left);
  buildAuthorBox();
  insertMidCTA();
  buildPrevNextNav();
  buildReadButton();
  buildShareButtons();
  buildWidgets();
  trackScrollDepth();
  trackRelatedArticleClicks();
  await _initSB();
  await buildReactionWidget();
  await buildCommentWidget();
});
})();
