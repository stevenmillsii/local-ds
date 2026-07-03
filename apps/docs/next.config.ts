import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  transpilePackages: ['@stevenmillsii/components', '@stevenmillsii/tokens', '@stevenmillsii/primitives'],
};

export default nextConfig;
