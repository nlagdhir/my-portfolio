/**
 * Google Analytics 4 event tracking helpers
 * All functions are no-ops when GA is not configured or on the server.
 */

declare global {
  interface Window {
    gtag:      (...args: unknown[]) => void
    dataLayer: unknown[]
    clarity:   (...args: unknown[]) => void
  }
}

function track(action: string, params?: Record<string, unknown>) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return
  window.gtag('event', action, params ?? {})
}

// ── Conversion events ────────────────────────────────────────────────────────

/** Primary: contact form submitted successfully */
export function trackFormSubmit() {
  track('generate_lead', { method: 'contact_form' })
}

/** Primary: Calendly booking completed */
export function trackCalendlyBooked(source = 'unknown') {
  track('calendly_booking', { source, value: 1, currency: 'USD' })
  // Also push to Clarity for session tagging
  window.clarity?.('set', 'conversion', 'calendly_booking')
}

/** Secondary: WhatsApp CTA clicked */
export function trackWhatsAppClick(source: string) {
  track('whatsapp_click', { source })
}

/** Optional: Calendly widget opened (micro-conversion) */
export function trackCalendlyOpen(source = 'unknown') {
  track('calendly_open', { source })
}
