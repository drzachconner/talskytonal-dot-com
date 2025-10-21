import { useSeo } from '../hooks/useSeo';
import { Link } from 'react-router-dom';
import { Book } from 'lucide-react';

export default function Books() {
  useSeo({
    title: 'Tonal Books',
    description: 'Comprehensive books and reading materials on Talsky Tonal Chiropractic methodology and philosophy.',
    canonical: '/books',
  });

  const books = [
    {
      title: 'Beyond Technique: The Talsky Tonal Approach',
      description: 'The foundational text explaining the philosophy and methodology of Talsky Tonal Chiropractic.',
      year: '2005',
    },
    {
      title: 'The Stress Bucket: Understanding Subluxation',
      description: 'A deep dive into how stress accumulates in the body and the role of chiropractic care.',
      year: '2008',
    },
    {
      title: 'Bio-Feedback and the Nervous System',
      description: 'Scientific principles behind bio-feedback testing and neurological assessment.',
      year: '2012',
    },
    {
      title: 'Clinical Applications of Tonal Chiropractic',
      description: 'Practical guide for implementing Talsky Tonal techniques in clinical practice.',
      year: '2015',
    },
  ];

  return (
    <>
      <section className="relative py-32 bg-primary-dark min-h-[400px] flex items-center">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Tonal Books
          </h1>
          <p className="text-xl sm:text-2xl text-white max-w-4xl mx-auto leading-relaxed">
            Essential reading for understanding Talsky Tonal Chiropractic
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-cream p-8 rounded-xl mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Digital Library Access</h2>
            <p className="text-lg text-gray-700 mb-6">
              All books are available in digital format exclusively to registered members.
              Physical copies may be purchased separately.
            </p>
            <Link
              to="/register"
              className="inline-block bg-primary-dark text-white px-8 py-3 rounded-lg font-medium hover:bg-primary transition"
            >
              Register for Access
            </Link>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-8">Available Titles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {books.map((book, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-primary transition"
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-20 bg-primary-dark rounded flex items-center justify-center flex-shrink-0">
                    <Book className="text-white" size={28} />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-500 mb-1">{book.year}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{book.title}</h3>
                    <p className="text-gray-600">{book.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-br from-primary/10 to-primary-cream p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Coming Soon</h3>
            <p className="text-lg text-gray-700 mb-4">
              New titles currently in development:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Advanced Tonal Techniques</li>
              <li>• Pediatric Applications of Talsky Tonal</li>
              <li>• The Art of Bio-Feedback Balancing</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
