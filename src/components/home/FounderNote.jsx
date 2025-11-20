import Image from 'next/image';
import ScrollReveal from '../ScrollReveal';

export default function FounderNote() {
  return (
    <>
      {/* Admissions Announcement */}
      <ScrollReveal>
        <section className="bg-brand-gold text-brand-dark py-12">
          <div className="container mx-auto px-6 text-center">
            <p className="text-2xl md:text-3xl font-bold">
              Admissions for the 2026-27 academic year open in January 2026.
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* Founder's Note */}
      <ScrollReveal>
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center md:justify-end">
                <Image
                  src="https://placehold.co/400x400/eeeeee/333333?text=Mrs.+Seetha"
                  alt="Mrs. Seetha, Founder"
                  width={320}
                  height={320}
                  className="rounded-full object-cover shadow-xl"
                />
              </div>
              <div className="text-center md:text-left">
                <blockquote className="text-3xl md:text-4xl font-light text-gray-800 italic border-l-4 border-brand-blue pl-6">
                  "In every learner, we see a story waiting to grow."
                </blockquote>
                <p className="text-xl font-semibold text-gray-900 mt-6">
                  — Mrs. Seetha, Founder
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </>
  );
}
