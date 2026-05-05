# 物理受験カード v3 HANDOFF

## 正本
この会話でアップロードされた `index.html` から抽出した v3.0.0 年間固定版データを正本として扱う。

## 現在版
v3.0.4 direct fix

## データ
- 公式数: 146
- カード数: 730
- 分野: 力学 / 熱 / 波動 / 電磁気 / 原子

## 方針
v3.0.0年間固定版を基本最終版とし、今後は誤字・表示崩れ・Google Drive保存まわりのエラー補修だけを行う。

## v3.0.4の修正
- v3.0.3で「読み込み中...」が止まる問題を修正。
- Service Worker / cache削除を初期化後に非同期化し、カード初期化を阻害しないようにした。
- 背景画像をより濃く表示。
- hero / panel / button / answer / row の白背景を弱め、バイクが透けて見えやすい方向へ調整。
- 学習画面に「Google設定」ボタンを追加。
- Google Drive保存欄は説明タブに維持。
- Drive保存ファイル名: `physics-g-cards-v3-annual-progress.json`

## Google Cloud設定
- OAuthクライアントID: Webアプリ
- 承認済み JavaScript 生成元: `https://foxwolf321.github.io`
- 必要スコープ: `https://www.googleapis.com/auth/drive.appdata`
