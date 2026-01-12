
import { client } from "@/sanity/lib/client";
import { coursesQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

export default async function CoursesPage() {
  const courses = await client.fetch(coursesQuery);

  return (
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
  );
}
