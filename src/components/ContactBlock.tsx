import { Phone, Mail, Globe } from 'lucide-react';
import { LINKS } from '../lib/links';

export default function ContactBlock() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-12 md:py-16 text-center">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-ttc-navy mb-8 md:mb-10 font-heading">
        Contact Us
      </h2>

      <div className="grid sm:grid-cols-3 gap-6 md:gap-8">
        <div className="flex flex-col items-center">
          <div className="w-14 h-14 md:w-16 md:h-16 bg-ttc-blue/10 rounded-full flex items-center justify-center mb-4">
            <Phone className="text-ttc-blue" size={28} />
          </div>
          <a
            href={LINKS.contactPhoneLink}
            className="text-lg md:text-xl font-semibold text-ttc-blue hover:text-ttc-blue-hover transition-colors"
          >
            {LINKS.contactPhone}
          </a>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-14 h-14 md:w-16 md:h-16 bg-ttc-blue/10 rounded-full flex items-center justify-center mb-4">
            <Mail className="text-ttc-blue" size={28} />
          </div>
          <a
            href={LINKS.contactEmailLink}
            className="text-lg md:text-xl font-semibold text-ttc-blue hover:text-ttc-blue-hover transition-colors break-all"
          >
            {LINKS.contactEmail}
          </a>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-14 h-14 md:w-16 md:h-16 bg-ttc-blue/10 rounded-full flex items-center justify-center mb-4">
            <Globe className="text-ttc-blue" size={28} />
          </div>
          <p className="text-lg md:text-xl font-semibold text-text-dark">
            {LINKS.website}
          </p>
        </div>
      </div>
    </section>
  );
}
