import type { Metadata, Viewport } from 'next';
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
};

export const metadata: Metadata = {
  title: {
    default: 'Finkfold - Qualified Real Estate Leads for Builders & Agents',
    template: '%s | Finkfold',
  },
  description:
    'Finkfold builds done-for-you lead generation systems for real estate builders and agents in India. WhatsApp qualification and CRM automation — delivering site-visit-ready leads, not cold inquiries.',
  keywords:
    'real estate lead generation India, builder lead generation, WhatsApp real estate leads, AI lead qualification real estate',
  openGraph: {
    title: 'Finkfold - Qualified Real Estate Leads for Builders & Agents',
    description:
      'Finkfold builds done-for-you lead generation systems for real estate builders and agents in India. WhatsApp qualification and CRM automation — delivering site-visit-ready leads, not cold inquiries.',
    type: 'website',
    url: 'https://finkfold.com',
    siteName: 'Finkfold',
    images: [
      {
        url: 'https://finkfold.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Finkfold - Real Estate Lead Generation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Finkfold - Qualified Real Estate Leads for Builders & Agents',
    description:
      'Done-for-you AI lead generation for real estate builders and agents in India. WhatsApp qualification and CRM automation.',
    images: ['https://finkfold.com/og-image.png'],
  },
  alternates: {
    canonical: 'https://finkfold.com',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon.png', type: 'image/png', sizes: '192x192' },
    ],
    apple: { url: '/favicon.png', sizes: '180x180' },
    shortcut: '/favicon.ico',
  },
  manifest: '/manifest.json',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  verification: {
    google: '0HAMTuM6cJzM_IZh53ao4R2mFbZioQLV8K1UYBQDHNc',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
