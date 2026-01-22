import Image from 'next/image';

export const metadata = {
  title: 'About Us',
  description: 'Learn about Medhasya Academy\'s story, vision, and the passionate educators with 20+ years of experience. Discover our philosophy of meaningful, interactive, and growth-driven education in Bengaluru.',
  keywords: ['about medhasya', 'medhasya academy story', 'education philosophy', 'bengaluru tuition', 'experienced educators'],
  openGraph: {
    title: 'About Us - Medhasya Academy',
    description: 'Discover our philosophy of meaningful, interactive, and growth-driven education. 20+ years of educational excellence.',
    url: 'https://medhasya.com/about',
    images: [{ url: '/logo.png', width: 512, height: 512, alt: 'Medhasya Academy Logo' }],
  },
  twitter: {
    title: 'About Us - Medhasya Academy',
    description: 'Discover our philosophy of meaningful, interactive, and growth-driven education.',
  },
};

export default function AboutPage() {
  return (
    <main>
      {/* Page Header + About Medhasya */}
      <section className="bg-gray-50 py-16 pb-20 md:pb-28">
        <div className="container mx-auto px-6 text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-dark">Our Story & Vision</h1>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">Building a foundation for life through meaningful education</p>
        </div>
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-semibold text-brand-blue mb-6">Our Philosophy</h2>
              <ul className="space-y-2">
                <li className="flex items-start bg-white rounded-lg p-3 shadow-sm">
                  <span className="w-7 h-7 bg-brand-blue text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-sm font-bold mt-0.5">✓</span>
                  <span className="text-gray-700">Education is not just about exams; it's about building a foundation for life</span>
                </li>
                <li className="flex items-start bg-white rounded-lg p-3 shadow-sm">
                  <span className="w-7 h-7 bg-brand-blue text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-sm font-bold mt-0.5">✓</span>
                  <span className="text-gray-700">We make learning <strong>meaningful, interactive, and growth-driven</strong></span>
                </li>
                <li className="flex items-start bg-white rounded-lg p-3 shadow-sm">
                  <span className="w-7 h-7 bg-brand-blue text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-sm font-bold mt-0.5">✓</span>
                  <span className="text-gray-700">Moving beyond rote memorization to foster <strong>strong concepts, genuine confidence, and lasting curiosity</strong></span>
                </li>
                <li className="flex items-start bg-white rounded-lg p-3 shadow-sm">
                  <span className="w-7 h-7 bg-brand-blue text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-sm font-bold mt-0.5">✓</span>
                  <span className="text-gray-700">Questions are encouraged, and understanding is the ultimate goal</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-semibold text-brand-blue mb-6">Our Approach</h2>
              <ul className="space-y-2">
                <li className="flex items-start bg-white rounded-lg p-3 shadow-sm">
                  <span className="w-7 h-7 bg-brand-blue text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-sm font-bold mt-0.5">✓</span>
                  <span className="text-gray-700">Every faculty member brings <strong>over 5 years of experience</strong>, ensuring subject mastery</span>
                </li>
                <li className="flex items-start bg-white rounded-lg p-3 shadow-sm">
                  <span className="w-7 h-7 bg-brand-blue text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-sm font-bold mt-0.5">✓</span>
                  <span className="text-gray-700">Deep understanding of student psychology</span>
                </li>
                <li className="flex items-start bg-white rounded-lg p-3 shadow-sm">
                  <span className="w-7 h-7 bg-brand-blue text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-sm font-bold mt-0.5">✓</span>
                  <span className="text-gray-700"><strong>Personalized one-to-one mentoring</strong> to identify individual learning gaps</span>
                </li>
                <li className="flex items-start bg-white rounded-lg p-3 shadow-sm">
                  <span className="w-7 h-7 bg-brand-blue text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-sm font-bold mt-0.5">✓</span>
                  <span className="text-gray-700">Helping even the weakest learners build confidence</span>
                </li>
                <li className="flex items-start bg-white rounded-lg p-3 shadow-sm">
                  <span className="w-7 h-7 bg-brand-blue text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-sm font-bold mt-0.5">✓</span>
                  <span className="text-gray-700"><strong>Structured, results-driven curriculum</strong> for strong board exam scores</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Numbers Statistics */}
      <section className="py-20 md:py-28 container mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Our Journey in Numbers</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 overflow-hidden rounded-lg shadow-xl">
          <div className="bg-brand-blue text-white p-8 text-center">
            <h3 className="text-5xl font-bold">20+</h3>
            <h4 className="text-xl uppercase font-semibold mt-2">Years <span className="block">Experience</span></h4>
          </div>
          <div className="bg-brand-dark text-white p-8 text-center">
            <h3 className="text-5xl font-bold">500+</h3>
            <h4 className="text-xl uppercase font-semibold mt-2">Students <span className="block">Taught</span></h4>
          </div>
          <div className="bg-brand-gold text-brand-dark p-8 text-center">
            <h3 className="text-5xl font-bold">95%</h3>
            <h4 className="text-xl uppercase font-semibold mt-2">Success <span className="block">Rate</span></h4>
          </div>
          <div className="bg-gray-700 text-white p-8 text-center">
            <h3 className="text-5xl font-bold">1k+</h3>
            <h4 className="text-xl uppercase font-semibold mt-2">Mentoring <span className="block">Hours</span></h4>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="bg-gray-50 pt-20 pb-20 md:pb-28">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Leadership</h2>
          
          {/* Founder */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center mb-20">
            <div className="flex justify-center items-center md:col-span-1">
              <Image
                src="/Founder.jpg"
                alt="Mrs. Seetha, Founder"
                width={280}
                height={280}
                className="rounded-full object-cover object-[70%_10%] shadow-xl w-[280px] h-[280px] mx-auto"
              />
            </div>
            <div className="text-center md:text-left md:col-span-2">
              <blockquote className="text-2xl md:text-3xl font-light text-gray-800 italic border-l-4 border-brand-blue pl-6 mb-6">
                "In every learner, we see a story waiting to grow."
              </blockquote>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Mrs. Seetha</h3>
              <p className="text-sm text-brand-blue font-semibold uppercase mb-3">Founder & Chief Mentor</p>
              <p className="text-lg text-gray-700 leading-relaxed">
                With <strong>over 20 years in schools as a teacher and administrator</strong>, education has never been just a profession for Mrs. Seetha — it has been a calling. Guiding students, watching them grow, and helping them discover their strengths has shaped her life.
                <br /><br />
                This passion led to the birth of Medhasya Academy, a reflection of her belief that every child deserves <strong>clarity, confidence, and the joy of truly understanding</strong> what they learn.
              </p>
            </div>
          </div>

          {/* Trustee */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            <div className="flex justify-center items-center md:col-span-1">
              <Image
                src="/Trustee.jpg"
                alt="Trustee"
                width={280}
                height={280}
                className="rounded-full object-cover object-[50%_20%] shadow-xl w-[280px] h-[280px] mx-auto"
              />
            </div>
            <div className="text-center md:text-left md:col-span-2">
              <blockquote className="text-2xl md:text-3xl font-light text-gray-800 italic border-l-4 border-brand-blue pl-6 mb-6">
                "EDUCATION has an important role to play in making INDIA self-reliant"
              </blockquote>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Mr Muralidhara R</h3>
              <p className="text-sm text-brand-blue font-semibold uppercase mb-3">Trustee & Advisor</p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Mr Muralidhara R brings invaluable guidance and strategic vision to Medhasya Academy. With a deep commitment to educational excellence and community development, they ensure that our institution continues to uphold the highest standards of learning and student care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Our Core Values</h2>
            <p className="text-lg text-gray-600 mt-4">What guides us, inspires us, and motivates our work.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden">
                <Image
                  src="/value-conceptual-clarity.jpg"
                  alt="Conceptual Clarity"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-semibold mb-3">Conceptual Clarity</h3>
                <p className="text-gray-600">We prioritize deep understanding over rote memorization. Our goal is for students to know *why*, not just *what*.</p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden">
                <Image
                  src="/value-personalized-mentorship.png"
                  alt="Personalized Mentorship"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-semibold mb-3">Personalized Mentorship</h3>
                <p className="text-gray-600">We believe in the individual. Our one-to-one focus ensures every student gets the specific support they need to grow.</p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden">
                <Image
                  src="/value-building-confidence.jpg"
                  alt="Building Confidence"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-semibold mb-3">Building Confidence</h3>
                <p className="text-gray-600">Success follows confidence. We motivate and empower students to believe in their own abilities and tackle any challenge.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
