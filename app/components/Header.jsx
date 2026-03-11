"use client";

import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import { coursesQuery } from "@/sanity/lib/queries";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaTiktok,
  FaBars,
  FaTimes,
  FaChevronDown,
  FaPhoneAlt,
  FaGraduationCap,
  FaEnvelope,
  FaRegClock,
  FaCommentDots,
  FaMapMarkerAlt,
  FaSearch,
  FaBullhorn,
} from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";
import { LuYoutube } from "react-icons/lu";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="w-full bg-white sticky top-0 z-[100] shadow-sm">
      {/* ================= TOP BAR (Purple) ================= */}
      {/* ================= TOP BAR (Purple) ================= */}
<div className="bg-[#3D4098] text-white">
  {/* Increased py-2 to py-3 for more height */}
  <div className="max-w-[1400px] mx-auto flex flex-wrap items-center justify-between gap-4 px-6 py-3">
    
    {/* 1. Social Icons - Increased icon sizes */}
    <div className="flex items-center gap-5 text-lg">
      <a href="https://www.facebook.com/Instituteofcorporateandtaxation" target="_blank" className="hover:text-blue-400 transition-colors"><FaFacebookF size={16} /></a>
      <a href="https://www.instagram.com/ict_pakistan/" target="_blank" className="hover:text-pink-400 transition-colors"><AiOutlineInstagram size={18} /></a>
      <a href="https://x.com/IctIsbd2022" target="_blank" className="hover:text-sky-400 transition-colors"><FiTwitter size={16} /></a>
      <a href="https://www.youtube.com/@ICTPakistanofficial" target="_blank" className="hover:text-red-500 transition-colors"><LuYoutube size={18} /></a>
      <a href="https://www.linkedin.com/company/ict-isb/" target="_blank" className="hover:text-blue-500 transition-colors"><FaLinkedinIn size={16} /></a>
      <a href="https://www.tiktok.com/@icttaxation" target="_blank" className="hover:text-gray-300 transition-colors"><FaTiktok size={16} /></a>
    </div>

    {/* 2. News Ticker - Increased text size and height */}
    <div className="hidden lg:flex flex-1 max-w-lg mx-4">
  <div className="flex items-center gap-3 bg-white/10 px-4 py-1.5 rounded-full text-[12px] w-full overflow-hidden border border-white/10">
    
    <span className="flex items-center gap-2 font-bold text-green-400 whitespace-nowrap">
      <FaBullhorn className="animate-bounce" size={14} /> UPDATES:
    </span>

    <div className="overflow-hidden w-full">
      <p className="whitespace-nowrap animate-ticker">
        Admissions Now Open – Take the First Step Towards a Successful Academic and Professional Future. Apply Today</p>
    </div>

  </div>
</div>

    {/* 3. Utility Links & Contact - Increased text size to text-xs (12px) */}
    <div className="flex items-center gap-6 text-xs font-normal">
      {/* number */}
      {/* Removed border-l and pl-6 to let it align better in the mobile flex column */}
<div className="flex items-center gap-2 hover:text-green-400 transition cursor-pointer">
  <a 
     // Added tel: link for mobile functionality
    className="flex items-center gap-3 w-full"
  >
    <FaPhoneAlt className="text-green-400" size={16} />
    
    {/* Changed 'hidden sm:inline' to 'block' to show on all screen sizes */}
    <span className="block tracking-wide font-medium ">
      +92 337 7774856
    </span>
  </a>
</div>

      {/* Email */}
      <div className="flex items-center gap-2 hover:text-green-400 transition cursor-pointer border-l border-white/20 pl-6">
        <a 
          href="mailto:admission@ict.net.pk" 
          className="flex items-center gap-2"
          
        >
          <FaEnvelope className="text-green-400" size={16} />
          <span className="tracking-wide font-medium">
            admission@ict.net.pk
          </span>
        </a>
      </div>
    </div>
  </div>
</div>

      {/* ================= MAIN NAVBAR (White) ================= */}
      <div className="border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 py-4">
          <Link href="/">
            <img src="/logo ict.webp" alt="ICT Logo" className="w-44 lg:w-48 cursor-pointer" />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            <nav className="flex items-center gap-6 text-[15px] font-medium text-gray-700">
              <NavLinks isMobile={false} />
            </nav>
            
            <a
              href="https://ict.net.pk/lead"
              target="_blank"
              className="px-6 py-2.5 text-sm font-bold text-white bg-[#15A959] rounded-lg hover:bg-green-600 transition shadow-md"
            >
              Enroll Now
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="text-2xl lg:hidden text-[#3D4098]">
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-6 flex flex-col gap-4 shadow-xl max-h-[80vh] overflow-y-auto">
            <NavLinks isMobile={true} />
            <div className="h-[1px] bg-gray-100 my-2" />
            
            
            <a href="https://ict.net.pk/lead" className="mt-4 w-full text-center py-3 bg-[#15A959] text-white rounded-md font-bold">
              Enroll Now
            </a>
          </div>
        )}
      </div>
    </header>
  );
}

function NavLinks({ isMobile }) {
  const linkClass = "hover:text-[#15A959] transition-colors duration-200 font-normal py-1";
  return (
    <>
      <Link href="/" className={linkClass}>Home</Link>
      <Link href="/about" className={linkClass}>About Us</Link>
      <CoursesDropdown isMobile={isMobile} />
      <Link href="/mentors" className={linkClass}>Our Mentors</Link>
      <StudentDropdown isMobile={isMobile} />
      <Link href="/contact" className={linkClass}>Contact Us</Link>
      <Link href="/blogs" className={linkClass}>Blogs</Link>
      <Link href="/career" className={linkClass}>Careers</Link>
    </>
  );
}

