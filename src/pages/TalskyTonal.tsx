import { useSeo } from '../hooks/useSeo';
import { SITE } from '../data/site';
import { useEffect } from 'react';
import { breadcrumbJsonLd } from '../lib/breadcrumbs';
import { Brain, Heart, Users, Sparkles, Activity, Target } from 'lucide-react';
import CTABanner from '../components/CTABanner';

export default function TalskyTonal() {
  useSeo({
    title: 'Talsky Tonal Chiropractic',
    description: 'Learn about our gentle, neurologically-focused Talsky Tonal Chiropractic approach that restores nervous system function and promotes proactive healing.',
    canonical: '/talsky-tonal-chiropractic',
  });

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(breadcrumbJsonLd([
      { name: 'Home', url: `https://${SITE.domain}/` },
      { name: 'Talsky Tonal Chiropractic', url: `https://${SITE.domain}/talsky-tonal-chiropractic` },
    ]));
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const principles = [
    {
      icon: Brain,
      title: 'Neurologically Focused',
      description: 'Engages the nervous system directly to promote never-ending neurological optimization and restore the integrity and function of your entire nervous system.',
    },
    {
      icon: Heart,
      title: 'Safe, Gentle & Effective',
      description: 'A gentle approach that respects the intelligence of your body. No traditional bone cracking, just intuitive adjustments that work with your body\'s natural healing ability.',
    },
    {
      icon: Users,
      title: 'Patient-Centered Care',
      description: 'Allows patients to be active participants in their own health journey. We don\'t guess, we test with state-of-the-art INSiGHT scanning technology.',
    },
    {
      icon: Sparkles,
      title: 'Holistic Integration',
      description: 'Integrates chiropractic principles with quantum physics and consciousness, focusing on the body\'s inherent intelligence for comprehensive wellness.',
    },
    {
      icon: Activity,
      title: 'Pro-Active Healing',
      description: 'Emphasizes proactive healing and wellness rather than reactive symptom management. Supports continuous neurological improvement and overall function.',
    },
    {
      icon: Target,
      title: 'Less is More',
      description: 'Utilizes a "less is more" philosophy, providing precise, effective adjustments that facilitate your body\'s natural healing process without over-treating.',
    },
  ];

  return (
    <>
      <section className="relative py-32 bg-gray-900 min-h-[500px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1920&h=800&fit=crop"
            alt="Talsky Tonal Chiropractic"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-primary-dark/80 to-primary/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Talsky Tonal Chiropractic
          </h1>
          <p className="text-xl sm:text-2xl text-white max-w-4xl mx-auto leading-relaxed">
            A paradigm shift into tonal chiropractic awareness. Gentle, neurologically-focused care
            that restores nervous system function and promotes proactive healing.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Talsky Tonal Chiropractic?</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Talsky Tonal Chiropractic is an advanced chiropractic approach developed by Dr. Marvin
              Talsky in 2001. Dr. Talsky, who has been practicing since 1965 and graduated from Palmer
              College of Chiropractic in 1963, co-founded the renowned Torque Release Technique in 1995
              before developing this unique tonal method.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              This technique represents a paradigm shift in chiropractic care, integrating chiropractic
              principles with quantum physics and consciousness. Rather than simply addressing symptoms,
              Talsky Tonal Chiropractic focuses on restoring the integrity and function of your nervous
              system, allowing your body to heal and perform at its optimal level.
            </p>
            <div className="bg-emerald-50 border-l-4 border-emerald-700 p-6 rounded-lg my-8">
              <p className="text-xl text-gray-900 italic font-medium">
                "The miracle is in your body"
              </p>
              <p className="text-gray-700 mt-2">— Dr. Marvin Talsky</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-primary-light/10 to-emerald-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Core Principles of Talsky Tonal Chiropractic
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {principles.map((principle, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                <div className="bg-emerald-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <principle.icon size={28} className="text-primary-dark" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{principle.title}</h3>
                <p className="text-gray-700 leading-relaxed">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How Does It Work?</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Talsky Tonal Chiropractic engages the nervous system more directly than traditional
              chiropractic techniques. Instead of forceful manipulations, this approach uses gentle,
              intuitive adjustments that respect your body's inherent intelligence.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              The technique identifies your body's "stuck patterns" and facilitates a shift that allows
              your nervous system to function optimally. This creates an environment where healing occurs
              naturally, from the inside out.
            </p>
            <div className="bg-gray-50 rounded-xl p-8 my-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Not a Replacement, But an Enhancement</h3>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Talsky Tonal Chiropractic isn't a replacement technique. It's an expanded model that can
                enhance multiple chiropractic approaches, including:
              </p>
              <ul className="space-y-3 text-lg text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center text-primary-dark font-bold text-sm mt-1">
                    ✓
                  </span>
                  <span>Tonal Techniques</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center text-primary-dark font-bold text-sm mt-1">
                    ✓
                  </span>
                  <span>Upper Cervical Techniques</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center text-primary-dark font-bold text-sm mt-1">
                    ✓
                  </span>
                  <span>Pediatric Techniques</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center text-primary-dark font-bold text-sm mt-1">
                    ✓
                  </span>
                  <span>Osseous Techniques</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Benefits of Talsky Tonal Chiropractic</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Addresses Root Causes</h3>
                <p className="text-white/90">
                  Goes beyond symptom relief to restore nervous system function, addressing back pain,
                  neck issues, and overall wellness at their source.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Gentle & Safe</h3>
                <p className="text-white/90">
                  Particularly effective for children with special needs, sensory processing differences,
                  and developmental challenges, as well as patients of all ages.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Enhanced Performance</h3>
                <p className="text-white/90">
                  Supports optimal function across all body systems, promoting healing, performance,
                  and overall quality of life.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Continuous Improvement</h3>
                <p className="text-white/90">
                  Facilitates never-ending neurological optimization, helping your body adapt and thrive
                  throughout life's changes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Expert Talsky Tonal Care at Cultivate Wellness
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Dr. Zach is one of only two certified U.S. instructors of Talsky Tonal Chiropractic,
              bringing the highest level of expertise in this specialized technique to our community.
              With a special interest in caring for children with sensory and developmental differences,
              Dr. Zach has witnessed the profound transformative effects this gentle approach can have
              on patients of all ages and backgrounds.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              At Cultivate Wellness Chiropractic, we combine Talsky Tonal Chiropractic with
              state-of-the-art INSiGHT scanning technology to measure your nervous system function
              accurately. We don't guess, we test! This allows us to create custom care plans tailored
              to your unique needs and track your progress objectively.
            </p>
            <div className="bg-emerald-700 text-white p-8 rounded-xl mt-8">
              <h3 className="text-2xl font-bold mb-4">Experience the Difference</h3>
              <p className="text-lg mb-6">
                Discover how Talsky Tonal Chiropractic can help you and your family achieve optimal
                nervous system function and unlock your body's natural healing potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Experience Talsky Tonal Chiropractic?"
        description="Schedule a consultation to learn how this gentle, neurologically-focused approach can help you and your family."
        buttonText="Schedule Consultation"
        buttonLink={SITE.janeUrlWithUtm}
      />
    </>
  );
}
