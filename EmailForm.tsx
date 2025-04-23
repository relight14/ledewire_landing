import React, { useState } from 'react';
import { submitEmail } from '../utils/api';

interface EmailFormProps {
  className?: string;
}

const EmailForm: React.FC<EmailFormProps> = ({ className = '' }) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setMessage({ text: 'Please enter your email address', type: 'error' });
      return;
    }

    setIsSubmitting(true);
    setMessage(null);

    try {
      const response = await submitEmail(email);
      
      if (response.success) {
        setMessage({ text: response.message, type: 'success' });
        setEmail('');
      } else {
        setMessage({ text: response.message, type: 'error' });
      }
    } catch (error) {
      setMessage({ 
        text: 'Something went wrong. Please try again.', 
        type: 'error' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`max-w-md w-full ${className}`}>
      <div className="flex flex-col sm:flex-row w-full gap-3">
        <div className="relative flex-grow">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
            disabled={isSubmitting}
          />
          {message && (
            <p 
              className={`mt-2 text-sm ${
                message.type === 'success' ? 'text-green-600' : 'text-red-600'
              } absolute`}
            >
              {message.text}
            </p>
          )}
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 shadow-sm hover:shadow whitespace-nowrap disabled:opacity-70"
        >
          {isSubmitting ? 'Subscribing...' : 'Subscribe'}
        </button>
      </div>
    </form>
  );
};

export default EmailForm;