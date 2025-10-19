import { useState, FormEvent } from 'react';
import { SITE } from '../data/site';

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    try {
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

      if (!supabaseUrl || !supabaseAnonKey) {
        throw new Error('Supabase configuration missing');
      }

      const response = await fetch(`${supabaseUrl}/functions/v1/send-contact-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${supabaseAnonKey}`,
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.ok) {
        setSuccess(true);
        e.currentTarget.reset();
        setTimeout(() => setSuccess(false), 5000);
      } else {
        setError(result.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error('Contact form error:', err);
      setError('Failed to send. Please check your connection.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
      {success && (
        <div
          role="status"
          aria-live="polite"
          className="p-4 bg-green-100 text-green-800 rounded-lg"
        >
          Message sent! We'll reply within 24 hours.
        </div>
      )}
      {error && (
        <div role="alert" aria-live="assertive" className="p-4 bg-red-100 text-red-800 rounded-lg">
          {error}
        </div>
      )}

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Your Name"
          maxLength={120}
          required
          autoComplete="name"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="your@email.com"
          required
          autoComplete="email"
          inputMode="email"
          aria-describedby="email-help"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
        <p id="email-help" className="text-xs text-gray-500 mt-1">
          We'll only use this to contact you about your inquiry.
        </p>
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
          Phone (optional)
        </label>
        <input
          id="phone"
          type="tel"
          name="phone"
          placeholder="555-123-4567"
          autoComplete="tel"
          inputMode="tel"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Your message..."
          required
          minLength={10}
          maxLength={2000}
          rows={5}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        ></textarea>
      </div>

      <input type="hidden" name="company" defaultValue="" />

      <button
        type="submit"
        disabled={loading}
        className="w-full px-4 py-3 bg-primary-dark text-white font-semibold rounded-lg hover:bg-primary-accent disabled:opacity-50 disabled:cursor-not-allowed transition"
      >
        {loading ? 'Sending...' : 'Send Message'}
      </button>

      <p className="text-xs text-gray-600 mt-2">
        <strong>Disclaimer:</strong> This form is for general inquiries only. For scheduling or
        medical concerns, please call{' '}
        <a
          href={`tel:${SITE.phone.replace(/[^+\d]/g, '')}`}
          className="underline hover:text-primary-dark"
        >
          {SITE.phone}
        </a>{' '}
        or use our booking system.
      </p>
    </form>
  );
}
