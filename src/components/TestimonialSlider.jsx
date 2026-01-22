'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    text: "The one-to-one mentoring at Medhasya helped me finally understand difficult math concepts. My confidence and my grades have improved so much.",
    name: "Aarav Patel",
    class: "Class 10",
    avatar: "https://youthexpress.com.au/wp-content/uploads/2023/08/male-placeholder.png"
  },
  {
    text: "Mrs. Seetha and the faculty are incredibly supportive. They don't just teach the subject; they teach you *how* to learn and be curious.",
    name: "Priya Sharma",
    class: "Class 12",
    avatar: "https://youthexpress.com.au/wp-content/uploads/2023/08/male-placeholder.png"
  },
  {
    text: "The concepts in 11th grade Physics were so tough, but my mentor here broke them down. I finally feel prepared for competitive exams.",
    name: "Rohan Gupta",
    class: "Class 11 (Science)",
    avatar: "https://youthexpress.com.au/wp-content/uploads/2023/08/male-placeholder.png"
  },
  {
    text: "I used to be scared of asking questions in class. Here, my mentors encourage it. It's a completely different and better way of learning.",
    name: "Sameera Rao",
    class: "Class 9",
    avatar: "https://youthexpress.com.au/wp-content/uploads/2023/08/male-placeholder.png"
  },
  {
    text: "The Accountancy classes for my 12th boards were fantastic. I scored 96 marks, all thanks to the detailed way they teach here.",
    name: "Vikram Iyer",
    class: "Class 12 (Commerce)",
    avatar: "https://youthexpress.com.au/wp-content/uploads/2023/08/male-placeholder.png"
  }
];

export default function TestimonialSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="relative">
      {/* Slider Controls */}
      <div className="absolute top-0 right-0 -mt-16 lg:mt-0 z-10 flex">
        <button
          onClick={prevSlide}
          className="bg-brand-red text-white p-4 rounded-l-md hover:bg-red-600 transition-colors"
        >
          <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="bg-brand-blue text-white p-4 rounded-r-md hover:bg-blue-700 transition-colors"
        >
          <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>

      {/* Slider Container */}
      <div className="relative">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`testimonial-slide ${index === currentSlide ? 'active-slide' : ''} bg-white p-8 md:p-12 rounded-lg shadow-xl`}
          >
            <svg className="w-16 h-16 text-brand-blue mb-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
              <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V216z"/>
            </svg>
            <p className="text-xl italic text-gray-700 leading-relaxed mb-8">
              "{testimonial.text}"
            </p>
            <div className="flex items-center">
              <Image
                src={testimonial.avatar}
                alt={testimonial.name}
                width={64}
                height={64}
                className="rounded-full object-cover mr-4"
              />
              <div>
                <p className="font-bold text-gray-900 text-lg">{testimonial.name}</p>
                <p className="text-sm text-brand-blue font-medium">{testimonial.class}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
