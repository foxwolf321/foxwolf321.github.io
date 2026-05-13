# 数学公式カード v4｜年間SRS版

## これは何か
後付けCSS/JSで直す方式をやめ、アプリ本体を作り直した版です。

## 特徴
- 問題・答え・公式集を最初から LaTeX で記述
- 縦分数など、教科書風の表示
- AnkiDroid風に、正解率・誤答回数・復習間隔で出題頻度を調整
- 進捗タブに円グラフ（習熟度・回答傾向）を表示
- 単元別の進捗バー
- Google Drive保存欄は設定内に格納
- JSON書き出し/読み込み
- 背景画像・アイコン差し替え済み
- service worker なし：キャッシュ事故を避けるため

## GitHubでの入れ方
`math-g-cards` フォルダ内を、このZIPの中身で上書きしてください。

必要ファイル:
- index.html
- manifest.webmanifest
- app-bg.jpg
- icon-192.png
- icon-512.png

古い後付け用ファイルは不要です:
- math-v2-theme.css
- math-v2-enhance.js

残っていても v4 の index.html からは読み込まないので、動作には影響しません。

## 確認URL
https://foxwolf321.github.io/math-g-cards/?v=400

## 注意
進捗保存キーは v4 用に変えています。
旧版の進捗とは別扱いになります。
