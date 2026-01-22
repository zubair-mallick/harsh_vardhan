import Link from 'next/link';
import ScrollReveal from '../ScrollReveal';
import TestimonialSlider from '../TestimonialSlider';

export default function TestimonialsSection() {
  return (
    <ScrollReveal>
      <section className="bg-gray-50 py-20 md:py-28 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-brand-blue font-semibold uppercase tracking-wider mb-3">Testimonials Preview</p>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6">
              What Our Students Say
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
              We are proud of our students' success. Here's a glimpse of their journey with Medhasya Academy.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column: Testimonial Slider */}
            <div className="relative">
              <TestimonialSlider />
            </div>

            {/* Right Column: CTA */}
            <div className="text-center lg:text-left">
              <div className="bg-white p-8 md:p-12 rounded-xl shadow-xl">
                <svg className="w-16 h-16 text-brand-blue mb-6 mx-auto lg:mx-0" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                </svg>
                <h3 className="text-3xl font-bold text-brand-dark mb-4">
                  Want to See More?
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Explore detailed testimonials, video stories, and hear directly from our students about their transformative experiences at Medhasya Academy.
                </p>
                <Link
                  href="/testimonials"
                  className="inline-flex items-center gap-2 bg-brand-blue text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all hover:gap-3"
                >
                  View All Testimonials
                  <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
