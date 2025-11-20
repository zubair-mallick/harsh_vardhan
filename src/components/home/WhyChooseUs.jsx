import ScrollReveal from '../ScrollReveal';

export default function WhyChooseUs() {
  return (
    <ScrollReveal>
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Why Choose Medhasya Academy?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="flex items-center justify-center h-16 w-16 bg-brand-blue/10 text-brand-blue rounded-full mx-auto mb-6">
                <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a.75.75 0 00.75-.75v-4.5m0 0a.75.75 0 00-.75-.75h-2.25m2.25 0a.75.75 0 00.75-.75V5.25m0 0a.75.75 0 00-.75-.75h-2.25m0 0a.75.75 0 00-.75.75v6.75m0 0a.75.75 0 00.75.75h2.25m-3-9.75h3l-3 9.75h3" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3">Expert Faculty</h3>
              <p className="text-gray-600">Our mentors bring over 5+ years of dedicated teaching experience, ensuring strong conceptual clarity.</p>
            </div>

            {/* Feature 2 */}
            <div className="text-center">
              <div className="flex items-center justify-center h-16 w-16 bg-brand-blue/10 text-brand-blue rounded-full mx-auto mb-6">
                <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 10.5l-6.914 6.914a2.25 2.25 0 01-3.182 0l-1.92-1.92a2.25 2.25 0 010-3.182l6.914-6.914a2.25 2.25 0 013.182 0l1.92 1.92a2.25 2.25 0 010 3.182z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3">Personalized Mentoring</h3>
              <p className="text-gray-600">We focus on one-to-one guidance to help even the weakest learners build confidence and skills.</p>
            </div>

            {/* Feature 3 */}
            <div className="text-center">
              <div className="flex items-center justify-center h-16 w-16 bg-brand-blue/10 text-brand-blue rounded-full mx-auto mb-6">
                <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3">Results-Driven Approach</h3>
              <p className="text-gray-600">Our structured curriculum is designed to help students score strongly in board exams.</p>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
