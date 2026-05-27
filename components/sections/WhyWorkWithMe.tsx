'use client'

import { motion } from 'framer-motion'
import CalendlyLink from '@/components/CalendlyLink'
import {
  HiLightBulb,
  HiCpuChip,
  HiChatBubbleLeftRight,
  HiEye,
  HiArrowTrendingUp,
  HiLifebuoy,
} from 'react-icons/hi2'
import { HiCheckCircle } from 'react-icons/hi'

const valueProps = [
  {
    icon: HiLightBulb,
    title: 'Business-First Thinking',
    description:
      'Every technical decision is evaluated against business impact. I build what creates value, not what looks impressive on a spec sheet.',
    color: 'text-amber-500',
    bg: 'bg-amber-50',
  },
  {
    icon: HiCpuChip,
    title: 'Practical AI Implementation',
    description:
      'AI that solves real problems in your business — not AI for the sake of it. From voice agents to intelligent automation, grounded in outcomes.',
    color: 'text-blue-500',
    bg: 'bg-blue-50',
  },
  {
    icon: HiChatBubbleLeftRight,
    title: 'Fast, Clear Communication',
    description:
      'You deal directly with me — not a project manager or junior. My team handles execution; I handle communication. Questions answered same-day, updates shared proactively.',
    color: 'text-green-500',
    bg: 'bg-green-50',
  },
  {
    icon: HiEye,
    title: 'Full Transparency',
    description:
      'Real-time progress updates via your preferred tool (Slack, Notion, Linear). You always know exactly where the project stands.',
    color: 'text-violet-500',
    bg: 'bg-violet-50',
  },
  {
    icon: HiArrowTrendingUp,
    title: 'Scalable Architecture',
    description:
      'Systems built to grow. Whether you have 10 users or 10,000, the foundation is designed to handle scale without costly rewrites.',
    color: 'text-indigo-500',
    bg: 'bg-indigo-50',
  },
  {
    icon: HiLifebuoy,
    title: 'Long-Term Support',
    description:
      'The relationship doesn\'t end at launch. Ongoing maintenance, performance monitoring, and feature development keep your product competitive.',
    color: 'text-rose-500',
    bg: 'bg-rose-50',
  },
]

const highlights = [
  '12+ years building production-grade applications',
  'Clients in USA, Canada, UK & Australia',
  'Cross-industry experience: logistics, healthcare, e-commerce, SaaS',
  'AI & automation specialist since 2022',
]

export default function WhyWorkWithMe() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-start">
          {/* Left: Text block */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-semibold uppercase tracking-widest mb-4">
              Why Work With Me Instead of an Agency?
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-5">
              Direct Access.
              <br />
              Faster Iterations.
              <br />
              Lower Overhead.
            </h2>
            <p className="text-slate-500 text-base leading-relaxed mb-8">
              Agencies add layers — account managers, handoffs, and markups. With me, you talk
              directly to the person building your product. My team handles execution; I own the
              communication and outcomes.
            </p>

            {/* Highlights */}
            <ul className="space-y-3 mb-8">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-3">
                  <HiCheckCircle className="text-blue-500 mt-0.5 flex-shrink-0" size={18} />
                  <span className="text-slate-600 text-sm">{h}</span>
                </li>
              ))}
            </ul>

            <CalendlyLink
              source="why_work_with_me"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white font-bold text-sm shadow-md hover:shadow-blue-500/30 hover:scale-105 transition-all"
            >
              Let&apos;s Work Together
            </CalendlyLink>
          </motion.div>

          {/* Right: Value props grid */}
          <div className="lg:col-span-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-5"
            >
              {valueProps.map((vp) => {
                const Icon = vp.icon
                return (
                  <motion.div
                    key={vp.title}
                    variants={{
                      hidden: { opacity: 0, y: 24 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                    }}
                    className="p-5 rounded-2xl border border-slate-100 hover:border-slate-200 hover:shadow-md transition-all group"
                  >
                    <div className={`w-10 h-10 rounded-xl ${vp.bg} flex items-center justify-center mb-4`}>
                      <Icon className={vp.color} size={20} />
                    </div>
                    <h3 className="font-bold text-slate-900 mb-2">{vp.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{vp.description}</p>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
