import { useSeo } from '../hooks/useSeo';
import { SITE } from '../data/site';
import { useEffect } from 'react';
import { breadcrumbJsonLd } from '../lib/breadcrumbs';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  useSeo({
    title: 'Contact Us',
    description: 'Get in touch with Cultivate Wellness Chiropractic. Call, email, or visit us.',
    canonical: '/contact-us',
  });

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(breadcrumbJsonLd([
      { name: 'Home', url: `https://${SITE.domain}/` },
      { name: 'Contact', url: `https://${SITE.domain}/contact-us` },
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
            Contact Us
          </h1>
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
            We're here to answer your questions and help you schedule your visit.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="bg-emerald-100 w-12 h-12 rounded-lg flex items-center justify-center">
                      <Phone size={24} className="text-primary-dark" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
                    <a
                      href={`tel:${SITE.phone.replace(/[^+\d]/g, '')}`}
                      className="text-gray-700 hover:text-primary-dark transition"
                    >
                      {SITE.phone}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="bg-emerald-100 w-12 h-12 rounded-lg flex items-center justify-center">
                      <Mail size={24} className="text-primary-dark" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                    <a
                      href={`mailto:${SITE.email}`}
                      className="text-gray-700 hover:text-primary-dark transition"
                    >
                      {SITE.email}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="bg-emerald-100 w-12 h-12 rounded-lg flex items-center justify-center">
                      <MapPin size={24} className="text-primary-dark" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Address</h3>
                    <address className="text-gray-700 not-italic">
                      {SITE.address.street}<br />
                      {SITE.address.city}, {SITE.address.region} {SITE.address.postal}
                    </address>
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(
                        SITE.address.street + ', ' + SITE.address.city + ', ' + SITE.address.region
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-dark hover:text-primary-accent font-medium inline-block mt-2"
                    >
                      Get Directions →
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="bg-emerald-100 w-12 h-12 rounded-lg flex items-center justify-center">
                      <Clock size={24} className="text-primary-dark" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Office Hours</h3>
                    <div className="text-gray-700">
                      {SITE.hours.map((hour) => (
                        <p key={hour}>{hour}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <a
            href={`https://maps.google.com/?q=${encodeURIComponent(
              SITE.address.street + ', ' + SITE.address.city + ', ' + SITE.address.region
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition"
          >
            <div className="bg-gray-300 w-full h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin size={48} className="text-gray-600 mx-auto mb-4" />
                <p className="text-gray-700 font-medium">Click to view map</p>
              </div>
            </div>
          </a>
        </div>
      </section>
    </>
  );
}
