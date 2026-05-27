'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { HiCalendar, HiArrowRight, HiCheckCircle } from 'react-icons/hi'
import { FaWhatsapp } from 'react-icons/fa'
import CalendlyLink from '@/components/CalendlyLink'
import { trackWhatsAppClick } from '@/lib/gtag'

const highlights = [
  '12+ Years Building Production Apps',
  'Clients in USA, Canada, UK & Australia',
  'React, Next.js, Laravel & AI',
  'Direct communication — no middlemen',
]

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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left: Text ─────────────────────────────────────── */}
          <div className="text-center lg:text-left">
            {/* Founder positioning badge */}
            <motion.div
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-700 bg-slate-900/80 backdrop-blur-sm text-slate-300 text-sm mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Built for founders who need speed, clarity &amp; reliable execution
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-5"
            >
              From Idea to{' '}
              <span className="text-gradient">Working Product</span>
              {' '}— Fast.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-slate-400 leading-relaxed mb-8"
            >
              Hi, I&apos;m Nilesh. My team and I build custom web apps, MVPs, AI automations, and
              WhatsApp solutions for startups and businesses — using Next.js, Laravel, and OpenAI.
            </motion.p>

            {/* Highlights */}
            <motion.ul
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-col gap-2 mb-8 items-center lg:items-start"
            >
              {highlights.map((h) => (
                <li key={h} className="flex items-center gap-2">
                  <HiCheckCircle className="text-blue-400 flex-shrink-0" size={16} />
                  <span className="text-slate-400 text-sm">{h}</span>
                </li>
              ))}
            </motion.ul>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3"
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
                View Work
                <HiArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

            {/* WhatsApp secondary */}
            <motion.div
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-4 flex items-center justify-center lg:justify-start gap-2 text-slate-500 text-sm"
            >
              <span>or</span>
              <a
                href="https://wa.me/919510110198?text=Hi%20Nilesh%2C%20I%27d%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('hero_wa')}
                className="inline-flex items-center gap-1.5 text-green-400 hover:text-green-300 font-medium transition-colors"
              >
                <FaWhatsapp size={15} />
                Message on WhatsApp
              </a>
            </motion.div>
          </div>

          {/* ── Right: Photo ────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-600/40 to-violet-600/40 blur-2xl scale-105 pointer-events-none" />

              {/* Photo frame */}
              <div className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-3xl overflow-hidden border-2 border-slate-700/60 shadow-2xl">
                <Image
                  src="/img/slider/nilesh.png"
                  alt="Nilesh Lagdhir — Web & AI Developer"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 640px) 288px, 320px"
                />
                {/* Bottom overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-950/80 to-transparent" />
              </div>

              {/* Available badge */}
              <div className="absolute -top-3 -right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-500/20 border border-green-500/40 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-300 text-xs font-semibold">Available</span>
              </div>

              {/* Stats card */}
              <div className="absolute -bottom-4 -left-4 flex items-center gap-3 px-4 py-3 rounded-2xl bg-slate-900 border border-slate-700 shadow-xl">
                <div className="text-center">
                  <div className="text-white font-extrabold text-lg leading-none">12+</div>
                  <div className="text-slate-400 text-xs mt-0.5">Years</div>
                </div>
                <div className="w-px h-8 bg-slate-700" />
                <div className="text-center">
                  <div className="text-white font-extrabold text-lg leading-none">100+</div>
                  <div className="text-slate-400 text-xs mt-0.5">Projects</div>
                </div>
                <div className="w-px h-8 bg-slate-700" />
                <div className="text-center">
                  <div className="text-white font-extrabold text-lg leading-none">4+</div>
                  <div className="text-slate-400 text-xs mt-0.5">Countries</div>
                </div>
              </div>
            </div>
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
            Tech Stack
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {['Next.js', 'React', 'Laravel', 'OpenAI', 'TypeScript', 'Node.js'].map((tech) => (
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
