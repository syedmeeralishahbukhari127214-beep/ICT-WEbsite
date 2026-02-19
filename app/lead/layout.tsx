import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Apply Now | ICT Professional Training",
  description: "Start your professional career journey. Apply now for ICT industry-focused training programmes with 100% placement support.",
  robots: {
    index: false,
    follow: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function LeadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
