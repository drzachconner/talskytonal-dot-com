import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { SITE } from '../data/site';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: '/paper', label: 'The Talsky Tonal Paper' },
    { to: '/videos', label: 'Talsky Tonal Videos' },
    { to: '/modules', label: 'Online Modules' },
    { to: '/books', label: 'Tonal Books' },
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
          <div className="flex justify-between items-center h-16 gap-12">
            <Link to="/" className="flex items-center flex-shrink-0">
              <img
                src="/images/logo.webp"
                alt={SITE.name}
                className="h-12 object-contain"
              />
            </Link>

            <div className="hidden xl:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-sm font-medium transition whitespace-nowrap ${
                    isActive(link.to)
                      ? 'text-primary-dark border-b-2 border-primary-dark'
                      : 'text-gray-900 hover:text-primary'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/register"
                className="bg-primary-dark text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-accent transition whitespace-nowrap"
              >
                Register
              </Link>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="xl:hidden p-2 rounded-lg hover:bg-gray-100"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="xl:hidden py-4 space-y-2">
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
              <Link
                to="/register"
                onClick={() => setIsMenuOpen(false)}
                className="block mx-4 mt-4 bg-primary-dark text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-accent transition text-center"
              >
                Register
              </Link>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}
