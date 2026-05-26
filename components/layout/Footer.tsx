'use client'

import Link from 'next/link'
import { FaLinkedin, FaGithub, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi'
import CalendlyLink from '@/components/CalendlyLink'

const services = [
  'Custom Web Development',
  'Startup MVP Development',
  'AI & Automation Solutions',
  'WhatsApp Automation',
  'CRM & Business Systems',
  'Maintenance & Support',
]

const quickLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Process', href: '#process' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-slate-950 text-white">
      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-violet-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Ready to Build Something Great?
            </h2>
            <p className="text-blue-100 text-base">
              Book a free 30-minute consultation to discuss your project.
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <CalendlyLink
              source="footer"
              className="inline-flex items-center px-6 py-3 rounded-xl bg-white text-blue-700 font-bold text-sm hover:shadow-lg hover:scale-105 transition-all"
            >
              Book Free Call
            </CalendlyLink>
            <a
              href="https://wa.me/919510110198"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-white/40 text-white font-semibold text-sm hover:bg-white/10 transition-colors"
            >
              <FaWhatsapp size={16} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center text-white font-bold text-sm">
                NL
              </div>
              <span className="font-bold text-lg text-white">Nilesh Lagdhir</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Technology partner helping startups and businesses build web applications, AI
              automation systems, and scalable software products.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/nlagdhir"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 transition-all"
              >
                <FaLinkedin size={16} />
              </a>
              <a
                href="https://github.com/nlagdhir"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-all"
              >
                <FaGithub size={16} />
              </a>
              <a
                href="https://twitter.com/nlagdhir"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-sky-500 transition-all"
              >
                <FaTwitter size={16} />
              </a>
              <a
                href="https://wa.me/919510110198"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-green-600 transition-all"
              >
                <FaWhatsapp size={16} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-slate-400 text-sm hover:text-blue-400 transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-400 text-sm hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Get In Touch</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:nilesh@nlagdhir.in"
                  className="flex items-start gap-3 text-slate-400 text-sm hover:text-blue-400 transition-colors"
                >
                  <HiMail size={16} className="mt-0.5 flex-shrink-0" />
                  nilesh@nlagdhir.in
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919510110198"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-slate-400 text-sm hover:text-green-400 transition-colors"
                >
                  <FaWhatsapp size={16} className="mt-0.5 flex-shrink-0" />
                  WhatsApp Chat
                </a>
              </li>
              <li className="flex items-start gap-3 text-slate-400 text-sm">
                <HiLocationMarker size={16} className="mt-0.5 flex-shrink-0" />
                Available for remote projects globally
              </li>
            </ul>
            <div className="mt-5">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-slate-400 text-xs">Available for new projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-sm">
            &copy; {year} Nilesh Lagdhir. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs">
            Serving clients in USA, Canada, UK, Australia & globally
          </p>
        </div>
      </div>
    </footer>
  )
}
