import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shree Durvankur Greens - Plant Nursery",
  description: "Your trusted partner for healthy plants, gardening services, and quality equipment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{scrollBehavior: 'smooth'}}
      >
        <Navbar />
        <div id="top">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
