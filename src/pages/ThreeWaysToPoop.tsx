import { useSeo } from '../hooks/useSeo';
import { SITE } from '../data/site';
import { useEffect } from 'react';
import { breadcrumbJsonLd } from '../lib/breadcrumbs';

export default function ThreeWaysToPoop() {
  useSeo({
    title: '3 Ways to Poop Better - Free Guide',
    description: 'Download our free guide with practical tips to support healthy digestion and elimination for your child.',
    canonical: '/3-ways-to-poop',
  });

  useEffect(() => {
    const breadcrumbScript = document.createElement('script');
    breadcrumbScript.type = 'application/ld+json';
    breadcrumbScript.text = JSON.stringify(breadcrumbJsonLd([
      { name: 'Home', url: `https://${SITE.domain}/` },
      { name: '3 Ways to Poop Better', url: `https://${SITE.domain}/3-ways-to-poop` },
    ]));
    document.head.appendChild(breadcrumbScript);

    return () => {
      document.head.removeChild(breadcrumbScript);
    };
  }, []);

  return (
    <>
      <section className="py-16 bg-gradient-to-br from-primary-light/10 to-primary-light/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 text-center mb-6">
            3 Ways to Poop Better
          </h1>
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
            Get your free guide with practical, natural solutions to support healthy digestion and elimination.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 p-8 rounded-xl mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Download Your Free Guide</h2>
            <p className="text-gray-700 mb-6">
              Discover three simple, effective strategies to support your child's digestive health naturally.
              Fill out the form below to receive your guide instantly.
            </p>
            <div className="bg-white rounded-xl shadow-sm overflow-hidden p-8">
              <iframe
                src="https://form.jotform.com/232886042433153"
                width="100%"
                height="700"
                style={{ border: 0 }}
                title="3 Ways to Poop Better Guide"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
