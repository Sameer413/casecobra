/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ["utfs.io"],
    remotePatterns: [{ hostname: "utfs.io" }],

  },
};

export default nextConfig;
