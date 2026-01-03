import Image from 'next/image';
import ScrollReveal from '../ScrollReveal';

export default function WhyChooseUs() {
  return (
    <ScrollReveal>
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Why Choose Medhasya Academy?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Feature 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden">
                <Image
                  src="/why-expert-faculty.jpg"
                  alt="Expert Faculty"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-semibold mb-3">Expert Faculty</h3>
                <p className="text-gray-600">Our mentors bring over 5+ years of dedicated teaching experience, ensuring strong conceptual clarity.</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden">
                <Image
                  src="/why-personalized-mentoring.jpg"
                  alt="Personalized Mentoring"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-semibold mb-3">Personalized Mentoring</h3>
                <p className="text-gray-600">We focus on one-to-one guidance to help even the weakest learners build confidence and skills.</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden">
                <Image
                  src="/why-results-driven.jpg"
                  alt="Results-Driven Approach"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-semibold mb-3">Results-Driven Approach</h3>
                <p className="text-gray-600">Our structured curriculum is designed to help students score strongly in board exams.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
