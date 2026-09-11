import type { NextConfig } from "next";

const isExport = process.env.GH_PAGES === "true";
const basePath = isExport ? "/Druh" : "";

const nextConfig: NextConfig = {
  ...(basePath ? { basePath } : {}),
  ...(isExport ? { output: "export" as const, trailingSlash: true } : {}),
  images: isExport
    ? { unoptimized: true }
    : {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "cdn-media.choiceqr.com",
            pathname: "/**",
          },
        ],
      },
};

export default nextConfig;