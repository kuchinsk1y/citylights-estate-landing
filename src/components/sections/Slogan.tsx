import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Decor } from '@/components/ui/Decor';
import { Reveal } from '@/components/ui/Reveal';
import { cn } from '@/lib/cn';

/** Photo that scales with the surrounding headline (sizes are in em). */
function InlinePhoto({ src, className }: { src: string; className: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        'relative inline-block shrink-0 overflow-hidden rounded-[4px] align-middle',
        className,
      )}
    >
      <Image
        src={src}
        alt=""
        fill
        sizes="(min-width: 1024px) 460px, 40vw"
        className="object-cover transition-transform duration-1000 hover:scale-110"
      />
    </span>
  );
}

const line = 'flex flex-wrap items-center justify-center gap-x-[0.28em] gap-y-2';

export function Slogan() {
  return (
    <section className="bg-cream text-ink relative overflow-hidden pt-20 pb-6 lg:pt-[120px]">
      <Decor
        src="/images/decor/blob-3.webp"
        rotate={33}
        className="-top-24 -left-40 w-[22rem] lg:-left-32 lg:w-[34rem]"
      />
      <Decor src="/images/decor/dots-1.webp" className="top-4 -left-10 w-48 lg:w-72" />

      <Container className="relative">
        <h2 className="type-slogan flex flex-col items-center gap-[0.15em] text-center">
          <Reveal className={line}>
            <span>Luxury is Built-In</span>
            <InlinePhoto src="/images/slogan/tower.webp" className="h-[1.33em] w-[2.33em]" />
          </Reveal>
          <Reveal delay={0.1} className={line}>
            <span>Smartly</span>
            <InlinePhoto src="/images/slogan/building.webp" className="h-[1.8em] w-[1.48em]" />
            <span>Priced</span>
            <InlinePhoto src="/images/slogan/family.webp" className="h-[1.8em] w-[1.65em]" />
          </Reveal>
          <Reveal delay={0.2} className={line}>
            <span>Ready For</span>
            <InlinePhoto src="/images/slogan/living-room.webp" className="h-[1.84em] w-[4.5em]" />
            <span>Move-In!</span>
          </Reveal>
        </h2>
      </Container>
    </section>
  );
}
