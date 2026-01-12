import { Metadata } from 'next';

// PDF Document ke mutabiq Metadata 
export const metadata: Metadata = {
  title: "Feedback – ICT | Inspiring Student Video Testimonials",
  description: "Discover inspiring student feedback at ICT through powerful video testimonials, reflecting trust, success, and the positive impact on every learner’s journey.",
alternates: {
    canonical: '/feedback',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}