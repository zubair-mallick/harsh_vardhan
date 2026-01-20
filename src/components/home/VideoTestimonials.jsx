'use client';

import { useRef, useState, useEffect } from 'react';
import ScrollReveal from '../ScrollReveal';

const videoTestimonials = [
  {
    src: '/testimonial/testimonial_basindra.mp4',
    name: 'Basindra',
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
    name: 'Vashika',
    description: 'True Understanding',
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
        
        {/* Simple play button */}
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <div className="w-14 h-14 rounded-full bg-brand-blue flex items-center justify-center">
              <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        )}

        {/* Mute button when playing */}
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

export default function VideoTestimonials() {
  const [activeVideoId, setActiveVideoId] = useState(null);

  return (
    <ScrollReveal>
      <section className="py-20 md:py-28 bg-gray-50">
        {/* Top Divider */}
        <div className="container mx-auto px-6 mb-12">
          <div className="h-px bg-gray-200"></div>
        </div>

        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-brand-blue font-semibold uppercase tracking-wider mb-3">
              Video Testimonials
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Hear From Our Students
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Click on any video to play with sound
            </p>
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
    </ScrollReveal>
  );
}
