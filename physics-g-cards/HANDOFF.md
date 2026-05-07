# 物理受験カード v3 HANDOFF

## 正本
この会話でアップロードされた `index.html` から抽出した v3.0.0 年間固定版データを正本として扱う。

## 現在版
v3.0.9 card flow clean

## データ
- 公式数: 146
- カード数: 730
- 分野: 力学 / 熱 / 波動 / 電磁気 / 原子

## 方針
v3.0.0年間固定版を基本最終版とし、今後は誤字・表示崩れ・Google Drive保存まわりのエラー補修だけを行う。

## v3.0.9の修正
- 学習画面から「進捗書き出し」「読み込み」を撤去。
- 学習画面は「答えを見る」「評価」「別カードへ」中心に整理。
- JSON書き出し/読み込みは説明タブの「データ保守」へ移動。
- `次へ` / 評価後のカード送りで現在カードを必ず除外して次候補を選ぶよう修正。
- 候補が他にある限り、同じカードに戻らない。
- Google関連は説明タブに集約。
- 回答ごとの端末内保存と、Google接続時の自動Drive保存を維持。
- Drive保存ファイル名: `physics-g-cards-v3-annual-progress.json`

## Google Cloud設定
- OAuthクライアントID: Webアプリ
- 承認済み JavaScript 生成元: `https://foxwolf321.github.io`
- 必要スコープ: `https://www.googleapis.com/auth/drive.appdata`
