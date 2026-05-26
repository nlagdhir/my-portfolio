import type { Metadata, Viewport } from 'next'
import '../globals.css'
import Link from 'next/link'
import Analytics from '@/components/Analytics'
import CalendlyLink from '@/components/CalendlyLink'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0f172a',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://www.nlagdhir.in'),
}

export default function LandingLayout({ children }: { children: React.ReactNode }) {
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
        <Analytics />
        {/* Minimal header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Link
                href="/"
                className="text-lg font-bold text-slate-900 hover:text-blue-600 transition-colors"
              >
                Nilesh Lagdhir
              </Link>
              <CalendlyLink
                source="landing_header"
                className="inline-flex items-center px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-colors"
              >
                Book a Free Call
              </CalendlyLink>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main>{children}</main>

        {/* Minimal footer */}
        <footer className="py-8 border-t border-slate-100">
          <p className="text-center text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Nilesh Lagdhir. All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  )
}
