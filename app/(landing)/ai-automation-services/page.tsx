import type { Metadata } from 'next'
import TrustBar from '@/components/landing/TrustBar'
import WhyWorkWithMeLanding from '@/components/landing/WhyWorkWithMeLanding'
import MiddleCTA from '@/components/landing/MiddleCTA'
import CalendlyEmbed from '@/components/landing/CalendlyEmbed'

export const metadata: Metadata = {
  title: 'AI Automation Services – AI Agents, Voice AI & WhatsApp Automation | Nilesh Lagdhir',
  description:
    'Custom AI automation for your business — AI agents, voice AI, and WhatsApp automation. 12+ years experience. Book a free discovery call.',
  alternates: { canonical: '/ai-automation-services' },
  openGraph: {
    title: 'AI Automation Services – AI Agents, Voice AI & WhatsApp Automation',
    description: 'Custom AI automation for your business — AI agents, voice AI, and WhatsApp automation.',
    url: '/ai-automation-services',
  },
}

const CALENDLY = 'https://calendly.com/nilesh-nlagdhir'
const WHATSAPP = 'https://wa.me/919510110198'

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How long does it take to build an AI automation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most automations go live within 1–3 weeks, depending on complexity. A WhatsApp flow for order tracking typically takes 5–7 days. A multi-channel AI agent with CRM integration can take 2–3 weeks.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does AI automation cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pricing depends on the complexity and scope of the automation. I provide a fixed-price proposal after a discovery call — no hourly billing or surprise invoices. You know the full cost before any work starts.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you work with clients outside India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. I work with clients in the USA, UK, Canada, Australia, and across India. I work across time zones and provide regular video updates so you are always in the loop.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need technical knowledge to manage the automation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. I build automations to be managed through simple dashboards or the tools you already use. I also provide a handover session and written documentation so your team is fully confident from day one.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you sign an NDA?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. I sign NDAs before any discovery call where sensitive business information is shared. Protecting your business idea is a standard part of how I work.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you provide maintenance after the project?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Every project includes a support period after launch. For ongoing maintenance, I offer monthly retainer arrangements. I also build automations with clear error alerts so issues are flagged immediately.',
      },
    },
  ],
}

