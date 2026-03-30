'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [result, setResult] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(event.target);
    formData.append('access_key', '25c2eb64-b7c9-4ae7-9348-49b47d480852');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? 'Message sent successfully! We will get back to you soon.' : 'Something went wrong. Please try again.');
    setIsSubmitting(false);
    if (data.success) {
      event.target.reset();
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm transition duration-150 ease-in-out focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
          placeholder="Enter your name"
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Your Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm transition duration-150 ease-in-out focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
          Phone Number <span className="text-gray-500">(Optional)</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm transition duration-150 ease-in-out focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
          placeholder="+91 98765 43210"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm transition duration-150 ease-in-out focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
          placeholder="How can we help you?"
        ></textarea>
      </div>

      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-brand-blue text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </div>

      {result && (
        <p className={`text-center font-medium ${result.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
          {result}
        </p>
      )}
    </form>
  );
}
