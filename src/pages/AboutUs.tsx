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
      <section className="relative py-32 bg-gray-900">
        <div className="absolute inset-0 z-0">
          <img
            src="https://durable.sfo3.cdn.digitaloceanspaces.com/blocks/35no5DSUbJlzR74412b3Qke9pjt1FR1nRijXq0SbwUSHDtWtTYocYESyaXATZvoN.png"
            alt="About Us"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            About Us
          </h1>
          <p className="text-xl sm:text-2xl text-white mb-8 max-w-3xl mx-auto">
            Gentle and specific "nerve-first" approach to pediatric, prenatal, and family care.
          </p>
          <a
            href="/new-patient-center"
            className="inline-block bg-primary-dark text-white px-10 py-4 rounded-lg text-lg font-medium hover:bg-primary-accent transition shadow-xl"
          >
            New Patient Center
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">Embracing Your Family as Ours</h2>
            <p className="text-lg text-gray-700 mb-6">
              At Cultivate Wellness Chiropractic, we genuinely treat every patient as an extension of our own family.
            </p>

            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6 mt-12">Nerve First: Our Unique Approach to Your Family's Health</h2>
            <p className="text-lg text-gray-700 mb-6">
              We don't guess, we test! Our neurologically-focused approach means we use advanced technology to assess your nervous system and create personalized care plans.
            </p>
          </div>
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

      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold mb-8">MISSION:</h2>
          <p className="text-xl mb-12 max-w-4xl">
            Our team is dedicated to optimizing the body's natural power to heal, function, and perform through gentle, neurologically-focused care, improving the well-being of children, their families, and the broader community.
          </p>

          <h2 className="text-3xl font-heading font-bold mb-8">VISION:</h2>
          <p className="text-xl max-w-4xl">
            We are cultivating a future where children, especially those with special needs, and their families find the strength, support, and transformative care they need to overcome challenges and reach their fullest potential.
          </p>
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
