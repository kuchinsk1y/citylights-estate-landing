import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { MotionProvider } from '@/components/ui/MotionProvider';
import './globals.css';

// Self-hosted (SIL OFL) so the build does not depend on fetching Google Fonts.
const montserrat = localFont({
  src: './fonts/montserrat-latin-wght.woff2',
  variable: '--font-montserrat',
  weight: '100 900',
  display: 'swap',
});

const display = localFont({
  src: [
    { path: './fonts/cormorant-garamond-latin-400.woff2', weight: '400', style: 'normal' },
    { path: './fonts/cormorant-garamond-latin-500.woff2', weight: '500', style: 'normal' },
  ],
  variable: '--font-display',
  display: 'swap',
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
