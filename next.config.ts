import type { NextConfig } from "next";

const repo = process.env.GITHUB_REPOSITORY?.split("/")[1];
const isGhActions = process.env.GITHUB_ACTIONS === "true";
// Project Pages: /STUDIO-COLLECTIVE - set NEXT_PUBLIC_BASE_PATH locally if needed
const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH ??
  (isGhActions && repo && !repo.endsWith(".github.io") ? `/${repo}` : "");

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
};

export default nextConfig;
