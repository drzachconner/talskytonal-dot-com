import { useSeo } from '../hooks/useSeo';
import { SITE } from '../data/site';
import { useEffect } from 'react';
import { breadcrumbJsonLd } from '../lib/breadcrumbs';
import { ExternalLink } from 'lucide-react';

export default function NewPatientForms() {
  useSeo({
    title: 'New Patient Forms',
    description: 'Complete your new patient paperwork online before your visit.',
    canonical: '/new-patient-forms',
  });

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(breadcrumbJsonLd([
      { name: 'Home', url: `https://${SITE.domain}/` },
      { name: 'New Patient Forms', url: `https://${SITE.domain}/new-patient-forms` },
    ]));
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      <section className="py-16 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 text-center mb-6">
            New Patient Forms
          </h1>
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
            Save time on your first visit by completing your paperwork online in advance.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 p-8 rounded-xl mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Complete Your Forms Online</h2>
            <p className="text-gray-700 mb-6">
              Our secure online system makes it easy to provide your health history and other
              necessary information before your appointment. This allows us to spend more time
              focused on your care during your visit.
            </p>
            <a
              href={SITE.janeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-800 transition"
            >
              Access Patient Portal
              <ExternalLink size={20} />
            </a>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-900">What You'll Need</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 font-bold text-sm">
                  1
                </span>
                <span>Personal contact information and emergency contact</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 font-bold text-sm">
                  2
                </span>
                <span>Insurance information (if applicable)</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 font-bold text-sm">
                  3
                </span>
                <span>Current medications and supplements</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 font-bold text-sm">
                  4
                </span>
                <span>Details about your health concerns and wellness goals</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 font-bold text-sm">
                  5
                </span>
                <span>Medical history, including past injuries and surgeries</span>
              </li>
            </ul>
          </div>

          <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-200">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Need Help?</h3>
            <p className="text-gray-700">
              If you have any questions about completing your forms or prefer to fill them out in
              person, please call us at{' '}
              <a
                href={`tel:${SITE.phone.replace(/[^+\d]/g, '')}`}
                className="text-emerald-700 font-medium hover:underline"
              >
                {SITE.phone}
              </a>
              . We're here to help!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
