/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:slug*',
        destination: 'http://backend:8000/api/:slug*',
      },
    ];
  },
};

module.exports = nextConfig;
