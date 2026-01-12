"use client";

import Image from "next/image";
import Link from "next/link";

export default function ICTMembership() {
  return (
    <section className="w-full  py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#3D4098]">
            ICT Official <span className="text-[#15A959]">Membership</span> Program
          </h2>
          <p className="mt-3 text-gray-600 text-xl max-w-3xl mx-auto">
            A Professional Membership, Growth & Referral Network for ICT Students & Alumni
          </p>

          <div className="mt-6">
            <Link
              href="https://course.ict.net.pk/checkout/speaker-club-membership"
              className="inline-block bg-[#3D4098] rounded-lg text-white px-6 py-3 font-bold shadow-lg hover:scale-105 transition"
            >
              Join Now – Limited Launch Offer
            </Link>
          </div>
        </div>

        {/* ================= TOP IMAGES ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {[
            "/m1.png",
            "/m2.png",
            "/m3.png",
            "/m4.png",
          ].map((img, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
            >
              <Image
                src={img}
                alt="ICT Membership"
                width={500}
                height={350}
                className="w-full h-full object-cover"
              /> 
            </div>
          ))}
        </div>

        {/* ================= DESCRIPTION BOX ================= */}
        <div className="bg-gradient-to-r from-[#15A959] to-[#3D4098] text-white rounded-3xl p-10 h-[300] pt-20 text-center mb-16">
          <p className="max-w-4xl mx-auto leading-relaxed text-2xl font-bold">
            The Institute of Corporate & Taxation (ICT) proudly introduces its
            Official Membership Program — an exclusive, structured, and
            high-value ecosystem designed only for ICT Students and ICT Alumni.
          </p>
        </div>

        {/* ================= PURPOSE ================= */}
        <div className="mb-16">
          <h3 className="text-5xl font-bold text-center text-gradient-to-r from-[#15A959] to-[#3D4098] mb-6">
            Purpose of the ICT Membership
          </h3>
            <div className="flex text-lg items-center justify-center mb-10">
                <p>ICT receives a significant volume of legal, tax, and corporate compliance cases from across Pakistan. <br></br>To responsibly manage this demand, ICT requires a verified and documented network of professionals.</p>
            </div>

          <ul className="max-w-3xl mx-auto space-y-4 text-black text-xl font-bold">
            {[
              "Build a verified pool of ICT-trained professionals",
              "Ensure quality, accountability, and standards",
              "Provide structured mentorship and continuous support",
              "Offer real-world exposure through demand-based referrals",
              "Create long-term growth and learning opportunities",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1 text-green-600">✔</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ================= BENEFITS ================= */}
        <div className="mb-20">
          <h3 className="text-4xl font-bold text-center text-[#3D4098] mb-10">
            Core Benefits of ICT Membership
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Demand-Based Client Referrals",
              "Direct Mentorship & Support",
              "Official ICT Helpline",
              "Exclusive Templates & Updates",
              "Special Course Discounts",
              "Teaching Opportunities",
              "Official Certificates",
            ].map((benefit, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 text-center shadow hover:shadow-xl transition"
              >
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 font-bold">
                  <img src="g1.png" alt="" />
                </div>
                <p className="font-medium text-gray-800">{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ================= CTA ================= */}
        <div className="bg-gradient-to-r from-green-600 to-indigo-700 rounded-2xl h-[350px] pt-26 p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Join the ICT Official Membership Program
          </h3>
          <p className="mb-6 text-white/90">
            Be part of a verified, recognized, and professionally supported network
          </p>

          <Link
            href="https://course.ict.net.pk/checkout/speaker-club-membership"
            className="inline-block bg-white text-indigo-700 px-8 py-3 rounded-lg font-semibold shadow-lg hover:scale-105 transition"
          >
            Join Now – Limited Launch Offer
          </Link>
        </div>

      </div>
    </section>
  );
}