/* ================= COURSES DROPDOWN ================= */
function CoursesDropdown({ isMobile }) {
  const [courses, setCourses] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(""); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCourses() {
      try {
        const data = await client.fetch(coursesQuery);
        setCourses(data || []);
      } catch (err) { console.error(err); } finally { setLoading(false); }
    }
    fetchCourses();
  }, []);

  const internationalCountries = ["UAE", "USA", "UK", "Saudi", "Canadian"];
  const internationalCourses = courses.filter(c => internationalCountries.includes(c.country));
  const pakistanCourses = courses.filter(c => !internationalCountries.includes(c.country));

  const handleSubmenuClick = (menu) => {
    if (isMobile) {
      setOpenSubmenu(openSubmenu === menu ? "" : menu);
    }
  };

  if (loading) return <div className="py-1 text-gray-700">Courses</div>;

  return (
    <div 
      className="relative group" 
      onMouseEnter={() => !isMobile && setIsOpen(true)} 
      onMouseLeave={() => !isMobile && setIsOpen(false)}
    >
      <div className="flex items-center font-normal gap-1 cursor-pointer hover:text-[#15A959]">
        <Link href="/courses">Courses</Link>
        <button onClick={() => isMobile && setIsOpen(!isOpen)}>
          <FaChevronDown className={`text-[10px] transition-transform ${isOpen ? "rotate-180" : ""}`} />
        </button>
      </div>

      {isOpen && (
        <div className={`${isMobile ? "pl-4 mt-2" : "absolute left-0 top-full pt-3 w-72 z-50"}`}>
          <div className={`${isMobile ? "border-l-2 border-gray-100" : "bg-white shadow-2xl rounded-lg py-3 border border-gray-100"}`}>
            
            {/* Pakistan Courses */}
            <div 
              className="relative" 
              onMouseEnter={() => !isMobile && setOpenSubmenu("pak")} 
              onMouseLeave={() => !isMobile && setOpenSubmenu("")}
            >
              <button 
                onClick={() => handleSubmenuClick("pak")}
                className="w-full flex justify-between items-center px-4 py-2 text-sm font-normal text-gray-800 hover:bg-gray-50 hover:text-[#15A959]"
              >
                Pakistan Courses 
                <span className={`transition-transform ${openSubmenu === "pak" ? "rotate-90" : ""}`}>
                  {isMobile ? <FaChevronDown size={10}/> : ">"}
                </span>
              </button>
              
              {openSubmenu === "pak" && (
                <div className={`${isMobile ? "pl-4 bg-gray-50/50" : "absolute top-0 left-full w-64 bg-white shadow-xl rounded-md py-2 border border-gray-100 ml-1"}`}>
                  {pakistanCourses.map(c => (
                    <Link key={c._id} href={`/courses/${c.slug.current}`} className="block px-4 py-2 text-sm font-normal text-gray-800 hover:text-[#15A959] hover:bg-gray-100">
                      {c.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* International Courses */}
            <div 
              className="relative mt-1" 
              onMouseEnter={() => !isMobile && setOpenSubmenu("int")} 
              onMouseLeave={() => !isMobile && setOpenSubmenu("")}
            >
              <button 
                onClick={() => handleSubmenuClick("int")}
                className="w-full flex justify-between items-center px-4 py-2 text-sm font-normal text-gray-800 hover:bg-gray-50 hover:text-[#15A959]"
              >
                International Courses 
                <span className={`transition-transform ${openSubmenu === "int" ? "rotate-90" : ""}`}>
                  {isMobile ? <FaChevronDown size={10}/> : ">"}
                </span>
              </button>
              
              {openSubmenu === "int" && (
                <div className={`${isMobile ? "pl-4 bg-gray-50/50" : "absolute top-0 left-full w-64 bg-white shadow-xl rounded-md py-2 border border-gray-100 ml-1"}`}>
                  {internationalCourses.map(c => (
                    <Link key={c._id} href={`/courses/${c.slug.current}`} className="block px-4 py-2 text-sm font-normal text-gray-800 hover:text-[#15A959] hover:bg-gray-100">
                      {c.title} ({c.country})
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function StudentDropdown({ isMobile }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative group" onMouseEnter={() => !isMobile && setIsOpen(true)} onMouseLeave={() => !isMobile && setIsOpen(false)}>
      <button className="flex items-center font-normal gap-1 hover:text-[#15A959] transition-colors py-1" onClick={() => isMobile && setIsOpen(!isOpen)}>
        Student Services
        <FaChevronDown className={`text-[10px]  transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen && (
        <div className={`${isMobile ? "pl-4 mt-2 " :  "absolute left-0 top-full pt-3 w-56 z-50"}`}>
          <div className={`${isMobile ? "border-l border-gray-100" : "bg-white shadow-2xl rounded-lg py-3 border border-gray-100"}`}>
            <a href="https://lms.ictpk.cloud" target="_blank" className="flex items-center gap-2 px-4 py-2.5 text-sm font-bold text-[#3D4098] hover:bg-blue-50">
              <FaGraduationCap size={16} /> ICT LMS
            </a>
            <hr className="my-1 border-gray-50" />
            <a href="https://ict.net.pk/lead" target="_blank" className="block px-4 py-2 text-sm font-normal text-gray-800 hover:bg-gray-50 hover:text-[#15A959]">Admission Form</a>
            <Link href="/help_desk" className="block px-4 py-2 text-sm font-normal text-gray-800 hover:bg-gray-50 hover:text-[#15A959]">Help Desk</Link>
            <Link href="/feedback" className="flex items-center gap-2 px-4 py-2 text-sm font-normal text-gray-800 hover:bg-gray-50 hover:text-[#15A959]">
              <FaCommentDots size={14} className="text-[#15A959]" /> Feedback
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
