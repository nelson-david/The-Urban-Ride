import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "s1.cdn.autoevolution.com",
                pathname: "**",
            },
        ],
    },
};

export default nextConfig;
