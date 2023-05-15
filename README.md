# 個人サイト

このリポジトリは、個人サイトのソースコードを管理しています。
サイトはバックエンドとフロントエンドの技術スタックで構築されています。

## バックエンド

バックエンドは以下の技術スタックで構築されています。

### 言語とフレームワーク

- Python
- Django

### ライブラリ

- SimpleJWT
- RestfulAPI

## フロントエンド

フロントエンドは以下の技術スタックで構築されています。

### 言語とフレームワーク

- Node.js
- React
- Serve

### パッケージ

- axios: ^1.4.0
- dotenv: ^16.0.3
- highlight.js: ^11.8.0
- react: ^18.2.0
- react-dom: ^18.2.0
- react-redux: ^8.0.5
- react-router-dom: ^6.11.1
- react-scripts: 5.0.1
- redux: ^4.2.1
- redux-thunk: ^2.4.2
- rehype-highlight: ^6.0.0
- rehype-sanitize: ^5.0.1
- rehype-stringify: ^9.0.3
- remark-gfm: ^3.0.1
- remark-parse: ^10.0.1
- remark-rehype: ^10.1.0
- remark-toc: ^8.0.1
- unified: ^10.1.2

## 良ければセットアップ方法を

- リポジトリをクローン

```bash
git clone https://github.com/Escenda/www.escenda.net.git
```

- プロジェクトのフロントエンドのルートディレクトリに移動

```bash
cd www.escenda.net/frontend
```

- 必要なパッケージをインストール

```bash
npm install
```

- プロジェクトのバックエンドのルートディレクトリに移動

```bash
cd ../backend
```

- 必要なライブラリのインストール

```bash
pip install poetry
poetry init
```

- それぞれ実行する

- フロントエンドの場合

```bash
cd www.escenda.net/frontend
serve -s build -p 8080 # 8080 を書き換えてポートを指定
```

- バックエンドの場合

```bash
cd www.escenda.net/backend/homepage
poetry run manage.py 0.0.0.0:4000 # ※フロントエンドの.envファイルにREACT_APP_API_URL = 4000などを指定してください
```
