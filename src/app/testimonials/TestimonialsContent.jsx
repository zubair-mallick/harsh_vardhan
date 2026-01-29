'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

const videoTestimonials = [
  {
    src: '/testimonial/testimonial_basindra.mp4',
    name: 'Vasundhara',
    description: 'Success Story',
  },
  {
    src: '/testimonial/tesimonial_2.mp4',
    name: 'Arhan',
    description: 'Learning Experience',
  },
  {
    src: '/testimonial/tesimonial3.mp4',
    name: 'Mokshita',
    description: 'Supportiveness',
  },
  {
    src: '/testimonial/testimonial4.mp4',
    name: 'Khushi',
    description: 'Growth & Achievement',
  },
  {
    src: '/testimonial/testimonail 5.mp4',
    name: 'Aashika',
    description: 'True Understanding',
  },
];

const textTestimonials = [
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
  },
  {
    text: "My daughter's performance improved significantly after joining Medhasya. The personalized attention she receives is remarkable.",
    name: "Mrs. Lakshmi Menon",
    class: "Parent",
    avatar: "https://youthexpress.com.au/wp-content/uploads/2023/08/male-placeholder.png"
  },
];

function VideoCard({ video, activeVideoId, setActiveVideoId, videoId }) {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);
  const isPlaying = activeVideoId === videoId;

  useEffect(() => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.muted = false;
      setIsMuted(false);
      videoRef.current.play().catch(() => {});
    } else {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [isPlaying]);

  const handleClick = () => {
    if (isPlaying) {
      setActiveVideoId(null);
    } else {
      setActiveVideoId(videoId);
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      const newMuted = !videoRef.current.muted;
      videoRef.current.muted = newMuted;
      setIsMuted(newMuted);
    }
  };

  return (
    <div
      className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
      onClick={handleClick}
    >
      <div className="relative aspect-[9/16] bg-gray-100">
        <video
          ref={videoRef}
          src={video.src}
          className="w-full h-full object-cover"
          playsInline
          loop
          preload="metadata"
        />
        
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <div className="w-14 h-14 rounded-full bg-brand-blue flex items-center justify-center">
              <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        )}

        {isPlaying && (
          <button
            onClick={toggleMute}
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 flex items-center justify-center"
          >
            {isMuted ? (
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
              </svg>
            ) : (
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              </svg>
            )}
          </button>
        )}
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-gray-900">{video.name}</h3>
        <p className="text-sm text-gray-500">{video.description}</p>
      </div>
    </div>
  );
}

function TextTestimonialCard({ testimonial }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <svg className="w-10 h-10 text-brand-blue mb-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
        <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V216z"/>
      </svg>
      <p className="text-gray-700 italic mb-6 leading-relaxed">"{testimonial.text}"</p>
      <div className="flex items-center">
        <Image
          src={testimonial.avatar}
          alt={testimonial.name}
          width={48}
          height={48}
          className="rounded-full object-cover mr-3"
        />
        <div>
          <p className="font-semibold text-gray-900">{testimonial.name}</p>
          <p className="text-sm text-brand-blue">{testimonial.class}</p>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsContent() {
  const [activeVideoId, setActiveVideoId] = useState(null);

  return (
    <main>
      {/* Page Header */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-dark">Student Testimonials</h1>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Hear from our students and parents about their experiences at Medhasya Academy
          </p>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Video Testimonials</h2>
            <p className="text-gray-600">Click on any video to play with sound</p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {videoTestimonials.map((video, index) => (
                <VideoCard 
                  key={index} 
                  video={video} 
                  videoId={index}
                  activeVideoId={activeVideoId}
                  setActiveVideoId={setActiveVideoId}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Student Success Gallery */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Our Students' Achievements</h2>
            <p className="text-gray-600">Celebrating success and proud moments</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <Image src="/wiing/first.jpeg" alt="Student Achievement" fill className="object-cover" />
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <Image src="/wiing/second.jpeg" alt="Student Achievement" fill className="object-cover" />
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <Image src="/wiing/third.jpeg" alt="Student Achievement" fill className="object-cover" />
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <Image src="/wiing/fourth.jpeg" alt="Student Achievement" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container mx-auto px-6">
        <div className="h-px bg-gray-200"></div>
      </div>

      {/* Text Testimonials Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Students Say</h2>
            <p className="text-gray-600">Written testimonials from students and parents</p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {textTestimonials.map((testimonial, index) => (
                <TextTestimonialCard key={index} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-brand-blue">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Join the Medhasya family and experience the difference personalized mentoring can make.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-brand-blue px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </main>
  );
}
