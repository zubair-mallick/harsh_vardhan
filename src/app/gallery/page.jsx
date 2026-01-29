import Image from 'next/image';

export const metadata = {
  title: 'Gallery - Photos & Campus Tour',
  description: 'A glimpse into Medhasya Academy\'s learning environment, student interactions, classroom sessions, and proud moments. Explore our modern coaching center in Ramamurthy Nagar, Bengaluru with interactive classrooms and dedicated mentoring spaces.',
  keywords: ['gallery', 'medhasya photos', 'classroom', 'student activities', 'coaching center bengaluru', 'campus tour', 'learning environment', 'ramamurthy nagar coaching center', 'tuition center photos'],
  alternates: {
    canonical: 'https://medhasya.com/gallery',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    title: 'Gallery - Medhasya Academy',
    description: 'Explore our learning environment, student interactions, classroom sessions, and proud moments at our Ramamurthy Nagar coaching center.',
    url: 'https://medhasya.com/gallery',
    siteName: 'Medhasya Academy',
    images: [{ url: 'https://medhasya.com/logo.png', width: 512, height: 512, alt: 'Medhasya Academy Logo' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gallery - Medhasya Academy',
    description: 'A glimpse into our learning environment and student interactions.',
    images: ['https://medhasya.com/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function GalleryPage() {
  return (
    <main>
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-dark">Our Gallery</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mt-4">
            A glimpse into our learning environment, student interactions, and proud moments.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Study Area */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
              <Image
                src="/Gallery/desk2.jpg.jpeg"
                alt="Study Area"
                width={600}
                height={400}
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-4">
                <p className="text-gray-600">Dedicated study spaces.</p>
              </div>
            </div>
            
            {/* Reception - Welcoming Area */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
              <Image
                src="/Gallery/reception.jpg.jpeg"
                alt="Reception Area"
                width={600}
                height={400}
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-4">
                <p className="text-gray-600">Our welcoming reception area.</p>
              </div>
            </div>
            
            {/* Classroom - Core Learning Space */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
              <Image
                src="/Gallery/room.jpg.jpeg"
                alt="Classroom"
                width={600}
                height={400}
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-4">
                <p className="text-gray-600">Our interactive classroom setup.</p>
              </div>
            </div>
            
            {/* Study Desks */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
              <Image
                src="/Gallery/desk2.jpeg"
                alt="Student Desk Area"
                width={600}
                height={400}
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-4">
                <p className="text-gray-600">Comfortable study desks for focused learning.</p>
              </div>
            </div>
            
            {/* Learning Space */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
              <Image
                src="/Gallery/desk3.jpg.jpeg"
                alt="Learning Space"
                width={600}
                height={400}
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-4">
                <p className="text-gray-600">Modern learning environment.</p>
              </div>
            </div>
            
            {/* Hallway */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
              <Image
                src="/Gallery/hallway.jpg.jpeg"
                alt="Academy Hallway"
                width={600}
                height={400}
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-4">
                <p className="text-gray-600">Spacious corridors of our academy.</p>
              </div>
            </div>
            
            {/* Interior */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
              <Image
                src="/Gallery/halway2.jpg.jpeg"
                alt="Academy Interior"
                width={600}
                height={400}
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-4">
                <p className="text-gray-600">Clean and inspiring environment.</p>
              </div>
            </div>
            
            {/* Academy Front */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
              <Image
                src="/Gallery/front.jpg.jpeg"
                alt="Academy Front View"
                width={600}
                height={400}
                className="w-full h-64 object-contain bg-gray-50"
              />
              <div className="p-4">
                <p className="text-gray-600">Welcome to Medhasya Academy.</p>
              </div>
            </div>
            
            {/* Decor */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
              <Image
                src="/Gallery/Decor.jpg.jpeg"
                alt="Academy Decor"
                width={600}
                height={400}
                className="w-full h-64 object-contain bg-gray-50"
              />
              <div className="p-4">
                <p className="text-gray-600">Thoughtfully designed spaces.</p>
              </div>
            </div>
            
            {/* Teaching Board */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
              <Image
                src="/Gallery/board2.jpeg"
                alt="Teaching Board"
                width={600}
                height={400}
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-4">
                <p className="text-gray-600">Interactive learning sessions.</p>
              </div>
            </div>
            
            {/* Motivation Slogan */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
              <Image
                src="/Gallery/movitation slogan.jpeg"
                alt="Motivation Slogan"
                width={600}
                height={400}
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-4">
                <p className="text-gray-600">Inspiring words for success.</p>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </main>
  );
}
