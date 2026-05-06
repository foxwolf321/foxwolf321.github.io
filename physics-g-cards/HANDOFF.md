# 物理受験カード v3 HANDOFF

## 正本
この会話でアップロードされた `index.html` から抽出した v3.0.0 年間固定版データを正本として扱う。

## 現在版
v3.0.7 class/random fix

## データ
- 公式数: 146
- カード数: 730
- 分野: 力学 / 熱 / 波動 / 電磁気 / 原子

## 方針
v3.0.0年間固定版を基本最終版とし、今後は誤字・表示崩れ・Google Drive保存まわりのエラー補修だけを行う。

## v3.0.7の修正
- 分数の分母 `class="bottom"` と下部ナビ `.bottom` が衝突していた根本原因を修正。
- 下部ナビを `.bottomnav` に改名し、分母が画面下へ飛ぶ問題を解消。
- 分母側CSSに `position: static !important` を追加して再発防止。
- カード出題を「弱点・復習優先 + 同ランク内ランダム」に変更。
- 公式カードの背景を少し戻し、透過と読みやすさのバランスを調整。
- 左上の「保存: ローカル」は非表示のまま。
- Google Drive保存欄は説明タブに維持。
- Drive保存ファイル名: `physics-g-cards-v3-annual-progress.json`

## Google Cloud設定
- OAuthクライアントID: Webアプリ
- 承認済み JavaScript 生成元: `https://foxwolf321.github.io`
- 必要スコープ: `https://www.googleapis.com/auth/drive.appdata`
