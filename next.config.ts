import type { NextConfig } from "next";

// basePath is only needed for GitHub Pages deployment (subpath: /csrfivepillarsframework)
// During local dev, the basePath must be empty so the root URL (/) works for the preview panel.
const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  ...(isGitHubPages
    ? {
        basePath: "/csrfivepillarsframework",
        assetPrefix: "/csrfivepillarsframework/",
      }
    : {}),
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
