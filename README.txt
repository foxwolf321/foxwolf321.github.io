数学公式カード Drive同期版

これは GitHub Pages など HTTPS 上で動かす前提の PWA です。

Google Drive 自動バックアップを使うには:
1. Google Cloud で Google Drive API を有効化
2. OAuth consent / Data Access で drive.appdata を追加
3. OAuth Client ID を Web application で作成
4. Authorized JavaScript origins に公開URLの origin を追加
   例: https://foxwolf321.github.io
5. アプリの設定欄にクライアントIDを貼り付けて Google に接続

補足:
- 保存先は Drive の appDataFolder です。通常の Drive 一覧には表示されません。
- 自動バックアップは、接続済みかつ有効なアクセストークンがある間だけ動きます。
- 認証期限が切れた場合は「Googleに接続」を押して再接続してください。
