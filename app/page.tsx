import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import CaseStudies from '@/components/sections/CaseStudies'
import TechStack from '@/components/sections/TechStack'
import Process from '@/components/sections/Process'
import WhyWorkWithMe from '@/components/sections/WhyWorkWithMe'
import Testimonials from '@/components/sections/Testimonials'
import FAQ from '@/components/sections/FAQ'
import Contact from '@/components/sections/Contact'
import { structuredData } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: 'Nilesh Lagdhir – Web Development, AI Automation & MVP Development Partner',
  description:
    'Helping startups and businesses build custom web applications, AI-powered automation systems, WhatsApp solutions, voice agents, and scalable software products. 12+ years experience, 100+ projects delivered.',
  alternates: {
    canonical: '/',
  },
}

export default function HomePage() {
  return (
    <>
      {/* Structured Data */}
      {structuredData.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <Hero />
      <Services />
      <CaseStudies />
      <TechStack />
      <Process />
      <WhyWorkWithMe />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  )
}
