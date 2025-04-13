# シンプルメモアプリ

Reactで作成されたシンプルなメモアプリです。Firebaseを使用してデータを保存します。

![siteimage](/memo-002.png)

## セットアップ

1. リポジトリをクローンします
```bash
git clone https://github.com/yourusername/memo-app.git
cd memo-app
```

2. 依存関係をインストールします
```bash
npm install
```

3. Firebaseプロジェクトを作成します
   - [Firebase Console](https://console.firebase.google.com/)にアクセスします
   - 新しいプロジェクトを作成します
   - Webアプリを追加します
   - Firebaseの設定情報をコピーします

4. 環境変数を設定します
   - プロジェクトのルートに`.env`ファイルを作成します
   - 以下の形式でFirebaseの設定情報を入力します:
     ```
     REACT_APP_FIREBASE_API_KEY=YOUR_API_KEY
     REACT_APP_FIREBASE_AUTH_DOMAIN=YOUR_PROJECT_ID.firebaseapp.com
     REACT_APP_FIREBASE_PROJECT_ID=YOUR_PROJECT_ID
     REACT_APP_FIREBASE_STORAGE_BUCKET=YOUR_PROJECT_ID.appspot.com
     REACT_APP_FIREBASE_MESSAGING_SENDER_ID=YOUR_MESSAGING_SENDER_ID
     REACT_APP_FIREBASE_APP_ID=YOUR_APP_ID
     ```

5. アプリを起動します
```bash
npm start
```

## 機能

- メモの作成、読み取り、更新、削除
- Firebaseを使用したデータの永続化
- レスポンシブデザイン

## 技術スタック

- React
- Firebase (Firestore)
- Tailwind CSS
