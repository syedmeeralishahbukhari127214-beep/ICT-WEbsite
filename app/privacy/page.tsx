import React from "react";
import { FaFilePdf } from "react-icons/fa";
const StaffPolicies = () => (
  <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
    <h2 className="text-3xl font-bold mb-6 pb-3 relative inline-block">
  <span className="bg-gradient-to-r from-[#3D4098] to-[#15A959] bg-clip-text text-transparent">
    Staff Policies
  </span>
  <span className="absolute left-0 -bottom-1 w-20 h-1 bg-gradient-to-r from-[#3D4098] to-[#15A959] rounded"></span>
</h2>

    <div className="space-y-4">

      <div className="flex items-center justify-between p-4 rounded-xl border bg-gray-50 hover:shadow-md hover:-translate-y-1 transition">
        <div className="flex items-center gap-3">
          <FaFilePdf className="text-red-500 text-xl" />
          <span>Diversity, Equity, and Inclusion (DEI) Policy</span>
        </div>

        <a
          href="/pdf/Diversity, Equity, and Inclusion (DEI) Policy.pdf"
          target="_blank"
          className="px-4 py-2 bg-[#3D4098] text-white text-sm rounded-lg hover:bg-[#15A959] transition"
        >
          View PDF
        </a>
      </div>

      <div className="flex items-center justify-between p-4 rounded-xl border bg-gray-50 hover:shadow-md hover:-translate-y-1 transition">
        <div className="flex items-center gap-3">
          <FaFilePdf className="text-red-500 text-xl" />
          <span>Harassment Policy</span>
        </div>

        <a
          href="/pdf/Harassment Policy.pdf"
          target="_blank"
          className="px-4 py-2 bg-[#3D4098] text-white text-sm rounded-lg hover:bg-[#15A959] transition"
        >
          View PDF
        </a>
      </div>

      <div className="flex items-center justify-between p-4 rounded-xl border bg-gray-50 hover:shadow-md hover:-translate-y-1 transition">
        <div className="flex items-center gap-3">
          <FaFilePdf className="text-red-500 text-xl" />
          <span>Staff Code of Conduct Policy</span>
        </div>

        <a
          href="/pdf/Staff Code of Conduct Policy.pdf"
          target="_blank"
          className="px-4 py-2 bg-[#3D4098] text-white text-sm rounded-lg hover:bg-[#15A959] transition"
        >
          View PDF
        </a>
      </div>

    </div>
  </div>
);

const StudentPolicies = () => (
  <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
    <h2 className="text-3xl font-bold mb-6 pb-3 relative inline-block">
  <span className="bg-gradient-to-r from-[#3D4098] to-[#15A959] bg-clip-text text-transparent">
    Student Policies
  </span>
  <span className="absolute left-0 -bottom-1 w-20 h-1 bg-gradient-to-r from-[#3D4098] to-[#15A959] rounded"></span>
</h2>

    <div className="space-y-4">

      <div className="flex items-center justify-between p-4 rounded-xl border bg-gray-50 hover:shadow-md hover:-translate-y-1 transition">
        <div className="flex items-center gap-3">
          <FaFilePdf className="text-red-500 text-xl" />
          <span>Academic Integrity Policy</span>
        </div>

        <a
          href="/pdf/Academic Integrity Policy.pdf"
          target="_blank"
          className="px-4 py-2 bg-[#3D4098] text-white text-sm rounded-lg hover:bg-[#15A959] transition"
        >
          View PDF
        </a>
      </div>

      <div className="flex items-center justify-between p-4 rounded-xl border bg-gray-50 hover:shadow-md hover:-translate-y-1 transition">
        <div className="flex items-center gap-3">
          <FaFilePdf className="text-red-500 text-xl" />
          <span>Batch Freeze Policy</span>
        </div>

        <a
          href="/pdf/Batch Freeze Policy.pdf"
          target="_blank"
          className="px-4 py-2 bg-[#3D4098] text-white text-sm rounded-lg hover:bg-[#15A959] transition"
        >
          View PDF
        </a>
      </div>

      <div className="flex items-center justify-between p-4 rounded-xl border bg-gray-50 hover:shadow-md hover:-translate-y-1 transition">
        <div className="flex items-center gap-3">
          <FaFilePdf className="text-red-500 text-xl" />
          <span>Fee Refund Policy</span>
        </div>

        <a
          href="/pdf/Fee Refund Policy.pdf"
          target="_blank"
          className="px-4 py-2 bg-[#3D4098] text-white text-sm rounded-lg hover:bg-[#15A959] transition"
        >
          View PDF
        </a>
      </div>

      <div className="flex items-center justify-between p-4 rounded-xl border bg-gray-50 hover:shadow-md hover:-translate-y-1 transition">
        <div className="flex items-center gap-3">
          <FaFilePdf className="text-red-500 text-xl" />
          <span>Student Code of Conduct / Behaviour Policy</span>
        </div>

        <a
          href="/pdf/Student Code of Conduct & Behaviour Policy.pdf"
          target="_blank"
          className="px-4 py-2 bg-[#3D4098] text-white text-sm rounded-lg hover:bg-[#15A959] transition"
        >
          View PDF
        </a>
      </div>

    </div>
  </div>
);

const PrivacyHeroSection = () => {
  const rightImageUrl = "/secure.webp";
  const backgroundImageUrl = "/Design.webp";

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative w-full py-16 md:py-24 bg-white overflow-hidden"
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-blue-50/50 pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col items-start space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-0.5 bg-emerald-500 rounded"></div>
                <span className="text-sm font-semibold text-blue-900 tracking-wide uppercase">
                  Privacy Protection
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-950 leading-tight tracking-tight">
                <span className="block text-gray-950">Your Data,</span>
                <span className="block text-emerald-600">
                  Our Responsibility
                </span>
              </h1>

              <p className="text-base md:text-lg text-gray-700 max-w-xl leading-relaxed">
                We value the trust our clients place in us. Protecting your
                personal and financial information is our priority. Our privacy
                practices ensure your data remains secure, confidential, and
                handled with complete transparency.
              </p>
            </div>

            <div className="relative group">
              <div className="absolute -inset-4 bg-blue-100/70 rounded-3xl blur-2xl transition-opacity group-hover:opacity-100 opacity-80" />

              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                <img
                  src={rightImageUrl}
                  alt="Security Illustration"
                  className="w-full h-auto object-cover transform transition-transform duration-500 :scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Policies Section */}
      <section className="mx-auto max-w-7xl px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <StaffPolicies />
          <StudentPolicies />
        </div>
      </section>
    </>
  );
};

export default PrivacyHeroSection;