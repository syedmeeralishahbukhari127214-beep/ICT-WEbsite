import { Metadata } from 'next';

// PDF Document ke mutabiq Metadata 
export const metadata: Metadata = {
  title: "16 Best Courses Offered at ICT to Boost Your Future",
  description: "Discover a wide range of courses offered at ICT. Enrol today to build skills, gain knowledge, and advance your career with expert-led programs.",
alternates: {
    canonical: '/courses',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}