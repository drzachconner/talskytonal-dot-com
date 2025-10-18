export const SITE = {
  name: 'Cultivate Wellness Chiropractic',
  domain: 'cultivatewellnesschiro.com',
  phone: '+1-555-123-4567',
  email: 'admin@cultivatewellnesschiro.com',
  address: {
    street: '123 Main St',
    city: 'Portland',
    region: 'OR',
    postal: '97204',
    country: 'US',
  },
  geo: {
    latitude: 45.523,
    longitude: -122.676,
  },
  janeUrl: 'https://cultivatewellness.janeapp.com/',
  janeUrlWithUtm: 'https://cultivatewellness.janeapp.com/?utm_source=website&utm_medium=cta&utm_campaign=request-appointment',
  hours: ['Mo-Fr 09:00-17:00', 'Sa 10:00-13:00'],
  socials: {
    instagram: 'https://instagram.com/cultivatewellness',
    facebook: 'https://facebook.com/cultivatewellness',
  },
  description: 'Chiropractic care for families, pediatrics, and prenatal. Expert care, personalized treatment.',
  priceRange: '$$',
} as const;
