import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-blue-900 text-white relative overflow-hidden">
        <div className="container mx-auto px-6 py-16 md:py-24 z-10 relative">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-12">
            {/* Left - Logo */}
            <div className="flex-shrink-0">
              <Image
                src="/logo-hero.png"
                alt="Medhasya Academy Logo"
                width={400}
                height={400}
                priority
                className="w-80 h-80 md:w-96 md:h-96 object-contain"
              />
            </div>
            
            {/* Right - Text */}
            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
                <span className="text-yellow-400">Where Education Inspires, </span>
                <span className="text-white">Skills Grow, </span>
                <span className="text-cyan-400">and Success Begins.</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8">
                Meaningful, interactive, and growth-driven learning for classes 8-12.
              </p>
              <Link
                href="/courses"
                className="bg-brand-blue text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors inline-block"
              >
                Explore Courses
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Banner */}
      <div className="bg-brand-gold text-brand-dark py-2.5 overflow-hidden">
        <div className="marquee-content">
          <span className="flex-shrink-0 font-medium text-sm md:text-base whitespace-nowrap">🎓 Admissions 2026-27 Open! Enquire Now! &nbsp;•&nbsp;</span>
          <span className="flex-shrink-0 font-medium text-sm md:text-base whitespace-nowrap">🎓 Admissions 2026-27 Open! Enquire Now! &nbsp;•&nbsp;</span>
          <span className="flex-shrink-0 font-medium text-sm md:text-base whitespace-nowrap">🎓 Admissions 2026-27 Open! Enquire Now! &nbsp;•&nbsp;</span>
          <span className="flex-shrink-0 font-medium text-sm md:text-base whitespace-nowrap">🎓 Admissions 2026-27 Open! Enquire Now! &nbsp;•&nbsp;</span>
        </div>
      </div>
    </>
  );
}
