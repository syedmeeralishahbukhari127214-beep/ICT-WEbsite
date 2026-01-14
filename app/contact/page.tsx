"use client"; 
import { FiTwitter } from "react-icons/fi";
import { LuYoutube } from "react-icons/lu";
import { FaFacebookF } from "react-icons/fa6";
import { AiOutlineInstagram } from "react-icons/ai";
import { TiTick } from "react-icons/ti";
import { MdCallEnd } from "react-icons/md";
import { RiMapPinLine } from "react-icons/ri";
// Yeh directive bataati hai ki is file ko client side par render karna hai, 
// taki React Hooks (jaise ki useState) kaam kar sakein.

import React, { useState } from 'react';

// --- Data for the Interactive Tabs ---
const contactData = {
  Islamabad: {
    phone: '+923710194615',
    email: 'admission@ict.net.pk',
    location: 'Plot No. 63, Service Road, I-10/3 North, Islamabad 44000',
    image: '/isb.png', // Example Image (Faisal Mosque or Monument)
    hours: [
      { day: 'Monday', time: '9 am – 5:30 pm' },
      { day: 'Tuesday–Friday', time: '9 am – 5:30 pm' },
      { day: 'Saturday', time: '9 am – 5:30 pm' },
    ],
  },
  Lahore: {
    phone: '+924212345678',
    email: 'info.lhr@ict.net.pk',
    location: 'Mall Road, near Lahore Museum, Lahore 54000',
    image: '/lah.png', // Example Image (Badshahi Mosque)
    hours: [
      { day: 'Monday–Friday', time: '9 am – 6 pm' },
      { day: 'Saturday', time: '9 am – 1 pm' },
    ],
  },
  Karachi: {
    phone: '+922198765432',
    email: 'info.khi@ict.net.pk',
    location: 'Shahrah-e-Faisal, Karachi 74400',
    image: '/kar.png', // Example Image (Frere Hall/Sea View)
    hours: [
      { day: 'Monday–Friday', time: '10 am – 7 pm' },
      { day: 'Saturday', time: '10 am – 3 pm' },
    ],
  },
};

// --- Component for Interactive Tabs ---
const InteractiveContactTabs: React.FC = () => {
  const [activeCity, setActiveCity] = useState('Islamabad'); 
  const currentCityData = contactData[activeCity as keyof typeof contactData];
  
  return (
    <div className="w-full bg-white">
    <section className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Top Heading */}
        <p className="text-sm font-semibold text-[#3D4098] tracking-wider mb-2">CONTACT INFORMATION</p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#3D4098] mb-10">
          Let Your Wanderlust <br></br> Guide You
        </h2>

        {/* City Buttons / Tabs */}
        <div className="flex justify-center space-x-4 mb-12">
          {Object.keys(contactData).map((city) => (
            <button
              key={city}
              onClick={() => setActiveCity(city)}
              className={`px-6 py-3 font-semibold rounded-xl transition ${
                activeCity === city
                  ? 'bg-[#3D4098] text-white shadow-lg'
                  : 'bg-white text-[#3D4098] border-2 border-indigo-300 hover:bg-indigo-50'
              }`}
            >
              {city}
            </button>
          ))}
        </div>

        {/* Contact Details Card */}
        <div className="p-8 bg-white rounded-xl shadow-2xl border border-gray-100 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            
            {/* 1. Contact Details */}
            <div className="space-y-4 md:col-span-1">
              <h3 className="font-bold text-lg text-gray-700">Requesting A Call:</h3>
              <div className="flex items-center space-x-2 text-indigo-700">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                <span>{currentCityData.phone}</span>
              </div>
              
              <h3 className="font-bold text-lg text-gray-700 pt-3">E-mail:</h3>
              <div className="flex items-center space-x-2 text-[#3D4098]">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.848 5.232a2 2 0 002.304 0L21 8m-2 10a2 2 0 01-2 2H7a2 2 0 01-2-2V8a2 2 0 012-2h10a2 2 0 012 2v10z"></path></svg>
                <span>{currentCityData.email}</span>
              </div>

              <h3 className="font-bold text-lg text-gray-700 pt-3">Location:</h3>
              <div className="flex items-start space-x-2 text-[#3D4098]">
                <svg className="h-5 w-5 mt-1 text-[#3D4098] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"></path><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                <span className="leading-relaxed">{currentCityData.location}</span>
              </div>
            </div>

            {/* 2. Working Hours */}
            <div className="space-y-4 md:col-span-1 border-t md:border-t-0 md:border-l border-gray-200 pt-4 md:pt-0 md:pl-8">
              <h3 className="font-bold text-lg text-gray-700 mb-2">Operating Hours:</h3>
              {currentCityData.hours.map((item, index) => (
                <div key={index} className="flex justify-between items-center text-[#3D4098]">
                  <div className="font-medium">{item.day}</div>
                  <div className="text-sm bg-indigo-50 rounded-full px-3 py-1 font-semibold text-[#3D4098]">{item.time}</div>
                </div>
              ))}
            </div>

            {/* 3. City Image */}
            <div className="md:col-span-2 lg:col-span-1 md:border-t md:border-t-0 md:border-l border-gray-200 pt-4 md:pt-0 lg:pl-8">
              <img
                src={currentCityData.image}
                alt={`${activeCity} Landmark`}
                className="w-full h-auto object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
    </div>
  );
};

