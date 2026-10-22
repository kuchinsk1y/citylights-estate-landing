import Image, { type ImageProps } from 'next/image';
import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

type FramedImageProps = Omit<ImageProps, 'fill' | 'className'> & {
  /** Which corner the gold outline peeks out from. */
  frame?: 'bottom-left' | 'top-left';
  className?: string;
  imageClassName?: string;
  children?: ReactNode;
};

const frames = {
  'bottom-left':
    'bottom-[calc(var(--fy)*-1)] left-[calc(var(--fx)*-1)] right-[var(--fx)] top-[var(--fy)]',
  'top-left':
    'top-[calc(var(--fy)*-1)] left-[calc(var(--fx)*-1)] right-[var(--fx)] bottom-[var(--fy)]',
} as const;

/** Rounded image with an offset gold outline — the signature frame from the design. */
export function FramedImage({
  frame = 'bottom-left',
  className,
  imageClassName,
  children,
  alt,
  sizes,
  ...image
}: FramedImageProps) {
  return (
    <div
      className={cn(
        'group relative [--fx:12px] [--fy:16px] md:[--fx:18px] md:[--fy:23px]',
        className,
      )}
    >
      <span
        aria-hidden
        className={cn(
          'border-gold pointer-events-none absolute rounded-[10px] border transition-all duration-700 ease-out group-hover:[--fx:6px] group-hover:[--fy:8px]',
          frames[frame],
        )}
      />
      <div className="relative size-full overflow-hidden rounded-[10px]">
        <Image
          fill
          quality={90}
          alt={alt}
          sizes={sizes}
          className={cn(
            'object-cover transition-transform duration-1000 ease-out group-hover:scale-105',
            imageClassName,
          )}
          {...image}
        />
        {children}
      </div>
    </div>
  );
}
