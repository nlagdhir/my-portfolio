import type { Metadata, Viewport } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import FloatingCTA from '@/components/FloatingCTA'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0f172a',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://www.nlagdhir.in'),
  title: {
    default: 'Nilesh Lagdhir – Web Development, AI Automation & MVP Development Partner',
    template: '%s | Nilesh Lagdhir',
  },
  description:
    'Helping startups and businesses build custom web applications, AI-powered automation systems, WhatsApp solutions, voice agents, and scalable software products. 7+ years experience, 100+ projects delivered.',
  keywords: [
    'Web Development Services',
    'Next.js Development',
    'Laravel Development',
    'AI Automation Services',
    'WhatsApp Automation',
    'AI Voice Agent Development',
    'Startup MVP Development',
    'Custom Web Application Development',
    'Business Process Automation',
    'React Developer India',
    'Full Stack Developer',
    'SaaS Development',
  ],
  authors: [{ name: 'Nilesh Lagdhir', url: 'https://www.nlagdhir.in' }],
  creator: 'Nilesh Lagdhir',
  publisher: 'Nilesh Lagdhir',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.nlagdhir.in',
    siteName: 'Nilesh Lagdhir',
    title: 'Nilesh Lagdhir – Web Development, AI Automation & MVP Development',
    description:
      'Helping startups and businesses build custom web applications, AI-powered automation systems, and scalable software products.',
    images: [
      {
        url: '/api/og',
        width: 1200,
        height: 630,
        alt: 'Nilesh Lagdhir – Technology Partner for Startups & Businesses',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nilesh Lagdhir – Web Development, AI Automation & MVP Development',
    description:
      'Helping startups and businesses build web apps, AI automations, and scalable software.',
    images: ['/api/og'],
    creator: '@nlagdhir',
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
  alternates: {
    canonical: 'https://www.nlagdhir.in',
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-white">
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  )
}
