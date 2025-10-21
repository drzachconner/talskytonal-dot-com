import { useSeo } from '../hooks/useSeo';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';

export default function Videos() {
  useSeo({
    title: 'Talsky Tonal Videos',
    description: 'Watch video tutorials and demonstrations of Talsky Tonal Chiropractic techniques and methodology.',
    canonical: '/videos',
  });

  return (
    <>
      <section className="relative py-32 bg-primary-dark min-h-[400px] flex items-center">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Talsky Tonal Videos
          </h1>
          <p className="text-xl sm:text-2xl text-white max-w-4xl mx-auto leading-relaxed">
            Video tutorials and demonstrations from Dr. Marvin Talsky
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-cream p-8 rounded-xl mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Members Only Content</h2>
            <p className="text-lg text-gray-700 mb-6">
              Our video library is available exclusively to registered members. Register today to access
              over 50 hours of instructional content.
            </p>
            <Link
              to="/register"
              className="inline-block bg-primary-dark text-white px-8 py-3 rounded-lg font-medium hover:bg-primary transition"
            >
              Register for Access
            </Link>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-8">Video Categories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-primary transition">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Play className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Foundational Concepts</h3>
              <p className="text-gray-600">
                Core principles and philosophy of Talsky Tonal Chiropractic
              </p>
            </div>
            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-primary transition">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Play className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Technique Demonstrations</h3>
              <p className="text-gray-600">
                Step-by-step technique tutorials and adjustments
              </p>
            </div>
            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-primary transition">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Play className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Patient Assessment</h3>
              <p className="text-gray-600">
                Bio-feedback testing and patient evaluation methods
              </p>
            </div>
            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-primary transition">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Play className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Advanced Applications</h3>
              <p className="text-gray-600">
                Complex cases and advanced technique refinements
              </p>
            </div>
            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-primary transition">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Play className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Q&A Sessions</h3>
              <p className="text-gray-600">
                Common questions answered by Dr. Talsky
              </p>
            </div>
            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-primary transition">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Play className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Seminar Recordings</h3>
              <p className="text-gray-600">
                Full recordings from past seminars and workshops
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
