import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "docs", // ← GitHub Pages用に出力先をdocsに変更
  basePath: "/movemint-website", // ← ここが重要！！
  assetPrefix: "/movemint-website/", // ← これを追加！
  images: { unoptimized: true },
};

export default nextConfig;