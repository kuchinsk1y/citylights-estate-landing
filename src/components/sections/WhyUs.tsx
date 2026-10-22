import Link from 'next/link';
import { features, highlights } from '@/data/content';
import { Container } from '@/components/ui/Container';
import { Decor } from '@/components/ui/Decor';
import { FramedImage } from '@/components/ui/FramedImage';
import { Reveal } from '@/components/ui/Reveal';

export function WhyUs() {
  return (
    <section id="gallery" className="bg-ink relative overflow-hidden py-20 lg:py-[114px]">
      <Decor
        src="/images/decor/blob-4.webp"
        rotate={42}
        className="-top-48 -left-64 w-[26rem] lg:-left-80 lg:w-[40rem]"
      />
      <Decor src="/images/decor/dots-1.webp" className="top-8 -left-16 w-48 lg:w-72" />
      <Decor
        src="/images/decor/blob-5.webp"
        rotate={-128}
        className="-right-44 -bottom-48 w-[24rem] lg:-right-52 lg:w-[34rem]"
        float
      />

      <Container className="relative">
        <Reveal className="flex flex-col items-center gap-6 text-center lg:gap-10">
          <p className="eyebrow">Why us</p>
          <h2 className="type-h2 text-gold max-w-[1085px]">
            Going Above and Beyond To Find Your Next Home
          </h2>
        </Reveal>

        <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:mt-[72px] lg:grid-cols-4 lg:gap-0">
          {features.map((feature, i) => (
            <li
              key={feature.title}
              className={i > 0 ? 'lg:border-l lg:border-white/25 lg:pl-[44px]' : undefined}
            >
              <Reveal delay={i * 0.1} className="flex flex-col gap-5">
                <span className="eyebrow">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="text-gold text-xl font-semibold uppercase lg:text-2xl lg:leading-[30px]">
                  {feature.title}
                </h3>
                <p className="max-w-[317px]">{feature.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>

        <ul className="mt-20 grid gap-14 pl-3 sm:grid-cols-2 lg:mt-[110px] lg:grid-cols-3 lg:gap-[90px] lg:pl-0">
          {highlights.map((item, i) => (
            <li key={item.title}>
              <Reveal delay={i * 0.15}>
                <Link href={item.href} className="block">
                  <FramedImage
                    src={item.image}
                    alt=""
                    sizes="(min-width: 1024px) 445px, (min-width: 640px) 45vw, 90vw"
                    className="aspect-[445/584] w-full"
                  >
                    <div className="bg-ink/45 group-hover:bg-ink/30 absolute inset-0 transition-colors duration-700" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-8 text-center">
                      <h3 className="type-h2 max-w-[349px]">{item.title}</h3>
                      <span className="relative pb-1 after:absolute after:inset-x-0.5 after:bottom-0 after:h-px after:origin-center after:bg-white after:transition-transform after:duration-500 after:content-[''] group-hover:after:scale-x-125">
                        Discover
                      </span>
                    </div>
                  </FramedImage>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
