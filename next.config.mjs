/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        missing: [
          {
            type: "host",
            value: "www.chimakonveksi.my.id",
          },
        ],
        destination: "https://www.chimakonveksi.my.id/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
