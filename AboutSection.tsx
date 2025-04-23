import React from 'react';
import Section from '../components/Section';

const AboutSection: React.FC = () => {
  return (
    <Section id="about" className="bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>
      <div className="absolute -left-24 top-40 w-48 h-48 bg-blue-50 rounded-full opacity-70 blur-2xl"></div>
      <div className="absolute -right-24 bottom-20 w-64 h-64 bg-indigo-50 rounded-full opacity-70 blur-3xl"></div>
      
      <div className="relative">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            When Curiosity Leads, Everything Changes
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            A Smarter World Starts with Better Access
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Why We Exist
            </h3>
            <div className="space-y-4 text-gray-700">
              <p>
                The way we access information and ideas is broken. Great content is out there — but it's locked away, lost in algorithms, or stuck behind models that just don't work for most people.
              </p>
              <p>
                Readers are stuck in the echo chamber of social media or juggling a dozen subscriptions to access thoughtful content, while creators struggle to cut through the noise and make a living.
              </p>
              <p>
                LedeWire exists to change that. We make it easy for writers to monetize their work on their own terms, and for readers to support the storytellers they care about and pay only for what actually speaks to them — no bundles, no monthly fees, no fine print. Just a simple, direct exchange of value between curious minds and creative voices.
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Our Mission
            </h3>
            <div className="space-y-4 text-gray-700">
              <p>
                We believe thoughtful, unbiased content builds a better world — one where people are more informed, engaged, and inspired. But in today's noisy, ad-driven ecosystem, ideas often get buried beneath paywalls and algorithmic clutter.
              </p>
              <p>
                We know what it's like to click on a story you want to read, only to walk away because you can't stomach another account or subscription.
              </p>
              <p>
                <span className="font-medium">LedeWire reimagines the way knowledge flows.</span> No endless subscriptions. No ad-driven clickbait. Just meaningful work, accessible through simple micropayments — and a frictionless experience for both writers and readers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;