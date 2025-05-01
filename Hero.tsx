import React from 'react';
import EmailForm from '../components/EmailForm';
import previewImage from '../assets/localnews.jpg';


const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-neutral-50 text-neutral-800 pt-32 pb-20">
      <div className="absolute top-0 left-0 w-full h-2 bg-brand-yellow" />

      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Textual Content */}
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight leading-tight text-neutral-900 mb-6">
              Create freely. 
              Earn fairly. 
              Own your Content.
            </h1>

            <p className="text-lg sm:text-xl leading-relaxed text-neutral-700 mb-8">
              No endless subscriptions. No ad-driven clickbait. Just meaningful work, accessible through simple micropayments — a frictionless experience for writers and readers alike.
            </p>

            <div className="space-y-5">
              <EmailForm />
              <p className="text-sm text-neutral-500">
                Join our waitlist. We’ll only reach out when it matters.
              </p>
            </div>
          </div>

          {/* Mock UI or Visual */}
          <div className="hidden lg:block">
            <div className="relative shadow-xl rounded-xl border border-neutral-200 bg-white overflow-hidden transform transition duration-300 hover:shadow-2xl hover:scale-[1.02]">
              {/* Mock Window Controls */}
              <div className="bg-neutral-100 px-4 py-2 flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-400 rounded-full" />
                <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                <div className="w-3 h-3 bg-green-400 rounded-full" />
              </div>

              {/* Mock Content */}
              <div className="relative px-6 py-8 space-y-6">
                {/* Label */}
                <div className="absolute top-2 right-2 text-xs bg-neutral-200 px-2 py-0.5 rounded text-neutral-600">
                  Mock Preview
                </div>

                {/* Title */}
                <div className="text-xl font-semibold text-ink">
                  How Micropayments Are Changing Journalism
                </div>

                {/* Image Placeholder */}
                <div className="w-full h-48 bg-neutral-100 rounded-md flex items-center justify-center text-neutral-400 text-sm italic">
                  <img
                    src={previewImage}
                    alt="Preview of micropayment article"
                    className="w-full h-48 object-cover rounded-md"
                  />
                </div>

                {/* Description */}
                <div className="space-y-2 text-sm text-neutral-700">
                  <p>Readers pay only for what they consume — no subscriptions, no ads.</p>
                  <p>Writers earn directly, with no platform gatekeeping.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Arrow */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center">
          <a
            href="#about"
            className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-neutral-300 text-neutral-600 hover:bg-neutral-100 transition"
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
    </section>
  );
};

export default Hero;
