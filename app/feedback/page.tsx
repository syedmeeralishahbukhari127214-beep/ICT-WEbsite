"use client";
import React, { useState } from "react";

export default function ICTPage() {
  const [playingId, setPlayingId] = useState<number | null>(null);

  const feedbackData = [
    {
      title: "Student Feedback | Dr. Ameer",
      description: "We're honored to share the feedback of Dr. Ameer, a respected legal professional, who recently completed our practical training.",
      videoId: "Vd0ZwmYBa_I",
    },
    {
      title: "Feedback from Gul Samreen",
      description: "Advocates should join a Pakistani taxation course to sharpen legal skills and explore tax roles in ICT.",
      videoId: "oB5HlBjTsCo",
    },
    {
      title: "Mr Asad Iqbal Feedback",
      description: "Decision for joining ICT for Certified Tax Advisor.",
      videoId: "STn3UWZnbcc",
    },
    {
      title: "Shaikh Sanee Sajjad from...",
      description: "Professional Instruction and Clear Modules Made Learning Efficient and Easy.",
      videoId: "5UdTW5PFbx0",
    },
    {
      title: "Mr Raza Jahangir Ahmad...",
      description: "Why joined ICT to take the Certified Tax Advisor course.",
      videoId: "RTPzbou4_BA",
    },
    {
      title: "Student Feedback | Adv Fouzia Afzal",
      description: "What was the reason for joining ICT and how it helped a professional lawyer.",
      videoId: "VD5DvnnKCB4",
    }
  ];

  return (
    <div className="w-full min-h-screen bg-white text-black font-sans">
      
      {/* 1. FORM SECTION */}
      <section className="w-full max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-white rounded-3xl shadow-2xl p-10 lg:p-12 border border-gray-100">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3D4098] mb-4">
              Find Your Class <span className="text-green-600"> Information</span>
            </h2>
            <div className="w-24 h-1 bg-green-600 mb-10"></div>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wider">Name</label>
                <input type="text" placeholder="Your Name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wider">Course</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 outline-none bg-white">
                  <option>Select</option>
                  <option>Corporate Taxation</option>
                  <option>Import & Export</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wider">Mode</label>
                <div className="space-y-3">
                  {["On-Campus Classes", "Live Virtual Classes", "On-Demand Classes"].map((mode, i) => (
                    <label key={i} className="flex items-center gap-3 cursor-pointer">
                      <input type="radio" name="mode" className="w-5 h-5 accent-green-600" defaultChecked={i === 2} />
                      <span className="text-gray-700">{mode}</span>
                    </label>
                  ))}
                </div>
              </div>
              <button type="submit" className="w-full py-4 bg-[#3D4098] text-white font-bold rounded-lg shadow-lg hover:bg-opacity-90 transition duration-300 uppercase tracking-widest">
                Submit
              </button>
            </form>
          </div>

          <div className="relative w-full h-[450px]">
            <div className="absolute top-0 left-0 w-[70%] h-[280px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-10">
              <img src="40.png" alt="Student 1" className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-0 right-0 w-[70%] h-[280px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img src="41.png" alt="Student 2" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. SUCCESS STORIES SECTION */}
      <section className="w-full bg-[#fcfcfc] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-bold text-green-600 flex items-center justify-center gap-2 uppercase tracking-widest">
              <span className="w-10 h-[2px] bg-green-500"></span>
              Student Success Stories
              <span className="w-10 h-[2px] bg-green-500"></span>
            </p>
            <h2 className="text-4xl font-extrabold text-[#3D4098] mt-3">Hear From Our Graduates</h2>
          </div>

          {/* Grid Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {feedbackData.map((item, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-200 flex flex-col group transition-all duration-300 hover:shadow-2xl"
              >
                {/* Header Bar */}
                <div className="bg-[#0f172a] text-white py-2.5 px-4 flex justify-between items-center">
                  <span className="text-xs font-semibold truncate">{item.title}</span>
                  <div className="flex gap-1">
                    <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                    <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  </div>
                </div>

                {/* Video Area */}
                <div className="relative aspect-video bg-black overflow-hidden">
                  {playingId === index ? (
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${item.videoId}?autoplay=1&rel=0`}
                      title={item.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <div className="relative w-full h-full cursor-pointer" onClick={() => setPlayingId(index)}>
                      <img 
                        src={`https://img.youtube.com/vi/${item.videoId}/maxresdefault.jpg`} 
                        alt="Video Thumbnail" 
                        className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-all duration-500"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${item.videoId}/hqdefault.jpg`;
                        }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-11 bg-red-600 rounded-xl flex items-center justify-center shadow-xl group-hover:bg-red-700 group-hover:scale-110 transition-all">
                          <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Description Area */}
                <div className="p-6 flex-grow bg-[#f8fafc]">
                  <p className="text-[#3D4098] font-semibold text-[15px] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div> 

          
          <div className="mt-20 flex justify-center items-center w-full">
            <a
              className="bg-[#3D4098] py-4 px-12 text-white font-bold text-xl rounded-lg shadow-lg hover:bg-opacity-90 hover:scale-105 transition-all duration-300 inline-block text-center"
              href="https://www.youtube.com/@ICTPakistanofficial"
              target="_blank"
              rel="noopener noreferrer"
            >
              Load more
            </a>
          </div>

        </div>
      </section>
    </div>
  );
}