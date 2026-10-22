'use client';

import { AnimatePresence, motion } from 'motion/react';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { apartments } from '@/data/content';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Decor } from '@/components/ui/Decor';
import { Reveal } from '@/components/ui/Reveal';

export function Apartments() {
  const [active, setActive] = useState(0);
  const scroller = useRef<HTMLUListElement>(null);
  const current = apartments[active];
  const others = apartments
    .map((item, index) => ({ item, index }))
    .filter((x) => x.index !== active);

  const scrollNext = () => {
    const el = scroller.current;
    if (!el) return;
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
    el.scrollTo({ left: atEnd ? 0 : el.scrollLeft + el.clientWidth * 0.6, behavior: 'smooth' });
  };

  return (
    <section
      id="apartments"
      className="bg-cream text-ink relative overflow-hidden py-16 lg:py-[100px]"
    >
      <Decor
        src="/images/decor/blob-5.webp"
        rotate={-128}
        className="-right-40 -bottom-40 w-[22rem] lg:-right-52 lg:w-[34rem]"
        float
      />

      <Container className="relative grid grid-cols-[minmax(0,1fr)] gap-10 lg:grid-cols-[532px_minmax(0,1fr)] lg:gap-x-[58px]">
        <Reveal className="relative aspect-[532/674] w-full max-w-[532px] justify-self-center lg:row-span-2 lg:max-w-none lg:justify-self-start">
          <div
            aria-hidden
            className="border-gold absolute inset-0 -translate-x-3 translate-y-4 rounded-[10px] border lg:-translate-x-[21px] lg:translate-y-[26px]"
          />
          <div className="bg-ink relative size-full overflow-hidden rounded-[10px]">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={current.image}
                  alt={current.title}
                  fill
                  quality={90}
                  sizes="(min-width: 1024px) 532px, 90vw"
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-b from-transparent to-black/80" />
                <div className="absolute inset-x-6 bottom-8 flex items-end justify-between gap-4 text-white sm:inset-x-[84px]">
                  <div className="flex flex-col gap-3">
                    <span className="eyebrow text-[#ececec]">
                      {String(active + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-xl leading-[30px] font-semibold text-[#fafafa] uppercase">
                      {current.title}
                    </h3>
                    <p>{current.subtitle}</p>
                  </div>
                  <Image
                    src="/icons/arrow.svg"
                    alt=""
                    width={19}
                    height={19}
                    className="mb-1 shrink-0"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="flex items-start justify-between gap-6">
          <h2 className="type-slogan !text-[clamp(2.75rem,8vw,9.375rem)] !leading-[0.87]">
            Outstanding Apartments
          </h2>
          <Button href="#apartments" className="hidden sm:inline-flex">
            Explore
          </Button>
        </Reveal>

        <Reveal delay={0.2} className="relative self-end">
          <ul
            ref={scroller}
            aria-label="More apartments"
            className="no-scrollbar -mr-5 flex snap-x gap-5 overflow-x-auto pr-5 sm:-mr-8 sm:pr-8 lg:-mr-10 lg:gap-[35px] lg:pr-10 2xl:-mr-[calc((100vw-1533px)/2)] 2xl:pr-[calc((100vw-1533px)/2)]"
          >
            {others.map(({ item, index }) => (
              <li key={item.title} className="snap-start">
                <button
                  type="button"
                  onClick={() => setActive(index)}
                  aria-label={`Show ${item.title}`}
                  className="group focus-visible:outline-gold relative block aspect-[211/314] w-[160px] overflow-hidden rounded-[10px] outline-offset-4 focus-visible:outline-2 sm:w-[190px] lg:w-[211px]"
                >
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    quality={90}
                    sizes="(min-width: 1024px) 211px, 190px"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <span className="bg-ink/0 group-hover:bg-ink/25 absolute inset-0 transition-colors duration-500" />
                </button>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={scrollNext}
            aria-label="Scroll apartments"
            className="border-gold bg-cream/80 hover:bg-gold focus-visible:outline-gold absolute top-1/2 right-2 flex size-[49px] -translate-y-1/2 items-center justify-center rounded-full border backdrop-blur transition duration-300 focus-visible:outline-2 lg:right-10"
          >
            <Image src="/icons/arrow.svg" alt="" width={19} height={19} className="invert" />
          </button>
        </Reveal>

        <Button href="#apartments" className="sm:hidden">
          Explore
        </Button>
      </Container>
    </section>
  );
}
