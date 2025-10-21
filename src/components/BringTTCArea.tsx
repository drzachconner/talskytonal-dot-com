import { Link } from 'react-router-dom';

export default function BringTTCArea() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12 md:py-16 lg:py-20">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-ttc-navy mb-6 font-heading">
            Bring TTC to Your Area!
          </h2>

          <div className="space-y-4 md:space-y-5 text-text-neutral text-base md:text-lg leading-relaxed">
            <p>
              We will come to you, anywhere in the U.S., provided there are at least 12 paid participants. For out-of-country seminars, there are a few additional requirements.
            </p>

            <p>
              If you host your location or are the sponsor for a seminar, then you will attend on us, as our guest.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-block mt-8 px-8 py-3 md:px-10 md:py-4 bg-ttc-blue hover:bg-ttc-blue-hover text-white font-semibold text-lg rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Contact Us
          </Link>
        </div>

        <div className="relative h-80 md:h-96 lg:h-[450px] rounded-xl overflow-hidden shadow-2xl">
          <img
            src="/images/Talsky at source2.jpg"
            alt="Dr. Marvin Talsky performing chiropractic adjustment"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
