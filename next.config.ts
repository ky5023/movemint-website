// next.config.ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',                    // 静的エクスポート
  basePath: '/movemint-website',       // GitHub Pages のサブパス
  images: { unoptimized: true },       // 画像最適化を無効化
}

export default nextConfig