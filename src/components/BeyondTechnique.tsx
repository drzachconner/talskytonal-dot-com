export default function BeyondTechnique() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-12 md:py-16 lg:py-20">
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-ttc-navy mb-6 md:mb-8 font-heading">
          Beyond Technique
        </h2>

        <div className="space-y-4 md:space-y-5 text-base sm:text-lg md:text-xl text-text-neutral leading-relaxed max-w-4xl mx-auto">
          <p>
            Talsky Tonal Chiropractic (TTC) is a complete paradigm shift into tonal chiropractic awareness.
          </p>

          <p>
            This expanded model more congruently applies the principles of chiropractic, quantum physics, and consciousness for a newer, evolving, and even more effective analysis and application.
          </p>

          <p>
            TTC puts the intelligence of the body at the forefront, engaging the nervous system in a much more direct way in order to facilitate never-ending neurological optimization.
          </p>
        </div>
      </div>

      <div className="mt-10 md:mt-12 space-y-3 md:space-y-4">
        <p className="text-center text-base sm:text-lg md:text-xl flex items-center justify-center gap-2 md:gap-3">
          <span className="text-2xl md:text-3xl">✅</span>
          <strong className="text-text-dark">
            Talsky Tonal Chiropractic is not a replacement technique, but rather an expanded model.
          </strong>
        </p>

        {[
          "Enhance Other Tonal Techniques",
          "Enhance Upper Cervical Techniques",
          "Enhance Pediatric Techniques",
          "Enhance Osseous Techniques",
        ].map((item) => (
          <p key={item} className="text-center text-base sm:text-lg md:text-xl flex items-center justify-center gap-2 md:gap-3 text-text-neutral">
            <span className="text-2xl md:text-3xl">👍</span>
            <span>{item}</span>
          </p>
        ))}

        <p className="text-center mt-6 md:mt-8 text-lg sm:text-xl md:text-2xl">
          <strong className="italic text-ttc-navy">
            Deepen your awareness of the hidden power of tonal chiropractic!
          </strong>
        </p>
      </div>
    </section>
  );
}
