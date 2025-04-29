import React from 'react';
import { BookOpen, Github, Twitter, Mail } from 'lucide-react';
import Logo from '../assets/LedeWireLogo.png'; // or wherever it's located


const Footer: React.FC = () => {
  return (
    <footer className="bg-paper text-ink pt-12 pb-8 border-t border-fog">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand & Mission */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img
                src={Logo}
                alt="LedeWire Logo"
                className={`max-h-12 md:max-h-16 object-contain transition-all duration-300`}
                />
            </div>
            <p className="text-sm text-ink/80 max-w-md">
              Making thoughtful, unbiased content accessible through simple micropayments — creating a frictionless experience for both writers and readers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-md font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-ink/70 hover:text-highlight transition-colors">Home</a></li>
              <li><a href="#about" className="text-ink/70 hover:text-highlight transition-colors">About Us</a></li>
              <li><a href="#values" className="text-ink/70 hover:text-highlight transition-colors">Our Values</a></li>
              <li><a href="#" className="text-ink/70 hover:text-highlight transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-md font-semibold mb-3">Contact</h3>
            <div className="space-y-2 text-sm">
              <a href="mailto:hello@ledewire.com" className="flex items-center text-ink/70 hover:text-highlight transition-colors">
                <Mail size={18} className="mr-2" />
                hello@ledewire.com
              </a>
              <a href="#" className="flex items-center text-ink/70 hover:text-highlight transition-colors">
                <Twitter size={18} className="mr-2" />
                @ledewire
              </a>
              <a href="#" className="flex items-center text-ink/70 hover:text-highlight transition-colors">
                <Github size={18} className="mr-2" />
                ledewire
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-fog mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-ink/60">
            &copy; {new Date().getFullYear()} LedeWire. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-xs">
            <a href="#" className="text-ink/60 hover:text-highlight transition-colors">Terms</a>
            <a href="#" className="text-ink/60 hover:text-highlight transition-colors">Privacy</a>
            <a href="#" className="text-ink/60 hover:text-highlight transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
