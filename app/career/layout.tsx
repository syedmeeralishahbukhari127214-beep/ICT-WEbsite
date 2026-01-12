import { Metadata } from 'next';

// PDF Document ke mutabiq Metadata 
export const metadata: Metadata = {
  title: "Careers at ICT – Join Pakistan’s Leading Taxation Institute",
  description: "Discover careers opportunities at ICT. Work with experts in taxation, accounting. Build your future with Pakistan’s top institute for professional growth.",
alternates: {
    canonical: '/career',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}