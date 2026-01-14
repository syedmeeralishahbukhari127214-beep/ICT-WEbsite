import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Script from "next/script"; // 1. Script import kiya

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ict.net.pk'), 
  title: {
    default: "Institute of Corporate and Taxation (ICT) Pakistan",
    template: "%s | ICT Pakistan", 
  },
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
      <head>
        {/* 2. Google Analytics Scripts yahan add ki hain */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BCPP0G4FMS"
          strategy="afterInteractive"
        />
        <Script id="ga-script" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BCPP0G4FMS');
          `}
        </Script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} suppressHydrationWarning>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}