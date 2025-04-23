import React from 'react';
import Section from '../components/Section';
import { BookOpen, Zap, DollarSign } from 'lucide-react';

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-8 transition-all duration-300 hover:shadow-lg">
      <div className="bg-blue-50 w-14 h-14 rounded-lg flex items-center justify-center text-blue-600 mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

const ValuesSection: React.FC = () => {
  const values = [
    {
      icon: <BookOpen size={24} />,
      title: "Knowledge Over Noise",
      description: "In a digital world full of distractions, we're creating a space where real insights stand out — not because they game an algorithm, but because they're genuinely worth your time."
    },
    {
      icon: <Zap size={24} />,
      title: "End Doom-Scrolling",
      description: "Instead of getting lost in a feed, we want readers to feel present and curious. No clickbait. No manipulation. Just meaningful perspectives from people who care about what they're saying."
    },
    {
      icon: <DollarSign size={24} />,
      title: "Accessible Ideas",
      description: "We don't believe ideas should hide behind paywalls. LedeWire is about access, not exclusivity. Value flows freely between creators and readers — one click at a time."
    }
  ];

  return (
    <Section id="values" className="bg-gray-50 relative">
      {/* Decorative elements */}
      <div className="absolute -left-20 bottom-40 w-40 h-40 bg-indigo-100 rounded-full opacity-70 blur-2xl"></div>
      <div className="absolute -right-10 top-20 w-32 h-32 bg-blue-100 rounded-full opacity-70 blur-xl"></div>
      
      <div className="relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Values
          </h2>
          <p className="text-xl text-gray-700">
            At LedeWire, we're guided by principles that put quality content and reader experience first.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <ValueCard 
              key={index} 
              icon={value.icon} 
              title={value.title} 
              description={value.description} 
            />
          ))}
        </div>
        
        <div className="mt-16 bg-white rounded-xl shadow-md p-8 max-w-3xl mx-auto">
          <blockquote className="text-gray-700 italic">
            "We believe in a world where quality content is universally accessible, fairly compensated, and free from the gatekeeping that limits the flow of important ideas."
          </blockquote>
          <div className="mt-4 flex items-center">
            <div className="h-px flex-1 bg-gray-200"></div>
            <div className="px-4">
              <BookOpen className="w-6 h-6 text-blue-600" />
            </div>
            <div className="h-px flex-1 bg-gray-200"></div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ValuesSection;