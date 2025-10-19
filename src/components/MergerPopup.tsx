import { useEffect, useState } from 'react';
import { X, MapPin, Phone, Globe } from 'lucide-react';

export default function MergerPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem('hasSeenMergerPopup');
    if (!hasSeenPopup) {
      setIsVisible(true);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem('hasSeenMergerPopup', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="sticky top-0 bg-emerald-700 text-white p-6 flex items-start justify-between rounded-t-xl">
          <div>
            <h2 className="text-2xl font-bold mb-2">Important Update</h2>
            <p className="text-emerald-100">We've Merged with Van Every Family Chiropractic Center</p>
          </div>
          <button
            onClick={handleClose}
            className="text-white hover:bg-white/20 rounded-lg p-2 transition"
            aria-label="Close notification"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <p className="text-gray-900 font-semibold text-lg mb-2">
              We are no longer accepting new patients at our Rochester Hills location.
            </p>
            <p className="text-gray-700">
              Dr. Zach has merged practices with Van Every Family Chiropractic Center in Royal Oak
              and is excited to continue serving families at this new location.
            </p>
          </div>

          <div className="border-t pt-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Schedule with Dr. Zach at Van Every Family Chiropractic Center
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="text-emerald-700 flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-semibold text-gray-900">Call to Schedule</p>
                  <a
                    href="tel:+1-248-616-0900"
                    className="text-emerald-700 text-lg font-bold hover:underline"
                  >
                    (248) 616-0900
                  </a>
                  <p className="text-sm text-gray-600 mt-1">
                    Please mention you're calling to schedule with Dr. Zach and were referred from
                    Cultivate Wellness Chiropractic.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="text-emerald-700 flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-semibold text-gray-900">Location</p>
                  <p className="text-gray-700">
                    4203 Rochester Rd<br />
                    Royal Oak, MI 48073
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Globe className="text-emerald-700 flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-semibold text-gray-900">Website</p>
                  <a
                    href="https://vaneverychiropractic.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-700 hover:underline"
                  >
                    vaneverychiropractic.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-emerald-50 rounded-lg p-4">
            <p className="text-gray-700">
              Thank you for your continued trust and support. We look forward to serving you at our
              new location!
            </p>
          </div>

          <button
            onClick={handleClose}
            className="w-full bg-emerald-700 text-white py-3 rounded-lg font-semibold hover:bg-emerald-800 transition"
          >
            Got It
          </button>
        </div>
      </div>
    </div>
  );
}
