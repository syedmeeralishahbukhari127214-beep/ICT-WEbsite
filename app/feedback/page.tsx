"use client";
import React, { useState, useEffect, FormEvent } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { client } from "@/sanity/lib/client";
import { coursesQuery } from "@/sanity/lib/queries";

export default function ICTPage() {
  const [playingId, setPlayingId] = useState<number | null>(null);
  const [courses, setCourses] = useState<{ title: string; slug: string }[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "",
    mode: "On-Demand Classes",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<null | boolean>(null);
  const [emailError, setEmailError] = useState<string>("");

  // Fetch courses from Sanity
  useEffect(() => {
    async function fetchCourses() {
      try {
        const data = await client.fetch(coursesQuery);
        const filteredCourses = data
          .filter((c: any) => c.slug?.current)
          .map((c: any) => ({ title: c.title, slug: c.slug.current }));
        setCourses(filteredCourses);
      } catch (err) {
        console.error("Failed to fetch courses:", err);
      }
    }
    fetchCourses();
  }, []);

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "email") {
      if (!validateEmail(value)) {
        setEmailError("Please enter a valid email address.");
      } else {
        setEmailError("");
      }
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (emailError) return; // Prevent submit if email invalid
    setLoading(true);
    setSuccess(null);

    try {
      const res = await fetch("/api/admission", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      let data: any = {};
      try {
        data = await res.json();
      } catch {
        data = { success: res.ok };
      }

      setSuccess(data.success);
      setFormData({ name: "", email: "", course: "", mode: "On-Demand Classes" });
    } catch (err) {
      console.error(err);
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  const feedbackData = [
    {
      title: "Student Feedback | Dr. Ameer",
      description:
        "We're honored to share the feedback of Dr. Ameer, a respected legal professional, who recently completed our practical training.",
      videoId: "Vd0ZwmYBa_I",
    },
    {
      title: "Feedback from Gul Samreen",
      description:
        "Advocates should join a Pakistani taxation course to sharpen legal skills and explore tax roles in ICT.",
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
    },
  ];

  return (
    <div className="w-full bg-white">
      <div className="w-full min-h-screen bg-white text-black font-sans">
        {/* 1. FORM SECTION */}
        <section className="w-full max-w-7xl mx-auto px-6 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Form */}
            <div className="bg-white rounded-3xl shadow-2xl p-10 lg:p-12 border border-gray-100">
              <h2 className="text-3xl md:text-4xl font-bold text-[#3D4098] mb-4">
                Find Your Class <span className="text-green-600"> Information</span>
              </h2>
              <div className="w-24 h-1 bg-green-600 mb-10"></div>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wider">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wider">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 outline-none"
                    required
                  />
                  {emailError && <p className="text-red-600 mt-1 text-sm">{emailError}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wider">
                    Course
                  </label>
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 outline-none bg-white"
                    required
                  >
                    <option value="">Select</option>
                    {courses.map((course, index) => (
                      <option key={index} value={course.title}>
                        {course.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wider">
                    Mode
                  </label>
                  <div className="space-y-3">
                    {["On-Campus Classes", "Live Virtual Classes", "On-Demand Classes"].map(
                      (mode, i) => (
                        <label key={i} className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="radio"
                            name="mode"
                            value={mode}
                            checked={formData.mode === mode}
                            onChange={handleChange}
                            className="w-5 h-5 accent-green-600"
                          />
                          <span className="text-gray-700">{mode}</span>
                        </label>
                      )
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading || emailError !== ""}
                  className="w-full py-4 bg-[#3D4098] text-white font-bold rounded-lg shadow-lg hover:bg-opacity-90 transition duration-300 uppercase tracking-widest disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Submit"}
                </button>

                {success === true && (
                  <p className="text-green-600 mt-3">Message sent successfully!</p>
                )}
                {success === false && <p className="text-red-600 mt-3">Failed to send message.</p>}
              </form>
            </div>

            {/* Student Images */}
            <div className="relative w-full h-[450px]">
              <div className="absolute top-0 left-0 w-[70%] h-[280px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-10">
                <img src="/Student 1.webp" alt="Student 1" className="w-full h-full object-cover" />
              </div>
              <div className="absolute bottom-0 right-0 w-[70%] h-[280px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img src="/Student 2.webp" alt="Student 2" className="w-full h-full object-cover" />
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {feedbackData.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-200 flex flex-col group transition-all duration-300 hover:shadow-2xl"
                >
                  <div className="bg-[#0f172a] text-white py-2.5 px-4 flex justify-between items-center">
                    <span className="text-xs font-semibold truncate">{item.title}</span>
                    <div className="flex gap-1">
                      <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                      <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                    </div>
                  </div>

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
                      <div
                        className="relative w-full h-full cursor-pointer"
                        onClick={() => setPlayingId(index)}
                      >
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

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/923377774856?text=Hello%20ICT%20Team%2C%20I%20am%20interested%20in%20your%20courses%20and%20seek%20your%20guidance."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[100] flex items-center justify-center group"
        aria-label="Chat on WhatsApp"
      >
        <span className="absolute w-full h-full bg-[#25D366] rounded-full animate-ping opacity-75"></span>
        <span className="absolute w-full h-full bg-[#25D366] rounded-full animate-pulse-ring"></span>

        <div className="relative bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 flex items-center gap-0 group-hover:gap-3 overflow-hidden">
          <span className="max-w-0 opacity-0 group-hover:max-w-xs group-hover:opacity-100 transition-all duration-500 ease-in-out whitespace-nowrap font-bold text-lg">
            Chat with us
          </span>
          <FaWhatsapp size={35} className="relative z-10 animate-wiggle" />
        </div>
      </a>
    </div>
  );
}