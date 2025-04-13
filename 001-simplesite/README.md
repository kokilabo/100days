# 001-simplesite

## 概要
このプロジェクトは、シンプルな企業サイトのサンプルです。  
HTML・CSS・JavaScriptのみで構成されており、静的なWebサイトとしてすぐに利用できます。

![siteimage](001-simplesite/src/image/site.png)

## ディレクトリ構成
```
001-simplesite/
├── .gitignore
├── README.md
├── script.js
├── style.css
└── src/
    ├── home.html              # トップページ
    ├── company-profile.html   # 会社概要ページ
    ├── service.html           # サービスページ
    └── contact.html           # お問い合わせページ
```

## 各ファイルの説明
- `src/home.html` : トップページ（企業情報、サービス概要、ナビゲーション）
- `src/service.html` : サービスページ（各サービスの詳細説明）
- `src/company-profile.html` : 会社概要ページ
- `src/contact.html` : お問い合わせページ（フォーム付き）
- `style.css` : サイト全体のデザイン
- `script.js` : サイトのインタラクション（例：お問い合わせフォームのバリデーション等）
- `.gitignore` : Git管理対象外ファイルの指定
- `README.md` : このファイル

## 使い方
1. このディレクトリをローカルにダウンロードまたはクローンします。
2. `src/home.html` をブラウザで開くと、トップページが表示されます。
3. ナビゲーションから各ページ（サービス、会社概要、お問い合わせ）に遷移できます。

### ナビゲーション例
- ホーム（home.html）
- サービス（service.html）
- 会社概要（company-profile.html）
- お問い合わせ（contact.html）

## 特徴
- レスポンシブ対応（スマートフォンでも見やすいレイアウト）
- シンプルで清潔感のあるデザイン
- HTML・CSS・JSのみで動作
- お問い合わせフォーム付き

## カスタマイズ例
- 会社情報やサービス内容は各HTMLファイルを編集して自由に変更できます。
- デザインを変更したい場合は `style.css` を編集してください。
- サイトの動作を拡張したい場合は `script.js` を編集してください。

---