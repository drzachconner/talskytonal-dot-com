import { SITE } from '../data/site';

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    '@id': `https://${SITE.domain}/#organization`,
    name: SITE.name,
    alternateName: 'Cultivate Wellness',
    url: `https://${SITE.domain}`,
    logo: `https://${SITE.domain}/images/logo.webp`,
    image: `https://${SITE.domain}/images/hero-family.webp`,
    description: SITE.description,
    priceRange: SITE.priceRange,
    telephone: SITE.phone,
    email: SITE.email,
    foundingDate: '2020',
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
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: SITE.geo.latitude,
        longitude: SITE.geo.longitude,
      },
      geoRadius: '30000',
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
      `https://www.google.com/maps/place/?q=place_id:ChIJBQUKW2fJJIgRZoaJtd9K7ac`,
    ],
    hasMap: `https://www.google.com/maps/place/Cultivate+Wellness+Chiropractic/@${SITE.geo.latitude},${SITE.geo.longitude}`,
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
    givenName: 'Zach',
    familyName: 'Talsky',
    honorificPrefix: 'Dr.',
    honorificSuffix: 'DC',
    jobTitle: 'Doctor of Chiropractic',
    description: 'Board-certified chiropractor specializing in pediatric, prenatal, and family care. Certified teacher of Talsky Tonal Chiropractic.',
    image: `https://${SITE.domain}/images/dr-zach.webp`,
    url: `https://${SITE.domain}/meet-dr-zach`,
    worksFor: {
      '@id': `https://${SITE.domain}/#organization`,
    },
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Life University College of Chiropractic',
      sameAs: 'https://www.wikidata.org/wiki/Q6545465',
    },
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'degree',
        name: 'Doctor of Chiropractic',
      },
    ],
    knowsAbout: [
      {
        '@type': 'Thing',
        name: 'Pediatric Chiropractic',
        url: `https://${SITE.domain}/pediatric`,
      },
      {
        '@type': 'Thing',
        name: 'Prenatal Chiropractic',
        url: `https://${SITE.domain}/prenatal`,
      },
      {
        '@type': 'Thing',
        name: 'Talsky Tonal Chiropractic',
        url: `https://${SITE.domain}/talsky-tonal-chiropractic`,
      },
      'Neurological Development',
      'Family Wellness',
      'Webster Technique',
      'INSiGHT Scans',
    ],
    sameAs: [
      SITE.socials.facebook,
      SITE.socials.youtube,
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
  reviewedBy?: {
    name: string;
    credentials: string;
  };
  wordCount?: number;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    headline: article.headline,
    description: article.description,
    image: `https://${SITE.domain}${article.image}`,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    lastReviewed: article.dateModified,
    author: {
      '@type': 'Person',
      name: article.author,
      '@id': `https://${SITE.domain}/#dr-zach`,
      jobTitle: 'Doctor of Chiropractic',
      hasCredential: 'Doctor of Chiropractic',
    },
    ...(article.reviewedBy && {
      reviewedBy: {
        '@type': 'Person',
        name: article.reviewedBy.name,
        jobTitle: article.reviewedBy.credentials,
      },
    }),
    publisher: {
      '@id': `https://${SITE.domain}/#organization`,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://${SITE.domain}${article.url}`,
    },
    ...(article.wordCount && { wordCount: article.wordCount }),
    inLanguage: 'en-US',
    isAccessibleForFree: true,
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

export function aggregateRatingSchema(rating: {
  ratingValue: number;
  reviewCount: number;
  bestRating?: number;
  worstRating?: number;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'AggregateRating',
    ratingValue: rating.ratingValue,
    reviewCount: rating.reviewCount,
    bestRating: rating.bestRating || 5,
    worstRating: rating.worstRating || 1,
    itemReviewed: {
      '@id': `https://${SITE.domain}/#organization`,
    },
  };
}

export function reviewSchema(review: {
  author: string;
  datePublished: string;
  reviewBody: string;
  ratingValue: number;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    author: {
      '@type': 'Person',
      name: review.author,
    },
    datePublished: review.datePublished,
    reviewBody: review.reviewBody,
    reviewRating: {
      '@type': 'Rating',
      ratingValue: review.ratingValue,
      bestRating: 5,
      worstRating: 1,
    },
    itemReviewed: {
      '@id': `https://${SITE.domain}/#organization`,
    },
  };
}

export function medicalWebPageSchema(page: {
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified: string;
  author: string;
  url: string;
  condition?: {
    name: string;
    description?: string;
    wikipediaUrl?: string;
    wikidataId?: string;
  };
  therapy?: {
    name: string;
    description: string;
  };
  reviewedBy?: {
    name: string;
    credentials: string;
  };
  wordCount?: number;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    headline: page.headline,
    description: page.description,
    image: `https://${SITE.domain}${page.image}`,
    datePublished: page.datePublished,
    dateModified: page.dateModified,
    lastReviewed: page.dateModified,
    ...(page.condition && {
      about: {
        '@type': 'MedicalCondition',
        name: page.condition.name,
        ...(page.condition.description && { description: page.condition.description }),
        ...(page.condition.wikipediaUrl && { url: page.condition.wikipediaUrl }),
        ...(page.condition.wikidataId && {
          sameAs: `https://www.wikidata.org/wiki/${page.condition.wikidataId}`,
        }),
      },
    }),
    ...(page.therapy && {
      mentions: [
        {
          '@type': 'MedicalTherapy',
          name: page.therapy.name,
          description: page.therapy.description,
          sameAs: 'https://en.wikipedia.org/wiki/Chiropractic',
        },
      ],
    }),
    author: {
      '@type': 'Person',
      name: page.author,
      '@id': `https://${SITE.domain}/#dr-zach`,
      jobTitle: 'Doctor of Chiropractic',
      hasCredential: 'Doctor of Chiropractic',
    },
    ...(page.reviewedBy && {
      reviewedBy: {
        '@type': 'Person',
        name: page.reviewedBy.name,
        jobTitle: page.reviewedBy.credentials,
      },
    }),
    publisher: {
      '@id': `https://${SITE.domain}/#organization`,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://${SITE.domain}${page.url}`,
    },
    ...(page.wordCount && { wordCount: page.wordCount }),
    inLanguage: 'en-US',
    isAccessibleForFree: true,
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
