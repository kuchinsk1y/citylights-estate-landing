import Image from 'next/image';
import { cn } from '@/lib/cn';

type LogoProps = {
  variant?: 'default' | 'large';
  className?: string;
};

const sources = {
  default: { src: '/icons/logo.svg', width: 93, height: 109 },
  large: { src: '/icons/logo-large.svg', width: 214, height: 251 },
} as const;

export function Logo({ variant = 'default', className }: LogoProps) {
  const { src, width, height } = sources[variant];
  return (
    <Image
      src={src}
      width={width}
      height={height}
      alt="CityLights Realty"
      priority={variant === 'default'}
      className={cn('h-full w-auto', className)}
    />
  );
}
