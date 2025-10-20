import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CTABannerProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  variant?: 'primary' | 'secondary';
  isExternal?: boolean;
}

export default function CTABanner({
  title,
  description,
  buttonText,
  buttonLink,
  variant = 'primary',
  isExternal = false,
}: CTABannerProps) {
  const bgColor = variant === 'primary' ? 'bg-primary-dark' : 'bg-primary';
  const hoverColor = variant === 'primary' ? 'hover:bg-primary-accent' : 'hover:bg-primary-dark';
  const buttonClasses = `inline-flex items-center gap-2 bg-white text-primary-dark px-8 py-4 rounded-lg text-lg font-medium ${hoverColor} hover:text-white transition shadow-lg hover:shadow-xl`;

  return (
    <section className={`${bgColor} py-16`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{title}</h2>
        <p className="text-lg text-blue-50 mb-8 max-w-2xl mx-auto">{description}</p>
        {isExternal ? (
          <a
            href={buttonLink}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonClasses}
          >
            {buttonText}
            <ArrowRight size={20} />
          </a>
        ) : (
          <Link to={buttonLink} className={buttonClasses}>
            {buttonText}
            <ArrowRight size={20} />
          </Link>
        )}
      </div>
    </section>
  );
}
