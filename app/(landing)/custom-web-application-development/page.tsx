import type { Metadata } from 'next'
import TrustBar from '@/components/landing/TrustBar'
import WhyWorkWithMeLanding from '@/components/landing/WhyWorkWithMeLanding'
import MiddleCTA from '@/components/landing/MiddleCTA'
import CalendlyEmbed from '@/components/landing/CalendlyEmbed'

export const metadata: Metadata = {
  title: 'Custom Web Application Development – Laravel & Next.js | Nilesh Lagdhir',
  description:
    'Custom web applications built with Laravel, Next.js, and React. CRMs, customer portals, SaaS platforms, and internal tools. 12+ years experience.',
  alternates: { canonical: '/custom-web-application-development' },
  openGraph: {
    title: 'Custom Web Application Development – Laravel & Next.js',
    description: 'Custom web applications built with Laravel, Next.js, and React.',
    url: '/custom-web-application-development',
  },
}

const CALENDLY = 'https://calendly.com/nilesh-nlagdhir'
const WHATSAPP = 'https://wa.me/919510110198'

const appTypes = [
  { icon: '🗃️', title: 'CRMs & Sales Portals', description: 'Built around your sales process, not a generic template.' },
  { icon: '📦', title: 'Operations Management Systems', description: 'End-to-end visibility over your inventory, logistics, or service delivery.' },
  { icon: '👤', title: 'Customer Portals & Dashboards', description: 'Self-service portals that reduce support load and improve retention.' },
  { icon: '⚙️', title: 'SaaS Platforms', description: 'Multi-tenant products with billing, onboarding, and user management built in.' },
  { icon: '📅', title: 'Booking & Scheduling Systems', description: 'Real-time availability, automated reminders, and calendar sync.' },
  { icon: '🛠️', title: 'Internal Tools & Admin Panels', description: 'Purpose-built dashboards that eliminate spreadsheet chaos.' },
]

const processSteps = [
  { num: '01', title: 'Requirements & Discovery', description: 'We map your workflows, user roles, and data requirements. I ask the questions most developers skip — so the system fits your business from day one.' },
  { num: '02', title: 'System Architecture', description: 'Database schema, API design, and infrastructure decisions. Built for performance and maintainability, not just the immediate feature set.' },
  { num: '03', title: 'Development', description: 'My team works in iterative sprints with weekly demos. You see real progress throughout — not a big reveal at the end.' },
  { num: '04', title: 'QA & Testing', description: 'Functional, load, and security testing before any production deployment. Edge cases identified and handled.' },
  { num: '05', title: 'Deployment & Handover', description: 'Production deployment, monitoring setup, and full documentation. Your team can own and operate the application independently.' },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does custom web application development cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pricing depends on the scope and complexity. I provide a fixed-price proposal after a discovery call — no hourly billing and no surprise invoices. You know the full cost before any work starts.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a custom web application take to build?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Timelines vary with complexity. A focused internal tool might take 4–6 weeks. A full SaaS platform with multi-tenancy and billing typically runs 3–5 months. After your discovery call, I provide a scoped estimate with a clear timeline.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you work with clients outside India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. I work with clients in the USA, UK, Canada, and Australia. I work across time zones, provide weekly video updates, and am reachable on WhatsApp for quick questions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you sign an NDA?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. I sign NDAs before any discovery call where sensitive business information is shared.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you work with our existing systems or database?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Most projects involve integrating with existing CRMs, ERPs, payment gateways, or legacy databases. I assess what is there on the discovery call and factor that into the architecture plan.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you provide hosting and maintenance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'I handle deployment and recommend the right hosting setup for your needs. For ongoing maintenance — feature additions, security updates, bug fixes — I offer retainer arrangements at a fixed monthly cost.',
      },
    },
  ],
}

