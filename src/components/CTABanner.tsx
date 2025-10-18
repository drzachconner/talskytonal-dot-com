import { ArrowRight } from 'lucide-react';

interface CTABannerProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  variant?: 'primary' | 'secondary';
}

export default function CTABanner({
  title,
  description,
  buttonText,
  buttonLink,
  variant = 'primary',
}: CTABannerProps) {
  const bgColor = variant === 'primary' ? 'bg-emerald-700' : 'bg-teal-700';
  const hoverColor = variant === 'primary' ? 'hover:bg-emerald-800' : 'hover:bg-teal-800';

  return (
    <section className={`${bgColor} py-16`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{title}</h2>
        <p className="text-lg text-emerald-50 mb-8 max-w-2xl mx-auto">{description}</p>
        <a
          href={buttonLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 bg-white text-emerald-700 px-8 py-4 rounded-lg text-lg font-medium ${hoverColor} hover:text-white transition shadow-lg hover:shadow-xl`}
        >
          {buttonText}
          <ArrowRight size={20} />
        </a>
      </div>
    </section>
  );
}
