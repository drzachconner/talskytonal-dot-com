import { useSeo } from '../hooks/useSeo';
import { SITE } from '../data/site';
import { team } from '../data/team';
import { useEffect } from 'react';
import { breadcrumbJsonLd } from '../lib/breadcrumbs';
import CTABanner from '../components/CTABanner';

export default function AboutUs() {
  useSeo({
    title: 'About Us',
    description: 'Meet our team of dedicated chiropractors committed to your family\'s wellness.',
    canonical: '/about-us',
  });

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(breadcrumbJsonLd([
      { name: 'Home', url: `https://${SITE.domain}/` },
      { name: 'About Us', url: `https://${SITE.domain}/about-us` },
    ]));
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      <section className="py-16 bg-gradient-to-br from-primary-light/10 to-primary-light/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 text-center mb-6">
            About Us
          </h1>
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
            At Cultivate Wellness Chiropractic, we believe in nurturing health naturally. Our mission
            is to provide compassionate, evidence-based chiropractic care that empowers families to
            live their healthiest lives.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.id} className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-primary-dark font-medium mb-1">{member.title}</p>
                <p className="text-sm text-gray-600 mb-4">{member.credentials}</p>
                <p className="text-gray-700">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Philosophy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-dark">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Patient-Centered Care</h3>
              <p className="text-gray-700">
                Every treatment plan is tailored to your unique needs and goals.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-dark">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Evidence-Based</h3>
              <p className="text-gray-700">
                We use proven techniques supported by the latest research.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-dark">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Whole Family Wellness</h3>
              <p className="text-gray-700">
                From newborns to grandparents, we care for every stage of life.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Meet Our Team in Person"
        description="Schedule a consultation and experience the Cultivate Wellness difference."
        buttonText="Book Your Visit"
        buttonLink={SITE.janeUrlWithUtm}
      />
    </>
  );
}