export default function CustomWebApplicationDevelopmentPage() {
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
            Web Application Development
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 max-w-4xl mx-auto">
            Custom Web Applications{' '}
            <span className="text-gradient">That Fit Your Business Exactly</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10">
            Off-the-shelf software forces your team to work around it. My team and I build
            applications around how your business actually operates — so the tools serve you, not
            the other way round.
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
              href="#what-i-build"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl border border-slate-700 text-slate-300 font-semibold text-lg hover:border-slate-500 hover:text-white transition-colors"
            >
              See What I Build
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
      <section id="what-i-build" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Applications Built for Real Business Problems</h2>
            <p className="text-lg text-slate-600 max-w-xl mx-auto">
              Every project is different. Here are the types of applications I build most often.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {appTypes.map(({ icon, title, description }) => (
              <div key={title} className="rounded-2xl border border-slate-100 bg-slate-50 p-6 hover:border-blue-200 hover:bg-blue-50/30 transition-colors">
                <div className="text-3xl mb-3">{icon}</div>
                <h3 className="font-bold text-slate-900 mb-2">{title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tech Stack ────────────────────────────────────────── */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Modern, Proven Technologies</h2>
            <p className="text-lg text-slate-600">I choose the right tool for your specific needs, not the trendiest one.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl border border-slate-100 p-8">
              <h3 className="text-lg font-bold text-slate-900 mb-5 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center text-sm font-bold">BE</span>
                {' '}Backend
              </h3>
              <ul className="space-y-3">
                {['Laravel (PHP)', 'Node.js', 'REST APIs', 'MySQL / PostgreSQL'].map((tech) => (
                  <li key={tech} className="flex items-center gap-3 text-slate-700">
                    <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0" />
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-slate-100 p-8">
              <h3 className="text-lg font-bold text-slate-900 mb-5 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-violet-100 text-violet-700 flex items-center justify-center text-sm font-bold">FE</span>
                {' '}Frontend
              </h3>
              <ul className="space-y-3">
                {['Next.js', 'React', 'TypeScript', 'Tailwind CSS'].map((tech) => (
                  <li key={tech} className="flex items-center gap-3 text-slate-700">
                    <span className="w-2 h-2 rounded-full bg-violet-600 shrink-0" />
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Process ───────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">How We Work Together</h2>
            <p className="text-lg text-slate-600">A structured process that eliminates ambiguity and keeps your project on track.</p>
          </div>

          <div className="space-y-6">
            {processSteps.map(({ num, title, description }, i) => (
              <div key={num} className="flex gap-6 items-start">
                <div className="shrink-0 flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center text-white font-extrabold text-xs">
                    {num}
                  </div>
                  {i < processSteps.length - 1 && <div className="w-0.5 h-12 bg-slate-200 mt-2" />}
                </div>
                <div className="pb-2">
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{title}</h3>
                  <p className="text-slate-600 leading-relaxed">{description}</p>
                </div>
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
              Custom applications built to solve real operational problems.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {[
              {
                label: 'Logistics & Operations',
                title: 'Dispatch Management CRM — USA Logistics Company',
                desc: 'End-to-end dispatch management system with AI voice agent integration, driver portal, real-time tracking dashboard, and automated customer notifications.',
                screenshot: '/img/screenshots/dispatch-crm.svg',
                tags: ['Laravel', 'React', 'OpenAI', 'VAPI', 'PostgreSQL'],
                result: '50% fewer manual calls',
                resultColor: 'bg-blue-600',
              },
              {
                label: 'Healthcare Technology',
                title: 'Patient Communication Platform — Hospital Group',
                desc: 'Secure tablet-enabled platform for patient-family communication during hospital stays — real-time messaging, video calls, and care update notifications.',
                screenshot: '/img/screenshots/healthcare-platform.svg',
                tags: ['React', 'Node.js', 'WebRTC', 'PostgreSQL'],
                result: '92% patient satisfaction',
                resultColor: 'bg-rose-500',
              },
            ].map((p) => (
              <div key={p.title} className="bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img src={p.screenshot} alt={p.title} className="w-full object-cover object-top" style={{ height: '200px' }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-5">
                    <div>
                      <span className="inline-block px-2.5 py-1 rounded-full bg-white/15 text-white/90 text-xs font-semibold mb-2">{p.label}</span>
                      <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full ${p.resultColor} text-white text-sm font-bold ml-2`}>{p.result}</div>
                    </div>
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
        headline="Have a project in mind? Let's talk."
        subtext="Book a free consultation and we will walk through your requirements, the right tech choices, and a realistic timeline."
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
                name: 'Internal Tool / Dashboard',
                range: '$2,500 – $6,000',
                timeline: '4–6 weeks',
                highlight: false,
                items: ['Admin panel / dashboard', 'Role-based access', 'Data import / export', 'Basic reporting'],
              },
              {
                name: 'CRM / Customer Portal',
                range: '$6,000 – $15,000',
                timeline: '6–10 weeks',
                highlight: true,
                items: ['Custom CRM or portal', 'Multi-role user system', 'Third-party integrations', 'Email & notification flows'],
              },
              {
                name: 'SaaS Platform',
                range: '$15,000+',
                timeline: '3–5 months',
                highlight: false,
                items: ['Multi-tenant architecture', 'Subscription & billing', 'Onboarding & user management', 'Scalable infrastructure'],
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
            "Nilesh built our dispatch management platform with an AI voice agent that handles
            routine driver calls automatically. Our ops team was fielding 80+ calls a day — that
            number has dropped by more than half. Great work, great communication throughout the
            project."
          </blockquote>
          <p className="font-semibold text-slate-900">Michael R.</p>
          <div className="flex items-center justify-center gap-2 mt-1 flex-wrap">
            <p className="text-sm text-slate-500">Operations Director, Logistics Services, USA</p>
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
                q: 'How much does custom web application development cost?',
                a: 'Pricing depends on the scope and complexity. I provide a fixed-price proposal after a discovery call — no hourly billing and no surprise invoices. You know the full cost before any work starts.',
              },
              {
                q: 'How long does a custom web application take to build?',
                a: 'Timelines vary with complexity. A focused internal tool might take 4–6 weeks. A full SaaS platform typically runs 3–5 months. After your discovery call, I provide a scoped estimate with a clear timeline.',
              },
              {
                q: 'Do you work with clients outside India?',
                a: 'Yes. I work with clients in the USA, UK, Canada, and Australia. I work across time zones and provide weekly video updates so you are always in the loop.',
              },
              {
                q: 'Can you sign an NDA?',
                a: 'Yes. I sign NDAs before any discovery call where sensitive business information is shared.',
              },
              {
                q: 'Can you work with our existing systems or database?',
                a: 'Yes. Most projects involve integrating with existing CRMs, ERPs, payment gateways, or legacy databases. I assess what is there on the discovery call and factor that into the architecture plan.',
              },
              {
                q: 'Do you provide hosting and maintenance?',
                a: 'I handle deployment and recommend the right hosting setup for your needs. For ongoing maintenance — feature additions, security updates, bug fixes — I offer retainer arrangements at a fixed monthly cost.',
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
            Let's Build Something That Works for You
          </h2>
          <p className="text-lg text-slate-400 mb-8 max-w-xl mx-auto">
            Tell me about your project. We will talk through the requirements, the right technology
            choices, and what a realistic timeline and budget looks like.
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
          <p className="mt-6 text-sm text-slate-600">Free consultation. No commitment required.</p>
        </div>
      </section>
    </>
  )
}
