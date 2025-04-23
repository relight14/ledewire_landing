import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../sections/Hero';
import AboutSection from '../sections/AboutSection';
import ValuesSection from '../sections/ValuesSection';
import ContactSection from '../sections/ContactSection';

const LandingPage: React.FC = () => {
  return (
    <div className="font-sans antialiased">
      <Header />
      <Hero />
      <AboutSection />
      <ValuesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default LandingPage;