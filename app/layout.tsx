import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Updated Metadata with Correct Icons Position
export const metadata: Metadata = {
  metadataBase: new URL('https://ict.net.pk'), 
  title: {
    default: "Institute of Corporate and Taxation (ICT) Pakistan",
    template: "%s | ICT Pakistan", 
  },
  // Icons ko title ke bahar yahan hona chahiye
  icons: {
    icon: "/download.png", 
    apple: "/download.png", 
  },
  description: "Institute of Corporate & Taxation Pakistan offers expert-led income tax, sales tax & IRIS courses online or at campuses in Islamabad, Lahore & Karachi.",
  
  verification: {
    google: "SipOYwLIHMgcNv8RuBMEOB31g3Kth1xqbKCCSVOG6WY",
  },
  
  alternates: {
    canonical: '/', 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} suppressHydrationWarning>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}