import { client } from "@/sanity/lib/client";
import { singleBlogQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import type { Metadata } from "next";
import { portableTextComponents } from "../../components/PortableTextComponents";

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
    </div>
  );
}
