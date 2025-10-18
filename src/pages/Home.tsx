import { useSeo } from '../hooks/useSeo';
import { SITE } from '../data/site';
import Hero from '../components/Hero';
import ServicesGrid from '../components/ServicesGrid';
import TestimonialSlider from '../components/TestimonialSlider';
import CTABanner from '../components/CTABanner';
import { useEffect } from 'react';

export default function Home() {
  useSeo({
    title: SITE.name,
    description: SITE.description,
    canonical: '/',
  });

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Chiropractor",
      "name": SITE.name,
      "description": SITE.description,
      "image": `https://${SITE.domain}/logo.svg`,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": SITE.address.street,
        "addressLocality": SITE.address.city,
        "addressRegion": SITE.address.region,
        "postalCode": SITE.address.postal,
        "addressCountry": SITE.address.country,
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": SITE.geo.latitude,
        "longitude": SITE.geo.longitude,
      },
      "telephone": SITE.phone,
      "url": `https://${SITE.domain}`,
      "openingHours": SITE.hours,
      "hasMap": `https://maps.google.com/?q=${encodeURIComponent(SITE.address.street + ', ' + SITE.address.city + ', ' + SITE.address.region)}`,
      "priceRange": SITE.priceRange,
      "sameAs": Object.values(SITE.socials),
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      <Hero
        title="Welcome to Cultivate Wellness Chiropractic"
        subtitle="Expert chiropractic care for families, children, and expectant mothers. Personalized treatment plans to help you thrive."
        ctaText="Request Your Appointment"
        ctaLink={SITE.janeUrlWithUtm}
      />
      <ServicesGrid />
      <TestimonialSlider />
      <CTABanner
        title="Ready to Start Your Wellness Journey?"
        description="Schedule your first appointment and discover how chiropractic care can transform your family's health."
        buttonText="Book Your Appointment"
        buttonLink={SITE.janeUrlWithUtm}
      />
    </>
  );
}
