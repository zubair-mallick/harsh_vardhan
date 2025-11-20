import Link from 'next/link';

export const metadata = {
  title: 'Our Courses - Medhasya Academy',
  description: 'Structured learning for classes 8-12, focusing on conceptual clarity and board exam success.',
};

export default function CoursesPage() {
  return (
    <main>
      <section className="bg-brand-dark text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Our Programs</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mt-4">
            Structured learning for classes 8-12, focusing on conceptual clarity and board exam success.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 max-w-6xl">
          <div>
            <h2 className="text-3xl font-bold text-center mb-4 text-brand-dark">Foundation Program (Classes 8-10)</h2>
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-16">
              Building a rock-solid base in core subjects to ensure future academic success and confidence.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="flex">
                <div className="flex-shrink-0 mr-5">
                  <div className="w-16 h-16 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center">
                    <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048l-4.247 4.247a.75.75 0 001.06 1.06l4.247-4.247a3 3 0 014.243 0l4.242 4.242a.75.75 0 001.06-1.06l-4.242-4.242z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Class 8</h3>
                  <p className="text-gray-600 leading-relaxed">Fostering curiosity and confidence in core subjects like Math and Science from day one.</p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0 mr-5">
                  <div className="w-16 h-16 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center">
                    <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Class 9</h3>
                  <p className="text-gray-600 leading-relaxed">Deepening conceptual understanding in all subjects to prepare for board-level challenges.</p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0 mr-5">
                  <div className="w-16 h-16 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center">
                    <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-5.914 7.55A1.5 1.5 0 002.25 20h19.5a1.5 1.5 0 001.414-2.303 60.437 60.437 0 00-5.914-7.55M12 3v12.75m0-12.75c.621 0 1.22.067 1.804.19l-1.804-1.9M12 3c-.621 0-1.22.067-1.804.19l1.804-1.9" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Class 10 (Boards)</h3>
                  <p className="text-gray-600 leading-relaxed">Comprehensive syllabus coverage, rigorous practice, and strategic mentoring to score strongly.</p>
                </div>
              </div>
            </div>
          </div>

          <hr className="my-16 md:my-24 border-gray-200" />

          <div>
            <h2 className="text-3xl font-bold text-center mb-4 text-brand-dark">Senior Secondary (Classes 11-12)</h2>
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-16">
              Mastering advanced concepts for Science and Commerce streams, building a competitive edge for future success.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="flex">
                <div className="flex-shrink-0 mr-5">
                  <div className="w-16 h-16 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center">
                    <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Science Stream (11 & 12)</h3>
                  <p className="text-gray-600 leading-relaxed">In-depth coaching for Physics, Chemistry, Math & Biology (PCM/PCB) for peak board performance.</p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0 mr-5">
                  <div className="w-16 h-16 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center">
                    <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v16.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V3.75m-16.5 0v16.5h16.5V3.75m-16.5 0h16.5M9 11.25l3 3m0 0l3-3m-3 3V7.5" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Commerce Stream (11 & 12)</h3>
                  <p className="text-gray-600 leading-relaxed">Expert guidance in Accountancy, Economics, and Business Studies to build strong fundamentals.</p>
                </div>
              </div>
            </div>
          </div>

          <hr className="my-16 md:my-24 border-gray-200" />

          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4 text-brand-dark">Specialized Mentoring</h2>
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-16">
              Personalized support to address individual learning gaps and build unstoppable confidence.
            </p>
            <div className="flex">
              <div className="flex-shrink-0 mr-5">
                <div className="w-16 h-16 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center">
                  <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A1.5 1.5 0 0118 21.75H6.75a1.5 1.5 0 01-1.249-1.632z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3">One-to-One Mentoring</h3>
                <p className="text-gray-600 leading-relaxed">Available for all students, these sessions are designed to provide focused, personal guidance and doubt-clearing.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-brand-gold text-brand-dark py-12 px-6 rounded-lg text-center shadow-lg">
            <h2 className="text-3xl font-bold mb-4">Admissions Open Soon!</h2>
            <p className="text-xl max-w-2xl mx-auto mb-6">
              Admissions for the <strong>2026-27 academic year</strong> begin in <strong>January 2026</strong>.
            </p>
            <Link href="/contact" className="bg-brand-dark text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-colors inline-block">
              Inquire Now
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
