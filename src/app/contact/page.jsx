export const metadata = {
  title: 'Contact Us - Admissions & Enquiries',
  description: 'Get in touch with Medhasya Academy for admissions or inquiries. Located at #71/72 M.M. Complex, Ramamurthy Nagar, Bengaluru. Call +91 9901039916 or +91 8660029663. Office hours: Mon-Sat, 10 AM - 8 PM. Tuition: 4:30 PM - 8:30 PM.',
  keywords: ['contact', 'admission enquiry', 'phone number', 'medhasya location', 'ramamurthy nagar tuition', 'bengaluru coaching center', 'address', 'contact details', 'admission form', 'enquire now'],
  alternates: {
    canonical: 'https://medhasya.com/contact',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    title: 'Contact Us - Medhasya Academy',
    description: 'Get in touch for admissions or inquiries. Located at Ramamurthy Nagar, Bengaluru. Call +91 9901039916 or +91 8660029663.',
    url: 'https://medhasya.com/contact',
    siteName: 'Medhasya Academy',
    images: [{ url: 'https://medhasya.com/logo.png', width: 512, height: 512, alt: 'Medhasya Academy Logo' }],
  },
  twitter: {
    card: 'summary',
    title: 'Contact Us - Medhasya Academy',
    description: 'Get in touch with us for admissions or inquiries. Located in Ramamurthy Nagar, Bengaluru.',
    images: ['https://medhasya.com/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactPage() {
  return (
    <main>
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-dark">Get in Touch</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mt-4">
            We're here to answer any questions you may have. Reach out to us and we'll respond as soon as we can.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 pt-0">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div className="bg-white p-8 md:p-10 rounded-lg shadow-xl">
              <h2 className="text-3xl font-bold text-brand-dark mb-6">Send Us a Message</h2>
              <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm transition duration-150 ease-in-out focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm transition duration-150 ease-in-out focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number <span className="text-gray-500">(Optional)</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm transition duration-150 ease-in-out focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm transition duration-150 ease-in-out focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full bg-brand-blue text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Info & Map */}
            <div className="space-y-8">
              <div className="bg-white p-8 md:p-10 rounded-lg shadow-xl">
                <h2 className="text-3xl font-bold text-brand-dark mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 mr-4 mt-1 text-brand-blue flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">Address</h3>
                      <p className="text-gray-600">#71/72, M.M. Complex, 2nd cross, Chandravadana Layout, Kalkere Main road, Ramamurthy Nagar, Bengaluru</p>
                      <p className="text-sm text-gray-500 mt-1">Landmark: Above Amma's clinic (2nd floor)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg className="w-6 h-6 mr-4 mt-1 text-brand-blue flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">Office Hours</h3>
                      <p className="text-gray-600">Mon - Sat: 10:00 AM - 08:00 PM</p>
                      <p className="text-sm text-gray-500 mt-1">Tuition: 4:30 PM - 8:30 PM</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <svg className="w-6 h-6 mr-4 text-brand-blue flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-4.5c0-.915-.492-1.75-1.228-2.19a60.080 60.080 0 00-33.5-3.964m0 0C3.9 8.5 2.25 10.6 2.25 13.5m15-7.5h-1.5a6 6 0 00-6 6v12a6 6 0 006 6h1.5m0-67.5h1.5a6 6 0 016 6v12a6 6 0 01-6 6h-1.5" />
                    </svg>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
                      <p className="text-gray-600 whitespace-nowrap"><a href="tel:+919901039916" className="hover:text-brand-blue transition-colors">+91 9901039916</a> / <a href="tel:+918660029663" className="hover:text-brand-blue transition-colors">+91 8660029663</a></p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg className="w-6 h-6 mr-4 mt-1 text-brand-blue flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                      <p className="text-gray-600">contact@medhasyaacademy.com</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Map */}
              <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.8865390312!2d77.4661259020755!3d12.953997422108705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sus!4v1715012224095!5m2!1sen!2sus"
                  width="100%" 
                  height="400" 
                  style={{border:0}} 
                  allowFullScreen
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
