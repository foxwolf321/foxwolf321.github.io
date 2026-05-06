# 物理受験カード v3 HANDOFF

## 正本
この会話でアップロードされた `index.html` から抽出した v3.0.0 年間固定版データを正本として扱う。

## 現在版
v3.0.5 direct fix

## データ
- 公式数: 146
- カード数: 730
- 分野: 力学 / 熱 / 波動 / 電磁気 / 原子

## 方針
v3.0.0年間固定版を基本最終版とし、今後は誤字・表示崩れ・Google Drive保存まわりのエラー補修だけを行う。

## v3.0.5の修正
- 「次へ」で同じカードに戻る問題を修正。
- 評価後のカード送りを改善。
- 分数の分母が隠れないよう、公式表示CSSのline-height / padding / overflowを修正。
- 公式集の最終項目「放射能」が下部ナビに隠れたり崩れたりしないよう余白を追加。
- 背景画像をさらに濃く表示。
- hero / panel / button / answer / row の白背景をさらに弱め、バイクが透けやすくした。
- 学習画面にも「Google接続」ボタンを追加。
- Google Drive保存欄は説明タブに維持。
- Drive保存ファイル名: `physics-g-cards-v3-annual-progress.json`

## Google Cloud設定
- OAuthクライアントID: Webアプリ
- 承認済み JavaScript 生成元: `https://foxwolf321.github.io`
- 必要スコープ: `https://www.googleapis.com/auth/drive.appdata`
