import { useSeo } from '../hooks/useSeo';
import { SITE } from '../data/site';
import { useEffect } from 'react';
import { breadcrumbJsonLd } from '../lib/breadcrumbs';
import { Users, Heart, Shield, Sparkles } from 'lucide-react';
import CTABanner from '../components/CTABanner';

export default function Family() {
  useSeo({
    title: 'Family Wellness',
    description: 'Comprehensive chiropractic care for the whole family at every stage of life.',
    canonical: '/family',
  });

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(breadcrumbJsonLd([
      { name: 'Home', url: `https://${SITE.domain}/` },
      { name: 'Family', url: `https://${SITE.domain}/family` },
    ]));
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const benefits = [
    {
      icon: Users,
      title: 'Whole Family Care',
      description: 'From newborns to grandparents, we provide age-appropriate care for everyone.',
    },
    {
      icon: Heart,
      title: 'Preventative Wellness',
      description: 'Regular care helps maintain health and prevent issues before they start.',
    },
    {
      icon: Shield,
      title: 'Natural Healing',
      description: 'Support your body\'s innate ability to heal without drugs or surgery.',
    },
    {
      icon: Sparkles,
      title: 'Enhanced Quality of Life',
      description: 'Improve mobility, reduce pain, and increase energy for all ages.',
    },
  ];

  return (
    <>
      <section className="py-16 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 text-center mb-6">
            Family Wellness Chiropractic
          </h1>
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
            Comprehensive chiropractic care designed for every member of your family, from infants to
            seniors.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Why Families Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex gap-4 p-6 bg-gray-50 rounded-xl">
                <div className="flex-shrink-0">
                  <div className="bg-emerald-100 w-12 h-12 rounded-lg flex items-center justify-center">
                    <benefit.icon size={24} className="text-emerald-700" />
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
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Care for Every Stage of Life
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-emerald-700 mb-4">Children & Teens</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Growth and development support</li>
                <li>Sports injury prevention and care</li>
                <li>Posture correction</li>
                <li>Immune system support</li>
                <li>Focus and concentration improvement</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-emerald-700 mb-4">Adults</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Back and neck pain relief</li>
                <li>Headache and migraine management</li>
                <li>Workplace injury recovery</li>
                <li>Stress reduction</li>
                <li>Athletic performance optimization</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-emerald-700 mb-4">Seniors</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Mobility and flexibility improvement</li>
                <li>Arthritis pain management</li>
                <li>Balance and fall prevention</li>
                <li>Quality of life enhancement</li>
                <li>Natural pain relief</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Common Conditions We Treat
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {['Back Pain', 'Neck Pain', 'Headaches', 'Sciatica', 'Sports Injuries', 'Arthritis',
              'Carpal Tunnel', 'Whiplash', 'Scoliosis', 'TMJ', 'Plantar Fasciitis', 'Shoulder Pain'].map((condition) => (
              <div key={condition} className="bg-gray-50 p-4 rounded-lg text-center font-medium text-gray-700">
                {condition}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Bring Your Whole Family"
        description="Experience personalized care in a welcoming, family-friendly environment."
        buttonText="Schedule Family Appointment"
        buttonLink={SITE.janeUrlWithUtm}
      />
    </>
  );
}
