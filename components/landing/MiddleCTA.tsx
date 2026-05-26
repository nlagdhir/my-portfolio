'use client'

import CalendlyLink from '@/components/CalendlyLink'
import { trackWhatsAppClick } from '@/lib/gtag'

const WHATSAPP = 'https://wa.me/919510110198'

interface MiddleCTAProps {
  headline: string
  subtext: string
  primaryText: string
}

export default function MiddleCTA({ headline, subtext, primaryText }: MiddleCTAProps) {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-violet-600 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">{headline}</h2>
        <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">{subtext}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <CalendlyLink
            source="middle_cta"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-blue-600 font-bold text-base hover:bg-blue-50 transition-colors shadow-lg"
          >
            📅 {primaryText}
          </CalendlyLink>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('middle_cta')}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 border border-white/30 text-white font-semibold text-base hover:bg-white/20 transition-colors"
          >
            💬 Prefer chatting? Message on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
