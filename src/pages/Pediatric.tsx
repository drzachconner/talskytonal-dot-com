import { useSeo } from '../hooks/useSeo';
import { SITE } from '../data/site';
import { useEffect } from 'react';
import { breadcrumbJsonLd } from '../lib/breadcrumbs';
import { Baby, Heart, Shield, Smile } from 'lucide-react';
import CTABanner from '../components/CTABanner';

export default function Pediatric() {
  useSeo({
    title: 'Pediatric Chiropractic',
    description: 'Specialized pediatric chiropractic care for infants and children to support healthy development.',
    canonical: '/pediatric',
  });

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(breadcrumbJsonLd([
      { name: 'Home', url: `https://${SITE.domain}/` },
      { name: 'Pediatric', url: `https://${SITE.domain}/pediatric` },
    ]));
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const benefits = [
    {
      icon: Baby,
      title: 'Gentle Techniques',
      description: 'Specially adapted adjustments that are safe and comfortable for little ones.',
    },
    {
      icon: Heart,
      title: 'Support Development',
      description: 'Promote proper growth, posture, and nervous system function from birth.',
    },
    {
      icon: Shield,
      title: 'Boost Immunity',
      description: 'Help strengthen your child\'s natural defenses and overall wellness.',
    },
    {
      icon: Smile,
      title: 'Improve Sleep & Comfort',
      description: 'Address common childhood issues like colic, reflux, and sleep difficulties.',
    },
  ];

  return (
    <>
      <section className="relative py-32 bg-gray-900">
        <div className="absolute inset-0">
          <img
            src="/images/pediatric-care.jpg"
            alt="Pediatric Chiropractic Care"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white text-center mb-6">
            Pediatric
          </h1>
          <p className="text-lg text-white text-center max-w-3xl mx-auto">
            What truly distinguishes Cultivate Wellness is our specialty and expertise in pediatric care. We can achieve remarkable outcomes across a range of conditions, from soothing fussy and colicky babies to aiding chronically ill children, and supporting kids and teens facing sensory and spectrum challenges.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Benefits for Your Child
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex gap-4 p-6 bg-gray-50 rounded-xl">
                <div className="flex-shrink-0">
                  <div className="bg-emerald-100 w-12 h-12 rounded-lg flex items-center justify-center">
                    <benefit.icon size={24} className="text-primary-dark" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-700">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Common Conditions We Help
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {['Colic', 'Reflux', 'Ear Infections', 'Sleep Issues', 'Torticollis', 'Growing Pains',
              'Scoliosis', 'Sports Injuries', 'Posture Problems'].map((condition) => (
              <div key={condition} className="bg-white p-4 rounded-lg text-center font-medium text-gray-700">
                {condition}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Give Your Child the Gift of Wellness"
        description="Schedule a gentle, caring consultation for your little one today."
        buttonText="Book Pediatric Appointment"
        buttonLink={SITE.janeUrlWithUtm}
      />
    </>
  );
}
