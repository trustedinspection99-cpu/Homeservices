import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { Analytics } from '@/components/Analytics';
import { siteConfig } from '@/lib/config';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'Home Services Pro - Affordable Professional Services Across Canada',
    template: '%s | Home Services Pro'
  },
  description: 'Affordable professional home services including cleaning, repairs, installation, outdoor maintenance, and seasonal services. Verified professionals serving all major Canadian cities.',
  keywords: 'home services, cleaning, handyman, repairs, installation, lawn care, Canada, affordable, professional',
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: 'Home Services Pro - Affordable Professional Services',
    description: 'Professional home services from verified experts. Book trusted professionals for cleaning, repairs, and more across Canada.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Home Services Pro - Affordable Professional Services',
    description: 'Professional home services at competitive prices across Canada.',
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
      <head>
        <Analytics />
      </head>
      <body className={inter.className}>
        <ErrorBoundary>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ErrorBoundary>
      </body>
    </html>
  );
}
