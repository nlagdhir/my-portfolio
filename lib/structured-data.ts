export const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Nilesh Lagdhir',
  url: 'https://www.nlagdhir.in',
  description:
    'Technology partner helping startups and businesses build web applications, AI automation systems, and scalable software products.',
  jobTitle: 'Web Development & AI Automation Partner',
  sameAs: [
    'https://www.linkedin.com/in/nlagdhir',
    'https://twitter.com/nlagdhir',
    'https://github.com/nlagdhir',
  ],
  knowsAbout: [
    'Web Development',
    'Next.js',
    'Laravel',
    'React',
    'AI Automation',
    'WhatsApp Automation',
    'MVP Development',
    'Business Process Automation',
  ],
  offers: {
    '@type': 'Offer',
    description: 'Custom web development, AI automation, and MVP development services',
  },
}

export const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Nilesh Lagdhir – Web Development & AI Automation',
  url: 'https://www.nlagdhir.in',
  description:
    'Custom web development, AI automation, WhatsApp automation, MVP development, and CRM systems for startups and businesses.',
  areaServed: ['US', 'CA', 'GB', 'AU', 'IN'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Development & Automation Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Custom Web Development',
          description:
            'Business websites, web portals, custom dashboards, and SaaS platforms built with React, Next.js, and Laravel.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Startup MVP Development',
          description:
            'Rapid MVP development for startups needing fast validation and scalable architecture.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'AI & Automation Solutions',
          description:
            'AI chatbots, voice agents, business process automation, and internal productivity tools.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'WhatsApp Automation',
          description:
            'Lead capture, customer support automation, order updates, and CRM integration via WhatsApp.',
        },
      },
    ],
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does a project cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Project costs vary based on scope and complexity. A basic business website typically starts around $1,500–$3,000, while a custom web application or MVP ranges from $5,000–$25,000+. Book a free consultation to get a detailed estimate for your specific project.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does development take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A business website typically takes 2–4 weeks. An MVP or custom web application takes 4–12 weeks depending on complexity. AI automation systems typically take 2–6 weeks. I provide clear timelines during the project discovery phase.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you work with international clients?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, I work with clients in the USA, Canada, UK, Australia, and globally. All communication happens via video calls, Slack, or email, with project updates provided through dedicated project management tools.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you help build MVPs for startups?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. I specialize in rapid MVP development for startups that need to validate their product quickly. I use modern frameworks like Next.js, Laravel, and Firebase to ship functional products fast without sacrificing scalability.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you automate business processes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. I build custom automation systems that eliminate repetitive tasks, integrate systems together, and improve operational efficiency. This includes WhatsApp automation, CRM integrations, workflow automation, and AI-powered process automation.',
      },
    },
  ],
}

export const structuredData = [personSchema, serviceSchema, faqSchema]
