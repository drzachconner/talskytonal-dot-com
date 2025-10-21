import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../lib/constants';

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="mx-auto max-w-5xl px-6 py-12 md:py-16 lg:py-20 bg-gray-50">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center text-ttc-navy mb-3 md:mb-4 font-heading">
        What Chiropractors Are Saying
      </h2>
      <p className="text-center text-text-neutral text-base md:text-lg mb-10 md:mb-12">
        Real testimonials from practitioners who've experienced TTC
      </p>

      <div className="relative">
        <figure className="rounded-2xl border-2 border-ttc-blue/20 p-8 md:p-10 lg:p-12 bg-white shadow-lg min-h-[280px] md:min-h-[300px] flex flex-col justify-between">
          <blockquote className="text-lg sm:text-xl md:text-2xl italic text-text-neutral mb-6 md:mb-8 leading-relaxed">
            "{current.text}"
          </blockquote>
          <figcaption className="text-base md:text-lg font-semibold text-ttc-blue">
            — {current.author}
          </figcaption>
        </figure>

        <div className="flex items-center justify-center gap-6 md:gap-8 mt-8">
          <button
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="p-3 hover:bg-ttc-blue/10 rounded-full transition-colors text-ttc-blue"
          >
            <ChevronLeft size={28} />
          </button>

          <div className="text-sm md:text-base text-text-light font-medium">
            {currentIndex + 1} / {TESTIMONIALS.length}
          </div>

          <button
            onClick={handleNext}
            aria-label="Next testimonial"
            className="p-3 hover:bg-ttc-blue/10 rounded-full transition-colors text-ttc-blue"
          >
            <ChevronRight size={28} />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to testimonial ${idx + 1}`}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                idx === currentIndex ? 'bg-ttc-blue w-8' : 'bg-ttc-blue/30 hover:bg-ttc-blue/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
