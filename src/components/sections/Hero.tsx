'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import { useRef } from 'react';
import { Container } from '@/components/ui/Container';
import { SearchForm } from './SearchForm';

const ease = [0.22, 1, 0.36, 1] as const;

function Line({ children, delay }: { children: string; delay: number }) {
  return (
    <span className="block overflow-hidden pb-[0.08em]">
      <motion.span
        className="block"
        initial={{ y: '110%' }}
        animate={{ y: 0 }}
        transition={{ duration: 1.1, delay, ease }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);

  return (
    <section
      ref={ref}
      id="top"
      className="bg-ink relative isolate flex min-h-[100svh] flex-col overflow-hidden lg:min-h-[1080px]"
    >
      <motion.div style={{ y: imageY }} className="absolute inset-x-0 -top-[5%] bottom-0 -z-10">
        <Image
          src="/images/hero/city.webp"
          alt=""
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover object-[50%_35%]"
        />
        <div className="bg-ink/40 absolute inset-0" />
        <div className="from-ink absolute inset-0 bg-gradient-to-t via-transparent via-40% to-transparent" />
        <div className="from-ink absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b to-transparent" />
      </motion.div>

      <Container className="flex flex-1 flex-col pt-32 lg:pt-[260px]">
        <div className="my-auto">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease }}
            className="eyebrow lg:pl-[4%]"
          >
            Welcome to CityLights Realty
          </motion.p>

          <h1 className="type-display mt-6 lg:mt-10">
            <span className="block lg:pl-[4%]">
              <Line delay={0.25}>Experience</Line>
            </span>
            <span className="mt-1 flex items-center gap-[3vw] lg:mt-3 lg:ml-[12%]">
              <motion.span
                aria-hidden
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.9, ease }}
                className="bg-gold hidden h-px w-[8vw] origin-left lg:block"
              />
              <span className="block flex-1 whitespace-nowrap">
                <Line delay={0.45}>the Lifestyle</Line>
              </span>
            </span>
          </h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease }}
          className="mt-12 mb-10 lg:mb-[46px]"
        >
          <SearchForm />
        </motion.div>
      </Container>
    </section>
  );
}
