'use client'

import { motion } from 'framer-motion'
import {
  HiSearch,
  HiClipboardList,
  HiPencilAlt,
  HiCode,
  HiShieldCheck,
} from 'react-icons/hi'
import { HiRocketLaunch } from 'react-icons/hi2'

const steps = [
  {
    number: '01',
    icon: HiSearch,
    title: 'Discovery',
    description:
      'We start with a deep-dive into your business goals, technical requirements, and target audience to build a shared understanding of what success looks like.',
    duration: '1–2 days',
    color: 'blue',
  },
  {
    number: '02',
    icon: HiClipboardList,
    title: 'Planning',
    description:
      'I produce a detailed project plan with clear milestones, tech stack selection, cost breakdown, and a realistic timeline so you know exactly what to expect.',
    duration: '2–3 days',
    color: 'violet',
  },
  {
    number: '03',
    icon: HiPencilAlt,
    title: 'Design & Architecture',
    description:
      'UI/UX wireframes, database schemas, and system architecture are finalised before a single line of code is written — preventing costly rework later.',
    duration: '1–2 weeks',
    color: 'indigo',
  },
  {
    number: '04',
    icon: HiCode,
    title: 'Development',
    description:
      'Iterative development with regular demos. You see progress throughout the build, not just at the end. Full transparency via your preferred project management tool.',
    duration: '2–10 weeks',
    color: 'teal',
  },
  {
    number: '05',
    icon: HiShieldCheck,
    title: 'Testing & QA',
    description:
      'Thorough testing across devices, browsers, and edge cases. Performance, security, and accessibility are validated before launch.',
    duration: '3–5 days',
    color: 'orange',
  },
  {
    number: '06',
    icon: HiRocketLaunch,
    title: 'Launch & Support',
    description:
      'Smooth deployment with monitoring in place from day one. Post-launch support ensures any issues are resolved fast and your system keeps improving.',
    duration: 'Ongoing',
    color: 'green',
  },
]

const colorMap: Record<string, { bg: string; border: string; text: string; numberBg: string }> = {
  blue: { bg: 'bg-blue-50', border: 'border-blue-100', text: 'text-blue-600', numberBg: 'bg-blue-600' },
  violet: { bg: 'bg-violet-50', border: 'border-violet-100', text: 'text-violet-600', numberBg: 'bg-violet-600' },
  indigo: { bg: 'bg-indigo-50', border: 'border-indigo-100', text: 'text-indigo-600', numberBg: 'bg-indigo-600' },
  teal: { bg: 'bg-teal-50', border: 'border-teal-100', text: 'text-teal-600', numberBg: 'bg-teal-600' },
  orange: { bg: 'bg-orange-50', border: 'border-orange-100', text: 'text-orange-600', numberBg: 'bg-orange-600' },
  green: { bg: 'bg-green-50', border: 'border-green-100', text: 'text-green-600', numberBg: 'bg-green-600' },
}

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-32 bg-slate-950 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-white" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-64 bg-blue-600/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-white/70 text-xs font-semibold uppercase tracking-widest mb-4">
            How I Work
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
            A Transparent Process,
            <br />
            Every Step of the Way
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            No surprises. No delays. You are informed and involved at every stage of the project —
            from the first call to post-launch support.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((step, index) => {
            const Icon = step.icon
            const colors = colorMap[step.color]
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="relative bg-slate-900 rounded-2xl border border-slate-800 p-6 hover:border-slate-600 transition-all group"
              >
                {/* Step number badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-10 h-10 rounded-xl ${colors.bg} ${colors.border} border flex items-center justify-center`}>
                    <Icon className={colors.text} size={18} />
                  </div>
                  <span className="text-slate-700 font-bold text-3xl tabular-nums group-hover:text-slate-600 transition-colors">
                    {step.number}
                  </span>
                </div>

                <h3 className="font-bold text-white text-lg mb-2.5">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{step.description}</p>

                <div className="flex items-center gap-2 pt-4 border-t border-slate-800">
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
                    Typical Duration
                  </span>
                  <span className={`text-xs font-bold ${colors.text} ml-auto`}>
                    {step.duration}
                  </span>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-14"
        >
          <p className="text-slate-400 mb-6">
            Ready to start your project? The first step is a free 30-minute discovery call.
          </p>
          <a
            href="https://calendly.com/nilesh-nlagdhir"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white font-bold text-sm shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:scale-105 transition-all"
          >
            Start With a Free Consultation
          </a>
        </motion.div>
      </div>
    </section>
  )
}
