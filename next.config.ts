import type { NextConfig } from 'next';

// Set by the GitHub Pages workflow, e.g. "/citylights-estate-landing". Empty for local dev.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

const nextConfig: NextConfig = {
  output: 'export',
  basePath,
  images: {
    // The image optimizer needs a server, so images are pre-optimized WebP files
    // and a custom loader only prepends the base path.
    loader: 'custom',
    loaderFile: './src/lib/image-loader.ts',
  },
  turbopack: {
    rules: {
      '*.css': {
        loaders: ['@tailwindcss/turbopack'],
        as: '*.css',
      },
    },
  },
};

export default nextConfig;
