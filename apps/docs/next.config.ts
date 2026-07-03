import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  transpilePackages: ['@YOUR_ORG/components', '@YOUR_ORG/tokens', '@YOUR_ORG/primitives'],
};

export default nextConfig;
