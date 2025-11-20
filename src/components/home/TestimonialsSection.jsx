import ScrollReveal from '../ScrollReveal';
import TestimonialSlider from '../TestimonialSlider';

export default function TestimonialsSection() {
  return (
    <ScrollReveal>
      <section className="bg-gray-50 py-20 md:py-28 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column: Title */}
            <div>
              <p className="text-brand-blue font-semibold uppercase tracking-wider mb-3">Testimonial</p>
              <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6">
                What Say Our Students
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We are proud of our students' success. See what they have to say about their journey with Medhasya.
              </p>
            </div>

            {/* Right Column: Testimonial Slider */}
            <div className="relative">
              <TestimonialSlider />
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
