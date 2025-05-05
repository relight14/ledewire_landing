import React, { useState } from 'react';

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
      setMessage({ text: 'Please enter your email address.', type: 'error' });
      return;
    }

    setIsSubmitting(true);
    setMessage(null);

    try {
      const formData = new FormData();
      formData.append('email', email);

      const response = await fetch('https://app.convertkit.com/forms/5e169ecd6e/subscriptions', {
        method: 'POST',
        mode: 'no-cors', // prevents CORS errors, but limits access to response
        body: formData,
      });

      // Since no-cors doesn’t give us response info, we assume success
      setMessage({ text: 'Thanks for subscribing! Check your inbox to confirm.', type: 'success' });
      setEmail('');
    } catch {
      setMessage({
        text: 'Something went wrong. Please try again.',
        type: 'error',
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
            placeholder="you@example.com"
            className="w-full px-4 py-3 rounded-xl border border-fog bg-white text-ink placeholder-ink/40 focus:border-highlight focus:ring-2 focus:ring-highlight/30 transition-all outline-none text-sm shadow-sm"
            disabled={isSubmitting}
            required
          />
          {message && (
            <p
              className={`mt-2 text-sm ${
                message.type === 'success' ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {message.text}
            </p>
          )}
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-6 py-3 bg-highlight text-ink font-medium rounded-xl hover:bg-yellow-300 transition-colors duration-200 shadow-sm hover:shadow disabled:opacity-60 text-sm"
        >
          {isSubmitting ? 'Subscribing…' : 'Join Waitlist'}
        </button>
      </div>
    </form>
  );
};

export default EmailForm;
