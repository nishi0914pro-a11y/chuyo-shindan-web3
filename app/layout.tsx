import type { Metadata, Viewport } from "next";
import "./globals.css";
import ServiceWorkerRegister from "@/components/ServiceWorkerRegister";

export const metadata: Metadata = {
  title: "中庸診断 | 認知の歪みを可視化する",
  description: "30の質問に答えて、あなたの認知の歪みを10種類のタイプで可視化します。認知の偏りを知り、より中庸な思考へ。",
  keywords: ["中庸診断", "認知の歪み", "認知行動療法", "CBT", "自己診断", "内向型"],
  authors: [{ name: "中庸診断" }],
  openGraph: {
    title: "中庸診断 | 認知の歪みを可視化する",
    description: "30の質問に答えて、あなたの認知の歪みを10種類のタイプで可視化します。",
    type: "website",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "中庸診断 | 認知の歪みを可視化する",
    description: "30の質問に答えて、あなたの認知の歪みを10種類のタイプで可視化します。",
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "中庸診断",
  },
};

export const viewport: Viewport = {
  themeColor: "#003366",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body className="min-h-screen bg-gray-50">
        <ServiceWorkerRegister />
        {children}
      </body>
    </html>
  );
}
