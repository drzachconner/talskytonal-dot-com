import { useEffect } from 'react';

export default function JotFormEmbed() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js';
    script.onload = () => {
      if (window.jotformEmbedHandler) {
        window.jotformEmbedHandler("iframe[id='JotFormIFrame-233045470374150']", "https://form.jotform.com/");
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="signup-form" className="mx-auto max-w-3xl px-6 py-12 md:py-16 lg:py-20">
      <div className="text-center mb-8">
        <div className="text-3xl md:text-4xl mb-3">👍</div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-ttc-navy mb-4 font-heading">
          Access Exclusive Content and Stay Informed
        </h2>
        <p className="text-base md:text-lg lg:text-xl text-text-neutral leading-relaxed">
          Sign up below to get notified about seminars and gain access to the Talsky Tonal Paper with Video.
        </p>
      </div>

      <iframe
        id="JotFormIFrame-233045470374150"
        title="TTC SEMINAR NOTIFY"
        onLoad={() => window.scrollTo(0, 0)}
        allow="geolocation; microphone; camera"
        src="https://form.jotform.com/233045470374150"
        style={{
          minWidth: '100%',
          maxWidth: '100%',
          height: '539px',
          border: 'none',
        }}
        scrolling="no"
      />
    </section>
  );
}

declare global {
  interface Window {
    jotformEmbedHandler?: (selector: string, baseUrl: string) => void;
  }
}
