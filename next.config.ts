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
            {
                protocol: "https",
                hostname: "trntlohzskddgnkhavbn.supabase.co",
                pathname: "**",
            },
        ],
    },
};

export default nextConfig;
