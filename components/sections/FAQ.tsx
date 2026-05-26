'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiChevronDown } from 'react-icons/hi'
import CalendlyLink from '@/components/CalendlyLink'
import { cn } from '@/lib/cn'

const faqs = [
  {
    question: 'How much does a project cost?',
    answer:
      'Project costs depend on scope and complexity. A business website typically starts from $1,500–$3,000. A custom web application or MVP ranges from $5,000–$25,000+. WhatsApp automation or AI integrations start from $2,000. I provide a detailed estimate after our initial discovery call — there are no hidden costs or surprises.',
  },
  {
    question: 'How long does development take?',
    answer:
      'Timelines depend on the project: a business website takes 2–4 weeks, a startup MVP takes 4–8 weeks, and a complex SaaS platform may take 10–16 weeks. AI automation systems typically take 2–6 weeks. I provide a clear project timeline during the planning phase and communicate any changes proactively.',
  },
  {
    question: 'Do you work with international clients?',
    answer:
      'Yes, I work with clients across the USA, Canada, UK, Australia, and globally. Communication happens via video calls (Zoom or Google Meet), Slack, email, and project management tools like Notion or Linear. Time zone differences are managed with scheduled check-ins and async updates.',
  },
  {
    question: 'Can you help build an MVP for my startup?',
    answer:
      'Absolutely — MVP development for startups is one of my core services. I help you define what to build first, architect for scale, and ship a production-ready product quickly. The goal is a working product you can put in front of real users to validate your idea before a larger investment.',
  },
  {
    question: 'Can you automate business processes?',
    answer:
      'Yes. I build custom automation systems that connect your tools, eliminate manual work, and streamline operations. This includes WhatsApp automation for sales and support, internal workflow automation, CRM integrations, AI-powered process automation, and API integrations between systems.',
  },
  {
    question: 'Can you integrate AI into my existing product?',
    answer:
      'Yes. I specialise in practical AI integrations using OpenAI, VAPI, and other proven tools. This includes AI chatbots trained on your business data, AI voice agents for phone support, intelligent document processing, and AI-powered automation workflows.',
  },
  {
    question: 'Do you provide ongoing maintenance and support?',
    answer:
      'Yes. I offer flexible maintenance packages that include monitoring, bug fixes, security patches, performance optimisation, and feature development. You can choose a monthly retainer or pay-as-you-go support depending on your needs.',
  },
  {
    question: 'What industries do you have experience in?',
    answer:
      'I have experience across logistics, healthcare, e-commerce, SaaS, services businesses, and agencies. Most business software challenges have similarities regardless of industry — the key is understanding your specific workflows and constraints, which we cover during the discovery phase.',
  },
  {
    question: 'Do you sign NDAs and contracts?',
    answer:
      'Yes. I sign NDAs and work under a formal contract for every project. This protects your business idea and ensures both parties are clear on deliverables, timelines, and payment terms before any work begins.',
  },
  {
    question: 'What happens if I need changes after launch?',
    answer:
      'Minor changes within project scope are handled at no extra cost. New features or scope changes are quoted transparently and added to a roadmap. I recommend a maintenance retainer for businesses that need regular updates and improvements.',
  },
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className={cn(
      'border border-slate-100 rounded-xl overflow-hidden transition-colors',
      open ? 'border-blue-100 bg-blue-50/30' : 'bg-white hover:border-slate-200'
    )}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={open}
      >
        <span className={cn(
          'font-semibold text-base transition-colors',
          open ? 'text-blue-700' : 'text-slate-900'
        )}>
          {question}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          <HiChevronDown
            size={20}
            className={cn(
              'transition-colors',
              open ? 'text-blue-600' : 'text-slate-400'
            )}
          />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            <div className="px-6 pb-5 text-slate-600 text-sm leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold uppercase tracking-widest mb-4">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-5">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-500 text-base leading-relaxed mb-8">
              Answers to the most common questions I get from potential clients. Don&apos;t see your
              question? Just reach out directly.
            </p>
            <CalendlyLink
              source="faq"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-slate-200 text-slate-700 font-semibold text-sm hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50 transition-all"
            >
              Ask a Question
            </CalendlyLink>
          </motion.div>

          {/* Right: Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-8 space-y-3"
          >
            {faqs.map((faq) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
