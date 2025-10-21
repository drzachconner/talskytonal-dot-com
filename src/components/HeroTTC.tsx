import { Link } from 'react-router-dom';
import { LINKS } from '../lib/links';

export default function HeroTTC() {
  return (
    <section className="relative w-full h-[350px] md:h-[450px] lg:h-[500px] overflow-hidden bg-gradient-to-br from-ttc-blue/90 to-ttc-navy/80">
      <div className="absolute inset-0 bg-[url('/images/Talsky%20at%20source2.jpg')] bg-cover bg-center opacity-20" />

      <div className="absolute inset-0 bg-ttc-blue/55" />

      <div className="relative h-full flex flex-col items-center justify-center px-4 text-center">
        <h1 className="font-serif text-[80px] sm:text-[120px] md:text-[150px] lg:text-[200px] font-bold text-white leading-none mb-2 md:mb-4">
          TTC
        </h1>

        <p className="text-white text-2xl sm:text-3xl md:text-4xl italic font-light mb-6 md:mb-8 font-script">
          Talsky Tonal Chiropractic
        </p>

        <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold uppercase tracking-wider mb-8 md:mb-10">
          Training Workshops
        </h2>

        <div className="bg-ttc-cream rounded-lg p-6 sm:p-8 md:p-10 mb-6 md:mb-8 w-full max-w-md mx-auto shadow-xl">
          <p className="text-ttc-blue font-semibold text-lg sm:text-xl md:text-2xl uppercase tracking-wide">
            Nashville, TN
          </p>
          <p className="text-ttc-blue font-semibold text-lg sm:text-xl md:text-2xl uppercase tracking-wide mt-2">
            Oct 10-12, 2025
          </p>
        </div>

        <a
          href={LINKS.registerExternal}
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 md:px-10 py-3 md:py-4 bg-ttc-blue hover:bg-ttc-blue-hover text-white font-semibold text-lg rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          Register
        </a>
      </div>
    </section>
  );
}
