import { client } from "@/sanity/lib/client";
import { singleBlogQuery, blogsQuery, coursesQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import type { Metadata } from "next";
import { portableTextComponents } from "../../components/PortableTextComponents";
import { FaWhatsapp, FaFacebookF, FaLinkedinIn, FaTwitter, FaHeadset } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import Link from "next/link";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const SITE_URL = "https://ict.net.pk"; 

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = await client.fetch(singleBlogQuery, { slug });
  if (!blog) return { title: "Blog Not Found", robots: "noindex" };

  const seo = blog.seo || {};
  return {
    title: seo.metaTitle || blog.title,
    description: seo.metaDescription || blog.excerpt,
    openGraph: {
      images: seo.ogImage
        ? [{ url: urlFor(seo.ogImage).width(1200).height(630).url() }]
        : [],
    },
  };
}

export default async function BlogDetail({ params }: PageProps) {
  const { slug } = await params;

  const [blog, latestPosts, courses] = await Promise.all([
    client.fetch(singleBlogQuery, { slug }),
    client.fetch(blogsQuery),
    client.fetch(coursesQuery),
  ]);

  if (!blog) return <div className="p-10 text-center">Blog not found</div>;

  const formatDate = (dateString: string) => {
    const date = dateString ? new Date(dateString) : new Date();
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  const encodedUrl = encodeURIComponent(`${SITE_URL}/blogs/${slug}`);
  const encodedTitle = encodeURIComponent(blog.title);

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    whatsapp: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
  };

  /* 🔹 NEW: Split blog body for middle image */
  const bodyBlocks = blog.body || [];
  const middleIndex = Math.floor(bodyBlocks.length / 2);
  const firstHalf = bodyBlocks.slice(0, middleIndex);
  const secondHalf = bodyBlocks.slice(middleIndex);

  return (
    <div className="max-w-7xl mx-auto py-10 px-6 font-sans">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

        {/* LEFT SIDE: Content Area */}
        <main className="lg:col-span-7">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 leading-tight">
            {blog.title}
          </h1>

          <div className="flex items-center gap-4 text-sm font-semibold mb-6 text-[#22c55e]">
            <span>{formatDate(blog.publishedAt || blog._createdAt)}</span>
            <span>No Comments</span>
          </div>

          {blog.mainImage && (
            <div className="mb-8">
              <img
                src={urlFor(blog.mainImage).width(1200).url()}
                alt={blog.title}
                className="w-full h-auto rounded-xl shadow-sm"
              />
            </div>
          )}

          {/* BLOG CONTENT WITH MIDDLE IMAGE */}
          <div className="prose prose-lg max-w-none text-gray-700 mb-12">

            {/* First Half Text */}
            <PortableText
              value={firstHalf}
              components={portableTextComponents}
            />

            {/* MIDDLE IMAGE */}
            {blog.mainImage && (
              <div className="my-10">
                <img
                  src={urlFor(blog.mainImage).width(900).url()}
                  alt={blog.title}
                  className="w-full h-auto rounded-xl shadow-md"
                />
              </div>
            )}

            {/* Second Half Text */}
            <PortableText
              value={secondHalf}
              components={portableTextComponents}
            />

          </div>
        </main>

        {/* MIDDLE SECTION: Sticky Share Bar */}
        <div className="lg:col-span-1 h-full">
          <div className="sticky top-24 flex flex-col items-center gap-4 py-6">
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 [writing-mode:vertical-lr] mb-2 hidden lg:block">
              Share Post
            </span>
            <a href={shareLinks.facebook} target="_blank" rel="noopener noreferrer" className="p-3 bg-blue-600 text-white rounded-full hover:scale-110 transition-transform shadow-md"><FaFacebookF /></a>
            <a href={shareLinks.twitter} target="_blank" rel="noopener noreferrer" className="p-3 bg-blue-400 text-white rounded-full hover:scale-110 transition-transform shadow-md"><FaTwitter /></a>
            <a href={shareLinks.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-blue-700 text-white rounded-full hover:scale-110 transition-transform shadow-md"><FaLinkedinIn /></a>
            <a href={shareLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="p-3 bg-[#25D366] text-white rounded-full hover:scale-110 transition-transform shadow-md"><FaWhatsapp /></a>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <aside className="lg:col-span-4 space-y-12">
          <form action="/blogs" method="GET" className="flex items-stretch shadow-sm">
            <input 
              type="text" 
              name="search"
              placeholder="Search..." 
              className="w-full bg-gray-100 border-none px-4 py-3 rounded-l-md outline-none focus:ring-1 focus:ring-green-500"
            />
            <button type="submit" className="bg-[#22c55e] text-white px-5 rounded-r-md hover:bg-black transition-colors">
              <IoSearch size={20} />
            </button>
          </form>

          <div className="space-y-12">

            {/* LATEST POSTS */}
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-6 border-b-2 border-gray-100 pb-2">Latest Posts</h3>
              <div className="flex flex-col gap-5">
                {latestPosts?.slice(0, 10).map((post: any) => (
                  <Link key={post._id} href={`/blogs/${post.slug}`} className="flex gap-4 group items-center">
                    <div className="w-16 h-16 shrink-0 overflow-hidden rounded-lg bg-gray-100">
                      <img 
                        src={urlFor(post.mainImage).width(100).height(100).url()} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h4 className="text-sm font-bold text-gray-900 group-hover:text-[#22c55e] transition-colors line-clamp-2 leading-snug">
                        {post.title}
                      </h4>
                      <span className="text-[10px] text-gray-400 font-medium italic">
                        Recently
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* FEATURED COURSES */}
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-6 border-b-2 border-gray-100 pb-2">Featured Courses</h3>
              <div className="grid grid-cols-1 gap-6">
                {courses?.slice(0, 5).map((course: any) => (
                  <div key={course._id} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 group">
                    <img 
                      src={urlFor(course.thumbnail).url()} 
                      alt={course.title} 
                      className="w-full h-32 object-cover group-hover:opacity-90 transition-opacity" 
                    />
                    <div className="p-4">
                      <h4 className="font-bold text-sm text-gray-900 mb-3 line-clamp-1 group-hover:text-[#22c55e]">
                        {course.title}
                      </h4>
                      <Link 
                        href={`/courses/${course.slug.current}`}
                        className="block text-center bg-[#3D4098] text-white text-xs font-bold py-2 rounded-lg hover:bg-[#22c55e] transition-all"
                      >
                        Explore Course
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Guidance Card */}
            <div className="bg-[#f0fdf4] border border-[#22c55e]/30 rounded-2xl p-6 text-center space-y-4">
              <div className="bg-[#22c55e] w-12 h-12 rounded-full flex items-center justify-center mx-auto text-white shadow-lg">
                <FaHeadset size={24} />
              </div>
              <h4 className="font-bold text-gray-900">Need Guidance?</h4>
              <p className="text-xs text-gray-500 px-4">Our advisors are ready to help you choose the right path.</p>
              <a href="https://wa.me/923377774856" className="inline-block w-full py-2 bg-white border-2 border-[#22c55e] text-[#22c55e] font-bold rounded-lg hover:bg-[#22c55e] hover:text-white transition-all">
                Get Free Consultation
              </a>
            </div>

          </div>
        </aside>
      </div>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/923377774856"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all flex items-center justify-center w-14 h-14"
      >
        <FaWhatsapp size={32} />
      </a>
    </div>
  );
}
