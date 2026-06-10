import type { Metadata } from 'next';
import { Outfit, Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://rajshamani.com'),
  title: 'Raj Shamani — Entrepreneur, Podcaster, Author & Speaker',
  description:
    'Raj Shamani is an Indian entrepreneur, bestselling author of "Build Don\'t Talk", host of India\'s #1 business podcast "Figuring Out", TEDx & UN speaker, and founder of Shamani Industries.',
  keywords: [
    'Raj Shamani',
    'Figuring Out podcast',
    'Build Dont Talk',
    'Indian entrepreneur',
    'motivational speaker',
    'TEDx speaker',
    'personal branding',
    'business podcast India',
  ],
  authors: [{ name: 'Raj Shamani' }],
  openGraph: {
    title: 'Raj Shamani — Entrepreneur, Podcaster, Author & Speaker',
    description:
      'From Indore to a ₹200Cr business empire. Host of Figuring Out, bestselling author, TEDx & UN speaker.',
    url: 'https://rajshamani.com',
    siteName: 'Raj Shamani',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/raj-podcast.jpeg',
        width: 1200,
        height: 630,
        alt: 'Raj Shamani',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Raj Shamani — Entrepreneur, Podcaster, Author & Speaker',
    description:
      'From Indore to a ₹200Cr business empire. Host of Figuring Out, bestselling author, TEDx & UN speaker.',
    creator: '@rajshamani',
    images: ['/images/raj-podcast.jpeg'],
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
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} ${spaceGrotesk.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Raj Shamani',
              url: 'https://rajshamani.com',
              jobTitle: 'Entrepreneur, Podcaster, Author, Speaker',
              description:
                'Indian entrepreneur, bestselling author, host of Figuring Out podcast, TEDx & UN speaker.',
              sameAs: [
                'https://www.youtube.com/@RajShamani',
                'https://www.instagram.com/rajshamani/',
                'https://x.com/rajshamani',
                'https://www.linkedin.com/in/rajshamani/',
                'https://open.spotify.com/show/figuringout',
              ],
              knowsAbout: [
                'Entrepreneurship',
                'Personal Branding',
                'Content Creation',
                'Business Growth',
              ],
            }),
          }}
        />
      </head>
      <body className="font-inter bg-primary text-text-primary antialiased">
        {/* Grain overlay */}
        <div className="grain-overlay" aria-hidden="true" />

        {children}
      </body>
    </html>
  );
}
