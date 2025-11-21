import Link from 'next/link';

export default function HeroSection() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-brand-dark text-white relative overflow-hidden">
        <div className="container mx-auto px-6 py-24 md:py-32 text-center z-10 relative">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Where Education Inspires, Skills Grow, and Success Begins.
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Meaningful, interactive, and growth-driven learning for classes 8-12.
          </p>
          <Link
            href="/courses"
            className="bg-brand-blue text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors inline-block"
          >
            Explore Courses
          </Link>
        </div>
      </section>

      {/* Marquee Banner */}
      <div className="bg-brand-gold text-brand-dark py-2.5 overflow-hidden">
        <div className="marquee-content flex space-x-12">
          <span className="flex-shrink-0 font-medium">Admissions for the 2026-27 academic year open in January 2026. Enquire Now!</span>
          <span className="flex-shrink-0 font-medium">Admissions for the 2026-27 academic year open in January 2026. Enquire Now!</span>
          <span className="flex-shrink-0 font-medium">Admissions for the 2026-27 academic year open in January 2026. Enquire Now!</span>
          <span className="flex-shrink-0 font-medium">Admissions for the 2026-27 academic year open in January 2026. Enquire Now!</span>
        </div>
      </div>
    </>
  );
}
