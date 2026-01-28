"use client"; 
import { FaWhatsapp } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { RiMessengerLine } from "react-icons/ri";
import React, { useState } from 'react';
import Link from 'next/link';


// --- Data for the 4th Section (FAQ) ---
const faqItems = [
  {
    id: 1,
    question: 'Who should enroll in the UK Taxation Course?',
    answer: "This course is ideal for aspiring tax advisors, accountants, bookkeepers, entrepreneurs, and finance professionals who want to understand the UK tax system or work with UK-based clients.",
  },
  {
    id: 2,
    question: 'What professional certifications are required for taxation jobs?',
    answer: 'The ATT (Association of Taxation Technicians) and CTA (Chartered Tax Adviser) certifications are highly recommended for taxation careers in the UK and globally.',
  },
  {
    id: 3,
    question: 'How long does the LMS Technical Support take?',
    answer: 'Most technical issues are resolved within 2-4 hours during business days. Complex issues involving third-party software may take up to 24 hours.',
  },
  {
    id: 4,
    question: 'Can I get a refund if I drop out of the course?',
    answer: 'Our refund policy is detailed in the terms and conditions. Generally, a partial refund is available within the first 7 days, provided you have accessed less than 10% of the course content.',
  },
  {
    id: 5,
    question: 'Are the course materials updated for the current tax year?',
    answer: 'Yes, all our course modules are rigorously updated every tax year (usually by April) to ensure compliance with the latest HMRC rules and regulations.',
  },
];


// --- FAQ Item Component ---
interface FAQItemProps {
  item: (typeof faqItems)[0];
  isOpen: boolean;
  toggle: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ item, isOpen, toggle }) => {
  return (
    <div className="w-full bg-white">
    <div className="border border-gray-300 rounded-xl shadow-md overflow-hidden mb-4 transition-all duration-300">
      
      {/* Header/Question (Always Visible) */}
      <button 
        onClick={toggle}
        className="flex justify-between items-center w-full p-6 text-left"
      >
        <div className="flex items-center space-x-4">
          <span className={`text-xl font-bold ${isOpen ? 'text-indigo-800' : 'text-gray-500'}`}>
            {item.id.toString().padStart(2, '0')}
          </span>
          <h3 className="text-lg font-semibold text-gray-800">
            {item.question}
          </h3>
        </div>
        
        {/* Toggle Button */}
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300 ${isOpen ? 'bg-[#3D4098]' : 'bg-[#3D4098] hover:bg-[#3D4098]'}`}>
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M20 12H4" : "M12 4v16m8-8H4"} />
          </svg>
        </div>
      </button>

      {/* Answer Content (Expandable) */}
      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100 p-6 pt-0' : 'max-h-0 opacity-0'}`}
      >
        <div className="text-gray-600 border-t border-gray-100 pt-4">
          {item.answer}
        </div>
      </div>
    </div>
    </div>
  );
};


// --- 4. FAQ List Section Component ---
const FAQListSection: React.FC = () => {
    const [openId, setOpenId] = useState<number | null>(1); // Default to first item open

    const toggleItem = (id: number) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section className="bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                {faqItems.map((item) => (
                    <FAQItem 
                        key={item.id}
                        item={item}
                        isOpen={item.id === openId}
                        toggle={() => toggleItem(item.id)}
                    />
                ))}
            </div>
        </section>
        
    );
};
 


const serviceCards = [
  {
    title: 'LMS Technical Support',
    summary: 'Facing issues with our Learning Management System (LMS)? Get help with login problems, video playback, course access, assignment submission, quiz errors, and technical difficulties.',
    imageSrc: '/Help desk 1.png', 
    link: '#lms-support',
  },
  {
    title: 'Career Guidance',
    summary: 'Explore career opportunities in corporate and taxation fields. Get guidance on professional certifications and career paths.',
    imageSrc: '/Help desk 2.png', 
    link: '#career-guidance',
  },
];

const HeroContactSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-8">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              <span className="text-[#3D4098]">We're </span>
              <span className="text-[#15A959] bg-clip-text bg-gradient-to-r from-indigo-600 to-green-500">
                Here
              </span>
              <span className="text-[#3D4098]"> to Assist </span>
            </h1>
            <p className="text-3xl text-gray-700 leading-relaxed max-w-md mx-auto lg:mx-0">
              Tell us what you need help with and we'll respond as soon as possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <a
    className="bg-[#3D4098] py-4 px-10 text-white font-bold text-lg rounded-lg"
    href="https://docs.google.com/forms/d/e/1FAIpQLSe0xltybDdhgmuadGDd6MJ8YU_wQejb9qRXZ5wYEIJgTIeQag/viewform"
    target="_blank"
    rel="noopener noreferrer"
  >
    Enroll Now
  </a>
              {/* <button className="px-8 py-3 w-48 bg-white text-[#3D4098] font-semibold rounded-lg border-2 border-indigo-300 shadow-md hover:bg-indigo-50 transition transform hover:scale-105">
                Explore
              </button> */}
            </div>
          </div>
          <div className="flex justify-center lg:justify-end relative">
            <div className="absolute inset-0 m-auto w-3/4 h-3/4 rounded-full blur-3xl  z-0 hidden lg:block"></div>
            <div 
              className="relative w-full max-w-lg h-96 lg:h-[512px] overflow-hidden rounded-3xl z-10"
              style={{
                transform: 'rotateZ(-5deg) rotateY(10deg) scale(1.05)',
                transformOrigin: 'bottom right',
              }}
            >
              <img
                src="/Help desk.png" 
                alt="Customer service agent assisting clients"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


const TwoCardServicesSection: React.FC = () => {
  return (
    <section className="bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
            {/* <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Dedicated Support Services
            </h2> */}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {serviceCards.map((card, index) => (
            <Link 
              key={index} 
              href={card.link} 
              className="block p-5 bg-white rounded-xl shadow-2xl transition transform hover:scale-[1.02] hover:shadow-3xl border border-gray-100"
            >
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-full md:w-1/3 h-52 md:h-48 overflow-hidden rounded-lg flex-shrink-0">
                  <img
                    src={card.imageSrc}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 space-y-3 p-2">
                  <h3 className="text-2xl font-bold text-[#3D4098] hover:text-[#3D4098] transition">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-base">
                    {card.summary}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
      </div>
    </section>
  );
};


const ContactInfoAndFAQIntroSection: React.FC = () => {
    return (
        <section className="bg-gray-50 py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                
                {/* Top Banner: Support & Help Desk */}
                <div className="bg-gradient-to-r from-green-600 to-[#3D4098] text-white rounded-xl p-8 sm:p-12 shadow-2xl text-center mb-16">
                    <div className="flex flex-col items-center space-y-4">
                        <div className="w-16 h-16 ">
                            {/* Support Icon */}
                            {/* <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.182 3.182m0 0l-4.596 4.596m4.596-4.596L14 10m4.364 0a9 9 0 11-12.728 0 9 9 0 0112.728 0zm-1.414 7.071L12 14.899m0 0l-3.536 3.536m3.536-3.536l-2.122-2.121m2.122 2.121l2.121-2.121m-2.121 2.121L12 12.778M7 7l2.121 2.121"></path></svg> */}
                        <img src="46.png" alt="" />
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-extrabold">
                            Support & Help Desk
                        </h2>
                        <p className="mt-2 text-lg font-bold opacity-90">
                            For any query please feel free to contact on this number
                        </p>
                    </div>

                    {/* Phone Number */}
                    <p className="text-5xl sm:text-6xl font-bold tracking-tight mt-6 mb-4">
                        +92 330 3966662
                    </p>
                    
                    {/* Social Icons */}
                    <div className="flex justify-center space-x-6 pt-2">
                        
                        {/* WhatsApp Icon */}
                        <div className="w-10 h-10 rounded-full items-center justify-center p-1 cursor-pointer hover:bg-opacity-20 transition">
                            <span className="text-4xl"><FaWhatsapp /></span>
                            {/* <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12.03 21.6c-5.18 0-9.4-4.22-9.4-9.4 0-1.74.5-3.37 1.36-4.8l-1.4 5.3-1.6 6.1.4 1.4 2.1-.6c1.37.76 2.92 1.18 4.54 1.18zm5.5-3.3c-.6 0-1.14-.15-1.6-.45-.46-.3-.85-.7-1.1-1.15s-.45-1-.45-1.6.15-1.14.45-1.6c.3-.46.7-.85 1.15-1.1s1-.45 1.6-.45.96.15 1.4.45.7.7.95 1.15.35 1.05.35 1.6-.15 1.14-.45 1.6c-.3.46-.7.85-1.15 1.1s-1 .45-1.6.45zM12.03 2.4c-4.3 0-8.1 2.3-10.2 5.7l.5 1.8c.87-.2 1.8-.3 2.7-.3 4.3 0 7.8 3.5 7.8 7.8s-3.5 7.8-7.8 7.8c-1 0-1.9-.2-2.8-.4l-2.1.6 1.4-5.3c-1.1-1.8-1.7-4-1.7-6.3 0-5.18 4.22-9.4 9.4-9.4 5.18 0 9.4 4.22 9.4 9.4s-4.22 9.4-9.4 9.4c-1.74 0-3.37-.5-4.8-1.36l-5.3 1.4 1.4-5.3c.76-1.37 1.18-2.92 1.18-4.54 0-5.18-4.22-9.4-9.4-9.4z"/></svg> */}
                        </div>

                        {/* Messenger/Chat Icon */}
                        <div className="w-10 h-10 rounded-full flex items-center justify-center p-1 cursor-pointer hover:bg-opacity-20 transition">
                           <span className="text-4xl"><RiMessengerLine /></span>
                            {/* <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12c0 3.39 1.58 6.42 4.04 8.23l.11.08.06.02.04.01.03.01.03.01.02.01.01.01H12c5.52 0 10-4.48 10-10S17.52 2 12 2zm1 14H7v-2h6v2zm3-4H7v-2h9v2z"/></svg> */}
                        </div>
                        
                        {/* Facebook Icon */}
                        <div className="w-10 h-10 rounded-full flex items-center justify-center p-1 cursor-pointer hover:bg-opacity-20 transition">
                           <span className="text-4xl"><CiFacebook /></span>
                             {/* <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.6 9.13 8.35 9.83V15.4h-2.1v-3.4h2.1V9.45c0-2.08 1.25-3.23 3.14-3.23.9 0 1.69.07 1.92.1v2.7h-1.6c-1.04 0-1.25.5-1.25 1.25V12h2.95l-.47 3.4h-2.48v6.43C18.4 21.13 22 16.99 22 12z"/></svg> */}
                        </div>
                    </div>
                </div>
                
                {/* FAQ Intro Text */}
                <div className="text-center mt-8">
                    <p className="text-lg font-medium text-[#3D4098] uppercase tracking-wider">
                        — FAQs
                    </p>
                    <h2 className="mt-2 text-4xl font-semibold text-gray-600 sm:text-5xl">
                        Frequently Asked Questions
                    </h2>
                    <p className="mt-4 text-xl text-gray-600 max-w-4xl mx-auto">
                        Find answers to common questions about the UK Taxation Course, including eligibility, course content, certification, and career opportunities. Get the clarity you need to start your tax career with confidence.
                    </p>
                </div>
                

            </div>
        </section>
    );
}


export default function CompleteServicesPage() {
    return (
        <div className="min-h-screen bg-white">
            
            {/* SECTION 1: HERO CONTACT SECTION */}
            <HeroContactSection />

            {/* SECTION 2: TWO-CARD SERVICES SECTION */}
            <TwoCardServicesSection />

            {/* SECTION 3: CONTACT INFO & FAQ INTRO */}
            <ContactInfoAndFAQIntroSection />
            
            {/* SECTION 4: FAQ LIST SECTION */}
            <FAQListSection />
{/* Floating WhatsApp Button */}
<a
  href="https://wa.me/923377774856?text=Hello%20ICT%20Team%2C%20I%20am%20interested%20in%20your%20courses%20and%20seek%20your%20guidance." 
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-8 right-8 z-[100] flex items-center justify-center group"
  aria-label="Chat on WhatsApp"
>
  {/* The Radar Ripples (Animations added below) */}
  <span className="absolute w-full h-full bg-[#25D366] rounded-full animate-ping opacity-75"></span>
  <span className="absolute w-full h-full bg-[#25D366] rounded-full animate-pulse-ring"></span>

  {/* Main Button Body */}
  <div className="relative bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 flex items-center gap-0 group-hover:gap-3 overflow-hidden">
    
    {/* Tooltip text: Now slides and fades */}
    <span className="max-w-0 opacity-0 group-hover:max-w-xs group-hover:opacity-100 transition-all duration-500 ease-in-out whitespace-nowrap font-bold text-lg">
      Chat with us
    </span>

    <FaWhatsapp size={35} className="relative z-10 animate-wiggle" />
  </div>
</a>
        </div>
    );
}