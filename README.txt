# 理系受験数学 公式カード式問題集 PWA版

このフォルダには、Androidのホーム画面にアイコン付きで追加しやすいPWA版が入っています。

## 中身
- index.html
- manifest.webmanifest
- sw.js
- icons/

## 使い方
1. このフォルダをWeb上に置きます。
2. AndroidのChromeで `https://.../index.html` を開きます。
3. 右上メニュー → 「ホーム画面に追加」または「インストール」

## 重要
`content://` や `file://` で直接開いたローカルHTMLは、Chromeで完全なPWAとしては扱われないことがあります。
そのため、アイコン付きで安定して使うにはHTTPS上に置くのが確実です。
