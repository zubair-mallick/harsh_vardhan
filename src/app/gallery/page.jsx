export const metadata = {
  title: 'Gallery - Medhasya Academy',
  description: 'Explore our campus, classrooms, and student activities.',
};

export default function GalleryPage() {
  return (
    <main>
      <section className="bg-brand-dark text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Gallery</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mt-4">
            Explore our campus, classrooms, and student activities.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <p className="text-lg text-gray-600">
            (Photo gallery will be added here)
          </p>
        </div>
      </section>
    </main>
  );
}
