import { useState } from 'react';
import { X } from 'lucide-react';

export default function TopNotificationBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative bg-ttc-cream border-b-2 border-ttc-blue/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-4">
        <div className="flex items-center justify-between gap-4">
          <a
            href="#signup-form"
            className="flex-1 text-center hover:text-ttc-blue transition-colors cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              const form = document.getElementById('signup-form');
              form?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <p className="text-sm md:text-base text-text-dark">
              <span className="font-semibold">Get notified about upcoming seminars</span>
              {' '}and gain access to exclusive Talsky Tonal resources
            </p>
          </a>
          <button
            onClick={() => setIsVisible(false)}
            className="flex-shrink-0 p-1 hover:bg-ttc-blue/10 rounded-full transition-colors"
            aria-label="Dismiss notification"
          >
            <X size={20} className="text-text-neutral" />
          </button>
        </div>
      </div>
    </div>
  );
}
