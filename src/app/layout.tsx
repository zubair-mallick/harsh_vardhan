import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Medhasya Academy - Where Education Inspires, Skills Grow, and Success Begins",
  description: "Expert coaching for classes 8-12 in CBSE, ICSE & State boards. Personalized one-to-one mentoring in Mathematics, Science & Commerce. Located in Ramamurthy Nagar, Bengaluru. Tuition hours: 4:30 PM - 8:30 PM (Mon-Sat).",
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
