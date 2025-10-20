import { Phone, Calendar, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';
import { SITE } from '../data/site';

export default function MobileCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t-2 border-emerald-600 shadow-2xl">
      <div className="grid grid-cols-3 gap-px bg-gray-200">
        <a
          href={`tel:${SITE.phone}`}
          className="flex flex-col items-center justify-center py-3 bg-white hover:bg-emerald-50 transition"
          aria-label="Call us"
        >
          <Phone size={20} className="text-emerald-700 mb-1" />
          <span className="text-xs font-semibold text-gray-900">Call</span>
        </a>

        <a
          href={SITE.janeUrlWithUtm}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-3 bg-emerald-700 hover:bg-emerald-800 transition"
          aria-label="Book appointment"
        >
          <Calendar size={20} className="text-white mb-1" />
          <span className="text-xs font-bold text-white">Book Now</span>
        </a>

        <a
          href="/contact-us"
          className="flex flex-col items-center justify-center py-3 bg-white hover:bg-emerald-50 transition"
          aria-label="Contact us"
        >
          <Mail size={20} className="text-emerald-700 mb-1" />
          <span className="text-xs font-semibold text-gray-900">Email</span>
        </a>
      </div>
    </div>
  );
}
