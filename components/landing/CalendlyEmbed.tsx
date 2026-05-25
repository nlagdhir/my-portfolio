'use client'

import Script from 'next/script'

export default function CalendlyEmbed() {
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
