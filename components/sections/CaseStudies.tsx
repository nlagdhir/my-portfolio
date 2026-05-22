'use client'

import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi'

const caseStudies = [
  {
    category: 'AI Voice Automation',
    title: 'AI Voice Agent for Courier Tracking',
    problem:
      'Customers repeatedly called in to check shipment status, overwhelming the support team with routine queries.',
    solution:
      'Built an AI-powered voice assistant integrated with shipment tracking APIs that handles enquiries automatically, 24/7.',
    outcome: 'Significant reduction in repetitive support calls and improved customer experience.',
    tech: ['Laravel', 'OpenAI', 'VAPI', 'Custom APIs'],
    metric: '70%',
    metricLabel: 'Support call reduction',
    gradient: 'from-blue-600 to-indigo-700',
    industry: 'Logistics',
  },
  {
    category: 'WhatsApp Automation',
    title: 'WhatsApp Business Automation Platform',
    problem:
      'Businesses were manually responding to repetitive customer inquiries, losing leads due to slow response times.',
    solution:
      'Deployed automated workflows for lead capture, customer support, follow-up sequences, and real-time notifications.',
    outcome: 'Faster response times, higher lead conversion, and reduced manual workload.',
    tech: ['WhatsApp API', 'Laravel', 'Workflow Automation', 'CRM Integration'],
    metric: '3x',
    metricLabel: 'Faster lead response',
    gradient: 'from-green-500 to-teal-700',
    industry: 'Sales & Support',
  },
  {
    category: 'MVP Development',
    title: 'SaaS Startup MVP Launch',
    problem:
      'A startup needed to validate their product idea quickly before committing to full-scale development.',
    solution:
      'Delivered a functional, market-ready MVP using Next.js, Laravel, and Firebase with a clean product roadmap for v2.',
    outcome: 'Launched in 6 weeks, reducing development costs by 40% versus traditional methods.',
    tech: ['Next.js', 'Laravel', 'Firebase', 'TypeScript'],
    metric: '6 weeks',
    metricLabel: 'From idea to launch',
    gradient: 'from-violet-600 to-purple-800',
    industry: 'Technology',
  },
  {
    category: 'Healthcare Technology',
    title: 'Healthcare Communication Platform',
    problem:
      'Hospital families needed a secure, easy-to-use channel to communicate with patients during care.',
    solution:
      'Built a tablet-enabled communication platform with messaging, video calls, and care updates for patients and families.',
    outcome: 'Improved patient-family communication and significantly higher patient satisfaction.',
    tech: ['React', 'Node.js', 'WebRTC', 'PostgreSQL'],
    metric: '92%',
    metricLabel: 'Patient satisfaction rate',
    gradient: 'from-rose-500 to-pink-700',
    industry: 'Healthcare',
  },
]

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 md:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-violet-50 text-violet-600 text-xs font-semibold uppercase tracking-widest mb-4">
            Case Studies
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-4">
            Projects That Delivered Results
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            Real-world solutions built for real business problems — from logistics automation to
            healthcare technology.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
          {caseStudies.map((cs, index) => (
            <motion.div
              key={cs.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl transition-shadow duration-300 group"
            >
              {/* Card Header with gradient */}
              <div className={`bg-gradient-to-r ${cs.gradient} px-7 pt-7 pb-10 relative overflow-hidden`}>
                <div className="absolute inset-0 bg-grid-white opacity-20" />
                <div className="relative z-10 flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 rounded-full bg-white/20 text-white/90 text-xs font-semibold">
                        {cs.category}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-white/10 text-white/70 text-xs">
                        {cs.industry}
                      </span>
                    </div>
                    <h3 className="text-white font-bold text-xl leading-tight">{cs.title}</h3>
                  </div>
                  <div className="text-right flex-shrink-0 ml-4">
                    <div className="text-white font-extrabold text-2xl leading-none">{cs.metric}</div>
                    <div className="text-white/70 text-xs mt-1">{cs.metricLabel}</div>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="px-7 py-6 -mt-4 relative">
                <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-100 mb-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1.5">
                        Problem
                      </p>
                      <p className="text-slate-700 text-sm leading-relaxed">{cs.problem}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1.5">
                        Solution
                      </p>
                      <p className="text-slate-700 text-sm leading-relaxed">{cs.solution}</p>
                    </div>
                  </div>
                </div>

                {/* Outcome */}
                <div className="flex items-start gap-3 mb-5 p-4 rounded-xl bg-green-50 border border-green-100">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-green-700 uppercase tracking-widest mb-0.5">
                      Outcome
                    </p>
                    <p className="text-green-800 text-sm font-medium leading-relaxed">{cs.outcome}</p>
                  </div>
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {cs.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-md bg-slate-100 text-slate-600 text-xs font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-14"
        >
          <p className="text-slate-500 mb-5">
            Have a project in mind? Let&apos;s discuss how I can help you achieve similar results.
          </p>
          <a
            href="https://calendly.com/nilesh-nlagdhir"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl border-2 border-slate-200 text-slate-700 font-semibold text-sm hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50 transition-all group"
          >
            Discuss Your Project
            <HiArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
