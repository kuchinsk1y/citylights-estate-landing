import type { Metadata } from 'next';
import { Cormorant_Garamond, Montserrat } from 'next/font/google';
import { MotionProvider } from '@/components/ui/MotionProvider';
import './globals.css';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin', 'cyrillic'],
});

const display = Cormorant_Garamond({
  variable: '--font-display',
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500'],
});

export const metadata: Metadata = {
  title: 'CityLights Realty',
  description: 'Experience the lifestyle — luxurious apartments and properties.',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${display.variable} antialiased`}>
      <body>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
