import Image from 'next/image';
import { cn } from '@/lib/cn';

type DecorProps = {
  src: string;
  /** Positioning and sizing classes, e.g. "-right-40 bottom-0 w-[40rem]". */
  className?: string;
  rotate?: number;
  float?: boolean;
};

/** Decorative gold/marble shape. Purely visual, hidden from assistive tech. */
export function Decor({ src, className, rotate = 0, float = false }: DecorProps) {
  return (
    <div
      aria-hidden
      className={cn('pointer-events-none absolute -z-0 aspect-square select-none', className)}
    >
      <div
        className={cn('relative size-full', float && 'animate-float')}
        style={{ rotate: `${rotate}deg` }}
      >
        <Image
          src={src}
          alt=""
          fill
          sizes="(min-width: 1024px) 40vw, 80vw"
          className="object-contain"
        />
      </div>
    </div>
  );
}
