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
} from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";
import { LuYoutube } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";

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
    <div className="w-full bg-white">

      {/* ================= TOP BAR ================= */}
      <div className="bg-[#3D4098]">
        <div className="max-w-[1400px] mx-auto flex flex-wrap items-center justify-between gap-4 px-6 py-3">

          {/* Social Icons */}
          <div className="flex items-center gap-4 text-white text-lg">
            <a href="https://www.facebook.com/Instituteofcorporateandtaxation" className="hover:text-blue-400"><FaFacebookF /></a>
            <a href="https://www.instagram.com/ict_pakistan/" className="hover:text-pink-400"><AiOutlineInstagram /></a>
            <a href="https://x.com/IctIsbd2022" className="hover:text-sky-400"><FiTwitter /></a>
            <a href="https://www.youtube.com/@ICTPakistanofficial" className="hover:text-red-500"><LuYoutube /></a>
            <a href="https://www.linkedin.com/company/ict-isb/" className="hover:text-blue-500"><FaLinkedinIn /></a>
            <a href="https://www.tiktok.com/@icttaxation" className="hover:text-black"><FaTiktok /></a>
          </div>

          {/* Call & Enroll */}
          <div className="flex items-center gap-4">
            <a
              href="tel:+923710194615"
              className="flex items-center gap-2 text-white hover:text-[#0073a8] text-sm"
            >
              <FaPhoneAlt size={14} /> Call Us
            </a>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSe0xltybDdhgmuadGDd6MJ8YU_wQejb9qRXZ5wYEIJgTIeQag/viewform"
              target="_blank"
              className="px-6 py-2 text-sm font-semibold text-white bg-[#15A959] rounded-full hover:bg-green-600 transition"
            >
              Enroll Now
            </a>
          </div>

          {/* Search */}
          <div className="flex items-center gap-1 w-full sm:w-auto">
            <input
              className="bg-white rounded-md px-3 py-1 w-full sm:w-56"
              type="text"
              placeholder="Search..."
            />
            <span className="py-2 px-3 rounded-md text-white bg-[#15A959] cursor-pointer">
              <CiSearch />
            </span>
          </div>

          {/* Extra Links */}
          <div className="flex gap-3">
            <a className="px-4 py-1 text-sm border border-white text-white" href="/certificate-verification">
              Certificate
            </a>
            <a className="px-4 py-1 text-sm text-white bg-[#15A959]" href="https://lms.ictpk.cloud">
              ICT LMS
            </a>
          </div>
        </div>
      </div>

      {/* ================= MAIN NAVBAR ================= */}
      <div className="border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <img src="/logo ict.webp" alt="logo" className="w-48" />

          {/* Hamburger */}
          <button onClick={() => setOpen(!open)} className="text-2xl lg:hidden">
            {open ? <FaTimes /> : <FaBars />}
          </button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6 text-[16px] font-medium">
            <NavLinks isMobile={false} />
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="lg:hidden max-w-[1400px] mx-auto flex flex-col gap-4 px-6 pb-6 text-lg">
            <NavLinks isMobile={true} />
          </div>
        )}
      </div>
    </div>
  );
}

/* ================= NAV LINKS ================= */
function NavLinks({ isMobile }) {
  return (
    <>
      <a href="/" className="hover:text-[#15A959] font-normal">Home</a>
      <a href="/about" className="hover:text-[#15A959] font-normal">About Us</a>

      <CoursesDropdown isMobile={isMobile} />

      <a href="/mentors" className="hover:text-[#15A959] font-normal">Our Mentors</a>
      <StudentDropdown isMobile={isMobile} />
      <a href="/feedback" className="hover:text-[#15A959] font-normal">Feedback</a>
      <a href="/contact" className="hover:text-[#15A959] font-normal">Contact Us</a>
      <a href="/blogs" className="hover:text-[#15A959] font-normal">Blogs</a>
      <a href="/career" className="hover:text-[#15A959] font-normal">Careers</a>
    </>
  );
}

