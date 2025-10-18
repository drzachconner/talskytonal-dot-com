import { Link } from 'react-router-dom';
import { SITE } from '../data/site';
import { Instagram, Facebook, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">{SITE.name}</h3>
            <p className="text-gray-400 text-sm">{SITE.description}</p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about-us" className="text-gray-400 hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/new-patient-center" className="text-gray-400 hover:text-white transition">
                  New Patients
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="text-gray-400 hover:text-white transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`tel:${SITE.phone.replace(/[^+\d]/g, '')}`}
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition"
                >
                  <Phone size={16} />
                  {'phoneDisplay' in SITE ? SITE.phoneDisplay : SITE.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition"
                >
                  <Mail size={16} />
                  {SITE.email}
                </a>
              </li>
              <li>
                <address className="flex items-start gap-2 text-gray-400 not-italic">
                  <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                  <span>
                    {SITE.address.street}<br />
                    {SITE.address.city}, {SITE.address.region} {SITE.address.postal}
                  </span>
                </address>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Hours</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              {SITE.hours.map((hour) => (
                <li key={hour}>{hour}</li>
              ))}
            </ul>
            <div className="flex gap-4 mt-6">
              <a
                href={SITE.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href={SITE.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
