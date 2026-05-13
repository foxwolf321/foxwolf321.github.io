# 分数の上部切れ修正パッチ v20260523

## 修正内容
- 「対辺」「隣辺」など、分数の分子の上部が切れる問題を修正
- 分数の line-height / padding / overflow を調整
- 前回の灰色線消し・白壁薄化・小さい字の見やすさは維持

## 上書きするファイル
- math-v2-theme.css
- math-v2-enhance.js

## index.html
すでに追加済みの2行がある場合は、数字だけ `20260523` にしてください。

```html
<link rel="stylesheet" href="./math-v2-theme.css?v=20260523">
<script defer src="./math-v2-enhance.js?v=20260523"></script>
```

## 確認URL
https://foxwolf321.github.io/math-g-cards/?v=20260523
