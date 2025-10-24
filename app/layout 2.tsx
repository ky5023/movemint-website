// app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'MoveMint - 移動を、価値ある時間に変える',
  description: '移動を価値ある時間に変える MoveMint の紹介サイト',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        {children}
        <Script src="/movemint-website/script.js" strategy="afterInteractive" />
      </body>
    </html>
  )
}