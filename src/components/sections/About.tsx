import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Decor } from '@/components/ui/Decor';
import { FramedImage } from '@/components/ui/FramedImage';
import { Reveal } from '@/components/ui/Reveal';

export function About() {
  return (
    <section id="about" className="bg-ink relative overflow-hidden py-20 lg:py-[110px]">
      <Decor
        src="/images/decor/blob-3.webp"
        rotate={33}
        className="bottom-0 -left-64 w-[28rem] lg:top-24 lg:bottom-auto lg:-left-[24rem] lg:w-[34rem]"
        float
      />
      <Decor src="/images/decor/dots-1.webp" className="top-10 -left-24 hidden w-56 lg:block" />
      <Decor
        src="/images/decor/blob-1.webp"
        rotate={58}
        className="-right-48 -bottom-32 w-[28rem] lg:-right-60 lg:-bottom-48 lg:w-[40rem]"
      />
      <Decor
        src="/images/decor/blob-2.webp"
        rotate={158}
        className="-right-40 -bottom-24 w-[22rem] lg:-right-48 lg:-bottom-36 lg:w-[34rem]"
        float
      />

      <Container className="relative grid items-center gap-16 lg:grid-cols-[minmax(0,611px)_1fr] lg:gap-10">
        <div className="flex flex-col items-start gap-8 lg:gap-10">
          <Reveal>
            <p className="eyebrow">About us</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="type-h2 text-gold">
              Simplifying your home finding hassles with hundreds of luxurious properties
            </h2>
          </Reveal>
          <Reveal delay={0.2} className="max-w-[457px] leading-[30px]">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet convallis
              metus, vitae mattis ipsum. Suspendisse luctus ipsum ac sem pharetra tincidunt.
              Praesent fermentum tincidunt viverra.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <Button href="#apartments">Explore</Button>
          </Reveal>
        </div>

        <div className="relative mx-auto h-[420px] w-full max-w-[640px] sm:h-[540px] lg:mx-0 lg:h-[640px] lg:max-w-none">
          <Reveal x={40} y={0} className="absolute top-0 right-[4%] h-[82%] w-[44%] lg:right-[3%]">
            <FramedImage
              frame="bottom-left"
              src="/images/hero/window.webp"
              alt="Sunlit apartment wall with soft window shadows"
              sizes="(min-width: 1024px) 400px, 40vw"
              className="size-full"
            />
          </Reveal>
          <Reveal
            x={-40}
            y={0}
            delay={0.15}
            className="absolute bottom-0 left-0 w-[64%] lg:left-[2%]"
          >
            <FramedImage
              frame="top-left"
              src="/images/hero/bedroom.webp"
              alt="Elegant bedroom interior with framed art"
              sizes="(min-width: 1024px) 584px, 60vw"
              className="aspect-[584/398] w-full"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
