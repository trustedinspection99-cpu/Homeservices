import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://homeservicespro.ca'),
  title: {
    default: 'Home Services Pro - Affordable Professional Services Across Canada',
    template: '%s | Home Services Pro'
  },
  description: 'Affordable professional home services including cleaning, repairs, installation, outdoor maintenance, and seasonal services. Lower prices than competitors. Serving all major Canadian cities.',
  keywords: 'home services, cleaning, handyman, repairs, installation, lawn care, Canada, affordable, professional',
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://homeservicespro.ca',
    siteName: 'Home Services Pro',
    title: 'Home Services Pro - Affordable Professional Services',
    description: 'Professional home services at prices lower than the competition. Book trusted experts for cleaning, repairs, and more.',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Home Services Pro - Affordable Professional Services',
    description: 'Professional home services at unbeatable prices across Canada.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
