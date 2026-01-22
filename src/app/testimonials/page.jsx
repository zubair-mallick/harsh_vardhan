import TestimonialsContent from './TestimonialsContent';

export const metadata = {
  title: 'Student Testimonials - Success Stories & Reviews',
  description: 'Hear from our students about their experiences at Medhasya Academy. Watch video testimonials and read success stories from classes 8-12 students across Bengaluru. Real feedback on personalized mentoring, board exam preparation, and academic improvement.',
  keywords: ['testimonials', 'student reviews', 'medhasya academy reviews', 'tuition reviews bengaluru', 'coaching feedback', 'student success stories', 'parent reviews', 'video testimonials', 'cbse results', 'board exam success', 'ramamurthy nagar reviews'],
  alternates: {
    canonical: 'https://medhasya.com/testimonials',
  },
  openGraph: {
    title: 'Student Testimonials - Medhasya Academy',
    description: 'Hear from our students about their success stories, learning experiences, and academic achievements at Medhasya Academy.',
    url: 'https://medhasya.com/testimonials',
    siteName: 'Medhasya Academy',
    images: [
      {
        url: 'https://medhasya.com/logo.png',
        width: 512,
        height: 512,
        alt: 'Medhasya Academy Logo',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student Testimonials - Medhasya Academy',
    description: 'Success stories and experiences from our students.',
    images: ['https://medhasya.com/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TestimonialsPage() {
  return <TestimonialsContent />;
}
