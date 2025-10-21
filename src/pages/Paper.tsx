import { useSeo } from '../hooks/useSeo';
import { Link } from 'react-router-dom';

export default function Paper() {
  useSeo({
    title: 'The Talsky Tonal Paper',
    description: 'Access the comprehensive Talsky Tonal Paper - in-depth documentation and research on tonal chiropractic methodology.',
    canonical: '/paper',
  });

  return (
    <>
      <section className="relative py-32 bg-primary-dark min-h-[400px] flex items-center">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            The Talsky Tonal Paper
          </h1>
          <p className="text-xl sm:text-2xl text-white max-w-4xl mx-auto leading-relaxed">
            Comprehensive documentation and research on the Talsky Tonal methodology
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-cream p-8 rounded-xl mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Access Required</h2>
            <p className="text-lg text-gray-700 mb-6">
              The Talsky Tonal Paper is available exclusively to registered members of our community.
              Register today to gain access to this comprehensive resource.
            </p>
            <Link
              to="/register"
              className="inline-block bg-primary-dark text-white px-8 py-3 rounded-lg font-medium hover:bg-primary transition"
            >
              Register for Access
            </Link>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">What You'll Find</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Historical Context</h3>
              <p className="text-gray-700">
                Learn about the development of Talsky Tonal Chiropractic and its evolution from foundational chiropractic principles.
              </p>
            </div>
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Methodology</h3>
              <p className="text-gray-700">
                Detailed explanation of the techniques, philosophy, and approach that make Talsky Tonal unique.
              </p>
            </div>
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Clinical Applications</h3>
              <p className="text-gray-700">
                Practical guidance for implementing Talsky Tonal principles in clinical practice.
              </p>
            </div>
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Research & Evidence</h3>
              <p className="text-gray-700">
                Supporting research and clinical observations that validate the Talsky Tonal approach.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
