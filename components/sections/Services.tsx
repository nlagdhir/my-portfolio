'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import CalendlyLink from '@/components/CalendlyLink'
import {
  HiCode,
  HiLightningBolt,
  HiCog,
  HiChat,
  HiDatabase,
  HiSupport,
} from 'react-icons/hi'

const services = [
  {
    icon: HiCode,
    title: 'Custom Web Development',
    description:
      'Scalable, performant web applications built with modern frameworks that grow with your business.',
    color: 'blue',
    gradient: 'from-blue-500 to-blue-700',
    bgLight: 'bg-blue-50',
    textColor: 'text-blue-600',
    borderHover: 'hover:border-blue-200',
    items: [
      'Business websites & web portals',
      'Custom dashboards & admin panels',
      'SaaS platform development',
      'E-commerce & marketplace solutions',
    ],
  },
  {
    icon: HiLightningBolt,
    title: 'Startup MVP Development',
    description:
      'Go from idea to a working product fast. Validate your concept before investing in a full build.',
    color: 'violet',
    gradient: 'from-violet-500 to-violet-700',
    bgLight: 'bg-violet-50',
    textColor: 'text-violet-600',
    borderHover: 'hover:border-violet-200',
    items: [
      'Rapid product validation',
      'Launch-ready in 4–8 weeks',
      'Scalable architecture from day one',
      'AI-assisted development workflow',
    ],
  },
  {
    icon: HiCog,
    title: 'AI & Automation Solutions',
    description:
      'Eliminate repetitive work and unlock intelligent operations with practical AI implementations.',
    color: 'indigo',
    gradient: 'from-indigo-500 to-indigo-700',
    bgLight: 'bg-indigo-50',
    textColor: 'text-indigo-600',
    borderHover: 'hover:border-indigo-200',
    items: [
      'AI chatbots & virtual assistants',
      'AI voice agents for customer support',
      'Business process automation',
      'Internal productivity tools',
    ],
  },
  {
    icon: HiChat,
    title: 'WhatsApp Automation',
    description:
      'Turn WhatsApp into a fully automated sales and support channel that works around the clock.',
    color: 'green',
    gradient: 'from-green-500 to-green-700',
    bgLight: 'bg-green-50',
    textColor: 'text-green-600',
    borderHover: 'hover:border-green-200',
    items: [
      'Automated lead capture & qualification',
      'Customer support automation',
      'Order updates & notifications',
      'CRM & system integrations',
    ],
  },
  {
    icon: HiDatabase,
    title: 'CRM & Business Systems',
    description:
      'Tailored business management systems built around your exact operational requirements.',
    color: 'orange',
    gradient: 'from-orange-500 to-orange-700',
    bgLight: 'bg-orange-50',
    textColor: 'text-orange-600',
    borderHover: 'hover:border-orange-200',
    items: [
      'Courier & logistics CRM systems',
      'Service management platforms',
      'Internal operations portals',
      'Custom reporting & analytics',
    ],
  },
  {
    icon: HiSupport,
    title: 'Maintenance & Support',
    description:
      'Ongoing technical partnership to keep your systems running at peak performance.',
    color: 'teal',
    gradient: 'from-teal-500 to-teal-700',
    bgLight: 'bg-teal-50',
    textColor: 'text-teal-600',
    borderHover: 'hover:border-teal-200',
    items: [
      '24/7 uptime monitoring',
      'Bug fixes & security patches',
      'Performance optimization',
      'Feature enhancements & updates',
    ],
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
}

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="services" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold uppercase tracking-widest mb-4">
            Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-4">
            What I Build For You
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            From early-stage MVPs to enterprise-grade automation systems — every solution is built
            to deliver measurable business outcomes.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                className={`group relative bg-white rounded-2xl border border-slate-100 p-7 hover:shadow-xl ${service.borderHover} transition-all duration-300 cursor-default`}
              >
                {/* Top accent line */}
                <div className={`absolute top-0 left-6 right-6 h-0.5 rounded-full bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl ${service.bgLight} flex items-center justify-center mb-5`}>
                  <Icon className={service.textColor} size={22} />
                </div>

                <h3 className="font-bold text-slate-900 text-lg mb-2.5">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-5">{service.description}</p>

                <ul className="space-y-2">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-slate-600 text-sm">
                      <span className={`w-1.5 h-1.5 rounded-full ${service.textColor.replace('text-', 'bg-')} mt-1.5 flex-shrink-0`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-14"
        >
          <p className="text-slate-500 mb-5 text-base">
            Not sure which service fits your needs? Let&apos;s talk it through.
          </p>
          <CalendlyLink
            source="services"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white font-bold text-sm shadow-md hover:shadow-blue-500/30 hover:scale-105 transition-all"
          >
            Book a Free 30-Min Strategy Call
          </CalendlyLink>
        </motion.div>
      </div>
    </section>
  )
}
