import Link from 'next/link';
import type { ComponentProps } from 'react';
import { cn } from '@/lib/cn';

const styles =
  'inline-flex h-[46px] min-w-[137px] items-center justify-center rounded-[10px] bg-gold px-[30px] font-semibold text-ink transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_-10px_rgb(205_174_126/0.9)] hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold active:translate-y-0';

type ButtonProps = ComponentProps<'button'> & { href?: undefined };
type LinkButtonProps = ComponentProps<typeof Link>;

export function Button(props: ButtonProps | LinkButtonProps) {
  if (props.href !== undefined) {
    const { className, ...rest } = props as LinkButtonProps;
    return <Link className={cn(styles, className)} {...rest} />;
  }
  const { className, type = 'button', ...rest } = props as ButtonProps;
  return <button type={type} className={cn(styles, className)} {...rest} />;
}
