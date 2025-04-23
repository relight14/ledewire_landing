import React from 'react';
import { BookOpen, Github, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <BookOpen className="w-8 h-8 text-blue-400 mr-2" />
              <span className="text-xl font-bold tracking-tight">LedeWire</span>
            </div>
            <p className="text-gray-400 max-w-md">
              Making thoughtful, unbiased content accessible through simple micropayments — creating a frictionless experience for both writers and readers.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#values" className="text-gray-400 hover:text-white transition-colors">Our Values</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <a href="mailto:hello@ledewire.com" className="flex items-center text-gray-400 hover:text-white transition-colors">
                <Mail size={18} className="mr-2" />
                hello@ledewire.com
              </a>
              <a href="#" className="flex items-center text-gray-400 hover:text-white transition-colors">
                <Twitter size={18} className="mr-2" />
                @ledewire
              </a>
              <a href="#" className="flex items-center text-gray-400 hover:text-white transition-colors">
                <Github size={18} className="mr-2" />
                ledewire
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} LedeWire. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Terms</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;