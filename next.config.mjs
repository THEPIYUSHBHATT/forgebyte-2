/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: '*.figma.com'
            }
        ]
        // domains: ['figma.com']
    }
};

export default nextConfig;
