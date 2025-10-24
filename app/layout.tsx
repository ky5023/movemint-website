import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MoveMint - 移動を、価値ある時間に変える',
  description: '交通オープンデータ × AI で移動を最適化するプラットフォーム',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}