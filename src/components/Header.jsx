'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 sticky top-0 z-50 shadow-sm backdrop-blur-md">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Mobile Menu Button & Logo */}
        <div className="flex items-center">
          <button
            id="mobile-menu-button"
            className="md:hidden text-gray-900 focus:outline-none mr-4"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <Link href="/" className="text-2xl font-bold text-brand-dark">
            Medhasya Academy
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-gray-600 hover:text-brand-blue transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-brand-blue transition-colors">
            About Us
          </Link>
          <Link href="/courses" className="text-gray-600 hover:text-brand-blue transition-colors">
            Courses
          </Link>
          <Link href="/faculty" className="text-gray-600 hover:text-brand-blue transition-colors">
            Our Faculty
          </Link>
          <Link href="/gallery" className="text-gray-600 hover:text-brand-blue transition-colors">
            Gallery
          </Link>
          <Link
            href="/contact"
            className="bg-brand-blue text-white px-5 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Enquire Now
          </Link>
        </div>

        {/* Mobile "Enquire Now" Button */}
        <div className="md:hidden flex-shrink-0">
          <Link
            href="/contact"
            className="bg-brand-blue text-white px-3 py-2 rounded-lg font-medium text-xs whitespace-nowrap"
          >
            Enquire Now
          </Link>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`md:hidden ${mobileMenuOpen ? '' : 'hidden'} bg-white shadow-lg`}>
        <Link href="/" className="block px-6 py-3 text-gray-600 hover:bg-gray-50">
          Home
        </Link>
        <Link href="/about" className="block px-6 py-3 text-gray-600 hover:bg-gray-50">
          About Us
        </Link>
        <Link href="/courses" className="block px-6 py-3 text-gray-600 hover:bg-gray-50">
          Courses
        </Link>
        <Link href="/faculty" className="block px-6 py-3 text-gray-600 hover:bg-gray-50">
          Our Faculty
        </Link>
        <Link href="/gallery" className="block px-6 py-3 text-gray-600 hover:bg-gray-50">
          Gallery
        </Link>
      </div>
    </header>
  );
}
