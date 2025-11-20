export const metadata = {
  title: 'Contact Us - Medhasya Academy',
  description: 'Get in touch with us for admissions or inquiries.',
};

export default function ContactPage() {
  return (
    <main>
      <section className="bg-brand-dark text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mt-4">
            Get in touch with us for admissions or inquiries.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-brand-dark mb-6">Get in Touch</h2>
              <div className="space-y-4">
                <p className="flex items-start">
                  <svg className="w-6 h-6 mr-3 mt-1 flex-shrink-0 text-brand-blue" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 384 512">
                    <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67a24 24 0 01-35.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"/>
                  </svg>
                  <span className="text-gray-700">[Your Address], Bengaluru, KA</span>
                </p>
                <p className="flex items-start">
                  <svg className="w-6 h-6 mr-3 mt-1 flex-shrink-0 text-brand-blue" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512">
                    <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.2-46.1 11.7l-34.4 42.7c-52.1-26.2-92.5-66.6-118.7-118.7l42.7-34.4c13.9-11 18.5-29.8 11.7-46.1l-40-96z"/>
                  </svg>
                  <span className="text-gray-700">+91 98765 43210</span>
                </p>
                <p className="flex items-start">
                  <svg className="w-6 h-6 mr-3 mt-1 flex-shrink-0 text-brand-blue" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512">
                    <path d="M48 64C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V112c0 26.5-21.5-48-48-48H48zM0 176v-0.7C14.2 190.9 31.3 208 48 208h416c16.7 0 33.8-17.1 48-32.7V176c-11.3 12.8-25 24-40 32H88c-15 0-28.7-11.2-40-32zM48 368h416V240c-11.3 12.8-25 24-40 32H88c-15 0-28.7-11.2-40-32v128z"/>
                  </svg>
                  <span className="text-gray-700">info@medhasya.com</span>
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-brand-dark mb-6">Inquiry Form</h2>
              <p className="text-gray-600">(Contact form will be added here)</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
