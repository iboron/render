/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/:path*',
                destination: `/`,
            },
        ]
    },
    output: 'export',
    distDir: 'dist',
    trailingSlash: true,
}

module.exports = nextConfig
