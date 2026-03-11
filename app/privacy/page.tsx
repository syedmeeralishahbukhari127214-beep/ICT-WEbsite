import React from 'react';

const AdminPolicies = () => (
  <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
    <h2 className="mb-4 text-2xl font-bold text-slate-800 border-b pb-2">
      Administrative Policies
    </h2>
    <ul className="space-y-3 text-slate-600">
      <li className="flex items-start gap-2">
        <span className="text-blue-600 font-bold">•</span>
        Data Privacy & Compliance
      </li>
      <li className="flex items-start gap-2">
        <span className="text-blue-600 font-bold">•</span>
        Staff Code of Conduct
      </li>
      <li className="flex items-start gap-2">
        <span className="text-blue-600 font-bold">•</span>
        Resource Allocation Guidelines
      </li>
    </ul>
  </div>
);

const StudentPolicies = () => (
  <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-2xl font-bold text-slate-800 border-b pb-2">
      Student Policies
    </h2>
    <ul className="space-y-3 text-slate-600">
      <li className="flex items-start gap-2">
        <span className="text-blue-600 font-bold">•</span>
        Academic Integrity & Ethics
      </li>
      <li className="flex items-start gap-2">
        <span className="text-blue-600 font-bold">•</span>
        Attendance & Leave Requests
      </li>
      <li className="flex items-start gap-2">
        <span className="text-blue-600 font-bold">•</span>
        Course Enrollment & Refunds
      </li>
    </ul>
  </div>
);

const PrivacyHeroSection = () => {
  const rightImageUrl = '/secure.webp'; 
  const backgroundImageUrl = '/Design.webp';

  return (
    /* Fixed: Wrapped everything in a single React Fragment (<>...</>) */
    <>
      {/* Hero Section */}
      <section 
        className="relative w-full py-16 md:py-24 bg-white overflow-hidden"
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
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
                <span className="block text-emerald-600">Our Responsibility</span>
              </h1>

              <p className="text-base md:text-lg text-gray-700 max-w-xl leading-relaxed">
                We value the trust our clients place in us. Protecting your personal and 
                financial information is our priority. Our privacy practices ensure your 
                data remains secure, confidential, and handled with complete transparency.
              </p>

              <div className="pt-4">
                {/* Fixed: Corrected hover syntax */}
                <button className="px-20 py-3 bg-[#3D4098] text-white font-semibold rounded-xl shadow-md hover:bg-blue-800 transition duration-150 ease-in-out">
                  Explore
                </button>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-4 bg-blue-100/70 rounded-3xl blur-2xl transition-opacity group-hover:opacity-100 opacity-80" />
              
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

      

      {/* Grid Section */}
      <section className="mx-auto max-w-7xl px-4 py-12 md:py-20">
        
            <h2 className="mb-4 text-2xl font-bold text-slate-800 border-b pb-2"></h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <AdminPolicies />
          <StudentPolicies />
        </div>
      </section>
    </>
  );
};

export default PrivacyHeroSection;