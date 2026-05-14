# 大学受験数学 公式カード

`大学受験数学公式大全.pdf` をもとにしたスマートフォン向けの静的Webアプリです。

## 中身

- ジャンルと頻度を複数選択できるプルダウン
- 最頻出、頻出、発展ごとの色分け
- 公式一覧と問題カード
- AnkiDroid風の `もう一度 / 難しい / 良い / 簡単` で次回表示を調整
- 進度表示
- Firebase Authentication + Cloud Firestore によるGoogle Cloud保存

## Google Cloud保存の設定

1. Firebase Consoleでプロジェクトを作成します。
2. Authenticationで「匿名」を有効にします。
3. Cloud Firestoreを作成します。
4. `firestore.rules` の内容をFirestore Rulesに反映します。
5. Webアプリを追加し、表示された設定を `firebase-config.js` に貼ります。
6. `cloudSync.enabled` を `true` にします。

設定前は端末内保存で動きます。

## GitHub Pages

`foxwolf321.github.io` の `main` にこのフォルダを置くと、次のURLで開けます。

`https://foxwolf321.github.io/math-g3-cards/`

## GitHubに書き込めない場合

- GitHub AppまたはPersonal Access Tokenに `foxwolf321/foxwolf321.github.io` のContents書き込み権限を付けます。
- ローカルから作業する場合はGitとGitHub CLIを入れ、`gh auth login` でログインします。
- リポジトリのSettingsでブランチ保護がある場合は、直接mainに書かず、ブランチからPull Requestを作ります。
