import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Startup MVP Development – Launch in 6–8 Weeks | Nilesh Lagdhir',
  description:
    'Launch your startup MVP in 6–8 weeks. Next.js, Laravel, React. Clear process, fixed timeline, direct communication. Book a free MVP discovery call.',
  alternates: {
    canonical: '/startup-mvp-development',
  },
}

const CALENDLY = 'https://calendly.com/nilesh-nlagdhir'
const WHATSAPP = 'https://wa.me/919510110198'

const features = [
  'Tech stack selection',
  'Database design & architecture',
  'REST API development',
  'React / Next.js frontend',
  'User authentication & roles',
  'Payment integration (if needed)',
  'Deployment & CI/CD setup',
  'Post-launch support (30 days)',
]

export default function StartupMVPDevelopmentPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="bg-slate-950 pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold bg-blue-600/20 text-blue-400 border border-blue-600/30 mb-6">
            MVP Development Specialist
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 max-w-4xl mx-auto">
            Launch Your MVP in{' '}
            <span className="text-gradient">6–8 Weeks</span>
            {' '}— Without Burning Your Budget
          </h1>

          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10">
            I help startup founders go from idea to live product fast — with clean architecture,
            scalable code, and a process that keeps you informed every step of the way.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-blue-600 text-white font-semibold text-lg hover:bg-blue-700 transition-colors"
            >
              Book a Free MVP Call
            </a>
            <a
              href="#process"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl border border-slate-700 text-slate-300 font-semibold text-lg hover:border-slate-500 hover:text-white transition-colors"
            >
              See the Process
            </a>
          </div>
        </div>
      </section>

      {/* ── Why Founders Choose Me ────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Why Founders Choose Me
            </h2>
            <p className="text-lg text-slate-600 max-w-xl mx-auto">
              Speed matters at the MVP stage — but so does building it right the first time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🚀',
                iconBg: 'bg-blue-100',
                title: 'Fast to Market',
                description:
                  'Weekly deliverables, no feature bloat, and only what you need to validate your idea with real users. No six-month planning cycles.',
              },
              {
                icon: '🏗️',
                iconBg: 'bg-violet-100',
                title: 'Built to Scale',
                description:
                  'Architecture designed to grow with your user base. No costly rewrites 12 months in when traction picks up.',
              },
              {
                icon: '💬',
                iconBg: 'bg-green-100',
                title: 'Direct Access',
                description:
                  'No account managers, no layers. You speak directly with the developer building your product. Questions answered same-day.',
              },
            ].map(({ icon, iconBg, title, description }) => (
              <div key={title} className="rounded-2xl border border-slate-100 bg-slate-50 p-8">
                <div
                  className={`w-12 h-12 rounded-full ${iconBg} flex items-center justify-center text-2xl mb-5`}
                >
                  {icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
                <p className="text-slate-600 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What's Included ───────────────────────────────────── */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Everything You Need to Launch
            </h2>
            <p className="text-lg text-slate-600">
              A complete MVP engagement — from planning to deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-3 bg-white rounded-xl border border-slate-100 px-5 py-4"
              >
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold shrink-0">
                  ✓
                </span>
                <span className="text-slate-800 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ──────────────────────────────────────────── */}
      <section id="process" className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              A Clear 8-Week Timeline
            </h2>
            <p className="text-lg text-slate-600">
              You know exactly what's happening and when at every stage.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                weeks: 'Week 1–2',
                phase: 'Discovery & Architecture',
                description:
                  'Deep-dive into your requirements, user journeys, and technical needs. Define the scope, choose the stack, and design the system architecture.',
              },
              {
                weeks: 'Week 3–5',
                phase: 'Core Development',
                description:
                  'Build the core product features — APIs, data models, authentication, and primary user flows. Weekly demos keep you in the loop.',
              },
              {
                weeks: 'Week 6–7',
                phase: 'Testing & Refinement',
                description:
                  'End-to-end QA, performance checks, and feedback rounds. We refine the UX and squash bugs before the final push.',
              },
              {
                weeks: 'Week 8',
                phase: 'Launch & Handover',
                description:
                  'Deploy to production, configure monitoring, and hand over full documentation and credentials. Your team is ready to run the product independently.',
              },
            ].map(({ weeks, phase, description }, i) => (
              <div key={phase} className="flex gap-6 items-start">
                <div className="shrink-0 flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center text-white font-bold text-sm">
                    {i + 1}
                  </div>
                  {i < 3 && <div className="w-0.5 h-12 bg-slate-200 mt-2" />}
                </div>
                <div className="pb-2">
                  <span className="inline-block text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full mb-2">
                    {weeks}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{phase}</h3>
                  <p className="text-slate-600 leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonial ───────────────────────────────────────── */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <svg
            className="mx-auto mb-6 text-blue-600 w-10 h-10 opacity-60"
            fill="currentColor"
            viewBox="0 0 32 32"
            aria-hidden="true"
          >
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>
          <blockquote className="text-xl sm:text-2xl text-slate-700 font-medium leading-relaxed mb-8">
            "We had a solid idea but needed someone who could build fast without cutting corners.
            Nilesh delivered our entire MVP in under 7 weeks — on budget, no surprises. What stood
            out was how clearly he explained every decision. Felt like a proper business partner,
            not just a developer."
          </blockquote>
          <p className="font-semibold text-slate-900">Priya Nair</p>
          <p className="text-sm text-slate-500 mt-1">Product Lead, SaaS Startup, Bengaluru</p>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'How much does MVP development cost?',
                a: 'Every MVP is different, so pricing is scoped after the discovery call. I provide a fixed-price proposal based on the agreed feature set — no hourly billing, no surprise invoices. You know the full cost before any work starts.',
              },
              {
                q: 'What if I need changes during development?',
                a: "Minor adjustments within scope are handled at no extra cost. If you want to add significant features, I'll give you a clear change order with updated cost and timeline before proceeding. No surprises.",
              },
              {
                q: 'Do you sign an NDA?',
                a: 'Yes. I sign NDAs before any discovery call where sensitive business information is shared. Protecting your idea is a basic professional requirement.',
              },
              {
                q: 'Who owns the code after the project?',
                a: 'You do. Full IP transfer is included. All source code, assets, and credentials are handed over to you at project completion. No lock-in.',
              },
            ].map(({ q, a }) => (
              <details
                key={q}
                className="group border border-slate-200 rounded-xl overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none font-semibold text-slate-900 hover:bg-slate-50 transition-colors">
                  {q}
                  <span className="shrink-0 text-slate-400 group-open:rotate-180 transition-transform duration-200">
                    ▼
                  </span>
                </summary>
                <div className="px-6 pb-5 pt-1 text-slate-600 leading-relaxed">{a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────────────── */}
      <section className="bg-slate-950 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">
            Let's Build Your MVP
          </h2>
          <p className="text-lg text-slate-400 mb-10 max-w-xl mx-auto">
            Book a free 30-minute call. We'll map out your MVP scope, choose the right tech stack,
            and set a realistic timeline — no commitment required.
          </p>
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-4 rounded-xl bg-blue-600 text-white font-semibold text-lg hover:bg-blue-700 transition-colors"
          >
            Book a Free MVP Call
          </a>
          <p className="mt-6 text-sm text-slate-500">
            No commitment. Just an honest conversation about your product.
          </p>
          <p className="mt-4 text-sm text-slate-600">
            Prefer WhatsApp?{' '}
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-300 underline"
            >
              Message me directly
            </a>
          </p>
        </div>
      </section>
    </>
  )
}
