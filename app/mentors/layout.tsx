import { Metadata } from 'next';

// PDF Document ke mutabiq Metadata 
export const metadata: Metadata = {
  title: "Best ICT Mentors in Pakistan | Expert Faculty for Students",
  description: "Discover top ICT mentors in Pakistan. Expert CA & ACCA faculty guiding students with professional excellence at the Institute of Corporate & Taxation.",
alternates: {
    canonical: '/mentors',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}