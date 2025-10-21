import { useSeo } from '../hooks/useSeo';
import { Link } from 'react-router-dom';
import { BookOpen, CheckCircle } from 'lucide-react';

export default function Modules() {
  useSeo({
    title: 'Online Modules',
    description: 'Interactive online learning modules for mastering Talsky Tonal Chiropractic techniques and methodology.',
    canonical: '/modules',
  });

  const modules = [
    {
      title: 'Module 1: Foundations',
      description: 'Introduction to Talsky Tonal philosophy and core principles',
      lessons: 8,
    },
    {
      title: 'Module 2: Assessment',
      description: 'Bio-feedback testing and patient evaluation techniques',
      lessons: 12,
    },
    {
      title: 'Module 3: Technique',
      description: 'Hands-on technique training and adjustment protocols',
      lessons: 15,
    },
    {
      title: 'Module 4: Clinical Practice',
      description: 'Implementing Talsky Tonal in your practice',
      lessons: 10,
    },
  ];

  return (
    <>
      <section className="relative py-32 bg-primary-dark min-h-[400px] flex items-center">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Online Modules
          </h1>
          <p className="text-xl sm:text-2xl text-white max-w-4xl mx-auto leading-relaxed">
            Structured learning paths to master Talsky Tonal Chiropractic
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-cream p-8 rounded-xl mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Enroll Today</h2>
            <p className="text-lg text-gray-700 mb-6">
              Our comprehensive online learning platform provides structured courses with interactive content,
              quizzes, and certification upon completion.
            </p>
            <Link
              to="/register"
              className="inline-block bg-primary-dark text-white px-8 py-3 rounded-lg font-medium hover:bg-primary transition"
            >
              Register & Enroll
            </Link>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-8">Course Curriculum</h2>
          <div className="space-y-6">
            {modules.map((module, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-primary transition"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BookOpen className="text-primary" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{module.title}</h3>
                    <p className="text-gray-600 mb-3">{module.description}</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <CheckCircle size={16} className="mr-1" />
                      {module.lessons} Lessons
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-primary-dark text-white p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">What's Included</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="mr-3 mt-1 flex-shrink-0" size={20} />
                <span>Lifetime access to all course materials</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-3 mt-1 flex-shrink-0" size={20} />
                <span>Interactive quizzes and assessments</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-3 mt-1 flex-shrink-0" size={20} />
                <span>Downloadable resources and handouts</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-3 mt-1 flex-shrink-0" size={20} />
                <span>Certificate of completion</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-3 mt-1 flex-shrink-0" size={20} />
                <span>Access to private community forum</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
