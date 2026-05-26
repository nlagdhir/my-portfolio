'use client'

import { trackCalendlyOpen } from '@/lib/gtag'

interface Props {
  source: string
  className?: string
  children: React.ReactNode
}

/**
 * Drop-in replacement for <a href="https://calendly.com/nilesh-nlagdhir">.
 * Fires trackCalendlyOpen(source) on click so GA4 records a micro-conversion
 * even when the user opens Calendly in a new tab (not the embedded widget).
 */
export default function CalendlyLink({ source, className, children }: Props) {
  return (
    <a
      href="https://calendly.com/nilesh-nlagdhir"
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackCalendlyOpen(source)}
      className={className}
    >
      {children}
    </a>
  )
}
