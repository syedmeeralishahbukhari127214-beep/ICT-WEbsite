import { client } from "@/sanity/lib/client";
import { singleMentorQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import type { Metadata } from "next";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";
export async function generateMetadata(
  { params }: { params: { slug: string } | Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const mentor = await client.fetch(singleMentorQuery, { slug });

  if (!mentor) {
    return {
      title: "Mentor Not Found",
      robots: "noindex",
    };
  }

  const seo = mentor.seo || {};

  return {
    title: seo.metaTitle || mentor.name,
    description: seo.metaDescription || mentor.designation,
    keywords: seo.keywords?.join(", "),
    robots: seo.noIndex ? "noindex, nofollow" : "index, follow",
    openGraph: {
      title: seo.metaTitle || mentor.name,
      description: seo.metaDescription || mentor.designation,
      images: seo.ogImage
        ? [
            {
              url: urlFor(seo.ogImage).width(1200).height(630).url(),
            },
          ]
        : [],
    },
  };
}

type PageProps = {
  params: { slug: string } | Promise<{ slug: string }>;
};

export default async function MentorDetail({ params }: PageProps) {
  const { slug } = await params;
  const mentor = await client.fetch(singleMentorQuery, { slug });

  if (!mentor) return <div>Mentor not found</div>;

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* ================= HERO SECTION ================= */}
      <section className="relative container mx-auto px-6 sm:px-10 md:px-20 py-8 sm:py-12 md:py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-9 items-center">
        {/* LEFT */}
        <div className="relative text-center lg:text-left">
          {/* NAME BADGE */}
          <div className="mb-12 lg:mb-40">
            <span className="inline-block px-4 sm:px-6 py-2 text-base sm:text-[20px] font-bold border-2 rounded-lg text-[#3D4098] border-[#3D4098] bg-white">
              {mentor.name}
            </span>
          </div>

          {/* SHORT BIO */}
          <div className="max-w-full sm:max-w-[460px] mb-6 lg:mb-9 lg:mt-[-120]">
            <h1
              className="
                text-lg sm:text-[20px] md:text-[20.74px]
                leading-[132%]
                tracking-[-0.02em]
                text-black
                mb-4
                [text-shadow:
                  0.8px_0_0_#3D4098,
                  -0.8px_0_0_#3D4098,
                  0_0.8px_0_#3D4098,
                  0_-0.8px_0_#3D4098
                ]
              "
            >
              {mentor.designation}
            </h1>
          </div>

          {/* CTA */}
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLSe0xltybDdhgmuadGDd6MJ8YU_wQejb9qRXZ5wYEIJgTIeQag/viewform">
          <button className="bg-[#3D4098] hover:bg-[#2f327a] mt-6 lg:mt-10 text-white px-6 sm:px-7 py-2 rounded-lg shadow-lg transition">
            Enroll Now
          </button></Link>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center">
          <div
            className="absolute -top-10 sm:-top-16 -left-2 sm:-left-[-20]
            w-[280px] sm:w-[420px] md:w-[520px] lg:w-[613px]
            h-[240px] sm:h-[360px] md:h-[460px] lg:h-[525px]
            bg-no-repeat bg-contain"
            style={{ backgroundImage: "url('/bg.png')" }}
          />

          <div className="relative z-10 rounded-2xl overflow-hidden translate-x-4 sm:translate-x-8">
            <img
              src={
                mentor.image
                  ? urlFor(mentor.image).width(500).height(600).url()
                  : "/placeholder.jpg"
              }
              alt={mentor.name}
              className="w-[180px] h-[320px] sm:w-[220px] sm:h-[520px] md:w-[400px] md:h-[420px] lg:w-[424px] lg:h-[458px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* ================= ABOUT & EXPERTISE ================= */}
      <section className="container mx-auto px-6 sm:px-10 md:px-20 py-6 sm:py-8 md:py-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* ABOUT */}
        <div>
          <div className="flex items-center gap-2 mb-4 sm:mb-6">
            <span className="w-4 sm:w-6 h-[2px] sm:h-[3px] bg-green-600"></span>
            <h2 className="font-extrabold text-[#3D4098] text-lg sm:text-xl">
              About {mentor.name}
            </h2>
          </div>

          <div className="prose max-w-none text-sm sm:text-base">
            <PortableText value={mentor.bio} />
          </div>
        </div>

        {/* EXPERTISE */}
        <div className="bg-[#3D4098] rounded-2xl py-6 sm:py-8 px-6 sm:px-12 mt-6 text-white shadow-xl">
          <h3 className="text-center mb-6 sm:mb-10 lg:mt-[-30]">
            <span className="inline-flex items-center justify-center font-extrabold px-6 sm:px-10 w-full sm:w-[440px] h-[60px] sm:h-[90px] text-xl sm:text-[32px] border-l border-r border-b border-white rounded-b-2xl sm:rounded-b-3xl">
              Expertise & Skills
            </span>
          </h3>

          <ul className="space-y-4 sm:space-y-6 pb-4 sm:pb-6 text-sm sm:text-base">
            {mentor.expertise?.map((item: string, i: number) => (
              <li
                key={i}
                className="flex items-center gap-3 sm:gap-4 pb-2 sm:pb-4 border-b border-white/60"
              >
                <span className="w-4 sm:w-5 h-4 sm:h-5 rounded-full bg-[#15A959] flex items-center justify-center text-white text-xs">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
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
