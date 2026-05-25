'use client'

import { useEffect } from 'react'
import Script from 'next/script'
import { trackCalendlyBooked } from '@/lib/gtag'

export default function CalendlyEmbed() {
  useEffect(() => {
    function handleMessage(e: MessageEvent) {
      if (e.origin !== 'https://calendly.com') return
      if (e.data?.event === 'calendly.event_scheduled') {
        trackCalendlyBooked('inline_embed')
      }
    }
    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  return (
    <>
      <div
        className="calendly-inline-widget w-full rounded-2xl overflow-hidden border border-slate-100 shadow-sm"
        data-url="https://calendly.com/nilesh-nlagdhir?hide_gdpr_banner=1"
        style={{ minWidth: '320px', height: '700px' }}
      />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />
    </>
  )
}
