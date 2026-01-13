"use client";

import { useState } from "react";
import { FaFacebookF, FaBars, FaX } from "react-icons/fa6";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";
import { LuYoutube } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* TOP BAR */}
      <div className="bg-[#3D4098]">
        <div className="max-w-[1400px] mx-auto flex flex-wrap items-center justify-between gap-4 px-6 py-3">
          
          {/* Social */}
          <div className="flex items-center gap-4 text-white text-lg">
            <a href="#" className="hover:text-blue-400"><FaFacebookF /></a>
            <a href="#" className="hover:text-pink-400"><AiOutlineInstagram /></a>
            <a href="#" className="hover:text-sky-400"><FiTwitter /></a>
            <a href="#" className="hover:text-red-500"><LuYoutube /></a>
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

          {/* Links */}
          <div className="flex gap-3">
            <a className="px-4 py-1 text-sm border border-white text-white" href="/certificate_verification">
              Certificate
            </a>
            <a className="px-4 py-1 text-sm text-white hover:bg-[#15A959]" href="#">
              ICT LMS
            </a>
          </div>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <div className="border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 py-4">
          
          {/* Logo */}
          <img src="/logo ict.png" alt="logo" className="w-48" />

          {/* Hamburger */}
          <button onClick={() => setOpen(!open)} className="text-2xl lg:hidden">
            {open ? <FaX /> : <FaBars />}
          </button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8 text-[17px] font-medium">
            <NavLinks />
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="lg:hidden max-w-[1400px] mx-auto flex flex-col gap-4 px-6 pb-6 text-lg">
            <NavLinks />
          </div>
        )}
      </div>
    </>
  );
}

function NavLinks() {
  return (
    <>
      <a className="hover:text-[#15A959] font-normal" href="/">Home</a>
      <a className="hover:text-[#15A959] font-normal" href="/about">About Us</a>
      <a className="hover:text-[#15A959] font-normal" href="/courses">Courses</a>
      <a className="hover:text-[#15A959] font-normal" href="/mentors">Our Mentors</a>
      <a className="hover:text-[#15A959] font-normal" href="/feedback">Feedback</a>
      <a className="hover:text-[#15A959] font-normal" href="/contact">Contact Us</a>
      <a className="hover:text-[#15A959] font-normal" href="/blogs">Blogs</a>
      <a className="hover:text-[#15A959] font-normal" href="/help_desk">Help Desk</a>
      <a className="hover:text-[#15A959] font-normal" href="/career">Careers</a>
    </>
  );
}

