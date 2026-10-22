'use client';

import { useId, useState, type FormEvent } from 'react';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';

type Status = 'idle' | 'success' | 'error';

export function Newsletter() {
  const id = useId();
  const [status, setStatus] = useState<Status>('idle');

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      setStatus('error');
      return;
    }
    // TODO: connect to the mailing-list provider.
    setStatus('success');
    form.reset();
  };

  return (
    <section aria-labelledby={`${id}-title`} className="bg-ink py-16 lg:py-[74px]">
      <Container>
        <Reveal className="mx-auto flex max-w-[849px] flex-col items-center gap-[30px]">
          <h2 id={`${id}-title`} className="type-h2 text-center text-white">
            Newsletter Sign-Up
          </h2>

          <form
            noValidate
            onSubmit={onSubmit}
            className="flex w-full flex-col sm:h-[78px] sm:flex-row"
          >
            <label htmlFor={`${id}-email`} className="sr-only">
              Your email
            </label>
            <input
              id={`${id}-email`}
              type="email"
              name="email"
              required
              autoComplete="email"
              placeholder="Your email"
              aria-invalid={status === 'error'}
              aria-describedby={`${id}-status`}
              onChange={() => status !== 'idle' && setStatus('idle')}
              className="focus:border-gold h-16 min-w-0 flex-1 border border-white bg-transparent px-[33px] text-white transition-colors duration-300 outline-none placeholder:text-white aria-[invalid=true]:border-red-400 sm:h-auto"
            />
            <button
              type="submit"
              className="hover:bg-gold hover:text-ink focus-visible:bg-gold focus-visible:text-ink h-14 border border-t-0 border-white px-10 font-semibold transition-colors duration-300 focus-visible:outline-none sm:h-auto sm:w-[152px] sm:border-t sm:border-l-0 sm:px-0"
            >
              Subscribe
            </button>
          </form>

          <p id={`${id}-status`} role="status" aria-live="polite" className="-mt-4 min-h-6 text-sm">
            {status === 'success' && <span className="text-gold">Thank you for subscribing!</span>}
            {status === 'error' && (
              <span className="text-red-300">Please enter a valid email address.</span>
            )}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
