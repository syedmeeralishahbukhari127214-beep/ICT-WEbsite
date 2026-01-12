import { Metadata } from "next"; // Metadata type import karein
import { client } from "@/sanity/lib/client";
import { singleCourseQuery } from "@/sanity/lib/queries";
import CourseDetailUI from "./CourseDetailUI";

type Props = {
  params: { slug: string };
};

// 1. SEO aur Canonical handling ke liye Metadata function
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  
  // Sanity se course ka SEO data fetch karein
  const course = await client.fetch(singleCourseQuery, { slug });

  if (!course) {
    return { title: "Course Not Found" };
  }

  const baseUrl = "http://localhost:3000";

  return {
    // Sanity mein enter kiya gaya Meta Title, warna default title
    title: course.seo?.metaTitle || course.title, 
    
    // Sanity mein enter kiya gaya Meta Description
    description: course.seo?.metaDescription || "Join ICT Pakistan for professional taxation and corporate courses.",
    
    alternates: {
      // Screenshot wala error yahan solve hoga: dynamic slug ke sath canonical link
      canonical: course.seo?.canonicalUrl || `${baseUrl}/courses/${slug}`,
    },
    openGraph: {
      title: course.seo?.metaTitle || course.title,
      description: course.seo?.metaDescription,
      images: course.seo?.ogImage ? [course.seo.ogImage] : [],
    },
  };
}

// 2. Main Page Component
export default async function CourseDetailPage({ params }: Props) {
  const { slug } = await params;

  const course = await client.fetch(singleCourseQuery, { slug });

  if (!course) return <div className="py-20 text-center text-2xl">Course not found</div>;

  return <CourseDetailUI course={course} />;
}