export const metadata = {
  title: 'Our Faculty - Medhasya Academy',
  description: 'Meet our experienced and passionate educators dedicated to student success.',
};

export default function FacultyPage() {
  return (
    <main>
      <section className="bg-brand-dark text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Our Faculty</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mt-4">
            Meet our experienced and passionate educators dedicated to student success.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-brand-dark mb-6">Experienced Educators</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-10">
            Our faculty comprises dedicated professionals with <strong>5+ years of teaching experience</strong> in their respective subjects. They bring expertise, passion, and a student-first approach to every session.
          </p>
          <p className="text-lg text-gray-600">
            (Faculty profiles and photos will be added here)
          </p>
        </div>
      </section>
    </main>
  );
}
