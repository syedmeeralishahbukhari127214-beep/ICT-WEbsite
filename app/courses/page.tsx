
import { client } from "@/sanity/lib/client";
import { coursesQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";

export default async function CoursesPage() {
  const courses = await client.fetch(coursesQuery);

  return (
    <div className="w-full bg-white">
    <section className="py-20 bg-white">
      {/* ================= HEADER ================= */}
      <div className="text-center mb-14">
        <p className="text-sm font-semibold text-[#3D4098] uppercase tracking-widest">
          Course We Offer’s
        </p>

        <h1 className="text-4xl font-extrabold mt-2">
          Build Your <span className="text-[#15A959]">Skills</span>
        </h1>

        <p className="text-gray-600 mt-4 max-w-xl mx-auto">
          From taxation to corporate affairs, our courses help
          you grow with clear, practical learning.
        </p>
      </div>

      {/* ================= GRID ================= */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {courses.filter((c: any) => c.slug?.current).map((course: any) => (
          <Link
            key={course._id}
            href={`/courses/${course.slug?.current || course._id}`}
            className="group relative rounded-xl overflow-hidden shadow-lg"
          >
            {/* IMAGE */}
            <img
              src={
                course.thumbnail
                  ? urlFor(course.thumbnail).width(600).height(800).url()
                  : "/placeholder.jpg"
              }
              alt={course.title}
              className="w-full h-[320px] object-cover group-hover:scale-105 transition duration-500"
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            {/* TITLE */}
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="text-white font-extrabold text-sm uppercase leading-tight">
                {course.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
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
  );
}
