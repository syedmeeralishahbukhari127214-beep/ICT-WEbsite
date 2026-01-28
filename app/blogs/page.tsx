import { FiTwitter } from "react-icons/fi";
import { LuYoutube } from "react-icons/lu";
import { FaFacebookF,FaLinkedinIn, FaTiktok } from "react-icons/fa6";
import { AiOutlineInstagram } from "react-icons/ai";
import { client } from "@/sanity/lib/client";
import { blogsQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";
// 1. In donon ko install karlein: npm install @portabletext/react
import { PortableText } from "@portabletext/react";

async function getBlogs() {
  return client.fetch(blogsQuery, {}, { next: { revalidate: 3600 } });
}

// 2. Ye components Sanity ko batayenge ke blog ke andar ki images kaise dikhani hain
const ptComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset) return null;
      return (
        
        <div className="my-8 overflow-hidden rounded-xl">
          <img
            src={urlFor(value).auto('format').url()}
            alt="Blog Image"
            className="w-full h-auto"
          />
        </div>
      );
    },
  },
};

export default async function BlogsPage() {
  const blogs = await getBlogs();

  return (
    <div className="w-full bg-white">

    <div>
      {/* Hero Section - No Changes Here */}
      <div className="bg-gradient-to-b from-white to-gray-50 flex items-center justify-center px-2 py-16 pt-2">
        <div className="flex flex-col md:flex-row justify-start px-4 md:px-28 py-10 gap-14">
          <div className="hidden md:block">
            <h1 className="rotate-270 text-lg -ml-1 font-extrabold text-[#15A959]"style={{ letterSpacing: '2px' }}>ICT</h1>
            <p className="w-1 h-28 font-bold bg-black ml-3 mt-3 mb-3"></p>
            <a className="mt-5 flex text-[#3D4098] ml-1 text-lg" href="https://www.facebook.com/Instituteofcorporateandtaxation?rdid=2WCHFvVL9UeBaktA&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1AMUrXLsPZ%2F#"><FaFacebookF /></a>
            <a className="mt-5 flex ml-1.5 text-[#3D4098] text-lg" href="https://x.com/IctIsbd2022"><FiTwitter /></a>
            <a className="mt-5 flex ml-1.5 text-[#3D4098] text-lg" href="https://www.instagram.com/ict_pakistan/?igsh=MXRwNDR6ZnpiN3pqNg%3D%3D#"><AiOutlineInstagram /></a>
            <a className="mt-5 flex ml-1.5 text-[#3D4098] text-lg" href="https://www.youtube.com/@ICTPakistanofficial"><LuYoutube /></a>
                <a className="mt-5 flex ml-1.5 text-[#3D4098] text-lg" href="https://www.linkedin.com/company/ict-isb/"><FaLinkedinIn /></a>  
    <a className="mt-5 flex ml-1.5 text-[#3D4098] text-lg" href="https://www.tiktok.com/@icttaxation?lang=en"><FaTiktok /></a> 
            <p className="w-1 h-54 bg-black ml-3 mt-3 mb-3"></p>
          </div>

          <div>
            <h1 className="text-5xl text-[#15A959] mt-10 md:mt-30 font-extrabold">
              Explore <span className="text-[#3D4098]">Our Articles</span>
            </h1>
            <p className="text-xl md:text-2xl font-sans mt-9">
              Dive into helpful articles, tips, and <br className="hidden md:block" /> updates created to guide you in your journey.
            </p>
            <div className="mt-12 gap-4 flex flex-wrap">
              <a
                className="bg-[#3D4098] py-4 px-10 text-white font-bold text-xl rounded-lg hover:bg-opacity-90 transition"
                href="https://docs.google.com/forms/d/..."
                target="_blank"
                rel="noopener noreferrer"
              >
                Enroll Now
              </a>
              <Link className="py-3 px-12 border-[#3D4098] border-2 text-[#3D4098] font-bold text-xl rounded-lg hover:bg-[#3D4098] hover:text-white transition" href="/about">
                Explore
              </Link>
            </div>
          </div>

          <div className="flex gap-10">
            <img className="h-96 w-72 object-cover rounded-xl" src="/Blog.png" alt="ICT Feature" />
            <div className="hidden lg:block">
              <img className="h-44 w-72 -ml-8 mt-14 object-cover rounded-xl" src="/Blog 1.png" alt="ICT Detail" />
              <img className="h-44 w-72 -ml-8 mt-4 object-cover rounded-xl" src="/Blog 3.png" alt="ICT Detail" />
            </div>
          </div>
        </div>
      </div>

      {/* Blogs Grid */}
      <div className="max-w-7xl mx-auto py-20 px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog: any) => {
          // 💡 Improved Fallback: WP images aksar body ke kisi bhi hisse mein ho sakti hain
          const firstBodyImage = blog.body?.find((block: any) => 
            block._type === "image" || (block.children && block._type === "image")
          );
          const cardImage = blog.mainImage || firstBodyImage;

          return (
            <Link key={blog._id} href={`/blogs/${blog.slug}`}>
              <div className="bg-white shadow-md hover:shadow-2xl transition-all duration-300 rounded-xl overflow-hidden flex flex-col h-full border border-gray-100">
                <div className="relative h-52 w-full">
                  <img
                    src={cardImage ? urlFor(cardImage).width(600).height(400).auto('format').url() : "/placeholder.jpg"}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-xs text-[#3D4098] font-bold uppercase tracking-widest mb-2 block">
                    {blog.category || "Education"}
                  </span>

                  <h3 className="text-lg font-bold text-gray-900 leading-tight mb-3 line-clamp-2">
                    {blog.title}
                  </h3>

                  {/* 3. Card ke excerpt mein se text dikhane ke liye update */}
                  <div className="text-gray-600 text-sm line-clamp-3 mb-6">
                    {blog.excerpt ? blog.excerpt : "Read the latest update from ICT Pakistan experts."}
                  </div>

                  <div className="mt-auto flex items-center justify-between border-t pt-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#15A959] flex items-center justify-center text-white text-xs font-bold">
                        {blog.author?.name?.charAt(0) || "I"}
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-800">{blog.author?.name || "ICT Admin"}</p>
                        <p className="text-[10px] text-gray-400">
                          {blog.publishedAt ? new Date(blog.publishedAt).toLocaleDateString() : "2026"}
                        </p>
                      </div>
                    </div>
                    <span className="text-[#3D4098] text-xs font-bold">Read More →</span>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
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
    </div>
  );
}