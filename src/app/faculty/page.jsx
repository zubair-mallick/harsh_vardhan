import Image from 'next/image';

export const metadata = {
  title: 'Our Faculty - Medhasya Academy',
  description: 'Meet our experienced and passionate educators dedicated to student success.',
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
                src="https://placehold.co/400x400/eeeeee/333333?text=Mrs.+Seetha"
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
                  src="https://placehold.co/200x200/eeeeee/333333?text=Mentor"
                  alt="Faculty Member"
                  width={160}
                  height={160}
                  className="rounded-full object-cover shadow-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">[Senior Faculty Name]</h3>
                <p className="text-lg font-semibold text-brand-blue mb-3">Physics & Math Specialist</p>
                <p className="text-gray-700 leading-relaxed">
                  With 12+ years of experience, [Name] has a gift for making complex physics and calculus concepts simple and intuitive. Students appreciate his patient and logical teaching style.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="flex-shrink-0">
                <Image
                  src="https://placehold.co/200x200/eeeeee/333333?text=Mentor"
                  alt="Faculty Member"
                  width={160}
                  height={160}
                  className="rounded-full object-cover shadow-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">[Senior Faculty Name]</h3>
                <p className="text-lg font-semibold text-brand-blue mb-3">Chemistry & Biology</p>
                <p className="text-gray-700 leading-relaxed">
                  An M.Sc. in Chemistry, [Name] is passionate about building a strong foundation in science. Her interactive classes and practical examples help students master difficult topics.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="flex-shrink-0">
                <Image
                  src="https://placehold.co/200x200/eeeeee/333333?text=Mentor"
                  alt="Faculty Member"
                  width={160}
                  height={160}
                  className="rounded-full object-cover shadow-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">[Faculty Name]</h3>
                <p className="text-lg font-semibold text-brand-blue mb-3">Commerce & Economics</p>
                <p className="text-gray-700 leading-relaxed">
                  A [Degree, e.g., M.Com] with 7+ years in teaching, [Name] is dedicated to building strong business and accounting fundamentals for our commerce students.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
