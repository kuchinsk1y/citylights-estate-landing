import type { ImageLoaderProps } from 'next/image';

// The static export has no image optimizer, so images are served as pre-built files.
// The loader only adds the GitHub Pages base path in front of the public path.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export default function imageLoader({ src }: ImageLoaderProps) {
  return `${basePath}${src}`;
}
