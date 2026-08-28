/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  /* Dev only. Without this, `next dev` refuses to serve /_next chunks to a
     tunnelled host, so the page arrives as SSR HTML that never hydrates and
     every control — filters, the mobile menu, the video play button — is inert. */
  allowedDevOrigins: ['finch-moving-annually.ngrok-free.app'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;
