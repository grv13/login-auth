import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/auth/:path*", // Match all /auth/... routes
        destination: "https://easework-auth.agreeablemeadow-f51dff9d.centralindia.azurecontainerapps.io/auth/:path*", // Replace with your FastAPI backend URL
      },
    ];
  },
};

export default nextConfig;
