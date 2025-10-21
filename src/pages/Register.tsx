import { useSeo } from '../hooks/useSeo';
import { useState } from 'react';
import { CheckCircle } from 'lucide-react';

export default function Register() {
  useSeo({
    title: 'Register',
    description: 'Register for access to exclusive Talsky Tonal educational resources, seminars, and community.',
    canonical: '/register',
  });

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    profession: '',
    graduationYear: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <section className="relative py-32 bg-primary-dark min-h-[400px] flex items-center">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Register
          </h1>
          <p className="text-xl sm:text-2xl text-white max-w-4xl mx-auto leading-relaxed">
            Join our community of chiropractors learning the Talsky Tonal method
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What You'll Get</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" size={24} />
                  <span className="text-gray-700">Access to The Talsky Tonal Paper</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" size={24} />
                  <span className="text-gray-700">Complete video library with 50+ hours of content</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" size={24} />
                  <span className="text-gray-700">Interactive online learning modules</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" size={24} />
                  <span className="text-gray-700">Digital library of all Talsky Tonal books</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" size={24} />
                  <span className="text-gray-700">Early access to seminars and workshops</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" size={24} />
                  <span className="text-gray-700">Private community forum access</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" size={24} />
                  <span className="text-gray-700">Monthly newsletter with latest updates</span>
                </li>
              </ul>
            </div>

            <div className="bg-primary-cream p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Create Your Account</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="profession" className="block text-sm font-medium text-gray-700 mb-1">
                    Profession *
                  </label>
                  <select
                    id="profession"
                    name="profession"
                    required
                    value={formData.profession}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Select...</option>
                    <option value="chiropractor">Chiropractor</option>
                    <option value="student">Chiropractic Student</option>
                    <option value="assistant">Chiropractic Assistant</option>
                    <option value="other">Other Healthcare Professional</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="graduationYear" className="block text-sm font-medium text-gray-700 mb-1">
                    Graduation Year (if applicable)
                  </label>
                  <input
                    type="text"
                    id="graduationYear"
                    name="graduationYear"
                    placeholder="YYYY"
                    value={formData.graduationYear}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary-dark text-white px-6 py-3 rounded-lg font-medium hover:bg-primary transition"
                >
                  Register Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
