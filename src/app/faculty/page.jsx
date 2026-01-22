import Image from 'next/image';

export const metadata = {
  title: 'Our Faculty',
  description: 'Meet our experienced and passionate educators at Medhasya Academy. 8+ mentors with 7+ years average experience, all focused on personalized one-on-one teaching.',
  keywords: ['faculty', 'teachers', 'mentors', 'experienced educators', 'mathematics teacher', 'physics teacher', 'science teacher'],
  openGraph: {
    title: 'Our Faculty - Medhasya Academy',
    description: 'Meet our team of 8+ experienced educators dedicated to student success.',
    url: 'https://medhasya.com/faculty',
    images: [{ url: '/logo.png', width: 512, height: 512, alt: 'Medhasya Academy Logo' }],
  },
  twitter: {
    title: 'Our Faculty - Medhasya Academy',
    description: 'Meet our experienced and passionate educators dedicated to student success.',
  },
};

export default function FacultyPage() {
  return (
    <main>
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-dark">Meet Our Mentors</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mt-4">
            Our team is composed of passionate, experienced educators dedicated to your child's success.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 container mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Our Faculty by the Numbers</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 overflow-hidden rounded-lg shadow-xl">
          <div className="bg-brand-blue text-white p-8 text-center">
            <h3 className="text-5xl font-bold">8+</h3>
            <h4 className="text-xl uppercase font-semibold mt-2">Total <span className="block">Mentors</span></h4>
          </div>
          <div className="bg-brand-dark text-white p-8 text-center">
            <h3 className="text-5xl font-bold">7+</h3>
            <h4 className="text-xl uppercase font-semibold mt-2">Avg. Years <span className="block">Experience</span></h4>
          </div>
          <div className="bg-brand-gold text-brand-dark p-8 text-center">
            <h3 className="text-5xl font-bold">100%</h3>
            <h4 className="text-xl uppercase font-semibold mt-2">One-on-One <span className="block">Focused</span></h4>
          </div>
          <div className="bg-gray-700 text-white p-8 text-center">
            <h3 className="text-5xl font-bold">90%</h3>
            <h4 className="text-xl uppercase font-semibold mt-2">Master's <span className="block">Degrees</span></h4>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 pt-0 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-16">Our Founder</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            <div className="flex justify-center md:col-span-1">
              <Image
                src="/Founder.jpg"
                alt="Mrs. Seetha, Founder"
                width={320}
                height={320}
                className="rounded-full object-cover shadow-xl"
              />
            </div>
            <div className="text-center md:text-left md:col-span-2">
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Mrs. Seetha</h3>
              <p className="text-xl font-semibold text-brand-blue mb-4">Founder & Chief Mentor</p>
              <p className="text-lg text-gray-700 leading-relaxed">
                With over 20 years in education, Mrs. Seetha's vision is the driving force behind Medhasya. She ensures that every student receives the personal attention and guidance needed to build clarity, confidence, and character.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 pt-0">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-16">Our Key Faculty</h2>
          
          <div className="space-y-16">
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="flex-shrink-0">
                <Image
                  src="/faculty-manikantha.jpeg"
                  alt="Mr. Manikantha"
                  width={200}
                  height={200}
                  className="rounded-full object-cover shadow-lg w-48 h-48 bg-white"
                />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-gray-900">Mr. Manikantha</h3>
                <p className="text-lg font-semibold text-brand-blue mb-3">Senior Mathematics Faculty</p>
                <p className="text-gray-700 leading-relaxed">
                  With over 10 years of experience in handling 10th grade Mathematics across CBSE, State and ICSE Boards, Mr. Manikantha's method of teaching Maths is to primarily evoke interest among students about the subject and then to correct their basics. His core strength as a teacher lies in training students for a Board oriented preparation.
                </p>
              </div>
            </div>
            
            {/* <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="flex-shrink-0">
                <Image
                  src="/faculty-salahuddin.png"
                  alt="Mohammed Sulthan Salahuddin Ayyubee"
                  width={200}
                  height={200}
                  className="rounded-full object-cover shadow-lg w-48 h-48 bg-white"
                />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-gray-900">Mohammed Sulthan Salahuddin Ayyubee</h3>
                <p className="text-lg font-semibold text-brand-blue mb-3">Mathematics & Physics Expert</p>
                <p className="text-gray-700 leading-relaxed">
                  A passionate tutor with 7 years of experience in teaching and tutoring students of class 9th and 10th for all the boards. His expertise in Mathematics and Physics helps students build strong conceptual foundations.
                </p>
              </div>
            </div> */}
            
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="flex-shrink-0">
                <Image
                  src="/faculty-jordan.jpeg"
                  alt="Jordan Emmanuel"
                  width={200}
                  height={200}
                  className="rounded-full object-cover shadow-lg w-48 h-48 bg-white"
                />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-gray-900">Jordan Emmanuel</h3>
                <p className="text-lg font-semibold text-brand-blue mb-3">Science Faculty</p>
                <p className="text-gray-700 leading-relaxed">
                  A Computer Science Engineer by qualification and a dedicated multi-subject educator. He has taught Class 8 Mathematics, Science, and Social Science, Class 9 Social Science, and Class 10 Physics. Known for his clear explanations and student-friendly approach, Mr. Jordan focuses on building strong fundamentals and making complex topics simple and understandable.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="flex-shrink-0">
                <Image
                  src="/faculty-mohan.png"
                  alt="Mr. Mohan Kumar N"
                  width={200}
                  height={200}
                  className="rounded-full object-cover shadow-lg w-48 h-48 bg-white"
                />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-gray-900">Mr. Mohan Kumar N</h3>
                <p className="text-lg font-semibold text-brand-blue mb-3">Senior Physics Faculty</p>
                <p className="text-gray-700 leading-relaxed">
                  As an MSc holder in Physics, my expertise lies in connecting Physics with the examples around us. Staying in touch with the technological advancements and finding common topics that are a part of the basics in the syllabus is something that my students have enjoyed in my classes. With over 6 years of experience in teaching Physics and Maths, I'm confident in clearing the concepts of students in a holistic manner and also making topics enjoyable to them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
