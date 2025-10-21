import { useSeo } from '../hooks/useSeo';
import { SITE } from '../data/site';
import { Link } from 'react-router-dom';
import TestimonialSlider from '../components/TestimonialSlider';
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
      <section className="relative bg-primary-cream min-h-[600px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/Talsky at source2.jpg"
            alt="Talsky Tonal Chiropractic"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-primary-dark mb-6">
            Beyond Technique
          </h1>
          <p className="text-xl sm:text-2xl text-gray-800 mb-8 leading-relaxed max-w-3xl mx-auto">
            A paradigm shift into tonal chiropractic awareness
          </p>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Discover the Talsky Tonal approach: gentle, neurologically-focused care that restores
            nervous system function and promotes proactive healing.
          </p>
          <Link
            to="/register"
            className="inline-block bg-primary-dark text-white px-10 py-4 rounded-lg text-lg font-medium hover:bg-primary transition shadow-lg"
          >
            Get Access
          </Link>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Welcome to Talsky Tonal
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 mb-6 leading-relaxed">
            Talsky Tonal Chiropractic is an advanced approach developed by Dr. Marvin Talsky in 2001.
            This technique represents a paradigm shift in chiropractic care, focusing on finding and
            releasing accumulated stress patterns in the body.
          </p>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Rather than simply addressing symptoms, we restore the integrity and function of your
            nervous system so your body can heal and perform at its optimal level.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-primary/10 to-primary-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Educational Resources
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link
              to="/paper"
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition group"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">📄</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition">
                  The Talsky Tonal Paper
                </h3>
                <p className="text-gray-600">
                  In-depth documentation and research
                </p>
              </div>
            </Link>
            <Link
              to="/videos"
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition group"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🎥</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition">
                  Talsky Tonal Videos
                </h3>
                <p className="text-gray-600">
                  Video tutorials and demonstrations
                </p>
              </div>
            </Link>
            <Link
              to="/modules"
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition group"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">💻</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition">
                  Online Modules
                </h3>
                <p className="text-gray-600">
                  Interactive learning courses
                </p>
              </div>
            </Link>
            <Link
              to="/books"
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition group"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">📚</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition">
                  Tonal Books
                </h3>
                <p className="text-gray-600">
                  Comprehensive reading materials
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <img
                src="/images/Talsky at source2.jpg"
                alt="Dr. Marvin Talsky"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">About Dr. Marvin Talsky</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Dr. Marvin Talsky has been a pioneering figure in chiropractic care since graduating from Palmer College of Chiropractic in 1963. With over 60 years of practice experience, he co-founded the renowned Torque Release Technique in 1995 before developing Talsky Tonal Chiropractic in 2001.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                His innovative approach represents a paradigm shift in chiropractic awareness, emphasizing gentle, neurologically-focused care that honors the body's innate intelligence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <TestimonialSlider />

      <section className="py-16 bg-primary-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
          <p className="text-xl mb-8 leading-relaxed">
            Register today to access exclusive educational resources, seminars, and stay updated on the latest developments in Talsky Tonal Chiropractic.
          </p>
          <Link
            to="/register"
            className="inline-block bg-white text-primary-dark px-10 py-4 rounded-lg text-lg font-medium hover:bg-primary-cream transition shadow-lg"
          >
            Register Now
          </Link>
        </div>
      </section>
    </>
  );
}
