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
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
              <Image
                src="https://t4.ftcdn.net/jpg/02/96/69/41/360_F_296694103_sXwljVpU8mpCOpREQCNUbHPI0hY73fcl.jpg"
                alt="Modern Classroom"
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <p className="text-gray-600">Our interactive classroom setup.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
              <Image
                src="https://t4.ftcdn.net/jpg/02/96/69/41/360_F_296694103_sXwljVpU8mpCOpREQCNUbHPI0hY73fcl.jpg"
                alt="One-to-one mentoring"
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <p className="text-gray-600">Personalized mentoring session.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
              <Image
                src="https://t4.ftcdn.net/jpg/02/96/69/41/360_F_296694103_sXwljVpU8mpCOpREQCNUbHPI0hY73fcl.jpg"
                alt="Happy Students"
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <p className="text-gray-600">Students engaged in a group discussion.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
              <Image
                src="https://t4.ftcdn.net/jpg/02/96/69/41/360_F_296694103_sXwljVpU8mpCOpREQCNUbHPI0hY73fcl.jpg"
                alt="Student Award"
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <p className="text-gray-600">Celebrating our top performers.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
              <Image
                src="https://t4.ftcdn.net/jpg/02/96/69/41/360_F_296694103_sXwljVpU8mpCOpREQCNUbHPI0hY73fcl.jpg"
                alt="Seminar"
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <p className="text-gray-600">Special guest lecture on exam strategies.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
              <Image
                src="https://t4.ftcdn.net/jpg/02/96/69/41/360_F_296694103_sXwljVpU8mpCOpREQCNUbHPI0hY73fcl.jpg"
                alt="Library"
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <p className="text-gray-600">Our quiet study and resource area.</p>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </main>
  );
}
