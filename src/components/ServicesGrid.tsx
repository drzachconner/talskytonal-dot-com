import { Link } from 'react-router-dom';
import { Baby, Heart, Users, ArrowRight } from 'lucide-react';
import { services } from '../data/services';

const iconMap = {
  baby: Baby,
  heart: Heart,
  users: Users,
};

export default function ServicesGrid() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Specialized chiropractic care tailored to your family's unique needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <Link
                key={service.id}
                to={service.slug}
                className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-xl hover:shadow-lg transition group"
              >
                <div className="bg-emerald-700 w-16 h-16 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-800 transition">
                  <Icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <span className="inline-flex items-center gap-2 text-emerald-700 font-medium group-hover:gap-3 transition-all">
                  Learn More <ArrowRight size={16} />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
