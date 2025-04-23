import React from 'react';
import { SectionProps } from '../types';

const Section: React.FC<SectionProps> = ({ 
  id, 
  className = '', 
  children 
}) => {
  return (
    <section 
      id={id} 
      className={`py-16 md:py-24 ${className}`}
    >
      <div className="container mx-auto px-4 md:px-6">
        {children}
      </div>
    </section>
  );
};

export default Section;