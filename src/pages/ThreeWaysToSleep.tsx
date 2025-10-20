import { useSeo } from '../hooks/useSeo';
import { SITE } from '../data/site';
import { useEffect } from 'react';
import { breadcrumbJsonLd } from '../lib/breadcrumbs';
import { articleSchema, howToSchema } from '../lib/schema';

export default function ThreeWaysToSleep() {
  useSeo({
    title: '3 Ways to Sleep Better - Free Guide',
    description: 'Download our free guide with practical tips to support healthy sleep for your child.',
    canonical: '/3-ways-to-sleep',
  });

  useEffect(() => {
    const scripts: HTMLScriptElement[] = [];

    const breadcrumbScript = document.createElement('script');
    breadcrumbScript.type = 'application/ld+json';
    breadcrumbScript.text = JSON.stringify(breadcrumbJsonLd([
      { name: 'Home', url: `https://${SITE.domain}/` },
      { name: '3 Ways to Sleep Better', url: `https://${SITE.domain}/3-ways-to-sleep` },
    ]));
    document.head.appendChild(breadcrumbScript);
    scripts.push(breadcrumbScript);

    const articleScript = document.createElement('script');
    articleScript.type = 'application/ld+json';
    articleScript.text = JSON.stringify(articleSchema({
      headline: '3 Ways to Improve Your Child\'s Sleep',
      description: 'Simple, effective strategies to help your child sleep better naturally through chiropractic care and wellness practices.',
      image: '/images/sleep-guide.webp',
      datePublished: '2024-01-01',
      dateModified: '2025-10-20',
      author: 'Dr. Zach Talsky',
      url: '/3-ways-to-sleep',
    }));
    document.head.appendChild(articleScript);
    scripts.push(articleScript);

    const howToScript = document.createElement('script');
    howToScript.type = 'application/ld+json';
    howToScript.text = JSON.stringify(howToSchema({
      name: '3 Ways to Improve Your Child\'s Sleep',
      description: 'Learn three practical, natural approaches to support healthy sleep patterns in children.',
      image: '/images/sleep-guide.webp',
      totalTime: 'P7D',
      steps: [
        {
          name: 'Optimize Nervous System Function',
          text: 'Address nervous system stress through gentle chiropractic care to help the body naturally regulate sleep cycles.',
        },
        {
          name: 'Establish Consistent Sleep Routines',
          text: 'Create calming bedtime rituals and maintain consistent sleep schedules to support your child\'s natural circadian rhythm.',
        },
        {
          name: 'Create a Sleep-Conducive Environment',
          text: 'Ensure the bedroom is dark, cool, quiet, and free from electronic devices to promote deep, restorative sleep.',
        },
      ],
    }));
    document.head.appendChild(howToScript);
    scripts.push(howToScript);

    return () => {
      scripts.forEach((script) => {
        if (script.parentNode) {
          document.head.removeChild(script);
        }
      });
    };
  }, []);

  return (
    <>
      <section className="relative py-24 bg-cover bg-center" style={{ backgroundImage: 'url(/images/sleep-guide.webp)' }}>
        <div className="absolute inset-0 bg-white/80"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 text-center mb-6">
            3 Ways to Sleep Better
          </h1>
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
            Get your free guide with practical, natural solutions to support healthy sleep.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Download Your Free Guide</h2>
            <p className="text-gray-700 mb-6">
              Discover three simple, effective strategies to help your child sleep better naturally.
              Fill out the form below to receive your guide instantly.
            </p>
            <iframe
              src="https://form.jotform.com/232885167474165"
              width="100%"
              height="700"
              style={{ border: 0 }}
              title="3 Ways to Sleep Better Guide"
            />
          </div>
        </div>
      </section>
    </>
  );
}
