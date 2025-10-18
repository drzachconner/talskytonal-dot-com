import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { SITE } from '../data/site';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about-us', label: 'About Us' },
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
              <span className="text-xl font-bold text-emerald-700">{SITE.name}</span>
            </Link>

            <div className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-sm font-medium transition ${
                    isActive(link.to)
                      ? 'text-emerald-700 border-b-2 border-emerald-700'
                      : 'text-gray-700 hover:text-emerald-700'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={SITE.janeUrlWithUtm}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-emerald-800 transition"
              >
                Book Appointment
              </a>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-2 rounded-lg text-sm font-medium ${
                    isActive(link.to)
                      ? 'bg-emerald-50 text-emerald-700'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={SITE.janeUrlWithUtm}
                target="_blank"
                rel="noopener noreferrer"
                className="block mx-4 mt-4 bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-emerald-800 transition text-center"
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
