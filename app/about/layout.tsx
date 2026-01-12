import { Metadata } from 'next';

// PDF Document (Source 1) ke mutabiq Metadata
export const metadata = {
  title: "About us--institute of Corporate and Taxation",
  description: "Leam about the institute of Corporate and Taxation (ICT) Pakistan's leading platform for professional training in tax corporate law, finance, and compliance",
  alternates: {
    canonical: '/about',
  },
};
export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}