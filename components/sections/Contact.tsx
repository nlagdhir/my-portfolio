'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiMail, HiCalendar, HiCheckCircle, HiExclamationCircle } from 'react-icons/hi'
import { FaWhatsapp, FaLinkedin } from 'react-icons/fa'

const projectTypes = [
  'Business Website',
  'Startup MVP',
  'AI Automation',
  'WhatsApp Automation',
  'CRM / Business System',
  'Maintenance & Support',
  'Other',
]

type FormState = 'idle' | 'submitting' | 'success' | 'error'

export default function Contact() {
  const [formState, setFormState] = useState<FormState>('idle')
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState('submitting')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setFormState('success')
        setForm({ name: '', email: '', company: '', projectType: '', budget: '', message: '' })
      } else {
        setFormState('error')
      }
    } catch {
      setFormState('error')
    }
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-slate-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-white" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-violet-600/10 rounded-full blur-3xl" />

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
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
            Let&apos;s Discuss Your Project
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            Whether you have a fully formed brief or just an idea — get in touch and let&apos;s
            figure out the best path forward together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left: Contact details */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Book a Call CTA */}
            <div className="bg-gradient-to-br from-blue-600 to-violet-700 rounded-2xl p-6">
              <HiCalendar className="text-white mb-3" size={24} />
              <h3 className="text-white font-bold text-lg mb-2">Book a Free 30-Min Call</h3>
              <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                The fastest way to get started. Discuss your project, ask questions, and get a
                preliminary estimate — no obligation.
              </p>
              <a
                href="https://calendly.com/nilesh-nlagdhir"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center py-3 px-5 rounded-xl bg-white text-blue-700 font-bold text-sm hover:bg-blue-50 transition-colors"
              >
                Schedule on Calendly
              </a>
            </div>

            {/* WhatsApp */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <FaWhatsapp className="text-green-400 mb-3" size={24} />
              <h3 className="text-white font-bold text-base mb-2">Chat on WhatsApp</h3>
              <p className="text-slate-400 text-sm mb-4">
                Prefer messaging? Reach me directly on WhatsApp for a quick chat.
              </p>
              <a
                href="https://wa.me/919510110198?text=Hi%20Nilesh%2C%20I%27d%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 py-2.5 px-4 rounded-xl bg-green-600/20 border border-green-600/30 text-green-400 font-semibold text-sm hover:bg-green-600/30 transition-colors w-fit"
              >
                <FaWhatsapp size={16} />
                Open WhatsApp
              </a>
            </div>

            {/* Email & LinkedIn */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
              <a
                href="mailto:nilesh@nlagdhir.in"
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center group-hover:bg-blue-600/20 transition-colors">
                  <HiMail className="text-slate-400 group-hover:text-blue-400" size={16} />
                </div>
                <div>
                  <p className="text-xs text-slate-500">Email</p>
                  <p className="text-sm font-medium">nilesh@nlagdhir.in</p>
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/nlagdhir"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center group-hover:bg-blue-600/20 transition-colors">
                  <FaLinkedin className="text-slate-400 group-hover:text-blue-400" size={16} />
                </div>
                <div>
                  <p className="text-xs text-slate-500">LinkedIn</p>
                  <p className="text-sm font-medium">linkedin.com/in/nlagdhir</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-7">
              <h3 className="text-white font-bold text-lg mb-6">Send a Project Brief</h3>

              {formState === 'success' ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <HiCheckCircle className="text-green-400 mb-4" size={48} />
                  <h4 className="text-white font-bold text-lg mb-2">Message Sent!</h4>
                  <p className="text-slate-400 text-sm">
                    I&apos;ll get back to you within 24 hours. For faster response, feel free to
                    book a call on Calendly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-400 text-xs font-medium mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="John Smith"
                        className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-400 text-xs font-medium mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-400 text-xs font-medium mb-1.5">
                        Company / Startup
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Acme Inc."
                        className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-400 text-xs font-medium mb-1.5">
                        Project Type
                      </label>
                      <select
                        name="projectType"
                        value={form.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-sm focus:outline-none focus:border-blue-500 transition-colors text-white"
                      >
                        <option value="" className="text-slate-500">Select type...</option>
                        {projectTypes.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-400 text-xs font-medium mb-1.5">
                      Approximate Budget
                    </label>
                    <select
                      name="budget"
                      value={form.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-sm focus:outline-none focus:border-blue-500 transition-colors text-white"
                    >
                      <option value="">Select budget range...</option>
                      <option value="<$2k">Under $2,000</option>
                      <option value="$2k-$5k">$2,000 – $5,000</option>
                      <option value="$5k-$15k">$5,000 – $15,000</option>
                      <option value="$15k-$30k">$15,000 – $30,000</option>
                      <option value="$30k+">$30,000+</option>
                      <option value="not-sure">Not sure yet</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-400 text-xs font-medium mb-1.5">
                      Tell Me About Your Project *
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="Describe your project, goals, and any specific requirements..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    />
                  </div>

                  {formState === 'error' && (
                    <div className="flex items-center gap-2 text-red-400 text-sm">
                      <HiExclamationCircle size={16} />
                      Something went wrong. Please try again or contact me directly.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={formState === 'submitting'}
                    className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white font-bold text-sm shadow-lg hover:shadow-blue-500/30 hover:scale-[1.01] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {formState === 'submitting' ? 'Sending...' : 'Send Project Brief'}
                  </button>

                  <p className="text-slate-500 text-xs text-center">
                    I respond to all enquiries within 24 hours.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
