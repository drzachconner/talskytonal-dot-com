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
      <section className="relative w-full">
        <img
          src="/images/paper-hero.webp"
          alt="The Talsky Tonal Paper with Video"
          className="w-full h-auto object-cover"
          loading="eager"
        />
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-ttc-navy mb-4">
            Talsky Tonal Chiropractic, by Asher Nadler, D.C. & Marvin Talsky, D.C.
          </h1>

          <p className="text-lg text-text-neutral mb-6 leading-relaxed">
            This heavily cited overview of Talsky Tonal Chiropractic by Asher Nadler, D.C.
            and Marvin Talsky, D.C. is one of the most important documents in chiropractic.
          </p>

          <p className="text-lg text-text-neutral mb-8 leading-relaxed">
            The included video is a reading of the paper along with clips for further deepening.
          </p>

          <button className="px-8 py-3 bg-ttc-blue hover:bg-ttc-blue-hover text-white font-semibold rounded-lg transition">
            Access Content
          </button>

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
