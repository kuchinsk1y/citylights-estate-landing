import Image from 'next/image';
import Link from 'next/link';
import { articles } from '@/data/content';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Decor } from '@/components/ui/Decor';
import { Reveal } from '@/components/ui/Reveal';

export function News() {
  return (
    <section
      id="news"
      className="bg-cream text-ink relative overflow-hidden pt-6 pb-20 lg:pt-[60px] lg:pb-[110px]"
    >
      <Decor
        src="/images/decor/blob-4.webp"
        rotate={42}
        className="-bottom-24 -left-52 w-[22rem] lg:w-[34rem]"
      />

      <Container className="relative">
        <Reveal className="flex items-end justify-between gap-6">
          <div className="flex flex-col gap-3 lg:gap-[30px]">
            <p className="eyebrow !text-[10px] lg:!text-xs">News</p>
            <h2 className="font-serif text-4xl lg:text-[3.4rem] lg:leading-[55px]">
              Latest articles
            </h2>
          </div>
          <Button href="#news" className="hidden sm:inline-flex">
            Explore
          </Button>
        </Reveal>

        <ul className="mt-10 grid gap-10 md:grid-cols-3 md:gap-[55px] lg:mt-[60px]">
          {articles.map((article, i) => (
            <li key={article.title}>
              <Reveal delay={i * 0.12}>
                <article className="group flex flex-col gap-6">
                  <Link
                    href={article.href}
                    className="relative block aspect-[473/286] overflow-hidden rounded-[4px]"
                  >
                    <Image
                      src={article.image}
                      alt=""
                      fill
                      quality={90}
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                  </Link>
                  <h3 className="max-w-[420px] leading-6 font-semibold">{article.title}</h3>
                  <Link
                    href={article.href}
                    className="after:bg-ink relative w-fit pb-1 text-sm font-semibold after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-50 after:transition-transform after:duration-500 after:content-[''] hover:after:scale-x-100"
                  >
                    Read
                  </Link>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>

        <Button href="#news" className="mt-10 sm:hidden">
          Explore
        </Button>
      </Container>
    </section>
  );
}
