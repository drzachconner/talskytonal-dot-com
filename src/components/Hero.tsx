import { ArrowRight } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
}

export default function Hero({ title, subtitle, ctaText, ctaLink, backgroundImage }: HeroProps) {
  return (
    <section className="relative bg-white py-20 sm:py-28">
      {backgroundImage && (
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-light" />
        </div>
      )}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          {title}
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
          {subtitle}
        </p>
        {ctaText && ctaLink && (
          <a
            href={ctaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary-dark text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-primary-accent transition shadow-lg hover:shadow-xl"
          >
            {ctaText}
            <ArrowRight size={20} />
          </a>
        )}
      </div>
    </section>
  );
}
