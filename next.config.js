/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects: async () => {
        return [
            {
                source: '/',
                destination: '/coming-soon',
                permanent: false,
            },
        ]
    }
}

module.exports = nextConfig
