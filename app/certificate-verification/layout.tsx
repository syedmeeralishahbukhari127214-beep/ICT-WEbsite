import { Metadata } from 'next';

// PDF Document ke mutabiq Metadata 
export const metadata: Metadata = {
  title: "Certificate Verification – ICT Official Student Records",
  description: "Use ICT’s Certificate Verification system to check the authenticity of student certificates online. Ensure valid records for taxation and finance courses.",
alternates: {
    canonical: '/certificate_verification',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}