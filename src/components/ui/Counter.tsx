'use client';

import { animate, useInView, useReducedMotion } from 'motion/react';
import { useEffect, useRef } from 'react';

type CounterProps = {
  value: number;
  suffix?: string;
  /** Minimum number of digits, e.g. 2 renders 1 as "01". */
  pad?: number;
  className?: string;
};

const format = (n: number, pad: number, suffix: string) =>
  `${Math.round(n).toString().padStart(pad, '0')}${suffix}`;

/** Counts up from zero when scrolled into view. Server-renders the final value. */
export function Counter({ value, suffix = '', pad = 0, className }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -10% 0px' });
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const node = ref.current;
    if (!node || reduceMotion) return;
    node.textContent = format(0, pad, suffix);
  }, [pad, suffix, reduceMotion]);

  useEffect(() => {
    const node = ref.current;
    if (!inView || !node || reduceMotion) return;
    const controls = animate(0, value, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        node.textContent = format(v, pad, suffix);
      },
    });
    return () => controls.stop();
  }, [inView, value, pad, suffix, reduceMotion]);

  return (
    <span ref={ref} className={className}>
      {format(value, pad, suffix)}
    </span>
  );
}
