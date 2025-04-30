import React, { useEffect, useState } from 'react';
import Logo from '../assets/LedeWireLogo.svg';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-sm py-2'
          : 'bg-white/80 backdrop-blur-md py-3'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={Logo}
              alt="LedeWire Logo"
              className="h-12 md:h-16 w-auto object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 text-sm font-medium text-ink">
            <a href="#about" className="hover:text-highlight transition-colors">
              About Us
            </a>
            <a href="#values" className="hover:text-highlight transition-colors">
              Our Values
            </a>
            <a href="#contact" className="hover:text-highlight transition-colors">
              Contact
            </a>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2">
            <nav className="flex flex-col space-y-4 text-ink">
              <a
                href="#about"
                className="py-2 hover:text-highlight transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </a>
              <a
                href="#values"
                className="py-2 hover:text-highlight transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Values
              </a>
              <a
                href="#contact"
                className="py-2 hover:text-highlight transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;


