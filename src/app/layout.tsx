import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Medhasya Academy - Home",
  description: "Meaningful, interactive, and growth-driven learning for classes 8-12.",
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
