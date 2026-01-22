import Link from 'next/link';

export const metadata = {
  title: 'Courses for Classes 8-12 | CBSE, ICSE & State Board',
  description: 'Explore structured learning programs for classes 8-12 at Medhasya Academy. Foundation courses, JEE/NEET preparation, Science & Commerce streams. Expert CBSE, ICSE & State Board coaching in Ramamurthy Nagar, Bengaluru.',
  keywords: ['courses', 'class 8 tuition', 'class 9 tuition', 'class 10 boards', 'class 11 science', 'class 12 boards', 'JEE coaching', 'NEET coaching', 'commerce stream', 'cbse coaching', 'icse tuition', 'state board', 'mathematics tuition', 'physics coaching', 'chemistry tuition', 'accountancy classes', 'board exam preparation'],
  alternates: {
    canonical: 'https://medhasya.com/courses',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    title: 'Our Courses - Medhasya Academy',
    description: 'Structured learning for classes 8-12. Foundation, Science & Commerce streams with board exam focus. CBSE, ICSE & State Board coaching.',
    url: 'https://medhasya.com/courses',
    siteName: 'Medhasya Academy',
    images: [{ url: 'https://medhasya.com/logo.png', width: 512, height: 512, alt: 'Medhasya Academy Logo' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Courses - Medhasya Academy',
    description: 'Structured learning for classes 8-12 with conceptual clarity and board exam success.',
    images: ['https://medhasya.com/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CoursesPage() {
  return (
    <main>
      {/* Page Header */}
      <section className="bg-brand-dark text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Our Programs</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mt-4">
            Structured learning for classes 8-12, focusing on conceptual clarity and board exam success.
          </p>
        </div>
      </section>

      {/* Foundation Program Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 max-w-6xl">
          <div>
            <h2 className="text-3xl font-bold text-center mb-4 text-brand-dark">Foundation Program (Classes 8-10)</h2>
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-16">
              Building a rock-solid base in core subjects to ensure future academic success and confidence.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Class 8 */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Class 8</h3>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">CBSE</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">ICSE</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Fostering curiosity and confidence in core subjects like Math and Science from day one.
                  </p>
                  <div className="space-y-2 mb-4">
                    <p className="text-sm font-semibold text-gray-700">Key Subjects:</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">Mathematics</span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">Science</span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">English</span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">Social Studies</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Class 9 */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Class 9</h3>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">CBSE</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">ICSE</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Deepening conceptual understanding in all subjects to prepare for board-level challenges.
                  </p>
                  <div className="space-y-2 mb-4">
                    <p className="text-sm font-semibold text-gray-700">Key Subjects:</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">Mathematics</span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">Physics</span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">Chemistry</span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">Biology</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Class 10 */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Class 10 (Boards)</h3>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">CBSE</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">ICSE</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">State Board</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Comprehensive syllabus coverage, rigorous practice, and strategic mentoring to score strongly.
                  </p>
                  <div className="space-y-2 mb-4">
                    <p className="text-sm font-semibold text-gray-700">Key Subjects:</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">Mathematics</span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">Science</span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">Social Science</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr className="my-16 md:my-24 border-gray-200" />

          {/* Senior Secondary Section */}
          <div>
            <h2 className="text-3xl font-bold text-center mb-4 text-brand-dark">Senior Secondary (Classes 11-12)</h2>
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-16">
              Mastering advanced concepts for Science and Commerce streams, building a competitive edge for future success.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Class 11 Science */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Class 11 Science</h3>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">CBSE</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">1st PU (State Board)</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    In-depth coaching for Physics, Chemistry, Math & Biology (PCM/PCB) for Class 11 board performance and JEE/NEET foundation.
                  </p>
                  <div className="space-y-2 mb-4">
                    <p className="text-sm font-semibold text-gray-700">Key Subjects:</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">Physics</span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">Chemistry</span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">Mathematics</span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">Biology</span>
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>JEE/NEET foundation building</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>Advanced problem-solving techniques</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>Board exam mastery</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Class 12 Science */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Class 12 Science</h3>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">CBSE</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">2nd PU (State Board)</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Advanced coaching for Physics, Chemistry, Math & Biology (PCM/PCB) for peak Class 12 board performance and competitive exams.
                  </p>
                  <div className="space-y-2 mb-4">
                    <p className="text-sm font-semibold text-gray-700">Key Subjects:</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">Physics</span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">Chemistry</span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">Mathematics</span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">Biology</span>
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>JEE/NEET advanced preparation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>Strategic exam techniques</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>Board exam mastery</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Commerce Stream */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Commerce Stream (11 & 12)</h3>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">CBSE</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">State Board</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Expert guidance in Accountancy, Economics, and Business Studies to build strong fundamentals, with special emphasis on Basic Mathematics for numerical confidence.
                  </p>
                  <div className="space-y-2 mb-4">
                    <p className="text-sm font-semibold text-gray-700">Key Subjects:</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">Accountancy</span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">Economics</span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">Business Studies</span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-semibold">Basic Mathematics</span>
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>Commerce-specific math focus</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>Practical applications</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>Building numerical confidence</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <hr className="my-16 md:my-24 border-gray-200" />

          {/* Specialized Mentoring */}
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

      {/* Admissions Section */}
      <section className="pb-20 md:pb-28">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-brand-gold text-brand-dark py-12 px-6 rounded-lg text-center shadow-lg">
            <h2 className="text-3xl font-bold mb-4">Admissions Open Soon!</h2>
            <p className="text-xl max-w-2xl mx-auto mb-6">
              Admissions for the <strong>2026-27 academic year</strong> begin in <strong>January 2026</strong>.
            </p>
            <Link href="/contact" className="bg-brand-dark text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-colors inline-block">
              Enquire Now
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}