/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Basic redirect
      {
        source: "/",
        destination: "/example",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
