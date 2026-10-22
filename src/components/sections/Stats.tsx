import { stats } from '@/data/content';
import { Container } from '@/components/ui/Container';
import { Counter } from '@/components/ui/Counter';
import { Decor } from '@/components/ui/Decor';
import { Reveal } from '@/components/ui/Reveal';

export function Stats() {
  return (
    <section className="bg-cream text-ink relative overflow-hidden py-16 lg:py-[100px]">
      <Decor
        src="/images/decor/blob-4.webp"
        rotate={42}
        className="-bottom-32 -left-40 hidden w-[24rem] lg:block"
      />

      <Container className="relative grid gap-14 md:grid-cols-2 md:gap-0">
        {stats.map((group, i) => (
          <Reveal
            key={group.title}
            delay={i * 0.15}
            className={i === 1 ? 'md:border-ink/20 md:border-l md:pl-[94px]' : 'md:pr-[94px]'}
          >
            <h2 className="font-serif text-3xl uppercase lg:text-[2.5rem] lg:leading-[50px]">
              {group.title}
            </h2>
            <dl className="mt-8 grid grid-cols-2 gap-x-8 gap-y-10 lg:mt-[25px] lg:grid-cols-[2fr_1fr] lg:gap-y-[28px]">
              {group.items.map((item) => (
                <div key={item.label} className="flex flex-col-reverse gap-1">
                  <dt className="text-sm font-semibold tracking-[0.1em] uppercase lg:text-base">
                    {item.label}
                  </dt>
                  <dd className="type-stat text-gold">
                    <Counter
                      value={item.value}
                      suffix={'suffix' in item ? item.suffix : undefined}
                      pad={'pad' in item ? item.pad : undefined}
                    />
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        ))}
      </Container>
    </section>
  );
}