// --- Complete Page Component ---
export default function CompleteContactPage() {
  return (
    // Yeh div poore page ke liye background aur minimum height set karega
    <div className="min-h-screen bg-gray-50">
      
      {/* ----------------------------------------------------
        SECTION 1: ORIGINAL CONTACT BLOCK (Text + 3-Image Structure)
        ---------------------------------------------------- 
      */}
{/* Hero Section */}
<div className="flex flex-col lg:flex-row justify-start px-4 sm:px-10 lg:px-28 py-6 sm:py-8 lg:py-10 gap-6 sm:gap-10 lg:gap-14">

  {/* LEFT SOCIAL SECTION — hidden on mobile */}
  <div className="hidden lg:block">
    <h1 className="rotate-270 text-lg -ml-1 font-extrabold text-[#15A959]">ICT</h1>
    <p className="w-1 h-28 font-bold bg-black ml-3 mt-3 mb-3"></p>

    <a className="mt-5 flex text-[#3D4098] ml-1 text-lg" href=""><FaFacebookF/></a> 
    <a className="mt-5 flex ml-1.5 text-[#3D4098] text-lg" href=""><FiTwitter /></a> 
    <a className="mt-5 flex ml-1.5 text-[#3D4098] text-lg" href=""><AiOutlineInstagram /></a> 
    <a className="mt-5 flex ml-1.5 text-[#3D4098] text-lg" href=""><LuYoutube /></a> 

    <p className="w-1 h-54 bg-black ml-3 mt-3 mb-3"></p>
  </div>

  {/* TEXT SECTION */}
  <div className="text-center lg:text-left">
    <h1 className="text-2xl sm:text-3xl lg:text-5xl text-[#3D4098] mt-6 sm:mt-10 lg:mt-30 font-extrabold">
      We're Here to <span className="text-[#15A959]">Help</span>
    </h1> 
    <p className="text-base sm:text-lg lg:text-2xl font-sans mt-4 sm:mt-6 lg:mt-9">
      Have a question or need support? Send us a <br /> message and we'll respond as soon as possible.
    </p>
    <div className="mt-6 sm:mt-8 lg:mt-12 gap-4 flex flex-col sm:flex-row justify-center lg:justify-start">
      <a className="bg-[#3D4098] py-3 sm:py-4 px-8 sm:px-10 lg:px-10 text-white font-bold text-base sm:text-lg lg:text-xl rounded-lg text-center" href="">
        Contact Us
      </a>
      <a
        className="py-3 px-8 sm:px-10 lg:px-12 border-[#3D4098] border-2 lg:border-3 text-[#3D4098] font-bold text-base sm:text-lg lg:text-xl rounded-lg text-center"
        href="https://docs.google.com/forms/d/e/1FAIpQLSe0xltybDdhgmuadGDd6MJ8YU_wQejb9qRXZ5wYEIJgTIeQag/viewform"
        target="_blank"
        rel="noopener noreferrer"
      >
        Enroll Now
      </a>
    </div>
  </div> 

  {/* HERO IMAGES */}
  <div className="flex justify-center lg:block">
    <img className="h-60 sm:h-72 lg:h-96 w-44 sm:w-56 lg:w-72 mt-8 lg:mt-14" src="30.png" alt="" />
  </div>
  <div className="flex flex-col items-center lg:block">
    <div>
      <img className="h-36 sm:h-44 lg:h-46 w-44 sm:w-56 lg:w-72 mt-6 lg:mt-14 -ml-0 lg:-ml-8" src="31.png" alt="" />
    </div>
    <div>
      <img className="h-36 sm:h-44 lg:h-46 w-44 sm:w-56 lg:w-72 mt-4 -ml-0 lg:-ml-8" src="32.png" alt="" />
    </div>
  </div>
</div>

      {/* ----------------------------------------------------
        SECTION 2: WANDERLUST FORM
        ---------------------------------------------------- 
      */}
      <section className="py-20 px-4 md:px-8 bg-purple-50">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between ">
          
          {/* Left Side: Illustration and Heading */}
          <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            
            {/* Illustration Placeholder */}
            <div className="w-full max-w-md lg:max-w-none h-auto">
                <img
                    src="35.png" 
                    alt="Travel wanderlust illustration"
                    className="w-[500px] h-auto object-contain"
                />
            </div>
          </div>

          {/* Right Side: The Form */}
            
          <div className="lg:w-1/2 w-full p-8 bg-white rounded-xl shadow-2xl">
            <form className="space-y-6">
              
              {/* Row 1: Email and Phone */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your Email</label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <input type="email" id="email" placeholder="Your Email" className="w-full p-3 border border-gray-300 rounded-lg pr-10" />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-indigo-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Your Phone</label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <input type="tel" id="phone" placeholder="Your Phone" className="w-full p-3 border border-gray-300 rounded-lg pr-10" />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Row 2: Address */}
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">Your Address</label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input type="text" id="address" placeholder="Your Address" className="w-full p-3 border border-gray-300 rounded-lg pr-10" />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"></path><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  </div>
                </div>
              </div>

              {/* Row 3: Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <textarea id="message" rows={4} placeholder="Write Message..." className="w-full p-3 border border-gray-300 rounded-lg"></textarea>
                  <div className="absolute top-3 right-3 flex items-start pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 8l7.848 5.232a2 2 0 002.304 0L21 8m-2 10a2 2 0 01-2 2H7a2 2 0 01-2-2V8a2 2 0 012-2h10a2 2 0 012 2v10z"></path></svg>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button type="submit" className="w-full py-3 bg-[#3D4098] text-white font-semibold rounded-lg shadow-md  transition">
                Send Message
              </button>
            </form>
          </div>
          
        </div>
      </section>

      {/* ----------------------------------------------------
        SECTION 3: INTERACTIVE CONTACT TABS (Lahore/Islamabad/Karachi)
        ---------------------------------------------------- 
      */}
      <InteractiveContactTabs />

    </div>
  );
}