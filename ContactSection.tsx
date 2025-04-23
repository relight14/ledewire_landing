import React from 'react';
import Section from '../components/Section';
import EmailForm from '../components/EmailForm';
import { Mail, MapPin, Phone } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <Section id="contact" className="bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h2>
            <p className="text-gray-700 mb-8">
              Have questions about LedeWire? Want to learn more about our platform? Drop us a line and we'll get back to you as soon as possible.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center text-blue-600 mr-4">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Email</h3>
                  <a 
                    href="mailto:hello@ledewire.com" 
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    hello@ledewire.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center text-blue-600 mr-4">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Office</h3>
                  <p className="text-gray-600">Park City, UT</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center text-blue-600 mr-4">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                  <p className="text-gray-600">(415) 324-9523</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Stay Updated
            </h3>
            <p className="text-gray-700 mb-6">
              Join our mailing list to receive updates about our launch, new features, and how you can be part of the LedeWire community.
            </p>
            
            <EmailForm className="mb-6" />
            
            <p className="text-sm text-gray-500">
              By subscribing, you agree to receive emails from LedeWire. You can unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;
