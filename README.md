# 中庸診断

30の質問に答えて、あなたの認知の歪みを10種類のタイプで可視化するPWA対応のWebアプリです。

## 機能

- **30問の診断** — 5件法（まったくない〜いつもある）で回答
- **10種類の歪みタイプ** — 全か無か思考・過度の一般化・マイナス化思考など
- **レーダーチャート** — 外側ほど歪みが強い視覚的な表示
- **言語化フィードバック** — 最も影響が強い認知の歪みへのメッセージ
- **改善アドバイス** — 各カテゴリの具体的な実践ヒスト3件
- **SNSシェア** — X（Twitter）への結果シェア機能
- **PWA対応** — スマートフォンのホーム画面に追加可能

## Vercel へのデプロイ手順

### 方法1：GitHub 経由（推奨）

1. このプロジェクトを GitHub にプッシュ
2. [vercel.com](https://vercel.com) にアクセスしてログイン
3. 「New Project」→ GitHubリポジトリを選択
4. Framework Preset: **Next.js** を選択（自動検出されます）
5. 「Deploy」をクリック

### 方法2：Vercel CLI

```bash
npm install -g vercel
vercel login
vercel --prod
```

## ローカル開発

```bash
npm install
npm run dev
# http://localhost:3000 で確認
```

## ビルド

```bash
npm run build
npm start
```

## 技術スタック

- **Next.js 15** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS**
- **Recharts**（レーダーチャート）
- **PWA**（Service Worker + manifest.json）

## カスタマイズ

### コーチング予約フォームURLの設定

`components/ResultScreen.tsx` の `COACHING_URL` 定数を実際のURLに変更してください：

```typescript
const COACHING_URL = "https://your-form-url.com";
```

### アイコン画像の差し替え

`public/icons/` フォルダに以下のサイズのPNG画像を配置してください：

- `icon-192x192.png`
- `icon-512x512.png`
