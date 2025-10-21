import { useState, FormEvent } from 'react';

export default function LeadCaptureForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      console.log('Form submission:', formData);
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError('Error signing up. Please try again.');
    }
  };

  return (
    <section className="mx-auto max-w-3xl px-6 py-12 md:py-16 lg:py-20 text-center">
      <div className="text-3xl md:text-4xl mb-3">👍</div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-ttc-navy mb-4 font-heading">
        Access Exclusive Content and Stay Informed
      </h2>

      <p className="text-base md:text-lg lg:text-xl text-text-neutral mb-8 md:mb-10 leading-relaxed">
        Sign up below to get notified about seminars and gain access to the Talsky Tonal Paper with Video.
      </p>

      {submitted && (
        <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-lg font-medium">
          ✓ Thanks for signing up! Check your email.
        </div>
      )}

      {error && (
        <div className="mb-6 p-4 bg-red-100 text-red-800 rounded-lg">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          placeholder="Full Name"
          aria-label="Full Name"
          className="w-full rounded-lg border-2 border-border-light px-4 py-3 md:py-4 text-base focus:outline-none focus:border-ttc-blue transition-colors"
        />
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          placeholder="Email Address"
          aria-label="Email Address"
          className="w-full rounded-lg border-2 border-border-light px-4 py-3 md:py-4 text-base focus:outline-none focus:border-ttc-blue transition-colors"
        />
        <input
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          required
          placeholder="(000) 000-0000"
          aria-label="Phone Number"
          className="w-full rounded-lg border-2 border-border-light px-4 py-3 md:py-4 text-base focus:outline-none focus:border-ttc-blue transition-colors"
        />
        <button
          type="submit"
          className="w-full px-8 py-3 md:py-4 bg-ttc-blue hover:bg-ttc-blue-hover text-white font-semibold text-lg rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          Submit
        </button>
      </form>

      <p className="mt-4 text-sm text-text-light">
        No spam. Unsubscribe anytime.
      </p>
    </section>
  );
}
