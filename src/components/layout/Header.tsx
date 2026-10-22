'use client';

import { AnimatePresence, motion } from 'motion/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { navLinks } from '@/data/content';
import { cn } from '@/lib/cn';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Logo } from '@/components/ui/Logo';

const linkStyles =
  "relative py-1 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-gold after:transition-transform after:duration-300 hover:text-gold hover:after:scale-x-100 focus-visible:text-gold focus-visible:after:scale-x-100 focus-visible:outline-none after:content-['']";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const compact = scrolled || open;

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-[background-color,padding,backdrop-filter] duration-500',
          compact ? 'bg-ink/90 py-3 backdrop-blur-md' : 'py-5 xl:py-9',
        )}
      >
        <Container className="grid grid-cols-[1fr_auto_1fr] items-center">
          <nav aria-label="Primary" className="hidden items-center gap-10 xl:flex 2xl:gap-14">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={linkStyles}>
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            href="#top"
            aria-label="CityLights Realty — back to top"
            className={cn(
              'col-start-1 row-start-1 transition-[height] duration-500 xl:col-start-2',
              compact ? 'h-12 xl:h-16' : 'h-14 xl:h-[108px]',
            )}
          >
            <Logo />
          </Link>

          <div className="hidden items-center justify-end gap-8 xl:flex 2xl:gap-12">
            <Link href="#" className={linkStyles}>
              Log in
            </Link>
            <Link href="#" className={linkStyles}>
              Register
            </Link>
            <Button href="#contact" className="min-w-[137px]">
              Contact
            </Button>
          </div>

          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
            className="border-gold/60 col-start-3 row-start-1 ml-auto flex size-11 flex-col items-center justify-center gap-[7px] rounded-[10px] border xl:hidden"
          >
            <span
              className={cn(
                'bg-gold h-px w-5 transition-transform duration-300',
                open && 'translate-y-[4px] rotate-45',
              )}
            />
            <span
              className={cn(
                'bg-gold h-px w-5 transition-transform duration-300',
                open && '-translate-y-[4px] -rotate-45',
              )}
            />
          </button>
        </Container>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-ink fixed inset-0 z-40 flex flex-col px-5 pt-28 pb-10 sm:px-8 xl:hidden"
          >
            <nav aria-label="Mobile" className="flex flex-col gap-2">
              {[...navLinks, { label: 'Log in', href: '#' }, { label: 'Register', href: '#' }].map(
                (link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08 * i, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="hover:text-gold block border-b border-white/10 py-4 font-serif text-3xl uppercase transition-colors"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ),
              )}
            </nav>
            <Button href="#contact" onClick={() => setOpen(false)} className="mt-auto w-full">
              Contact
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
