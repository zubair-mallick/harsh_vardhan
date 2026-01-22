import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL('https://medhasya.com'),
  title: {
    default: "Medhasya Academy - Where Education Inspires, Skills Grow, and Success Begins",
    template: "%s | Medhasya Academy"
  },
  description: "Expert coaching for classes 8-12 in CBSE, ICSE & State boards. Personalized one-to-one mentoring in Mathematics, Science & Commerce. Located in Ramamurthy Nagar, Bengaluru. Tuition hours: 4:30 PM - 8:30 PM (Mon-Sat).",
  keywords: [
    "tuition centre",
    "coaching classes",
    "Bengaluru tuition",
    "Ramamurthy Nagar coaching",
    "CBSE tuition",
    "ICSE tuition",
    "State board coaching",
    "Class 8 tuition",
    "Class 9 tuition",
    "Class 10 tuition",
    "Class 11 tuition",
    "Class 12 tuition",
    "Mathematics coaching",
    "Science coaching",
    "Commerce coaching",
    "JEE foundation",
    "NEET foundation",
    "personalized mentoring",
    "Medhasya Academy"
  ],
  authors: [{ name: "Medhasya Academy" }],
  creator: "Medhasya Academy",
  publisher: "Medhasya Academy",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://medhasya.com",
    siteName: "Medhasya Academy",
    title: "Medhasya Academy - Where Education Inspires, Skills Grow, and Success Begins",
    description: "Expert coaching for classes 8-12 in CBSE, ICSE & State boards. Personalized one-to-one mentoring in Mathematics, Science & Commerce. Located in Ramamurthy Nagar, Bengaluru.",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Medhasya Academy Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Medhasya Academy - Expert Coaching for Classes 8-12",
    description: "Personalized one-to-one mentoring in Mathematics, Science & Commerce. Located in Ramamurthy Nagar, Bengaluru.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here when you have them
    // google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <meta name="theme-color" content="#2563EB" />
      </head>
      <body className="bg-white text-gray-900">
        <a id="top"></a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