/* ================= COURSES DROPDOWN ================= */
function CoursesDropdown({ isMobile }) {
  const [courses, setCourses] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(""); // "pak" | "int" | ""
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000); // 5s timeout

    async function fetchCourses() {
      try {
        const data = await client.fetch(coursesQuery, { signal: controller.signal });
        setCourses(data);
      } catch (err) {
        if (err.name === "AbortError") {
          console.warn("Courses fetch aborted due to timeout");
        } else {
          console.error("Courses fetch error:", err);
        }
      } finally {
        setLoading(false);
        clearTimeout(timeoutId);
      }
    }

    fetchCourses();
  }, []);

  const internationalCountries = ["UAE", "USA", "UK", "Saudi", "Canadian"];
  const internationalCourses = courses.filter(c => internationalCountries.includes(c.country));
  const pakistanCourses = courses.filter(c => !internationalCountries.includes(c.country));

  const toggleSubmenu = (name) => {
    if (isMobile) setOpenSubmenu(prev => (prev === name ? "" : name));
  };

  const arrowIcon = (name) => {
    if (isMobile) return ">";
    return openSubmenu === name ? ">" : ">";
  };

  if (loading) {
    return (
      <div className="px-4 py-2 text-medium text-[#15A959]"> Courses </div>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => !isMobile && setIsOpen(true)}
      onMouseLeave={() => !isMobile && setIsOpen(false)}
    >
      <div className="flex items-center gap-1">
        <Link href="/courses" className="hover:text-[#15A959] font-normal">Courses</Link>
        <button
          className="flex items-center text-[10px] lg:text-[12px] transition-transform"
          onClick={() => isMobile && setIsOpen(!isOpen)}
        >
          <FaChevronDown className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
        </button>
      </div>

      {isOpen && (
        <div className={`${isMobile ? "pl-4 mt-2" : "absolute left-0 top-full pt-2 w-64 z-50"}`}>
          <div className={`${isMobile ? "" : "bg-white shadow-xl rounded-md py-2"}`}>
            {/* Pakistan Courses */}
            <div
              className="relative group"
              onMouseEnter={() => !isMobile && setOpenSubmenu("pak")}
              onMouseLeave={() => !isMobile && setOpenSubmenu("")}
            >
              <button
                className="w-full flex justify-between items-center px-4 py-2 text-sm hover:bg-gray-50"
                onClick={() => toggleSubmenu("pak")}
              >
                Pakistan Courses <span>{arrowIcon("pak")}</span>
              </button>
              {openSubmenu === "pak" && (
                <div className={`${isMobile ? "pl-4" : "absolute top-0 left-full w-64 bg-white shadow-lg rounded-md py-2"} z-50`}>
                  {pakistanCourses.map(c => (
                    <a
                      key={c._id}
                      href={`/courses/${c.slug.current}`}
                      className="block px-4 py-2 text-sm hover:bg-gray-50 hover:text-[#15A959]"
                    >
                      {c.title}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* International Courses */}
            <div
              className="relative group"
              onMouseEnter={() => !isMobile && setOpenSubmenu("int")}
              onMouseLeave={() => !isMobile && setOpenSubmenu("")}
            >
              <button
                className="w-full flex justify-between items-center px-4 py-2 text-sm hover:bg-gray-50"
                onClick={() => toggleSubmenu("int")}
              >
                International Courses <span>{arrowIcon("int")}</span>
              </button>
              {openSubmenu === "int" && (
                <div className={`${isMobile ? "pl-4" : "absolute top-0 left-full w-64 bg-white shadow-lg rounded-md py-2"} z-50`}>
                  {internationalCourses.map(c => (
                    <a
                      key={c._id}
                      href={`/courses/${c.slug.current}`}
                      className="block px-4 py-2 text-sm hover:bg-gray-50 hover:text-[#15A959]"
                    >
                      {c.title} ({c.country})
                    </a>
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
/* ================= STUDENT DROPDOWN ================= */
function StudentDropdown({ isMobile }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => !isMobile && setIsOpen(true)}
      onMouseLeave={() => !isMobile && setIsOpen(false)}
    >
      <button
        className="flex items-center gap-1 hover:text-[#15A959] font-normal"
        onClick={() => isMobile && setIsOpen(!isOpen)}
      >
        Student Services
        <FaChevronDown className={`text-[10px] transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen && (
        <div className={`${isMobile ? "pl-4 mt-2" : "absolute left-0 top-full pt-2 w-48 z-50"}`}>
          <div className={`${isMobile ? "" : "bg-white shadow-xl  rounded-md py-2"}`}>
            <a
              href="https://ict.net.pk/lead"
              className="block px-4 py-2 text-sm hover:bg-gray-50 hover:text-[#15A959]"
            >
              Admission Form
            </a>
            <a
              href="/help_desk"
              className="block px-4 py-2 text-sm hover:bg-gray-50 hover:text-[#15A959]"
            >
              Help Desk
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
