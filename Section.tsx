import React from 'react';
import { SectionProps } from '../types';

interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
  paddingTop?: string; // Optional prop for custom top padding
  paddingBottom?: string; // Optional prop for custom bottom padding
  style?: React.CSSProperties; // Optional inline style
}

const Section: React.FC<SectionProps> = ({ 
  id, 
  className = '', 
  children, 
  paddingTop = 'py-16', // Default padding
  paddingBottom = 'py-16', // Default padding
  style = {} // Default empty style
}) => {
  return (
    <section 
      id={id} 
      className={`${paddingTop} ${paddingBottom} ${className}`} 
      role="region" // Adding role for semantic purposes
      style={style} // Allowing custom inline style
    >
      <div className="container mx-auto px-4 md:px-6">
        {children}
      </div>
    </section>
  );
};

export default Section;