export default function AIAutomationServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="bg-slate-950 pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold bg-blue-600/20 text-blue-400 border border-blue-600/30 mb-6">
            AI Automation Specialist
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 max-w-4xl mx-auto">
            Automate the Repetitive.{' '}
            <span className="text-gradient">Focus on What Grows Your Business.</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10">
            I build AI systems that handle customer queries, chase down leads, and manage internal
            workflows — around the clock, without hiring more staff.
          </p>

          {/* Top CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white font-bold text-lg hover:opacity-90 transition-opacity shadow-lg"
            >
              📅 Book Free Consultation
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl border border-slate-700 text-slate-300 font-semibold text-lg hover:border-slate-500 hover:text-white transition-colors"
            >
              See How It Works
            </a>
          </div>

          {/* WhatsApp secondary CTA */}
          <div className="mt-5 flex items-center justify-center gap-2 text-slate-500">
            <span className="text-sm">or</span>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-green-400 hover:text-green-300 transition-colors"
            >
              💬 Prefer chatting? Message on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ── Trust Bar ────────────────────────────────────────── */}
      <TrustBar />

      {/* ── What I Build ─────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">What I Build</h2>
            <p className="text-lg text-slate-600 max-w-xl mx-auto">
              Practical automation solutions designed around how your business actually works.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-8">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-2xl mb-5">🤖</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">AI Agents</h3>
              <p className="text-slate-600 mb-5">
                Intelligent agents that handle repetitive customer and business tasks — reliably, 24/7, without burnout.
              </p>
              <ul className="space-y-2">
                {['24/7 customer support', 'Lead qualification', 'FAQ handling & triage', 'Booking automation'].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="text-blue-600 mt-0.5 shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-8">
              <div className="w-12 h-12 rounded-full bg-violet-100 flex items-center justify-center text-2xl mb-5">🎙️</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Voice AI</h3>
              <p className="text-slate-600 mb-5">
                AI-powered voice agents that answer calls, qualify leads, and route enquiries — every hour of every day.
              </p>
              <ul className="space-y-2">
                {['Inbound call handling', 'Lead qualification', 'Intelligent call routing', '24/7 availability'].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="text-violet-600 mt-0.5 shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-8">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-2xl mb-5">💬</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">WhatsApp Automation</h3>
              <p className="text-slate-600 mb-5">
                Turn WhatsApp into a sales and support engine that works while your team focuses on high-value tasks.
              </p>
              <ul className="space-y-2">
                {['Instant lead response', 'Order & delivery updates', 'Follow-up sequences', 'CRM integration'].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="text-green-600 mt-0.5 shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ─────────────────────────────────────────── */}
      <section className="bg-slate-50 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '12+', label: 'Years Experience' },
              { value: '100+', label: 'Projects Delivered' },
              { value: '70%', label: 'Avg. Support Cost Reduction' },
              { value: '4+', label: 'Countries Served' },
            ].map(({ value, label }) => (
              <div key={label}>
                <p className="text-4xl font-extrabold text-gradient mb-1">{value}</p>
                <p className="text-sm text-slate-600 font-medium">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ──────────────────────────────────────── */}
      <section id="how-it-works" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">How It Works</h2>
            <p className="text-lg text-slate-600 max-w-xl mx-auto">
              A simple, transparent process from first call to live automation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery Call',
                description: 'We spend 30 minutes mapping your biggest time-drains and identifying the automation opportunities that will make the most impact on your business.',
              },
              {
                step: '02',
                title: 'Build & Integrate',
                description: 'I design and build the automation, connecting it directly to your existing tools — CRM, WhatsApp, phone system, booking platform, or anything else you use.',
              },
              {
                step: '03',
                title: 'Launch & Support',
                description: 'We go live together. I monitor performance, fine-tune responses, and make sure everything runs smoothly — with ongoing support included.',
              },
            ].map(({ step, title, description }) => (
              <div key={step} className="text-center px-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center text-white font-extrabold text-lg mx-auto mb-5">
                  {step}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
                <p className="text-slate-600 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Recent Projects ───────────────────────────────────── */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Recent Projects</h2>
            <p className="text-lg text-slate-600 max-w-xl mx-auto">
              Real automations built for real businesses — with measurable results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {[
              {
                label: 'WhatsApp Automation',
                title: 'Automated Customer Support — Shree Trivedi International',
                desc: 'Replaced manual WhatsApp replies with automated flows for shipment tracking, booking confirmations, and FAQs. Handling 200+ daily customer interactions without extra staff.',
                gradient: 'from-green-500 to-teal-700',
                tags: ['WhatsApp API', 'Laravel', 'Workflow Automation'],
                result: '3× faster response time',
              },
              {
                label: 'AI Voice Agent',
                title: 'AI Voice Agent — Logistics & Courier Company',
                desc: 'AI-powered voice agent that handles all inbound shipment status enquiries automatically, routing only complex issues to the human support team.',
                gradient: 'from-blue-600 to-indigo-700',
                tags: ['VAPI', 'OpenAI', 'Laravel', 'Custom APIs'],
                result: '70% reduction in support calls',
              },
            ].map((p) => (
              <div key={p.title} className="bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl transition-shadow">
                <div className={`bg-gradient-to-r ${p.gradient} px-7 py-8 relative overflow-hidden`}>
                  <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                  <div className="relative z-10">
                    <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white/90 text-xs font-semibold mb-3">{p.label}</span>
                    <h3 className="text-white font-bold text-lg leading-snug mb-3">{p.title}</h3>
                    <div className="text-white font-extrabold text-xl">{p.result}</div>
                  </div>
                </div>
                <div className="px-7 py-5">
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">{p.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 text-xs font-medium">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Middle CTA ───────────────────────────────────────── */}
      <MiddleCTA
        headline="Seen enough? Let's talk about your business."
        subtext="Book a free 30-minute call and I'll show you exactly what can be automated — and what the impact would be."
        primaryText="Book Free Consultation"
      />

      {/* ── Pricing Guidance ──────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs font-semibold uppercase tracking-widest mb-4">Pricing Guidance</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">What to Budget For</h2>
            <p className="text-lg text-slate-600 max-w-xl mx-auto">
              Every project is scoped individually — these are starting ranges to help you plan.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'WhatsApp Automation',
                range: '$800 – $2,500',
                timeline: '1–2 weeks',
                highlight: false,
                items: ['Lead capture flows', 'Auto-reply & FAQ bot', 'CRM integration', 'Order / shipment updates'],
              },
              {
                name: 'Voice AI Agent',
                range: '$2,000 – $5,000',
                timeline: '2–4 weeks',
                highlight: true,
                items: ['Inbound call handling', 'Lead qualification', 'CRM / API integration', 'Call routing & escalation'],
              },
              {
                name: 'Full AI System',
                range: '$4,000 – $10,000+',
                timeline: '4–8 weeks',
                highlight: false,
                items: ['Multi-channel automation', 'Voice + WhatsApp + AI', 'Custom AI agent', 'Full workflow integration'],
              },
            ].map((tier) => (
              <div key={tier.name} className={`rounded-2xl border p-7 ${tier.highlight ? 'border-blue-300 bg-blue-50 shadow-md' : 'border-slate-100 bg-slate-50'}`}>
                {tier.highlight && <div className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">Most Popular</div>}
                <h3 className="font-bold text-slate-900 text-lg mb-1">{tier.name}</h3>
                <div className="text-2xl font-extrabold text-gradient mb-1">{tier.range}</div>
                <div className="text-sm text-slate-500 mb-5">{tier.timeline} delivery</div>
                <ul className="space-y-2">
                  {tier.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="text-blue-500 mt-0.5 shrink-0">✓</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-slate-500 mt-8">All projects are fixed-price. A full quote is provided after the discovery call — no surprises.</p>
        </div>
      </section>

      {/* ── Testimonial ───────────────────────────────────────── */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <svg className="mx-auto mb-6 text-blue-600 w-10 h-10 opacity-60" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>
          <blockquote className="text-xl sm:text-2xl text-slate-700 font-medium leading-relaxed mb-8">
            "Our staff were spending hours every day replying to 'where is my parcel?' messages on
            WhatsApp. Nilesh automated the whole thing — tracking updates, booking confirmations,
            delivery alerts. Customers get instant replies now and our team finally has time for
            actual work."
          </blockquote>
          <p className="font-semibold text-slate-900">Vivek Trivedi</p>
          <div className="flex items-center justify-center gap-2 mt-1 flex-wrap">
            <p className="text-sm text-slate-500">
              Director,{' '}
              <a href="https://strivediservices.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                Shree Trivedi International
              </a>
              , Ahmedabad
            </p>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-green-100 text-green-700 text-xs font-semibold">
              ✓ Verified Client
            </span>
          </div>
        </div>
      </section>

      {/* ── Why Work With Me ─────────────────────────────────── */}
      <WhyWorkWithMeLanding />

      {/* ── FAQ ───────────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'How long does it take to build an AI automation?',
                a: 'Most automations go live within 1–3 weeks, depending on complexity. A WhatsApp flow for order tracking typically takes 5–7 days. A multi-channel AI agent with CRM integration can take 2–3 weeks. I will give you an honest timeline on our discovery call.',
              },
              {
                q: 'How much does AI automation cost?',
                a: 'Pricing depends on the scope. I provide a fixed-price proposal after a discovery call — no hourly billing or surprise invoices. You know the full cost before any work starts.',
              },
              {
                q: 'Do you work with clients outside India?',
                a: 'Yes. I work with clients in the USA, UK, Canada, and Australia. I work across time zones and provide regular updates so you are always in the loop.',
              },
              {
                q: 'Do I need technical knowledge to manage the automation?',
                a: 'No. I build automations to be managed through simple dashboards or the tools you already use. I also provide a handover session and written documentation so your team is fully confident from day one.',
              },
              {
                q: 'Can you sign an NDA?',
                a: 'Yes. I sign NDAs before any discovery call where sensitive business information is shared.',
              },
              {
                q: 'Do you provide maintenance after the project?',
                a: 'Every project includes a support period after launch. For ongoing maintenance, I offer monthly retainer arrangements.',
              },
            ].map(({ q, a }) => (
              <details key={q} className="group border border-slate-200 rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none font-semibold text-slate-900 hover:bg-slate-50 transition-colors">
                  {q}
                  <span className="shrink-0 text-slate-400 group-open:rotate-180 transition-transform duration-200">▼</span>
                </summary>
                <div className="px-6 pb-5 pt-1 text-slate-600 leading-relaxed">{a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Book a Call ───────────────────────────────────────────────────────── */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
              Pick a Time That Works for You
            </h2>
            <p className="text-lg text-slate-600">
              Book a free call directly below — no back-and-forth email needed.
            </p>
          </div>
          <CalendlyEmbed />
        </div>
      </section>

      {/* ── Bottom CTA ────────────────────────────────────────── */}
      <section className="bg-slate-950 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">
            Ready to Automate Your Business?
          </h2>
          <p className="text-lg text-slate-400 mb-8 max-w-xl mx-auto">
            Book a free 30-minute discovery call. I will map out the automation opportunities in
            your business — no commitment required.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white font-bold text-lg hover:opacity-90 transition-opacity shadow-lg"
            >
              📅 Book Free Consultation
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400 font-semibold text-base hover:bg-green-500/20 transition-colors"
            >
              💬 Message on WhatsApp
            </a>
          </div>
          <p className="mt-6 text-sm text-slate-600">No sales pitch. Just a useful conversation about your business.</p>
        </div>
      </section>
    </>
  )
}
