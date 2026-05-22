'use client'

import { motion } from 'framer-motion'
import {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss,
  SiLaravel, SiNodedotjs,
  SiMysql, SiPostgresql, SiFirebase,
  SiOpenai,
  SiVercel, SiDigitalocean,
} from 'react-icons/si'
import { FaWhatsapp, FaAws } from 'react-icons/fa'
import { HiMicrophone } from 'react-icons/hi'

const techCategories = [
  {
    name: 'Frontend',
    techs: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    ],
  },
  {
    name: 'Backend',
    techs: [
      { name: 'Laravel', icon: SiLaravel, color: '#FF2D20' },
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
    ],
  },
  {
    name: 'Database',
    techs: [
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
    ],
  },
  {
    name: 'AI & Automation',
    techs: [
      { name: 'OpenAI', icon: SiOpenai, color: '#412991' },
      { name: 'VAPI (Voice AI)', icon: HiMicrophone, color: '#7C3AED' },
      { name: 'WhatsApp API', icon: FaWhatsapp, color: '#25D366' },
    ],
  },
  {
    name: 'Cloud & DevOps',
    techs: [
      { name: 'Vercel', icon: SiVercel, color: '#000000' },
      { name: 'AWS', icon: FaAws, color: '#FF9900' },
      { name: 'DigitalOcean', icon: SiDigitalocean, color: '#0080FF' },
    ],
  },
]

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-teal-50 text-teal-600 text-xs font-semibold uppercase tracking-widest mb-4">
            Tech Stack
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-4">
            Technologies I Work With
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            Carefully selected, production-proven tools that ensure your product is built on a solid,
            scalable foundation.
          </p>
        </motion.div>

        {/* Tech Categories */}
        <div className="space-y-10">
          {techCategories.map((category, catIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: catIndex * 0.08 }}
            >
              <div className="flex items-center gap-4 mb-5">
                <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest whitespace-nowrap">
                  {category.name}
                </h3>
                <div className="flex-1 h-px bg-slate-100" />
              </div>
              <div className="flex flex-wrap gap-3">
                {category.techs.map((tech, techIndex) => {
                  const Icon = tech.icon
                  return (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: catIndex * 0.05 + techIndex * 0.05 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-200 hover:shadow-sm transition-all cursor-default"
                    >
                      <Icon size={20} style={{ color: tech.color }} />
                      <span className="text-slate-700 text-sm font-medium">{tech.name}</span>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center p-6 rounded-2xl bg-gradient-to-r from-slate-50 to-blue-50 border border-slate-100"
        >
          <p className="text-slate-600 text-sm">
            <span className="font-semibold text-slate-800">Using a different stack?</span> I adapt
            to your existing technology and team preferences. Let&apos;s discuss what works best
            for your project.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
