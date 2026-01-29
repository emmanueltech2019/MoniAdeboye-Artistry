/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      // Link 1: Cloudinary
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
      // Link 2: Vamtam
      {
        protocol: 'https',
        hostname: 'coiffure.vamtam.com',
        pathname: '/**',
      },
      // Link 3: (Optional) Direct Unsplash if you ever need it
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
