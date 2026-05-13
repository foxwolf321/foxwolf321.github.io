# シャッフルボタン修正パッチ v20260524

## 内容
v4本体側のシャッフルボタンが効かないため、外部JSで補修します。

シャッフルボタンを押すと、現在のカードキュー内でランダム位置へ移動するようにしました。
内部的には「次へ」をランダム回数進める方式なので、既存の学習データやSRS処理を壊しません。

## 上書きするファイル
GitHub の `math-g-cards` に以下を上書きしてください。

- `math-v2-enhance.js`

`math-v2-theme.css` は今回は触らなくて構いません。

## index.html の script 行
すでに追加済みのこの行だけ、数字を `20260524` にしてください。

```html
<script defer src="./math-v2-enhance.js?v=20260524"></script>
```

CSSの行は前回のままで構いません。

```html
<link rel="stylesheet" href="./math-v2-theme.css?v=20260523">
```

## 確認URL
https://foxwolf321.github.io/math-g-cards/?v=20260524

## 確認ポイント
- シャッフルを押すと、別のカードに移動する
- 正解率や復習間隔の保存には影響しない
