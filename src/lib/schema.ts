import { SITE } from '../data/site';

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    '@id': `https://${SITE.domain}/#organization`,
    name: SITE.name,
    url: `https://${SITE.domain}`,
    logo: `https://${SITE.domain}/images/logo.webp`,
    image: `https://${SITE.domain}/images/hero-family.webp`,
    description: SITE.description,
    priceRange: SITE.priceRange,
    telephone: SITE.phone,
    email: SITE.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postal,
      addressCountry: SITE.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE.geo.latitude,
      longitude: SITE.geo.longitude,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Friday',
        opens: '15:00',
        closes: '18:30',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '13:00',
      },
    ],
    sameAs: [
      SITE.socials.facebook,
      SITE.socials.instagram,
      SITE.socials.tiktok,
      SITE.socials.youtube,
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Chiropractic Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'MedicalProcedure',
            name: 'Pediatric Chiropractic Care',
            description: 'Specialized chiropractic care for children, supporting their nervous system development and overall wellness.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'MedicalProcedure',
            name: 'Prenatal Chiropractic Care',
            description: 'Gentle chiropractic care for expecting mothers to support a healthy pregnancy and optimal birth outcomes.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'MedicalProcedure',
            name: 'Family Chiropractic Care',
            description: 'Comprehensive chiropractic care for the whole family, promoting optimal nervous system function.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'MedicalProcedure',
            name: 'Talsky Tonal Chiropractic',
            description: 'Advanced neurologically-focused chiropractic technique for gentle, effective nervous system optimization.',
          },
        },
      ],
    },
  };
}

export function personSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `https://${SITE.domain}/#dr-zach`,
    name: 'Dr. Zach Talsky',
    jobTitle: 'Doctor of Chiropractic',
    description: 'Board-certified chiropractor specializing in pediatric, prenatal, and family care. Certified teacher of Talsky Tonal Chiropractic.',
    image: `https://${SITE.domain}/images/dr-zach.webp`,
    worksFor: {
      '@id': `https://${SITE.domain}/#organization`,
    },
    alumniOf: 'Palmer College of Chiropractic',
    knowsAbout: [
      'Pediatric Chiropractic',
      'Prenatal Chiropractic',
      'Talsky Tonal Chiropractic',
      'Neurological Development',
      'Family Wellness',
    ],
  };
}

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Chiropractor',
    '@id': `https://${SITE.domain}/#localbusiness`,
    name: SITE.name,
    url: `https://${SITE.domain}`,
    telephone: SITE.phone,
    email: SITE.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postal,
      addressCountry: SITE.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE.geo.latitude,
      longitude: SITE.geo.longitude,
    },
    priceRange: SITE.priceRange,
    image: `https://${SITE.domain}/images/hero-family.webp`,
    openingHours: ['Fr 15:00-18:30', 'Sa 08:00-13:00'],
    areaServed: {
      '@type': 'City',
      name: 'Rochester Hills',
    },
  };
}

export function faqSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function articleSchema(article: {
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified: string;
  author: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.headline,
    description: article.description,
    image: `https://${SITE.domain}${article.image}`,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    author: {
      '@type': 'Person',
      name: article.author,
      '@id': `https://${SITE.domain}/#dr-zach`,
    },
    publisher: {
      '@id': `https://${SITE.domain}/#organization`,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://${SITE.domain}${article.url}`,
    },
  };
}

export function serviceSchema(service: {
  name: string;
  description: string;
  image: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: service.name,
    description: service.description,
    image: `https://${SITE.domain}${service.image}`,
    url: `https://${SITE.domain}${service.url}`,
    provider: {
      '@id': `https://${SITE.domain}/#organization`,
    },
  };
}

export function howToSchema(howTo: {
  name: string;
  description: string;
  image: string;
  totalTime: string;
  steps: Array<{ name: string; text: string }>;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: howTo.name,
    description: howTo.description,
    image: `https://${SITE.domain}${howTo.image}`,
    totalTime: howTo.totalTime,
    step: howTo.steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };
}

export function injectSchema(schema: object) {
  if (typeof window !== 'undefined') {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }
  return () => {};
}
