import Link from 'next/link';
import ScrollReveal from '../ScrollReveal';

export default function AboutBrief() {
  return (
    <ScrollReveal>
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-10">
            At Medhasya, we make learning meaningful, interactive, and growth-driven. Our passionate mentors focus on building <strong>strong concepts, confidence, and curiosity.</strong> With expert faculty, personalized one-to-one mentoring, and a results-driven curriculum, we are dedicated to helping every student succeed.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Link
              href="/about"
              className="bg-brand-blue text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors"
            >
              Learn More About Us
            </Link>
            <Link
              href="/faculty"
              className="border border-brand-blue text-brand-blue px-8 py-3 rounded-lg font-semibold text-lg hover:bg-brand-blue hover:text-white transition-colors"
            >
              View Our Faculty
            </Link>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
