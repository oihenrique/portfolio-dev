import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isProd ? "/portfolio-dev" : "",
  assetPrefix: isProd ? "/portfolio-dev/" : "",
};

export default nextConfig;
