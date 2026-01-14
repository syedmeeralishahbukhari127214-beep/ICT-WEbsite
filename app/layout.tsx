import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* =========================
   SEO METADATA
========================= */
export const metadata: Metadata = {
  metadataBase: new URL("https://ict.net.pk"),
  title: {
    default: "Institute of Corporate and Taxation (ICT) Pakistan",
    template: "%s | ICT Pakistan",
  },
  description:
    "Institute of Corporate & Taxation Pakistan offers expert-led income tax, sales tax & IRIS courses online or at campuses in Islamabad, Lahore & Karachi.",
  icons: {
    icon: "/download.png",
    apple: "/download.png",
  },
  verification: {
    google: "SipOYwLIHMgcNv8RuBMEOB31g3Kth1xqbKCCSVOG6WY",
  },
  alternates: {
    canonical: "/",
  },
};

/* =========================
   VIEWPORT (Mobile SAFE)
========================= */
export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
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

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <Header />

        {/* =========================
            DESKTOP FIXED WIDTH
            MOBILE UNTOUCHED
        ========================= */}
        <main className="min-h-screen flex justify-center bg-gray-100">
          <div className="w-full max-w-[1440px] bg-white">
            {children}
          </div>
        </main>

        <Footer />
      </body>
    </html>
  );
}
