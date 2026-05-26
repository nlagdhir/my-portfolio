'use client'

import { motion } from 'framer-motion'
import { HiCalendar, HiArrowRight, HiCheckCircle } from 'react-icons/hi'
import { FaWhatsapp } from 'react-icons/fa'
import CalendlyLink from '@/components/CalendlyLink'

const trustBadges = [
  { label: '12+ Years Experience' },
  { label: '100+ Projects Supported' },
  { label: 'React, Next.js, Laravel & AI' },
  { label: 'Global Client Experience' },
]

const techLogos = ['Next.js', 'React', 'Laravel', 'OpenAI', 'TypeScript', 'Node.js']

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
}

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-950">
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid-white opacity-100" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Available badge */}
          <motion.div
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-700 bg-slate-900/80 backdrop-blur-sm text-slate-300 text-sm mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for new projects &amp; collaborations
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight mb-6"
          >
            Build Websites,{' '}
            <span className="text-gradient">AI Automations</span>
            {' '}&amp; MVPs That Help Your{' '}
            <span className="text-gradient">Business Grow</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-slate-400 leading-relaxed mb-10 max-w-3xl mx-auto"
          >
            My team and I help startups and businesses develop custom web applications, AI-powered
            automation systems, WhatsApp solutions, voice agents, and scalable software products.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
          >
            <CalendlyLink
              source="hero"
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white font-bold text-base shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:scale-105 transition-all duration-200"
            >
              <HiCalendar size={18} />
              Book Free Consultation
            </CalendlyLink>
            <button
              onClick={() => scrollToSection('case-studies')}
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl border-2 border-slate-600 text-white font-semibold text-base hover:border-slate-400 hover:bg-white/5 transition-all duration-200 group"
            >
              View Case Studies
              <HiArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
          >
            {trustBadges.map((badge, i) => (
              <div key={i} className="flex items-center gap-2">
                <HiCheckCircle className="text-blue-400 flex-shrink-0" size={16} />
                <span className="text-slate-400 text-sm font-medium">{badge.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Tech stack strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-20 pt-8 border-t border-slate-800"
        >
          <p className="text-center text-slate-500 text-xs uppercase tracking-widest font-medium mb-6">
            Trusted Tech Stack
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {techLogos.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-300 text-sm font-medium hover:border-blue-500/50 hover:text-blue-300 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-slate-600 flex items-start justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 h-2 rounded-full bg-slate-400"
          />
        </div>
      </motion.div>
    </section>
  )
}
