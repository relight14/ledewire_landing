import React from 'react';
import EmailForm from '../components/EmailForm';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-gray-100 pt-16">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-100 rounded-full opacity-70 blur-3xl"></div>
        <div className="absolute bottom-20 -left-20 w-80 h-80 bg-indigo-100 rounded-full opacity-70 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="max-w-xl mx-auto lg:mx-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-6 animate-fadeInUp">
              A smarter way to access great content
            </h1>
            
            <p className="text-xl leading-relaxed text-gray-700 mb-8 animate-fadeInUp animation-delay-200">
              No endless subscriptions. No ad-driven clickbait. Just meaningful work, accessible through simple micropayments — creating a frictionless experience for both writers and readers.
            </p>
            
            <div className="space-y-5 animate-fadeInUp animation-delay-400">
              <EmailForm />
              
              <p className="text-sm text-gray-500">
                Join our waitlist to be the first to know when we launch. No spam, ever.
              </p>
            </div>
          </div>
          
          <div className="hidden lg:block relative h-[500px] animate-fadeInRight animation-delay-600">
            <div className="absolute inset-0 bg-white rounded-xl shadow-xl overflow-hidden transform rotate-2 transition-transform hover:rotate-0">
              <div className="absolute top-0 left-0 right-0 h-12 bg-gray-100 flex items-center px-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>
              
              <div className="pt-14 px-6">
                <div className="mb-4">
                  <div className="w-full h-10 bg-blue-600 rounded-lg mb-2 flex items-center justify-between px-4">
                    <div className="w-24 h-5 bg-white/20 rounded"></div>
                    <div className="w-8 h-5 bg-white/20 rounded"></div>
                  </div>
                  <div className="w-full h-60 bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="text-gray-500 text-center">
                      <div className="w-12 h-12 mx-auto border-2 border-gray-300 rounded-full flex items-center justify-center">
                        <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                      </div>
                      <div className="mt-2 w-32 h-4 bg-gray-300 rounded mx-auto"></div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3 pb-8">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                    <div>
                      <div className="w-32 h-4 bg-gray-200 rounded"></div>
                      <div className="w-24 h-3 bg-gray-200 rounded mt-1"></div>
                    </div>
                  </div>
                  
                  <div className="w-full h-24 bg-gray-100 rounded-lg"></div>
                  
                  <div className="flex justify-between">
                    <div className="w-20 h-8 bg-blue-500 rounded"></div>
                    <div className="w-20 h-8 bg-gray-200 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <a 
          href="#about" 
          className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md text-blue-600 hover:bg-blue-50 transition-colors"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Hero;