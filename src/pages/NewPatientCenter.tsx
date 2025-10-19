import { useSeo } from '../hooks/useSeo';
import { SITE } from '../data/site';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { breadcrumbJsonLd } from '../lib/breadcrumbs';
import { FileText, Calendar, User, Clock } from 'lucide-react';

export default function NewPatientCenter() {
  useSeo({
    title: 'New Patient Center',
    description: 'Everything you need to know before your first visit to Cultivate Wellness Chiropractic.',
    canonical: '/new-patient-center',
  });

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(breadcrumbJsonLd([
      { name: 'Home', url: `https://${SITE.domain}/` },
      { name: 'New Patient Center', url: `https://${SITE.domain}/new-patient-center` },
    ]));
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const steps = [
    {
      icon: FileText,
      title: 'Complete Your Forms',
      description: 'Fill out your new patient paperwork online before your visit to save time.',
      link: '/new-patient-forms',
      linkText: 'Access Forms',
    },
    {
      icon: Calendar,
      title: 'Schedule Your Appointment',
      description: 'Book a convenient time for your initial consultation and examination.',
      link: SITE.janeUrlWithUtm,
      linkText: 'Book Now',
      external: true,
    },
    {
      icon: User,
      title: 'Meet Your Chiropractor',
      description: 'We\'ll review your health history and discuss your wellness goals.',
    },
    {
      icon: Clock,
      title: 'Begin Your Care',
      description: 'Receive your personalized treatment plan and start your wellness journey.',
    },
  ];

  return (
    <>
      <section className="relative py-32 bg-gray-900 min-h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1593612605566-fc2e271cb68f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080"
            alt="New Patient Center"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-primary-dark/70 to-primary/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white text-center mb-6">
            New Patient Center
          </h1>
          <p className="text-lg text-white text-center max-w-3xl mx-auto">
            Welcome to Cultivate Wellness Chiropractic! We're excited to partner with you on your
            wellness journey.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            What to Expect
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl">
                <div className="flex gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <div className="bg-emerald-100 w-12 h-12 rounded-lg flex items-center justify-center">
                      <step.icon size={24} className="text-primary-dark" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-700 mb-4">{step.description}</p>
                    {step.link && step.external ? (
                      <a
                        href={step.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-primary-dark font-medium hover:text-primary-accent"
                      >
                        {step.linkText} →
                      </a>
                    ) : step.link ? (
                      <Link
                        to={step.link}
                        className="inline-block text-primary-dark font-medium hover:text-primary-accent"
                      >
                        {step.linkText} →
                      </Link>
                    ) : null}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                How long is the first visit?
              </h3>
              <p className="text-gray-700">
                Your initial visit typically takes 45-60 minutes. This includes a comprehensive
                consultation, examination, and your first adjustment if appropriate.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Is chiropractic care safe?
              </h3>
              <p className="text-gray-700">
                Yes! Chiropractic care is one of the safest forms of healthcare. We use gentle,
                evidence-based techniques tailored to each patient's needs and comfort level.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-white mb-8 max-w-2xl mx-auto">
            Take the first step toward better health. Schedule your appointment today.
          </p>
          <a
            href={SITE.janeUrlWithUtm}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-primary-dark px-8 py-4 rounded-lg text-lg font-medium hover:bg-primary-light/10 transition shadow-lg"
          >
            Book Your First Visit
          </a>
        </div>
      </section>
    </>
  );
}
