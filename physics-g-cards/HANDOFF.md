# 物理受験カード v3 HANDOFF

## 正本
この会話でアップロードされた `index.html` から抽出した v3.0.0 年間固定版データを正本として扱う。

## 現在版
v3.0.6 formula layout fix

## データ
- 公式数: 146
- カード数: 730
- 分野: 力学 / 熱 / 波動 / 電磁気 / 原子

## 方針
v3.0.0年間固定版を基本最終版とし、今後は誤字・表示崩れ・Google Drive保存まわりのエラー補修だけを行う。

## v3.0.6の修正
- 左上の「保存: ローカル」チップを非表示化。
- 公式カードの2カラム表示を廃止し、公式を上、説明を下にする単一カラムへ変更。
- 分数表示をinline-grid化し、分子・分母が欠けないように修正。
- 公式集の下部余白をさらに増やし、下部ナビと重ならないよう調整。
- 背景とカード透過はv3.0.5の方向を維持。
- Google Drive保存欄は説明タブに維持。
- Drive保存ファイル名: `physics-g-cards-v3-annual-progress.json`

## Google Cloud設定
- OAuthクライアントID: Webアプリ
- 承認済み JavaScript 生成元: `https://foxwolf321.github.io`
- 必要スコープ: `https://www.googleapis.com/auth/drive.appdata`
