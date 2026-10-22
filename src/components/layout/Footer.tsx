import Image from 'next/image';
import Link from 'next/link';
import { contact, navLinks, socials } from '@/data/content';
import { Container } from '@/components/ui/Container';
import { CurrentYear } from '@/components/ui/CurrentYear';
import { Decor } from '@/components/ui/Decor';
import { Logo } from '@/components/ui/Logo';
import { Reveal } from '@/components/ui/Reveal';

const linkStyles = 'transition-colors duration-300 hover:text-gold focus-visible:text-gold';

export function Footer() {
  return (
    <footer id="contact" className="bg-ink relative overflow-hidden border-t border-white/20">
      <Decor
        src="/images/decor/blob-1.webp"
        rotate={-69}
        className="-right-56 -bottom-48 w-[30rem] lg:-right-72 lg:w-[42rem]"
        float
      />
      <Decor
        src="/images/decor/blob-2.webp"
        rotate={108}
        className="top-0 -right-40 w-[26rem] lg:-right-32 lg:w-[40rem]"
      />

      <Container className="relative grid md:grid-cols-2">
        <Reveal className="flex flex-col items-center gap-8 border-b border-white/20 py-16 text-center md:border-r md:border-b-0 md:py-[84px]">
          <div className="h-44 lg:h-[251px]">
            <Logo variant="large" />
          </div>
          <p>
            © <CurrentYear /> CityLights Realty. All rights reserved.
          </p>
        </Reveal>

        <Reveal
          delay={0.15}
          className="flex flex-col gap-12 py-16 md:py-[84px] md:pl-16 lg:pl-[198px]"
        >
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold uppercase">Sitemap</h2>
            <ul className="flex flex-wrap gap-x-10 gap-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkStyles}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold uppercase">Contact</h2>
            <address className="flex flex-col gap-6 not-italic">
              <a href={`https://${contact.site}`} className={linkStyles}>
                {contact.site}
              </a>
              <a href={`mailto:${contact.email}`} className={linkStyles}>
                {contact.email}
              </a>
            </address>
          </div>

          <ul className="flex gap-[39px]">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  aria-label={social.label}
                  className="block size-6 transition duration-300 hover:-translate-y-1 hover:opacity-70"
                >
                  <Image src={social.icon} alt="" width={24} height={24} />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </footer>
  );
}
