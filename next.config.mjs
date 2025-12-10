/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/Portfolio_",
  assetPrefix: "/Portfolio_/",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
