import { Metadata } from 'next';

// PDF Document ke mutabiq Metadata 
export const metadata: Metadata = {
  title: "Help Desk | ICT",
  description: "Our help desk is available Monday to Saturday, 9:00 AM to 6:00 PM PKT. For urgent matters, you can reach us via WhatsApp anytime.",
alternates: {
    canonical: '/help_desk',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}