import { useSeo } from '../hooks/useSeo';
import { SITE } from '../data/site';
import { useEffect } from 'react';
import TopNotificationBanner from '../components/TopNotificationBanner';
import SimpleHero from '../components/SimpleHero';
import BeyondTechnique from '../components/BeyondTechnique';
import OnlineCoursesSection from '../components/OnlineCoursesSection';
import TestimonialsCarousel from '../components/TestimonialsCarousel';
import BringTTCArea from '../components/BringTTCArea';
import JotFormEmbed from '../components/JotFormEmbed';
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
      <TopNotificationBanner />
      <SimpleHero />
      <BeyondTechnique />
      <OnlineCoursesSection />
      <TestimonialsCarousel />
      <BringTTCArea />
      <JotFormEmbed />
      <ContactBlock />
    </>
  );
}
