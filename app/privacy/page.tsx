import React from "react";
import { FaFilePdf } from "react-icons/fa";

/* ---------------- STAFF POLICIES ---------------- */

const staffPolicies = [
  {
    name: "Diversity, Equity, and Inclusion (DEI) Policy",
    file: "/pdf/Diversity, Equity, and Inclusion (DEI) Policy.pdf",
  },
  {
    name: "Harassment Policy",
    file: "/pdf/Harassment Policy.pdf",
  },
  {
    name: "Staff Code of Conduct Policy",
    file: "/pdf/Staff Code of Conduct Policy.pdf",
  },
];

const StaffPolicies = () => (
  <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8">
    <h2 className="text-2xl sm:text-3xl font-bold mb-6 pb-3 relative inline-block">
      <span className="bg-gradient-to-r from-[#3D4098] to-[#15A959] bg-clip-text text-transparent">
        Staff Policies
      </span>
      <span className="absolute left-0 -bottom-1 w-20 h-1 bg-gradient-to-r from-[#3D4098] to-[#15A959] rounded"></span>
    </h2>

    <div className="space-y-4">
  {staffPolicies.map((policy, index) => (
    <a
      key={index}
      href={policy.file}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-4 rounded-xl border bg-gray-50 hover:border-[#3D4098]/40 hover:shadow-md transition cursor-pointer">
        
        <div className="flex items-center gap-3">
          <FaFilePdf className="text-red-500 text-lg sm:text-xl flex-shrink-0" />
          <span className="text-sm sm:text-base text-gray-800 font-medium">
            {policy.name}
          </span>
        </div>

      </div>
    </a>
  ))}
</div>
  </div>
);

/* ---------------- STUDENT POLICIES ---------------- */

const studentPolicies = [
  {
    name: "Academic Integrity Policy",
    file: "/pdf/Academic Integrity Policy.pdf",
  },
  {
    name: "Batch Freeze Policy",
    file: "/pdf/Batch Freeze Policy.pdf",
  },
  {
    name: "Fee Refund Policy",
    file: "/pdf/Fee Refund Policy.pdf",
  },
  {
    name: "Student Code of Conduct / Behaviour Policy",
    file: "/pdf/Student Code of Conduct & Behaviour Policy.pdf",
  },
];

const StudentPolicies = () => (
  <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8">
    <h2 className="text-2xl sm:text-3xl font-bold mb-6 pb-3 relative inline-block">
      <span className="bg-gradient-to-r from-[#3D4098] to-[#15A959] bg-clip-text text-transparent">
        Student Policies
      </span>
      <span className="absolute left-0 -bottom-1 w-20 h-1 bg-gradient-to-r from-[#3D4098] to-[#15A959] rounded"></span>
    </h2>

    <div className="space-y-4">
  {studentPolicies.map((policy, index) => (
    <a
      key={index}
      href={policy.file}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-4 rounded-xl border bg-gray-50 hover:border-[#3D4098]/40 hover:shadow-md transition cursor-pointer">
        
        <div className="flex items-center gap-3">
          <FaFilePdf className="text-red-500 text-lg sm:text-xl flex-shrink-0" />
          <span className="text-sm sm:text-base text-gray-800 font-medium">
            {policy.name}
          </span>
        </div>

      </div>
    </a>
  ))}
</div>
  </div>
);

/* ---------------- MAIN PAGE ---------------- */

const PrivacyHeroSection = () => {
  const rightImageUrl = "/Policies.webp";
  const backgroundImageUrl = "/Design.webp";

  return (
    <>
      {/* HERO SECTION */}
      <section
        className="relative w-full py-16 md:py-24 bg-white overflow-hidden"
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-blue-50/50 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* LEFT CONTENT */}
            <div className="flex flex-col items-start space-y-6">
              

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-950 leading-tight tracking-tight">
                
                <span className="block text-emerald-600">
                 Our Policies
                </span>
              </h1>

              <p className="text-base md:text-lg text-gray-700 max-w-xl leading-relaxed">
                Our policies are established to maintain a safe, respectful, and well-organized environment for everyone involved with our organization. They outline the standards, responsibilities, and procedures that guide our operations and interactions, ensuring fairness, transparency, and professionalism. These guidelines help staff, students, partners, and visitors understand their rights and obligations while promoting a culture of integrity and accountability. We regularly review and update our policies to ensure they remain relevant and aligned with current regulations and organizational values.

              </p>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-blue-100/70 rounded-3xl blur-2xl opacity-80 group-hover:opacity-100 transition-opacity" />
<div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                <img
                  src={rightImageUrl}
                  alt="Security Illustration"
                  className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
              </div>
             
            </div>
          </div>
        </div>
      </section>

      {/* POLICIES SECTION */}
      <section className="mx-auto max-w-7xl px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <StaffPolicies />
          <StudentPolicies />
        </div>
      </section>
    </>
  );
};

export default PrivacyHeroSection;