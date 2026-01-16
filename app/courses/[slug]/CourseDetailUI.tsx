"use client";

import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/sanity/lib/image";
import React, { useState } from "react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";

/* ================= FAQ ================= */
const FAQListSection = ({ faqs }: { faqs: any[] }) => {
  const [open, setOpen] = useState<number | null>(0);

  // Agar Sanity me FAQ nahi hain to section show hi na ho
  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="py-20">
      <h2 className="text-4xl font-bold text-center mb-10">
        Frequently Asked Questions
      </h2>

      <div className="max-w-4xl mx-auto">
        {faqs.map((f, i) => (
          <div key={i} className="border rounded-xl mb-4">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full p-6 flex justify-between items-center font-semibold text-left"
            >
              <span>{f.question}</span>
              <span className="text-2xl">{open === i ? "−" : "+"}</span>
            </button>

            {open === i && (
              <div className="p-6 pt-0 text-gray-600">{f.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

/* ================= MAIN UI ================= */
export default function CourseDetailUI({ course }: any) {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="py-20 bg-gradient-to-r from-[#f7f7f7] to-[#eaf1f9]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          {/* ================= LEFT ================= */}
          <div>
            <h1 className="text-5xl font-extrabold text-[#2f2f8f] leading-tight">
              {course.title}
            </h1>

            <p className="mt-6 text-lg text-gray-700 max-w-xl">
              {course.shortDescription}
            </p>
            <div className="prose max-w-none">
              <PortableText value={course.description} />
            </div>

            <div className="flex gap-4 mt-8">
              <Link href="https://docs.google.com/forms/d/e/1FAIpQLSe0xltybDdhgmuadGDd6MJ8YU_wQejb9qRXZ5wYEIJgTIeQag/viewform">
                <button className="bg-[#3c3f9e] text-white px-8 py-3 rounded-lg font-semibold">
                  Enroll Now
                </button>
              </Link>

              {/* ================= UPDATED EXPLORE BUTTON ================= */}
              <button
                onClick={() => {
                  const el = document.getElementById("course-benefits");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
                className="border-2 border-[#3c3f9e] text-[#3c3f9e] px-8 py-3 rounded-lg font-semibold"
              >
                Explore
              </button>
            </div>
          </div>

          {/* ================= RIGHT IMAGES (FIXED ALIGNMENT) ================= */}
          <div className="grid grid-cols-2 gap-6 relative">
            {course.gallery?.[0] && (
              <div className="w-full aspect-square rounded-full overflow-hidden shadow-lg">
                <Image
                  src={urlFor(course.gallery[0]).width(400).height(400).url()}
                  alt=""
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {course.gallery?.[1] && (
              <div className="rounded-3xl overflow-hidden shadow-lg">
                <Image
                  src={urlFor(course.gallery[1]).width(400).height(400).url()}
                  alt=""
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {course.gallery?.[2] && (
              <div className="rounded-3xl overflow-hidden shadow-lg">
                <Image
                  src={urlFor(course.gallery[2]).width(400).height(400).url()}
                  alt=""
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {course.gallery?.[3] && (
              <div className="rounded-[95px] overflow-hidden shadow-lg">
                <Image
                  src={urlFor(course.gallery[3]).width(400).height(400).url()}
                  alt=""
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="w-full bg-gradient-to-r from-[#f4f6f8] via-[#eaf5fa] to-[#dff1f1] py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative flex gap-2">
            {course.gallery?.[4] && (
              <div className="w-[48%] rounded-[32px] overflow-hidden shadow-lg">
                <Image
                  src={urlFor(course.gallery[4])
                    .width(400)
                    .height(400)
                    .url()}
                  alt="Tax on Mobile"
                  width={500}
                  height={700}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            {course.gallery?.[5] && (
              <div className="w-[52%] rounded-[25px] overflow-hidden shadow-xl mt-16">
                <Image
                  src={urlFor(course.gallery[5])
                    .width(400)
                    .height(400)
                    .url()}
                  alt="Tax Dashboard"
                  width={500}
                  height={700}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-[3px] bg-[#1aa35b] rounded-full"></span>
              <h4 className="text-xl font-semibold text-[#3c3f9e]">
                {course.title}
              </h4>
            </div>

            <p className="text-lg text-gray-800 mb-6">{course.shortExplain}</p>

            <div className="prose max-w-none">
              <PortableText value={course.explain} />
            </div>

            <button className="bg-[#3c3f9e] text-white px-10 py-4 mt-10 rounded-2xl font-semibold shadow-md hover:opacity-90 transition">
              Attempt Quiz
            </button>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      {course.benefits?.length > 0 && (
        <section
          id="course-benefits"
          className="w-full bg-white py-20"
        >
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* LEFT CONTENT */}
            <div>
              <h2 className="text-4xl font-bold text-black mb-4">
                Course Benefits
              </h2>

              <p className="text-gray-600 max-w-xl mb-12">
                Discover the advantages of this course and how it can help you
                achieve your professional goals, expand your expertise, and
                create new career opportunities.
              </p>

              <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
                {course.benefits.map((benefit: any, i: number) => (
                  <div key={i}>
                    <span className="text-4xl font-bold text-[#3c3f9e]">
                      {i + 1}.
                    </span>
                    {typeof benefit === "object" ? (
                      <>
                        <h4 className="text-lg font-semibold text-black mt-2">
                          {benefit.title}
                        </h4>
                        <p className="text-gray-600 mt-2 text-sm">
                          {benefit.description}
                        </p>
                      </>
                    ) : (
                      <p className="text-gray-600 mt-2 text-sm">{benefit}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT IMAGES */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4 mt-40">
                <div className="flex flex-col gap-4">
                  {course.gallery?.[6] && (
                    <Image
                      src={urlFor(course.gallery[6])
                        .width(300)
                        .height(220)
                        .url()}
                      alt="Gallery Image 1"
                      width={300}
                      height={220}
                      className="rounded-2xl object-cover"
                    />
                  )}

                  {course.gallery?.[7] && (
                    <Image
                      src={urlFor(course.gallery[7])
                        .width(300)
                        .height(220)
                        .url()}
                      alt="Gallery Image 2"
                      width={300}
                      height={220}
                      className="rounded-2xl object-cover"
                    />
                  )}
                </div>

                <div className="flex flex-col -mt-20 gap-4">
                  {course.gallery?.[8] && (
                    <Image
                      src={urlFor(course.gallery[2])
                        .width(300)
                        .height(350)
                        .url()}
                      alt="Gallery Image 3"
                      width={300}
                      height={350}
                      className="rounded-2xl object-cover h-[350px]"
                    />
                  )}

                  {course.gallery?.[9] && (
                    <Image
                      src={urlFor(course.gallery[9])
                        .width(300)
                        .height(220)
                        .url()}
                      alt="Gallery Image 4"
                      width={300}
                      height={220}
                      className="rounded-2xl object-cover"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <h1 className="flex justify-center text-4xl -mb-12 text-white">
        Course Outline
      </h1>
      {course.outline?.length > 0 && (
        <section className="py-20 bg-[#262A7B] text-white">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-6">
            {course.outline.map((o: any, i: number) => (
              <div key={i} className="border border-white/40 p-6">
                <h3 className="font-bold text-lg mb-2">{o.title}</h3>
                <p className="text-white/80 text-sm">{o.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

     {course.instructor && course.instructor.slug?.current && (
  <section className="py-20 bg-[#f6f6f6]">
    <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center bg-white rounded-3xl p-10 shadow-lg">
      <Image
        src={urlFor(course.instructor.image).width(400).url()}
        alt={course.instructor.name}
        width={400}
        height={500}
        className="rounded-2xl"
      />

      <div>
        <h2 className="text-3xl font-bold mb-2">{course.instructor.name}</h2>
        <p className="text-gray-600 mb-4">{course.instructor.designation}</p>

        <Link
          href={`/mentors/${course.instructor.slug.current}`}
          className="inline-block bg-[#3c3f9e] text-white px-6 py-3 rounded-xl text-center"
        >
          Explore more
        </Link>
      </div>
    </div>
  </section>
)}

{course.certificate && (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
      <Image
        src={urlFor(course.certificate.image).width(700).url()}
        alt="Certificate"
        width={700}
        height={400}
        className="rounded-2xl"
      />

      <div>
        <h2 className="text-4xl font-bold mb-6">
          {course.certificate.title}
        </h2>
        <p className="text-gray-600 mb-8">
          {course.certificate.text}
        </p>
        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSe0xltybDdhgmuadGDd6MJ8YU_wQejb9qRXZ5wYEIJgTIeQag/viewform">
        <button className="bg-[#3c3f9e] text-white px-10 py-4 rounded-xl">
          Apply Now
        </button>
        </Link>
      </div>
      {/* Floating WhatsApp Button */}
<a
  href="https://wa.me/923377774856" 
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
  </section>
)}


      {/* ================= FAQ ================= */}
      <FAQListSection faqs={course.faqs} />
    </>
  );
}
