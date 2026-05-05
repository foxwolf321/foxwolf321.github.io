# 物理受験カード HANDOFF

## 現在版
v3.0.1 Drive/UI復旧リリース

## 正本方針
この `physics-g-cards` フォルダを正本とする。過去スレッドではなく、このHANDOFFを次回以降の基準にする。

## v3.0.1の位置づけ
v3.0.0 年間固定版を基本最終版とし、v3.0.1では学習データ本体には触らず、以下だけを補修した。

- Google Drive保存欄を復旧
- 既存のGoogle Cloud OAuthクライアントIDを入力して使う方式
- Drive保存ファイル名は v3 専用の `physics-g-cards-v3-annual-progress.json`
- 背景画像を元画像ベースに戻す
- トップページ上部の余白を詰める
- 透明ベールを調整し、背景は見えるがカード本文は読める状態にする
- 空アイコンになっていた箇所を復元
- Service Workerは登録しない

## 内容
- 公式数: 146
- カード数: 730
- 分野: 力学 / 熱 / 波動 / 電磁気 / 原子
- 公式・条件・典型判断・単位・混同注意をカード化
- Δ表記はなるべく避ける
- 教科書に近い分数表示を維持

## Google Drive保存
Google Cloud側は作り直さない。以前作成したOAuthクライアントIDを、アプリの「説明」タブ内のGoogle Drive保存欄に入力して接続する。

必要なCloud側設定の目安:
- 承認済み JavaScript 生成元: `https://foxwolf321.github.io`
- 承認済みリダイレクトURI: `https://foxwolf321.github.io/physics-g-cards/`
- Drive API有効化
- OAuthクライアントIDのみ使用。クライアントシークレットはブラウザアプリでは使わない。

## GitHubへ上げる主要ファイル
- `physics-g-cards/index.html`
- `physics-g-cards/bg-bike-physics.png`
- `physics-g-cards/icon-192.png`
- `physics-g-cards/icon-512.png`
- `physics-g-cards/manifest.webmanifest`
- `physics-g-cards/HANDOFF.md`
- `physics-g-cards/CHANGELOG.md`
- `physics-g-cards/TODO.md`
- `physics-g-cards/NEXT_THREAD_PROMPT.txt`

## 確認URL
反映後はキャッシュ回避で以下を確認する。

`https://foxwolf321.github.io/physics-g-cards/?v=301`

## 実機確認項目
1. URLが404にならず開く
2. 背景のバイクが薄すぎず見える
3. トップ上部の余白が詰まっている
4. カード学習ボタンが動く
5. 公式集・検索・進捗が開く
6. 進捗書き出し/読み込みが動く
7. 説明タブのGoogle Drive保存欄が表示される
8. OAuthクライアントID入力後、Googleに接続できる
9. Driveへ保存、Driveから復元ができる

## 今後の方針
v3.0.1以降は、内容追加ではなく以下のみ行う。

- 誤字修正
- 公式の表記ゆれ修正
- 表示崩れ修正
- Google Drive保存のエラー補修
- 背景・余白・読みやすさの微調整

大規模なカード追加や分野再構成は行わない。
