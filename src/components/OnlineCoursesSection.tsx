import { Link } from 'react-router-dom';
import { LINKS } from '../lib/links';

export default function OnlineCoursesSection() {
  return (
    <section className="relative min-h-[400px] md:min-h-[500px] flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img
          src="/images/office-hours.webp"
          alt="Online courses and educational resources"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 font-heading">
          Online Learning Resources
        </h2>
        <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl mx-auto">
          Access comprehensive educational materials, video tutorials, and expert guidance to deepen your understanding of Talsky Tonal Chiropractic.
        </p>
        <Link
          to={LINKS.paper}
          className="inline-block px-8 md:px-10 py-3 md:py-4 bg-white text-ttc-navy font-semibold text-lg rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
        >
          Get Access
        </Link>
      </div>
    </section>
  );
}
