"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { mentorsQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

type Mentor = {
  _id: string;
  name: string;
  slug: { current: string };
  image: any;
  designation?: string;
};

export default function MentorsPage() {
  const [mentors, setMentors] = useState<Mentor[]>([]);
  const mentorsSectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    client.fetch(mentorsQuery).then(setMentors);
  }, []);

  const scrollingMentors = mentors.slice(0, 8);

  const handleExploreClick = () => {
    mentorsSectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main className="min-h-screen bg-linear-to-b from-gray-50 to-white">
      {/* ===== SLIDER ANIMATION ===== */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          display: flex;
          width: max-content;
          animation: scroll 25s linear infinite;
        }
      `}</style>

      {/* ================= SLIDER SECTION ================= */}
      {scrollingMentors.length > 0 && (
        <section className="py-14 overflow-hidden">
          <h1 className="text-3xl sm mb-2 :text-4xl md:text-4xl font-poppins font-extrabold text-[#3D4098] flex items-center justify-center gap-3">
            Meet Our Mentors
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-800 mb-4 leading-[132%] justify-center flex items-center text-center px-4">
            Our mentor brings years of experience and expertise, guiding students
            with practical insights and personalized support. Their dedication
            ensures every learner achieves their full potential.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
            <a
              className="bg-[#3D4098] py-2 px-6 text-white font-bold text-xl rounded-lg"
              href="https://docs.google.com/forms/d/e/1FAIpQLSe0xltybDdhgmuadGDd6MJ8YU_wQejb9qRXZ5wYEIJgTIeQag/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              Enroll Now
            </a>

            <button
              onClick={handleExploreClick}
              className="px-8 py-2 border-2 font-bold rounded-xl text-[#3D4098] border-[#3D4098] hover:bg-indigo-50"
            >
              Explore
            </button>
          </div>

          <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
            <div className="flex animate-scroll gap-4 px-4">
              {[...scrollingMentors, ...scrollingMentors].map((mentor, i) => (
                <img
                  key={i}
                  src={
                    mentor.image
                      ? urlFor(mentor.image).width(300).height(350).url()
                      : "/placeholder.jpg"
                  }
                  className="w-40 sm:w-48 md:w-52 h-52 sm:h-60 object-cover rounded-2xl shadow-md shrink-0"
                  alt={mentor.name}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= HEADING + GRID ================= */}
      <section
        ref={mentorsSectionRef}
        className="py-10 max-w-7xl mx-auto px-4"
      >
        <h1 className="text-4xl font-bold text-center mb-12 text-[#3D4098]">
          Meet Our <span className="text-[#15A959]">Mentors</span>
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 place-items-center">
          {mentors.map((mentor) => (
            <div key={mentor._id} className="text-center">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-40 sm:w-[180px] md:w-[200px] hover:scale-105 transition">
                <img
                  src={
                    mentor.image
                      ? urlFor(mentor.image).width(300).height(400).url()
                      : "/placeholder.jpg"
                  }
                  alt={mentor.name}
                  className="w-full h-44 sm:h-52 md:h-60 object-cover"
                />
              </div>

              <h3 className="text-[#564F4F] font-bold text-xs sm:text-sm mt-2">
                {mentor.name}
              </h3>

              {mentor.slug?.current && (
                <Link href={`/mentors/${mentor.slug.current}`}>
                  <button className="mt-2 mb-4 px-3 py-1 text-sm bg-[#3D4098] text-white rounded-md shadow hover:bg-indigo-700 transition">
                    View Detail
                  </button>
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
