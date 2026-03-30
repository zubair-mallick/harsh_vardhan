'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Footer() {
  const [clockText, setClockText] = useState('Loading...');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function updateClock() {
      const options = { timeZone: 'Asia/Kolkata', weekday: 'long', hour: 'numeric', minute: 'numeric', hour12: true };
      const formatter = new Intl.DateTimeFormat('en-US', options);
      const parts = formatter.formatToParts(new Date());

      let day = '', hour = '', minute = '', dayPeriod = '';
      parts.forEach(part => {
        if (part.type === 'weekday') day = part.value;
        if (part.type === 'hour') hour = part.value;
        if (part.type === 'minute') minute = part.value;
        if (part.type === 'dayPeriod') dayPeriod = part.value;
      });

      setClockText(`${day}, ${hour}:${minute} ${dayPeriod} (IST)`);

      // Check Office Hours (IST)
      const now = new Date(new Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata"}));
      const currentDay = now.getDay();
      const currentHour = now.getHours();

      let open = false;
      if (currentDay >= 1 && currentDay <= 6) {
        if (currentHour >= 10 && currentHour < 20) open = true;
      }
      setIsOpen(open);
    }

    updateClock();
    const interval = setInterval(updateClock, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-brand-dark text-gray-400 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Get in Touch */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-6">Get In Touch</h3>
            <p className="flex items-start mb-3">
              <svg className="w-4 h-4 mr-3 mt-1 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 384 512">
                <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67a24 24 0 01-35.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"/>
              </svg>
              <span>#71/72, M.M. Complex, 2nd cross, Chandravadana Layout, Kalkere Main road, Ramamurthy Nagar, Bengaluru</span>
            </p>
            <p className="flex items-start mb-3">
              <svg className="w-4 h-4 mr-3 mt-1 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512">
                <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.2-46.1 11.7l-34.4 42.7c-52.1-26.2-92.5-66.6-118.7-118.7l42.7-34.4c13.9-11 18.5-29.8 11.7-46.1l-40-96z"/>
              </svg>
              <span>Landmark: Above Amma's clinic (2nd floor)</span>
            </p>
            <p className="flex items-start mb-3">
              <svg className="w-4 h-4 mr-3 mt-1 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512">
                <path d="M48 64C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V112c0 26.5-21.5-48-48-48H48zM0 176v-0.7C14.2 190.9 31.3 208 48 208h416c16.7 0 33.8-17.1 48-32.7V176c-11.3 12.8-25 24-40 32H88c-15 0-28.7-11.2-40-32zM48 368h416V240c-11.3 12.8-25 24-40 32H88c-15 0-28.7-11.2-40-32v128z"/>
              </svg>
              <span>contact@medhasyaacademy.com</span>
            </p>
            <p className="flex items-start mb-3">
              <svg className="w-4 h-4 mr-3 mt-1 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512">
                <path d="M48 64C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V112c0 26.5-21.5-48-48-48H48zM0 176v-0.7C14.2 190.9 31.3 208 48 208h416c16.7 0 33.8-17.1 48-32.7V176c-11.3 12.8-25 24-40 32H88c-15 0-28.7-11.2-40-32zM48 368h416V240c-11.3 12.8-25 24-40 32H88c-15 0-28.7-11.2-40-32v128z"/>
              </svg>
              <span>medhasyaacademy@gmail.com</span>
            </p>
            <p className="flex items-center mb-3 flex-nowrap">
              <svg className="w-4 h-4 mr-3 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512">
                <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.2-46.1 11.7l-34.4 42.7c-52.1-26.2-92.5-66.6-118.7-118.7l42.7-34.4c13.9-11 18.5-29.8 11.7-46.1l-40-96z"/>
              </svg>
              <span className="whitespace-nowrap"><a href="tel:+919901039916" className="hover:text-white transition-colors">+91 9901039916</a> / <a href="tel:+918660029663" className="hover:text-white transition-colors">+91 8660029663</a></span>
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://www.instagram.com/medhasya/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-300" aria-label="Follow us on Instagram">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.7 2 8.3 2.02 7.1 2.07c-1.2.05-2.02.27-2.73.55a4.9 4.9 0 00-1.74 1.15c-.6.6-1 1.25-1.15 1.74-.28.7-.5 1.53-.55 2.73C2.02 8.3 2 8.7 2 12s.02 3.7.07 4.9c.05 1.2.27 2.02.55 2.73.15.48.37.9.6 1.3a4.9 4.9 0 001.15 1.74c.6.6 1.25 1 1.74 1.15.7.28 1.53.5 2.73.55 1.2.05 1.6.07 4.9.07s3.7-.02 4.9-.07c1.2-.05 2.02-.27 2.73-.55.48-.15.9-.37 1.3-.6a4.9 4.9 0 001.74-1.15c.6-.6 1-1.25 1.15-1.74.28-.7.5-1.53.55-2.73.05-1.2.07-1.6.07-4.9s-.02-3.7-.07-4.9c-.05-1.2-.27-2.02-.55-2.73a4.9 4.9 0 00-1.74-1.15c-.6-.6-1.25-1-1.74-1.15-.7-.28-1.53-.5-2.73-.55C15.7 2.02 15.3 2 12 2zm0 3c3.6 0 3.63 0 4.9.07 1.1.05 1.7.22 2.05.35.45.17.75.37 1.1.7.37.37.58.65.7 1.1.13.35.3.95.35 2.05.07 1.27.07 1.3.07 4.9s0 3.63-.07 4.9c-.05 1.1-.22 1.7-.35 2.05-.17.45-.37.75-.7 1.1-.37.37-.65.58-1.1.7-.35.13-.95.3-2.05.35-1.27.07-1.3.07-4.9.07s-3.63 0-4.9-.07c-1.1-.05-1.7-.22-2.05-.35-.45-.17-.75-.37-1.1-.7-.37.37-.58.65-.7-1.1-.13.35-.3-.95-.35-2.05C3.02 15.63 3 15.3 3 12s0-3.63.07-4.9c.05-1.1.22 1.7.35-2.05.17-.45.37.75.7-1.1.37.37.65.58 1.1-.7.35-.13.95.3-2.05-.35C8.37 5.02 8.7 5 12 5zm0 2.25a4.75 4.75 0 100 9.5 4.75 4.75 0 000-9.5zM12 15a3 3 0 110-6 3 3 0 010 6zm6.5-7.75a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z"/></svg>
              </a>
              <a href="mailto:contact@medhasyaacademy.com,medhasyaacademy@gmail.com" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-blue hover:scale-110 hover:shadow-lg transition-all duration-300" aria-label="Email us">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Our Courses */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-6">Our Courses</h3>
            <nav className="flex flex-col space-y-3">
              <Link href="/courses" className="flex items-center hover:text-white transition-colors">
                <svg className="w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 192 512"><path d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128 128c7.81 7.81 7.81 20.474 0 28.284l-128 128C21.543 411.404 0 402.48 0 384.662z"/></svg>
                <span>Class 8-10 (Foundation)</span>
              </Link>
              <Link href="/courses" className="flex items-center hover:text-white transition-colors">
                <svg className="w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 192 512"><path d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128 128c7.81 7.81 7.81 20.474 0 28.284l-128 128C21.543 411.404 0 402.48 0 384.662z"/></svg>
                <span>Class 11 (Science)</span>
              </Link>
              <Link href="/courses" className="flex items-center hover:text-white transition-colors">
                <svg className="w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 192 512"><path d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128 128c7.81 7.81 7.81 20.474 0 28.284l-128 128C21.543 411.404 0 402.48 0 384.662z"/></svg>
                <span>Class 12 (Science)</span>
              </Link>
              <Link href="/courses" className="flex items-center hover:text-white transition-colors">
                <svg className="w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 192 512"><path d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128 128c7.81 7.81 7.81 20.474 0 28.284l-128 128C21.543 411.404 0 402.48 0 384.662z"/></svg>
                <span>Commerce (11 & 12)</span>
              </Link>
            </nav>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-6">Quick Links</h3>
            <nav className="flex flex-col space-y-3">
              <Link href="/" className="flex items-center hover:text-white transition-colors">
                <svg className="w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 192 512"><path d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128 128c7.81 7.81 7.81 20.474 0 28.284l-128 128C21.543 411.404 0 402.48 0 384.662z"/></svg>
                <span>Home</span>
              </Link>
              <Link href="/about" className="flex items-center hover:text-white transition-colors">
                <svg className="w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 192 512"><path d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128 128c7.81 7.81 7.81 20.474 0 28.284l-128 128C21.543 411.404 0 402.48 0 384.662z"/></svg>
                <span>About Us</span>
              </Link>
              <Link href="/faculty" className="flex items-center hover:text-white transition-colors">
                <svg className="w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 192 512"><path d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128 128c7.81 7.81 7.81 20.474 0 28.284l-128 128C21.543 411.404 0 402.48 0 384.662z"/></svg>
                <span>Our Faculty</span>
              </Link>
              <Link href="/contact" className="flex items-center hover:text-white transition-colors">
                <svg className="w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 192 512"><path d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128 128c7.81 7.81 7.81 20.474 0 28.284l-128 128C21.543 411.404 0 402.48 0 384.662z"/></svg>
                <span>Contact</span>
              </Link>
            </nav>
          </div>

          {/* Column 4: Office Hours */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-6">Office Hours</h3>
            <p className="mb-3">Mon - Sat: 10:00 AM - 08:00 PM</p>
            <p className="mb-3">Sunday: Closed</p>
            <p className="text-sm text-gray-500 mb-5">Tuition: 4:30 PM - 8:30 PM (Mon-Sat)</p>
            <div className="flex items-center space-x-3">
              <div className={`w-3 h-3 rounded-full ${isOpen ? 'bg-green-400 animate-pulse' : 'bg-red-500'}`}></div>
              <span className="text-white">{clockText}</span>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-center gap-4">
            <p>&copy; 2025 Medhasya Academy. All rights reserved.</p>
            <p>Designed with ❤️ in Bengaluru</p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <a
        href="#top"
        onClick={(e) => {
          e.preventDefault();
          if (typeof window !== 'undefined') {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
          }
        }}
        className="fixed bottom-6 right-6 bg-brand-blue text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition-colors z-50"
      >
        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
        </svg>
      </a>
    </footer>
  );
}
