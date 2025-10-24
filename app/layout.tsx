// app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'MoveMint - Every move you make is a new mint.',
  description: 'Every move you make is a new mint. MoveMint の紹介サイト',
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