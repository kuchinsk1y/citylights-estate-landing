import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { About } from '@/components/sections/About';
import { Apartments } from '@/components/sections/Apartments';
import { Hero } from '@/components/sections/Hero';
import { News } from '@/components/sections/News';
import { Newsletter } from '@/components/sections/Newsletter';
import { Slogan } from '@/components/sections/Slogan';
import { Stats } from '@/components/sections/Stats';
import { WhyUs } from '@/components/sections/WhyUs';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Stats />
        <WhyUs />
        <Slogan />
        <Apartments />
        <News />
      </main>
      <Newsletter />
      <Footer />
    </>
  );
}
