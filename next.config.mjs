/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.codewars.com',
                port: '',
                pathname: '/users/OtmarKirch/badges/micro',
            },
        ],
    },
};

export default nextConfig;
