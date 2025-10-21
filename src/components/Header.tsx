import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { LINKS } from '../lib/links';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: LINKS.paper, label: 'The Talsky Tonal Paper' },
    { to: LINKS.videos, label: 'Talsky Tonal Videos' },
    { to: LINKS.modules, label: 'Online Modules' },
    { to: LINKS.books, label: 'Tonal Books' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-white text-gray-900 px-3 py-2 rounded z-50 focus:outline-none focus:ring-2 focus:ring-ttc-blue"
      >
        Skip to content
      </a>
      <header className="bg-white border-b border-border-light sticky top-0 z-40">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 gap-12">
            <Link to={LINKS.home} className="flex items-center flex-shrink-0">
              <span className="font-semibold text-ttc-blue text-lg md:text-xl font-heading">
                Talsky Tonal Chiropractic
              </span>
            </Link>

            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-sm font-medium transition whitespace-nowrap ${
                    isActive(link.to)
                      ? 'text-ttc-blue border-b-2 border-ttc-blue'
                      : 'text-text-neutral hover:text-ttc-blue'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={LINKS.registerExternal}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-ttc-blue text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-ttc-blue-hover transition whitespace-nowrap"
              >
                Register
              </a>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 text-ttc-blue"
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
                      ? 'bg-ttc-blue/10 text-ttc-blue'
                      : 'text-text-neutral hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={LINKS.registerExternal}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="block mx-4 mt-4 bg-ttc-blue text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-ttc-blue-hover transition text-center"
              >
                Register
              </a>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}
