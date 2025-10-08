import { createTranslator } from 'next-intl/server';

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  reactStrictMode: true,
  poweredByHeader: false,
  eslint: {
    dirs: ['app', 'components', 'lib', 'tests'],
  },
  headers: async () => [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'Content-Security-Policy',
          value:
            "default-src 'self'; connect-src 'self' https://*.stripe.com; frame-src 'self' https://*.stripe.com; img-src 'self' data: https://*.stripe.com; script-src 'self' 'unsafe-inline' https://*.stripe.com; style-src 'self' 'unsafe-inline';",
        },
        {
          key: 'Referrer-Policy',
          value: 'strict-origin-when-cross-origin',
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
        {
          key: 'X-Frame-Options',
          value: 'DENY',
        },
      ],
    },
  ],
};

export default nextConfig;
