import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Automation Services – AI Agents, Voice AI & WhatsApp Automation | Nilesh Lagdhir',
  description:
    'Custom AI automation for your business — AI agents, voice AI, and WhatsApp automation. 12+ years experience. Book a free discovery call.',
  alternates: {
    canonical: '/ai-automation-services',
  },
}

const CALENDLY = 'https://calendly.com/nilesh-nlagdhir'
const WHATSAPP = 'https://wa.me/919510110198'

export default function AIAutomationServicesPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="bg-slate-950 pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
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

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-blue-600 text-white font-semibold text-lg hover:bg-blue-700 transition-colors"
            >
              Book a Free Discovery Call
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl border border-slate-700 text-slate-300 font-semibold text-lg hover:border-slate-500 hover:text-white transition-colors"
            >
              See How It Works
            </a>
          </div>
        </div>
      </section>

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
            {/* Card 1 */}
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-8">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-2xl mb-5">
                🤖
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">AI Agents</h3>
              <p className="text-slate-600 mb-5">
                Intelligent agents that handle repetitive customer and business tasks — reliably,
                24/7, without burnout.
              </p>
              <ul className="space-y-2">
                {[
                  '24/7 customer support',
                  'Lead qualification',
                  'FAQ handling & triage',
                  'Booking automation',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="text-blue-600 mt-0.5 shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Card 2 */}
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-8">
              <div className="w-12 h-12 rounded-full bg-violet-100 flex items-center justify-center text-2xl mb-5">
                🎙️
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Voice AI</h3>
              <p className="text-slate-600 mb-5">
                AI-powered voice agents that answer calls, qualify leads, and route enquiries —
                every hour of every day.
              </p>
              <ul className="space-y-2">
                {[
                  'Inbound call handling',
                  'Lead qualification',
                  'Intelligent call routing',
                  '24/7 availability',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="text-violet-600 mt-0.5 shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Card 3 */}
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-8">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-2xl mb-5">
                💬
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">WhatsApp Automation</h3>
              <p className="text-slate-600 mb-5">
                Turn WhatsApp into a sales and support engine that works while your team focuses on
                high-value tasks.
              </p>
              <ul className="space-y-2">
                {[
                  'Instant lead response',
                  'Order & delivery updates',
                  'Follow-up sequences',
                  'CRM integration',
                ].map((item) => (
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
                description:
                  'We spend 30 minutes mapping your biggest time-drains and identifying the automation opportunities that will make the most impact on your business.',
              },
              {
                step: '02',
                title: 'Build & Integrate',
                description:
                  'I design and build the automation, connecting it directly to your existing tools — CRM, WhatsApp, phone system, booking platform, or anything else you use.',
              },
              {
                step: '03',
                title: 'Launch & Support',
                description:
                  'We go live together. I monitor performance, fine-tune responses, and make sure everything runs smoothly — with ongoing support included.',
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
            "Our staff were spending hours every day replying to 'where is my parcel?' messages on
            WhatsApp. Nilesh automated the whole thing — tracking updates, booking confirmations,
            delivery alerts. Customers get instant replies now and our team finally has time for
            actual work."
          </blockquote>
          <p className="font-semibold text-slate-900">Vivek Trivedi</p>
          <p className="text-sm text-slate-500 mt-1">
            Director, Shree Trivedi International, Ahmedabad
          </p>
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
                q: 'How long does it take to build an AI automation?',
                a: 'Most automations go live within 1–3 weeks, depending on complexity. A WhatsApp flow for order tracking typically takes 5–7 days. A multi-channel AI agent with CRM integration can take 2–3 weeks. I will give you an honest timeline on our discovery call.',
              },
              {
                q: 'Do I need technical knowledge to manage the automation?',
                a: 'No. I build automations to be managed through simple dashboards or the tools you already use. I also provide a handover session and written documentation so your team is fully confident from day one.',
              },
              {
                q: 'Which businesses benefit most from AI automation?',
                a: 'Any business that handles a high volume of repetitive customer queries, follow-ups, or internal workflows. Common industries include ecommerce, logistics, healthcare clinics, real estate, travel, and professional services.',
              },
              {
                q: 'What happens if something breaks or needs updating?',
                a: 'Every project includes a support period after launch. For ongoing maintenance, I offer retainer arrangements. I also build automations with clear error alerts so issues are flagged immediately.',
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
            Ready to Automate Your Business?
          </h2>
          <p className="text-lg text-slate-400 mb-10 max-w-xl mx-auto">
            Book a free 30-minute discovery call. I'll map out the automation opportunities in your
            business — no commitment required.
          </p>
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-4 rounded-xl bg-blue-600 text-white font-semibold text-lg hover:bg-blue-700 transition-colors"
          >
            Book a Free Discovery Call
          </a>
          <p className="mt-6 text-sm text-slate-500">
            No sales pitch. Just a useful conversation about your business.
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
