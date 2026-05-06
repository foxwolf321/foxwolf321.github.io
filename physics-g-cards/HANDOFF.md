# 物理受験カード v3 HANDOFF

## 正本
この会話でアップロードされた `index.html` から抽出した v3.0.0 年間固定版データを正本として扱う。

## 現在版
v3.0.8 learning flow fix

## データ
- 公式数: 146
- カード数: 730
- 分野: 力学 / 熱 / 波動 / 電磁気 / 原子

## 方針
v3.0.0年間固定版を基本最終版とし、今後は誤字・表示崩れ・Google Drive保存まわりのエラー補修だけを行う。

## v3.0.8の修正
- 学習画面・進捗画面からGoogle関連ボタンを撤去。
- Google関連は説明タブに集約。
- 回答評価ごとに端末内保存し、Google接続済みなら自動でDrive保存する方式に変更。
- 自動バックアップはデフォルトON。
- `次へ` と評価後のカード送りをキュー方式に変更し、同じカードに居座らないよう修正。
- 出題は弱点・復習優先を保ちつつ、同ランク内でランダム。
- Drive保存ファイル名: `physics-g-cards-v3-annual-progress.json`

## Google Cloud設定
- OAuthクライアントID: Webアプリ
- 承認済み JavaScript 生成元: `https://foxwolf321.github.io`
- 必要スコープ: `https://www.googleapis.com/auth/drive.appdata`
