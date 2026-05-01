# 物理受験カード v2（かわいいUI版）

## 内容
- 力学 92枚
- 電磁気 第1段階 56枚（静電気・コンデンサー・直流回路）
- 公式集
- 進捗タブ
- 説明書
- Google Drive 保存（appDataFolder / v2専用ファイル名）
- JSON書き出し・読み込み
- PWA / ホーム画面追加対応

## 設置先
GitHub Pages の `physics-g-cards` フォルダに、この6ファイルを直接置いてください。

URL:
https://foxwolf321.github.io/physics-g-cards/

## Drive保存
OAuthクライアントIDは既存のものを使えます。承認済み JavaScript 生成元に
https://foxwolf321.github.io
が入っていれば利用できます。

v2は `physics-g-cards-v2-progress.json` という別名で保存するため、旧版のDrive保存とは衝突しません。


## 修正内容
- 公式集タブとプルダウンのイベント登録を強化
- 起動エラーがある場合は画面上に表示
- Service Worker のキャッシュ名を更新
