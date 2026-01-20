import HeroSection from '@/components/home/HeroSection';
import AboutBrief from '@/components/home/AboutBrief';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import FounderNote from '@/components/home/FounderNote';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import VideoTestimonials from '@/components/home/VideoTestimonials';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutBrief />
      <WhyChooseUs />
      <FounderNote />
      <TestimonialsSection />
      <VideoTestimonials />
    </main>
  );
}
