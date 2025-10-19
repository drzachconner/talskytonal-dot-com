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
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 text-center mb-12">
            About Us
          </h1>

          <div className="mb-16">
            <div className="relative h-96 mb-8 rounded-xl overflow-hidden">
              <img
                src="https://cdn.durable.co/blocks/3bKnIpzL4kwKqH9yRZCJIfpZOU5u8XIQdFmsY1J1Wspti1bSjSms8jgjI39fdgJA.jpg"
                alt="Cultivate Wellness Chiropractic"
                className="w-full h-full object-cover"
              />
            </div>

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
