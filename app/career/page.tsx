"use client";

import React from "react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";

const benefitItems = [
  {
    icon: (props: any) => (
      <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
          d="M17 20h5v-5a3 3 0 00-3-3H9a3 3 0 00-3 3v5H1V7a3 3 0 013-3h16a3 3 0 013 3v13zM9 4v2m6-2v2M10 9h4" />
      </svg>
    ),
    text: "Supportive Team",
    details: "Collaboration and respect are at the heart of everything we do.",
  },
  {
    icon: (props: any) => (
      <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
          d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    text: "Growth Opportunities",
    details: "We invest in your learning and professional development.",
  },
  {
    icon: (props: any) => (
      <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
          d="M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6z" />
      </svg>
    ),
    text: "Flexibility That Works",
    details: "Hybrid, remote, or in-office — we support how you work best.",
  },
  {
    icon: (props: any) => (
      <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
          d="M12 8c1.657 0 3 .895 3 2s-1.343 2-3 2h-3v5h6" />
      </svg>
    ),
    text: "Competitive Benefits",
    details: "From health coverage to paid time off, we’ve got you covered.",
  },
  {
    icon: (props: any) => (
      <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682" />
      </svg>
    ),
    text: "Inclusive Environment",
    details: "Diversity and inclusion aren’t just values — they’re actions.",
  },
];

// ----------------------------------------------------
// --- HERO SECTION ---
// ----------------------------------------------------

const CareerCompanionHeroSection = () => {
  return (
    

    <section className="bg-gray-100 py-24 px-6">
      <div className="w-full">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

        <div className="space-y-6">
          <p className="text-sm font-semibold text-[#3D4098] uppercase">
            — Career Companion
          </p>

          <h1 className="text-5xl font-extrabold">
            <span className="text-[#3D4098]">Your Partner in Building a </span>
            <span className="text-green-500">Confident Career</span>
          </h1>

          <p className="text-lg text-gray-700 max-w-md">
            At ICT, we empower graduates with skills, confidence, and real-world experience.
          </p>
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLScKVQgqpXIYIQs3VA8et5bXDqJOhoewY4QBc9PXofywLmYYFA/viewform">
          <button  className="px-8 py-3 bg-[#3D4098] text-white rounded-lg font-semibold">
            Join ICT
          </button></Link>
        </div>

        <div className="h-[450px] rounded-3xl overflow-hidden shadow-2xl">
          <img
            src="/Career.png"
            className="w-full h-full object-cover"
          />
        </div>

      </div>
      </div>
    </section>
   

  );
};

// ----------------------------------------------------
// --- STRUGGLES SECTION (IMAGE LEFT | TEXT RIGHT) ---
// ----------------------------------------------------

const StrugglesSection = () => {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">

        <div className="space-y-8">
          <img
            src="/Career 2.jpg"
            className="rounded-2xl shadow-xl"
          />
        </div>

        <div>
          <p className="text-sm font-semibold text-green-600 uppercase">
            — Career Companion
          </p>

          <h2 className="text-5xl font-extrabold text-gray-600 mt-2">
            Why Many Graduates Struggle After University
          </h2>
          <p className="mt-5 text-xl">Despite their qualifications, many African graduates <br></br> face significant challenges when transitioning <br></br> from university to the workplace across the continent.</p>

          <ul className="mt-6 space-y-3 text-lg text-gray-800">
            <li>❌ Weak CVs & cover letters</li>
            <li>❌ Lack of mentorship</li>
            <li>❌ Low interview confidence</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

// ----------------------------------------------------
// --- BENEFITS SECTION (TEXT LEFT | IMAGE RIGHT) ---
// ----------------------------------------------------

const BenefitsSection = () => {
  return (
    <section className="bg-gray-50 py-24 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        <div className="space-y-6">
          

          {benefitItems.map((item, i) => (
            <div key={i} className="flex gap-4">
              <div className="w-12 h-12 bg-indigo-100 border-2 border-indigo-300 rounded-full flex items-center justify-center">
                {item.icon({ className: "w-6 h-6 text-indigo-700" })}
              </div>
              <div>
                <p className="font-semibold">{item.text}</p>
                <p className="text-sm text-gray-600">{item.details}</p>
              </div>
            </div>
          ))}
        </div>

         {/* RIGHT IMAGES */}
          <div className="relative w-full mb-26 h-[420px]">
            {/* TOP IMAGE */}
            <div className="absolute top-0 right-0 w-[70%] h-[260px] rounded-2xl"><img src="/Gallery.png" alt="" /></div>

            {/* BOTTOM IMAGE */}
            <div className=" absolute bottom-0 -left-4 w-[75%] h-[280px] rounded-2xl \"><img className="m-15" src="Career last.png" alt="" /></div>

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
    </section>
  );
};

// ----------------------------------------------------
// --- FINAL PAGE ---
// ----------------------------------------------------

export default function CareerStrugglesAndBenefitsPage() {
  return (
    <div className="min-h-screen bg-white">
      <CareerCompanionHeroSection />
      <StrugglesSection />
      <BenefitsSection />

    </div>
  );
}
