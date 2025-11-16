import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Food Delivery Nawalapitiya | Oyo Eats - 30km Coverage | 10AM-11PM',
  description: 'Order food, pharmacy items & pet supplies in Nawalapitiya (30km radius). Fast 20-30 min delivery from local businesses. Download Oyo Eats app - Call +94 72 878 7872',
  keywords: [
    'food delivery Nawalapitiya',
    'restaurant delivery Nawalapitiya',
    'pharmacy delivery Nawalapitiya',
    'pet supplies delivery Nawalapitiya',
    'Oyo Eats',
    'local delivery Sri Lanka',
    'Nawalapitiya food delivery',
    '30km delivery Nawalapitiya',
    'Central Province delivery',
    'fast delivery Nawalapitiya',
    '24/7 pharmacy Nawalapitiya'
  ],
  authors: [{ name: 'Oyo Eats' }],
  creator: 'Oyo Eats',
  publisher: 'Oyo Eats',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://oyoeats.lk'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Food Delivery Nawalapitiya | Oyo Eats - 30km Coverage',
    description: 'Order food, pharmacy items & pet supplies in Nawalapitiya (30km radius). Fast 20-30 min delivery. Call +94 72 878 7872',
    url: 'https://oyoeats.lk',
    siteName: 'Oyo Eats',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Oyo Eats - Food Delivery Nawalapitiya Sri Lanka',
      },
    ],
    locale: 'en_LK',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Food Delivery Nawalapitiya | Oyo Eats - 30km Coverage',
    description: 'Order food, pharmacy items & pet supplies in Nawalapitiya. Fast 20-30 min delivery. Call +94 72 878 7872',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};
