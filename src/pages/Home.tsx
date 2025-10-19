import { useSeo } from '../hooks/useSeo';
import { SITE } from '../data/site';
import { Link } from 'react-router-dom';
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
      <section className="relative min-h-[600px] flex items-center justify-center bg-gray-900">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=1200"
            alt="Family wellness"
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="mb-8">
            <div className="text-8xl sm:text-9xl font-bold text-white/20 tracking-wider mb-4" style={{ fontFamily: 'serif' }}>
              CWC
            </div>
            <div className="text-2xl sm:text-3xl md:text-4xl font-script text-white" style={{ fontFamily: 'cursive', fontStyle: 'italic' }}>
              Cultivate Wellness Chiropractic
            </div>
          </div>

          <div className="bg-white py-12 px-6 sm:px-12 rounded-lg shadow-2xl max-w-5xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Experts in Drug-Free Pediatric, Prenatal, and Family Health Care!
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 mb-8 leading-relaxed">
              "Our primary focus is your family's health and happiness. We specialize in <span className="text-primary font-semibold">gentle, neuro-focused chiropractic care</span>. Whether the journey involves autism, epilepsy, special needs, or well baby checks and family wellness, our team is more than prepared to cultivate the best healing experience possible."
            </p>
            <p className="text-base text-gray-600 mb-8">
              - Dr. Zach Conner<br />
              Rochester Hills, MI Chiropractor
            </p>
            <a
              href={SITE.janeUrlWithUtm}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary-dark text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-primary-accent transition shadow-lg"
            >
              Workshops For Parents
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <a
              href="/events-workshops"
              className="inline-block bg-primary-dark text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-accent transition"
            >
              Workshops For Parents
            </a>
          </div>
        </div>
      </section>

      <section className="relative py-20 min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://cdn.durable.co/blocks/371f4hzULjYKvNJXPbd9LKAf08UY16iAU2rWZqVtvEyzDOX4wT9r5SBoDWDEGw88.png"
            alt="Background pattern"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 z-0 bg-primary/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl sm:text-2xl text-white mb-8 max-w-4xl mx-auto leading-relaxed">
            Our team is skilled in <strong>Pediatric, Prenatal, and Family Chiropractic</strong>. Click the button to learn how we care for you and your family!
          </p>
          <Link
            to="/new-patient-center"
            className="inline-block bg-primary-dark text-white px-10 py-4 rounded-lg text-lg font-medium hover:bg-primary-accent transition shadow-xl"
          >
            New Patient Center
          </Link>
        </div>
      </section>

      <ServicesGrid />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://cdn.durable.co/blocks/27aMPrLzLH2FgQbRav4hq5zJT5fnWhxd1wwNKTKpYWHydyjWGz4HW8puySefMwjw.jpg"
                alt="Dr. Zach Conner"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div>
              <p className="text-lg text-gray-700 mb-6">
                Cultivate Wellness is led by Dr. Zach Conner, <span className="font-semibold">an esteemed educator and practitioner of Talsky Tonal Chiropractic, a gentle, highly effective neuro-focused approach to care.</span> From your first visit, expect to be embraced as part of our Cultivate Wellness family as we journey together towards a healthier, happier life.
              </p>
              <a
                href="/meet-dr-zach"
                className="inline-block bg-primary-dark text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-accent transition"
              >
                Meet Dr. Zach
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-heading font-bold mb-4">MISSION:</h2>
              <p className="text-lg mb-8">
                Our team is dedicated to optimizing the body's natural power to heal, function, and perform through gentle, neurologically-focused care, improving the well-being of children, their families, and the broader community.
              </p>
              <h2 className="text-3xl font-heading font-bold mb-4">VISION:</h2>
              <p className="text-lg">
                We are cultivating a future where children, especially those with special needs, and their families find the strength, support, and transformative care they need to overcome challenges and reach their fullest potential.
              </p>
            </div>
            <div>
              <img
                src="https://durable.sfo3.cdn.digitaloceanspaces.com/shutterstock/bjrLAqwwCHpyKr9vVlbWZgKfVrcikmMHwWsmF1qyLQTBbJGoIvUwUkZOzWc542xw.jpeg"
                alt="Family with children by the lake"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

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
