# Gmail 自動仕分けスクリプト — 導入手順

## 概要

就活エージェント系のメールを自動でラベル分けするGoogle Apps Script。

## 導入手順（5分でできる）

### 1. スクリプトエディタを開く

1. [https://script.google.com](https://script.google.com) にアクセス
2. 「新しいプロジェクト」をクリック
3. プロジェクト名を `Gmail自動仕分け` などに変更

### 2. コードを貼り付ける

1. エディタの中身をすべて削除
2. `gmail-auto-sort.gs` の内容をコピー＆ペースト
3. 保存（Ctrl+S）

### 3. 初回実行と権限許可

1. 関数の選択リストで `sortJobAgentEmails` を選択
2. ▶ 実行ボタンをクリック
3. 「権限を確認」→ Googleアカウントを選択 → 「許可」

### 4. 自動トリガーを設定

1. 関数の選択リストで `setupTrigger` を選択
2. ▶ 実行ボタンをクリック
3. これで毎日 午前7時に自動実行される

---

## カスタマイズ方法

### キーワードを追加したい場合

`RULES[0].keywords` の配列にキーワードを追加するだけ：

```javascript
keywords: [
  ...既存キーワード...,
  "追加したいキーワード",
],
```

### 自動アーカイブしたい場合

```javascript
archive: true,
```

### カテゴリを追加したい場合

`RULES` 配列に新しいルールを追加：

```javascript
const RULES = [
  {
    label: "就活エージェント",
    // ...
  },
  {
    label: "ショッピング",
    keywords: ["Amazon", "楽天", "注文確認", "配送"],
    senderDomains: ["amazon.co.jp", "rakuten.co.jp"],
    archive: false,
    markAsRead: false,
  },
];
```
