'use client';

import { motion, type HTMLMotionProps } from 'motion/react';

type RevealProps = HTMLMotionProps<'div'> & {
  delay?: number;
  y?: number;
  x?: number;
};

/** Fades and slides its children in once they scroll into view. */
export function Reveal({ delay = 0, y = 32, x = 0, ...props }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '0px 0px -80px 0px' }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    />
  );
}
