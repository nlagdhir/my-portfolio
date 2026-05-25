const points = [
  {
    icon: '💬',
    title: 'Direct communication with the developer',
    desc: 'You speak with me — not an account manager or junior dev. Every question gets a same-day response.',
  },
  {
    icon: '📅',
    title: 'Weekly progress updates',
    desc: 'Regular demo sessions and written summaries so you always know exactly where the project stands.',
  },
  {
    icon: '🌏',
    title: 'Flexible timezone overlap',
    desc: 'I work with clients in the USA, UK, Canada, and Australia. Calls and deadlines adapt to your timezone.',
  },
  {
    icon: '🔧',
    title: 'Long-term support',
    desc: "The relationship doesn't end at launch. I provide ongoing maintenance and development as your product grows.",
  },
  {
    icon: '📈',
    title: 'Business-focused solutions',
    desc: 'Every technical decision is evaluated against business impact — not just what looks impressive on a spec sheet.',
  },
]

export default function WhyWorkWithMeLanding() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-xs font-semibold uppercase tracking-widest mb-4">
            Why Work With Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            What Working Together Actually Looks Like
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            The concerns most overseas clients have before working with an offshore developer — and
            why they do not apply here.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {points.map(({ icon, title, desc }) => (
            <div
              key={title}
              className="flex gap-4 p-5 rounded-2xl bg-white border border-slate-100 hover:border-blue-200 hover:shadow-sm transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-xl shrink-0">
                {icon}
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm mb-1">{title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
