import { Metadata } from 'next';

// PDF Document ke mutabiq Metadata 
export const metadata: Metadata = {
  title: "Contact ICT-Get in Touch with Pakistan's Top Institute",
  description: "Contact ICT for details about taxation, accounting, and finance courses. Reach our campuses in Islamabad, Lahore & Karachi or connect online today",
alternates: {
    canonical: '/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}