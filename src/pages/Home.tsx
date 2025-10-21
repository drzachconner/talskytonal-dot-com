import { useSeo } from '../hooks/useSeo';
import { SITE } from '../data/site';
import { useEffect } from 'react';
import HeroTTC from '../components/HeroTTC';
import BeyondTechnique from '../components/BeyondTechnique';
import TestimonialsCarousel from '../components/TestimonialsCarousel';
import BringTTCArea from '../components/BringTTCArea';
import LeadCaptureForm from '../components/LeadCaptureForm';
import ContactBlock from '../components/ContactBlock';

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
      "@type": "WebSite",
      "name": SITE.name,
      "url": `https://${SITE.domain}`,
      "description": SITE.description,
      "publisher": {
        "@type": "EducationalOrganization",
        "name": SITE.name
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": `https://${SITE.domain}/?s={search_term_string}`,
        "query-input": "required name=search_term_string"
      }
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      <HeroTTC />
      <BeyondTechnique />
      <TestimonialsCarousel />
      <BringTTCArea />
      <LeadCaptureForm />
      <ContactBlock />
    </>
  );
}
