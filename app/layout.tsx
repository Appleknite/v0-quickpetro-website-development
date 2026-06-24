import type { Metadata } from 'next'
import { IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-sans',
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'QuickPetro | Thermic Fluid System Specialists — Ahmedabad, Gujarat',
  description:
    'QuickPetro specializes in thermic fluid system cleaning, filtration, and NABL-accredited fluid analysis. 26+ years experience. Serving 900+ industrial plants across India. Based in Ahmedabad, Gujarat.',
  keywords:
    'thermic fluid cleaning, thermic oil filtration, heat transfer fluid analysis, thermic fluid system maintenance, industrial thermic fluid services, Ahmedabad, Gujarat, India',
  authors: [{ name: 'QuickPetro', url: 'https://quickpetro.com' }],
  openGraph: {
    title: 'QuickPetro | Thermic Fluid System Specialists',
    description:
      '26+ years experience in thermic fluid cleaning, filtration, and NABL-accredited analysis. 900+ industrial plants served across India.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'QuickPetro',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'QuickPetro | Thermic Fluid System Specialists',
    description:
      '26+ years. 900+ industrial plants. Thermic fluid cleaning, filtration & NABL analysis.',
  },
  alternates: {
    canonical: 'https://quickpetro.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://quickpetro.com/#organization',
  name: 'QuickPetro',
  description:
    'Thermic fluid system cleaning, filtration, and NABL-accredited fluid analysis services for industrial plants across India.',
  url: 'https://quickpetro.com',
  telephone: '+919825044917',
  email: 'quickpetro@gmail.com',
  foundingDate: '1998',
  founder: {
    '@type': 'Person',
    name: 'Dhavalkumar Gandhi',
    jobTitle: 'Senior Engineering Specialist',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Pushkar Industrial Estate, Phase-1, GIDC, Vatva',
    addressLocality: 'Ahmedabad',
    addressRegion: 'Gujarat',
    postalCode: '382445',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 22.9576,
    longitude: 72.6369,
  },
  areaServed: { '@type': 'Country', name: 'India' },
  serviceType: [
    'Thermic Fluid System Cleaning',
    'Thermic Fluid Filtration',
    'Thermic Fluid Analysis',
    'Heat Transfer System Maintenance',
  ],
  sameAs: ['https://wa.me/919825044917'],
  knowsAbout: [
    'Thermic fluid systems',
    'Heat transfer fluid maintenance',
    'Industrial plant maintenance',
    'NABL accredited oil testing',
    'Carbon sludge removal',
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  provider: { '@id': 'https://quickpetro.com/#organization' },
  serviceType: 'Thermic Fluid System Maintenance',
  areaServed: { '@type': 'Country', name: 'India' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Thermic Fluid Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Online Thermic Fluid Filtration',
          description: 'Continuous filtration to 2 microns without plant shutdown.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Thermic Fluid System Cleaning',
          description:
            'Full chemical flush to remove carbon deposits and restore 85-95% efficiency.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'NABL-Accredited Fluid Analysis',
          description:
            'ISO 17025-compliant testing across 9 parameters including flash point, viscosity, and TAN.',
        },
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${ibmPlexSans.variable} ${ibmPlexMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* GEO signals */}
        <meta name="geo.region" content="IN-GJ" />
        <meta name="geo.placename" content="Ahmedabad" />
        <meta name="geo.position" content="22.9576;72.6369" />
        <meta name="ICBM" content="22.9576, 72.6369" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      </head>
      <body className="bg-surface antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
        {process.env.NODE_ENV === 'production' && <SpeedInsights />}
      </body>
    </html>
  )
}
