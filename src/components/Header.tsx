import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { SITE } from '../data/site';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: '/about-us', label: 'About Us' },
    { to: '/meet-dr-zach', label: 'Meet Dr. Zach' },
    { to: '/new-patient-center', label: 'New Patients' },
    { to: '/pediatric', label: 'Pediatric' },
    { to: '/prenatal', label: 'Prenatal' },
    { to: '/family', label: 'Family' },
    { to: '/contact-us', label: 'Contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-white text-gray-900 px-3 py-2 rounded z-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Skip to content
      </a>
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="https://durable.sfo3.cdn.digitaloceanspaces.com/blocks/2aE2dfGY0TcjvtWq00bdkwCtcKe2ZEQj3V2unBuhcuxkYK7sGEUUgOMJyGMId8Rg.png"
                alt={SITE.name}
                className="h-12 object-contain"
              />
            </Link>

            <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-sm font-medium transition ${
                    isActive(link.to)
                      ? 'text-primary-dark border-b-2 border-primary-dark'
                      : 'text-gray-900 hover:text-primary'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={SITE.janeUrlWithUtm}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-dark text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-accent transition"
              >
                Book Appointment
              </a>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="lg:hidden py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-2 rounded-lg text-sm font-medium ${
                    isActive(link.to)
                      ? 'bg-primary-light/10 text-primary-dark'
                      : 'text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={SITE.janeUrlWithUtm}
                target="_blank"
                rel="noopener noreferrer"
                className="block mx-4 mt-4 bg-primary-dark text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-accent transition text-center"
              >
                Book Appointment
              </a>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}
