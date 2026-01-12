import { Metadata } from 'next';

// PDF Document ke mutabiq Metadata 
export const metadata: Metadata = {
  title: "ICT Blog-Latest Insights on Taxation,Finance & Career Growth",
  description: "Read the ICT Blog for expert insights on taxation, accounting, finance, and career growth. Stay updated with the latest courses, tips, and industry trends.",
alternates: {
    canonical: '/blogs',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}