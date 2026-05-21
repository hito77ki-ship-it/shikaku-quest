/**
 * Gmail 自動仕分けスクリプト
 * 対象：就活エージェント系・大学からのメールを自動ラベリング
 *
 * 【使い方】
 * 1. https://script.google.com を開く
 * 2. 「新しいプロジェクト」を作成
 * 3. このコードを貼り付けて保存
 * 4. sortEmails() を一度手動実行して権限を許可
 * 5. setupTrigger() を実行してトリガーを設定
 */

// ============================
// 設定：仕分けルール
// ============================

const RULES = [
  {
    label: "大学",
    keywords: [
      "大阪経済大学",
      "osaka-ue",
      "履修",
      "シラバス",
      "授業料",
      "学費",
      "奨学金",
      "単位",
      "成績",
      "試験",
      "休講",
      "補講",
      "就職課",
      "キャリアセンター",
      "学務",
      "教務",
      "学生支援",
      "学生課",
    ],
    senderDomains: [
      "osaka-ue.ac.jp",
    ],
    archive: false,
    markAsRead: false,
  },
  {
    label: "就活エージェント",
    keywords: [
      // 大手エージェント・サービス名
      "リクルートエージェント",
      "マイナビエージェント",
      "マイナビ転職",
      "doda",
      "ビズリーチ",
      "エン転職",
      "type転職",
      "パーソナルキャリア",
      "ランスタッド",
      "ヘイズ",
      "ロバートハーフ",
      "JACリクルートメント",
      "Green",
      "Wantedly",
      "OfferBox",
      "キャリトレ",
      "リクナビ",
      "就活会議",
      "ワンキャリア",
      "キャリアパーク",
      // 一般キーワード
      "転職エージェント",
      "就活エージェント",
      "スカウト",
      "求人",
      "転職支援",
      "面談のご案内",
      "求人のご紹介",
      "あなたにおすすめの求人",
      "キャリア相談",
      "採用担当",
    ],
    // これらのドメインから届いたメール
    senderDomains: [
      "r-agent.com",
      "mynavi.jp",
      "doda.jp",
      "bizreach.co.jp",
      "en-japan.com",
      "type.jp",
      "persol.co.jp",
      "wantedly.com",
      "offerbox.jp",
    ],
    archive: false,   // true にするとラベルを貼った後に受信トレイから除外
    markAsRead: false, // true にすると既読にする
  },
];

// ============================
// メイン処理
// ============================

function sortEmails() {
  RULES.forEach(rule => applyRule(rule));
}

function applyRule(rule) {
  const label = getOrCreateLabel(rule.label);

  // キーワード検索クエリを組み立て
  const keywordQuery = rule.keywords
    .map(k => `"${k}"`)
    .join(" OR ");

  const domainQuery = (rule.senderDomains || [])
    .map(d => `from:@${d}`)
    .join(" OR ");

  const query = [
    "in:inbox",
    `(${[keywordQuery, domainQuery].filter(Boolean).join(" OR ")})`,
    `-label:${rule.label}`, // まだラベルが付いていないもの
  ].join(" ");

  const threads = GmailApp.search(query, 0, 100);

  threads.forEach(thread => {
    thread.addLabel(label);
    if (rule.archive) thread.moveToArchive();
    if (rule.markAsRead) thread.markRead();
  });

  if (threads.length > 0) {
    Logger.log(`[${rule.label}] ${threads.length} 件を仕分けしました`);
  }
}

// ============================
// ユーティリティ
// ============================

function getOrCreateLabel(name) {
  return GmailApp.getUserLabelByName(name) || GmailApp.createLabel(name);
}

// ============================
// トリガー自動設定（初回1回だけ実行）
// ============================

function setupTrigger() {
  // 既存トリガーを削除してから再設定
  ScriptApp.getProjectTriggers().forEach(t => {
    if (t.getHandlerFunction() === "sortEmails") {
      ScriptApp.deleteTrigger(t);
    }
  });

  // 毎日 午前7時に実行
  ScriptApp.newTrigger("sortEmails")
    .timeBased()
    .everyDays(1)
    .atHour(7)
    .create();

  Logger.log("トリガーを設定しました：毎日 午前7時に自動実行");
}
