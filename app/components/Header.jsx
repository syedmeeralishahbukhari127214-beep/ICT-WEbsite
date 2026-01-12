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
      <div className="flex flex-wrap items-center justify-between gap-4 px-4 lg:px-16 py-3 bg-[#3D4098]">
        {/* Social */}
        <div className="flex items-center gap-3 text-white text-lg">
          {/* Facebook */}
  <a
    href="https://www.facebook.com/Instituteofcorporateandtaxation?rdid=VUbvuGmGX0dl8g1f&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1AMUrXLsPZ%2F#"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-blue-400 transition"
  >
    <FaFacebookF />
  </a>

  {/* Instagram */}
  <a
    href="https://www.instagram.com/ict_pakistan/?igsh=MXRwNDR6ZnpiN3pqNg%3D%3D#"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-pink-400 transition"
  >
    <AiOutlineInstagram />
  </a>

  {/* Twitter / X */}
  <a
    href="https://x.com/IctIsbd2022"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-sky-400 transition"
  >
    <FiTwitter />
  </a>

  {/* YouTube */}
  <a
    href="https://www.youtube.com/@ICTPakistanofficial"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-red-500 transition"
  >
    <LuYoutube />
  </a>
        </div>

        {/* Search */}
        <div className="flex items-center gap-1 w-full sm:w-auto">
          <input
            className="bg-white rounded-md px-2 py-1 w-full sm:w-48"
            type="text"
            placeholder="Search..."
          />
          <span className="py-2 px-3 rounded-md text-white bg-[#15A959] cursor-pointer">
            <CiSearch />
          </span>
        </div>

        {/* Links */}
        <div className="flex gap-2">
          <a className="px-3 py-1 text-sm border border-white text-white" href="/certificate_verification">
            Certificate
          </a>
          <a className="px-3 py-1 text-sm text-white hover:bg-[#15A959]" href="https://lms.ictpk.cloud/#login">
            ICT LMS
          </a>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <div className="border-b border-gray-200">
        <div className="flex items-center justify-between px-4 lg:px-28 py-4">
          {/* Logo */}
          <img src="/logo ict.png" alt="logo" className="w-40 lg:w-64" />

          {/* Hamburger (ALL screens) */}
          <button
            onClick={() => setOpen(!open)}
            className="text-2xl lg:hidden"
          >
            {open ? <FaX /> : <FaBars />}
          </button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-7 text-lg">
            <NavLinks />
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="lg:hidden flex flex-col gap-4 px-6 pb-6 text-lg">
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
      <a className="hover:text-[#15A959]" href="/">Home</a>
      <a className="hover:text-[#15A959]" href="/About">About Us</a>
      <a className="hover:text-[#15A959]" href="/courses">Courses</a>
      <a className="hover:text-[#15A959]" href="/mentors">Our Mentors</a>
      <a className="hover:text-[#15A959]" href="/Feedback">Feedback</a>
      <a className="hover:text-[#15A959]" href="/contact">Contact Us</a>
      <a className="hover:text-[#15A959]" href="/blogs">Blogs</a>
      <a className="hover:text-[#15A959]" href="/Help_desk">Help Desk</a>
      <a className="hover:text-[#15A959]" href="/career">Careers</a>
    </>
  );
}
