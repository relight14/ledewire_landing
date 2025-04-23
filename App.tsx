import React, { useEffect } from 'react';
import LandingPage from './pages/LandingPage';

function App() {
  useEffect(() => {
    // Update document title
    document.title = 'LedeWire | Micropayments for Quality Content';
    
    // Add animations to CSS
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      @keyframes fadeInRight {
        from {
          opacity: 0;
          transform: translateX(-20px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
      
      .animate-fadeInUp {
        animation: fadeInUp 0.6s ease-out forwards;
      }
      
      .animate-fadeInRight {
        animation: fadeInRight 0.6s ease-out forwards;
      }
      
      .animation-delay-200 {
        animation-delay: 0.2s;
      }
      
      .animation-delay-400 {
        animation-delay: 0.4s;
      }
      
      .animation-delay-600 {
        animation-delay: 0.6s;
      }
      
      .animate-fadeIn {
        animation: fadeIn 0.3s ease-out forwards;
      }
      
      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return <LandingPage />;
}

export default App;