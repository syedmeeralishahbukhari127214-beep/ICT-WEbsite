import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LayoutShell from "@/app/components/LayoutShell";
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
    icon: [
      { url: "/favicon.png" }, 
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/favicon.png",
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

        {/* Meta Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '905421575822224');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {/* Meta Pixel noscript fallback */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=905421575822224&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
