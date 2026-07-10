import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },

  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-nav py-3 shadow-xl' : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-auto sm:h-12 gap-4">
          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 -ml-2 rounded-md text-slate-400 hover:text-sky-400 focus:outline-none transition-colors duration-300"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Logo / Branding - Centered on mobile, left on desktop */}
          <div className="flex-1 text-center lg:text-left lg:flex-none">
            <a
              href="#home"
              className="text-lg sm:text-xl lg:text-2xl font-extrabold tracking-tight bg-gradient-to-r from-sky-400 via-purple-500 to-sky-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 inline-block font-sans whitespace-nowrap"
            >
              PORTFOLIO
            </a>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center space-x-8 flex-1 justify-center">
            <div className="flex items-baseline space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-300 hover:text-sky-400 px-3 py-2 rounded-md text-sm font-medium tracking-wide transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Desktop Hire Me Button */}
          <div className="hidden lg:flex items-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-sky-500 to-purple-600 hover:from-sky-400 hover:to-purple-500 rounded-full shadow-lg hover:shadow-sky-400/20 transition-all duration-300 hover:-translate-y-0.5"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="lg:hidden glass-nav absolute top-full left-0 right-0 shadow-2xl py-4 px-6 space-y-3 animate-fade-in border-t border-slate-200/10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-slate-300 hover:text-sky-400 block px-3 py-2 rounded-md text-base font-semibold transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-slate-200/10">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="w-full inline-flex justify-center items-center gap-2 px-4 py-2.5 text-base font-semibold text-white bg-gradient-to-r from-sky-500 to-purple-600 rounded-xl shadow-lg transition-transform active:scale-95"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
