'use client'

import { motion } from 'framer-motion'
import { HiStar } from 'react-icons/hi'

const testimonials = [
  {
    quote:
      'We were handling 200+ customer queries daily on WhatsApp manually — it was a mess. Nilesh built an automation that manages order updates, FAQs, and follow-ups instantly. Response time dropped from hours to seconds and our support team can finally focus on things that need a real person.',
    name: 'Rahul Desai',
    role: 'Co-Founder',
    company: 'D2C Brand · Mumbai, India',
    initials: 'RD',
    color: 'from-orange-500 to-orange-600',
  },
  {
    quote:
      'We had a solid idea but needed someone who could build fast without cutting corners. Nilesh delivered our entire MVP in under 7 weeks — on budget, no surprises. What stood out was how clearly he explained every decision. Felt like a proper business partner, not just a developer.',
    name: 'Priya Nair',
    role: 'Product Lead',
    company: 'SaaS Startup · Bengaluru, India',
    initials: 'PN',
    color: 'from-rose-500 to-rose-600',
  },
  {
    quote:
      'Nilesh built our dispatch management platform with an AI voice agent that handles routine driver calls automatically. Our ops team was fielding 80+ calls a day — that number has dropped by more than half. Great work, great communication throughout the project.',
    name: 'Michael R.',
    role: 'Operations Director',
    company: 'Logistics Services · USA',
    initials: 'MR',
    color: 'from-blue-500 to-blue-700',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-amber-50 text-amber-600 text-xs font-semibold uppercase tracking-widest mb-4">
            Client Results
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-4">
            What Clients Say
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            Founders and business owners who chose to build with a focused technology partner rather
            than a large agency.
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl border border-slate-100 p-7 hover:shadow-lg transition-shadow"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <HiStar key={i} className="text-amber-400" size={16} />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-slate-700 text-sm leading-relaxed mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-slate-100">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white font-bold text-xs flex-shrink-0`}>
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">{testimonial.name}</p>
                  <p className="text-slate-500 text-xs">{testimonial.role}</p>
                  <p className="text-slate-400 text-xs">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social proof bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 text-center"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-8 px-8 py-5 rounded-2xl bg-white border border-slate-100 shadow-sm">
            <div className="text-center">
              <div className="text-2xl font-extrabold text-slate-900">12+</div>
              <div className="text-slate-500 text-xs mt-0.5">Years Experience</div>
            </div>
            <div className="w-px h-8 bg-slate-200" />
            <div className="text-center">
              <div className="text-2xl font-extrabold text-slate-900">100+</div>
              <div className="text-slate-500 text-xs mt-0.5">Projects Delivered</div>
            </div>
            <div className="w-px h-8 bg-slate-200" />
            <div className="text-center">
              <div className="text-2xl font-extrabold text-slate-900">4+</div>
              <div className="text-slate-500 text-xs mt-0.5">Countries Served</div>
            </div>
            <div className="w-px h-8 bg-slate-200" />
            <div className="text-center">
              <div className="text-2xl font-extrabold text-slate-900">98%</div>
              <div className="text-slate-500 text-xs mt-0.5">Client Satisfaction</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
