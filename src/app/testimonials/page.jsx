import TestimonialsContent from './TestimonialsContent';

export const metadata = {
  title: 'Student Testimonials - Medhasya Academy',
  description: 'Hear from our students and parents about their experiences at Medhasya Academy. Watch video testimonials and read success stories from students across Bengaluru.',
  keywords: ['testimonials', 'student reviews', 'medhasya academy reviews', 'tuition reviews bengaluru', 'coaching feedback'],
  openGraph: {
    title: 'Student Testimonials - Medhasya Academy',
    description: 'Hear from our students and parents about their transformative learning experiences at Medhasya Academy.',
    url: 'https://medhasya.com/testimonials',
    siteName: 'Medhasya Academy',
    images: [
      {
        url: '/logo.png',
        width: 512,
        height: 512,
        alt: 'Medhasya Academy Logo',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Student Testimonials - Medhasya Academy',
    description: 'Hear from our students and parents about their transformative learning experiences.',
    images: ['/logo.png'],
  },
};

export default function TestimonialsPage() {
  return <TestimonialsContent />;
}
