import Image from 'next/image';

export const metadata = {
  title: 'About Us - Medhasya Academy',
  description: 'Learn about our story, vision, and the passionate educators behind Medhasya Academy.',
};

export default function AboutPage() {
  return (
    <main>
      {/* Page Header */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-dark">Our Story & Vision</h1>
        </div>
      </section>

      {/* About Medhasya */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-semibold text-brand-blue mb-4">Our Philosophy</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                At Medhasya, we believe education is not just about exams; it's about building a foundation for life. We make learning <strong>meaningful, interactive, and growth-driven.</strong>
                <br /><br />
                Our mission is to move beyond rote memorization and foster <strong>strong concepts, genuine confidence, and a lasting curiosity</strong> in every student. We create an environment where questions are encouraged, and understanding is the ultimate goal.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-semibold text-brand-blue mb-4">Our Approach</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our strength lies in our mentors. Every faculty member brings <strong>over 5 years of experience</strong>, ensuring subject mastery and a deep understanding of student psychology.
                <br /><br />
                We champion <strong>personalized one-to-one mentoring</strong>, allowing us to identify individual learning gaps and help even the weakest learners build confidence. Our structured, results-driven curriculum ensures students are perfectly prepared to score strongly in board exams.
              </p>
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

      {/* Founder's Note */}
      <section className="bg-gray-50 pt-20 pb-20 md:pb-28">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Meet Our Founder</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            <div className="flex justify-center md:col-span-1">
              <Image
                src="https://placehold.co/400x400/eeeeee/333333?text=Mrs.+Seetha"
                alt="Mrs. Seetha, Founder"
                width={320}
                height={320}
                className="rounded-full object-cover shadow-xl"
              />
            </div>
            <div className="text-center md:text-left md:col-span-2">
              <blockquote className="text-2xl md:text-3xl font-light text-gray-800 italic border-l-4 border-brand-blue pl-6 mb-6">
                "In every learner, we see a story waiting to grow."
              </blockquote>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Mrs. Seetha</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                With <strong>over 20 years in schools as a teacher and administrator</strong>, education has never been just a profession for Mrs. Seetha — it has been a calling. Guiding students, watching them grow, and helping them discover their strengths has shaped her life.
                <br /><br />
                This passion led to the birth of Medhasya Academy, a reflection of her belief that every child deserves <strong>clarity, confidence, and the joy of truly understanding</strong> what they learn.
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex">
              <div className="flex-shrink-0 mr-5">
                <div className="w-16 h-16 rounded-full bg-brand-blue text-white flex items-center justify-center">
                  <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18c-2.305 0-4.408.867-6 2.292m0-14.25v14.25" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3">Conceptual Clarity</h3>
                <p className="text-gray-600">We prioritize deep understanding over rote memorization. Our goal is for students to know *why*, not just *what*.</p>
              </div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0 mr-5">
                <div className="w-16 h-16 rounded-full bg-brand-blue text-white flex items-center justify-center">
                  <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A1.5 1.5 0 0118 21.75H6.75a1.5 1.5 0 01-1.249-1.632z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3">Personalized Mentorship</h3>
                <p className="text-gray-600">We believe in the individual. Our one-to-one focus ensures every student gets the specific support they need to grow.</p>
              </div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0 mr-5">
                <div className="w-16 h-16 rounded-full bg-brand-blue text-white flex items-center justify-center">
                  <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 01-1.414 1.414l-2.022 2.022A2.25 2.25 0 005.25 21h13.5M21.75 18L12.75 9l-4.306 4.307a11.95 11.95 0 011.414 1.414l2.022 2.022A2.25 2.25 0 0018.75 21h-5.25m-6-15l-1.414-1.414a2.25 2.25 0 013.182 0l1.414 1.414M21 3l-1.414 1.414a2.25 2.25 0 01-3.182 0L15 3" />
                  </svg>
                </div>
              </div>
              <div>
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
