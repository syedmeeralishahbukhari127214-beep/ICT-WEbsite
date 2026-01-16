import { client } from "@/sanity/lib/client";
import { singleBlogQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import type { Metadata } from "next";
import { portableTextComponents } from "../../components/PortableTextComponents";
import { FaWhatsapp } from "react-icons/fa6";

export async function generateMetadata(
  { params }: { params: { slug: string } | Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const blog = await client.fetch(singleBlogQuery, { slug });

  if (!blog) {
    return {
      title: "Blog Not Found",
      robots: "noindex",
    };
  }

  const seo = blog.seo || {};

  return {
    
    title: seo.metaTitle || blog.title,
    description: seo.metaDescription || blog.excerpt,
    keywords: seo.keywords?.join(", "),
    robots: seo.noIndex ? "noindex, nofollow" : "index, follow",
    openGraph: {
      title: seo.metaTitle || blog.title,
      description: seo.metaDescription || blog.excerpt,
      images: seo.ogImage
        ? [
            {
              url: urlFor(seo.ogImage)
                .width(1200)
                .height(630)
                .url(),
            },
          ]
        : [],
    },
  };
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function BlogDetail({ params }: PageProps) {
  const { slug } = await params;

  const blog = await client.fetch(singleBlogQuery, { slug });

  if (!blog) {
    return <div className="p-10 text-center">Blog not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto py-20 px-6">
      {blog.mainImage ? (
        <img
          src={urlFor(blog.mainImage).width(1200).url()}
          alt={blog.title}
          className="w-[800px] h-[450px] !max-h-none object-contain rounded-lg mb-6 bg-gray-100"
        />
      ) : (
        <img
          src="/placeholder.jpg"
          alt={blog.title}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
      )}

      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>

      <p className="text-gray-500 mb-6">
        By {blog.author?.name}
      </p>

      <div className="prose max-w-none">
        <PortableText
          value={blog.body}
          components={portableTextComponents}
        />
      </div>
      {/* Floating WhatsApp Button */}
<a
  href="https://wa.me/923377774856?text=Hello%20ICT%20Team%2C%20I%20am%20interested%20in%20your%20courses%20and%20seek%20your%20guidance."
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-8 right-8 z-[100] flex items-center justify-center group"
  aria-label="Chat on WhatsApp"
>
  {/* The Radar Ripples (Animations added below) */}
  <span className="absolute w-full h-full bg-[#25D366] rounded-full animate-ping opacity-75"></span>
  <span className="absolute w-full h-full bg-[#25D366] rounded-full animate-pulse-ring"></span>

  {/* Main Button Body */}
  <div className="relative bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 flex items-center gap-0 group-hover:gap-3 overflow-hidden">
    
    {/* Tooltip text: Now slides and fades */}
    <span className="max-w-0 opacity-0 group-hover:max-w-xs group-hover:opacity-100 transition-all duration-500 ease-in-out whitespace-nowrap font-bold text-lg">
      Chat with us
    </span>

    <FaWhatsapp size={35} className="relative z-10 animate-wiggle" />
  </div>
</a>
    </div>
  );
}
