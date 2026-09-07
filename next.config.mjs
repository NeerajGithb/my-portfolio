/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      {
        source: '/projects/facebook',
        destination: '/projects',
        permanent: false,
      },
      {
        source: '/projects/todo',
        destination: '/projects',
        permanent: false,
      },
      {
        source: '/projects/music-web',
        destination: '/projects',
        permanent: false,
      },
      {
        source: '/projects/url-shortner',
        destination: '/projects',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
