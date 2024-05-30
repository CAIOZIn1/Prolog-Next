/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/pt-BR',
        permanent: true,
      },
    ];
  }
};

export default nextConfig;
