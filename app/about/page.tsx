import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTiktok } from "react-icons/fa6";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";
import { LuYoutube } from "react-icons/lu";
import { TiTick } from "react-icons/ti";
import { MdCallEnd } from "react-icons/md";
import { RiMapPinLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa6";


export default function ICTPage() {
  return (
    <div className="w-full bg-white">

    <div className="w-full min-h-screen bg-white text-black font-sans">
      
      {/* HERO SECTION */}
<div className="flex flex-col lg:flex-row justify-start px-4 sm:px-10 lg:px-28 py-6 sm:py-8 lg:py-10 gap-6 sm:gap-8 lg:gap-10 relative">

  {/* LEFT SOCIAL SECTION — hidden on mobile */}
  <div className="hidden lg:block">
    <h1 className="rotate-270 text-lg -ml-1 font-extrabold text-[#15A959]"style={{ letterSpacing: '2px' }}>ICT</h1>
    <p className="w-1 h-28 font-bold bg-black ml-3 mt-3 mb-3"></p>

    <a className="mt-5 flex text-[#3D4098] ml-1 text-lg" href="https://www.facebook.com/Instituteofcorporateandtaxation?rdid=2WCHFvVL9UeBaktA&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1AMUrXLsPZ%2F#"><FaFacebookF/></a> 
    <a className="mt-5 flex ml-1.5 text-[#3D4098] text-lg" href="https://x.com/IctIsbd2022"><FiTwitter /></a> 
    <a className="mt-5 flex ml-1.5 text-[#3D4098] text-lg" href="https://www.instagram.com/ict_pakistan/?igsh=MXRwNDR6ZnpiN3pqNg%3D%3D#"><AiOutlineInstagram /></a> 
    <a className="mt-5 flex ml-1.5 text-[#3D4098] text-lg" href="https://www.youtube.com/@ICTPakistanofficial"><LuYoutube /></a>
    <a className="mt-5 flex ml-1.5 text-[#3D4098] text-lg" href="https://www.linkedin.com/company/ict-isb/"><FaLinkedinIn /></a>  
    <a className="mt-5 flex ml-1.5 text-[#3D4098] text-lg" href="https://www.tiktok.com/@icttaxation?lang=en"><FaTiktok /></a> 
    <p className="w-1 h-54 font-bold bg-black ml-3 mt-3 mb-3"></p>
  </div>

  {/* TEXT SECTION */}
  <div className="text-center lg:text-left">
    <h1 className="text-2xl sm:text-3xl lg:text-5xl text-[#3D4098] mt-6 sm:mt-10 lg:mt-12 font-extrabold">
      Building Professionals <br /> for <span className="text-[#15A959]">Tomorrow</span>
    </h1> 
    <p className="text-base sm:text-lg lg:text-3xl font-sans mt-4 sm:mt-6 lg:mt-9">
      We provide practical, career-focused training <br /> in taxation corporate affairs, finance, and <br /> business—shaping confident professionals <br /> ready for today's market.
    </p>
    <div className="mt-6 sm:mt-8 lg:mt-12 gap-4 flex flex-col sm:flex-row justify-center lg:justify-start">
      <a
        className="bg-[#3D4098] py-3 sm:py-4 px-8 sm:px-10 text-white font-bold text-base sm:text-lg lg:text-xl rounded-lg text-center"
        href="https://docs.google.com/forms/d/e/1FAIpQLSe0xltybDdhgmuadGDd6MJ8YU_wQejb9qRXZ5wYEIJgTIeQag/viewform"
        target="_blank"
        rel="noopener noreferrer"
      >
        Enroll Now
      </a>
      <a
        className="py-3 px-8 sm:px-10 lg:px-12 border-[#3D4098] border-2 lg:border-3 text-[#3D4098] font-bold text-base sm:text-lg lg:text-xl rounded-lg text-center"
        href="/membership"
      >
        Membership
      </a>
    </div>
  </div> 

  {/* HERO IMAGES */}
  <div className="flex justify-center lg:block">
    <img className="h-60 sm:h-72 lg:h-96 w-44 sm:w-56 lg:w-72 mt-8 lg:mt-44" src="/Gallery 1 (1).webp" alt="About gallery" />
  </div>
  <div className="flex justify-center lg:block">
    <img className="h-48 sm:h-60 lg:h-84 w-44 sm:w-56 lg:w-72 mt-6 lg:mt-20 -ml-0 lg:-ml-8" src="/Gallery 2 (1).webp" alt="About Gallery" />
  </div>

  {/* FLOATING BOX */}
  <div className="absolute -bottom-4 sm:-bottom-6 lg:-bottom-7 right-4 lg:right-50 bg-green-600 text-white rounded-xl px-4 sm:px-6 py-4 sm:py-6 shadow-lg">
    <p className="flex items-center text-base sm:text-lg lg:text-xl gap-2 font-semibold">
      <span className="text-lg sm:text-2xl lg:text-3xl"><TiTick /></span> Sharpen Your Skills
    </p>
    <p className="flex items-center gap-2 text-base sm:text-lg lg:text-xl mt-2 font-semibold">
      <span className="text-lg sm:text-2xl lg:text-3xl"><TiTick /></span> Learn From Experts
    </p>
  </div>

</div>


     
      <section className="w-full py-10 sm:py-16">
  {/* container mx-auto content ko screen ke beech mein rakhta hai */}
  <div className="container mx-auto px-4 md:px-12 lg:px-20">
    
    <div className="flex flex-col lg:flex-row items-start justify-center gap-10 lg:gap-16">
      
      {/* LEFT CARD - Fixed width container for the card */}
      <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
        <div className="bg-[#3D4098] rounded-2xl p-6 text-white shadow-xl w-full max-w-[350px] md:max-w-[400px]">
          
          <div className="rounded-xl overflow-hidden mb-5 border-2 border-white/10">
            <img
              src="/Rai basharat.webp"
              alt="Rai Basharat Ali"
              className="w-full h-72 md:h-80 object-cover"
            />
          </div>

          <h3 className="text-xl sm:text-2xl font-extrabold text-center">
            Rai Basharat Ali
          </h3>
          <p className="text-sm sm:text-base text-gray-200 text-center mt-2 leading-tight">
            Principal <br />
            Institute of Corporate and Taxation
          </p>
        </div>
      </div>

      {/* RIGHT CONTENT - Flex-1 takes remaining space properly */}
      <div className="w-full lg:flex-1 lg:max-w-[800px]">
        <div className="flex items-center gap-3 mb-6 pt-2">
          <span className="w-10 h-[2px] bg-[#15A959]"></span>
          <h3 className="text-lg sm:text-xl font-bold text-[#3D4098] uppercase tracking-wide">
            Principal Message
          </h3>
        </div>

        <div className="space-y-5 text-gray-800 leading-relaxed font-semibold text-base sm:text-lg">
          <p>
            Welcome to the Institute of Corporate and Taxation. We’re committed to
            strong academics, professional growth, and practical learning.
          </p>

          <p>
            Corporate governance, finance, and taxation are crucial in today’s
            economy. Our goal is to develop skilled professionals who can lead,
            advise, and make informed decisions in these areas.
          </p>

          <p>
            Our programs combine theory with real-world application. With experienced
            faculty, industry connections, and a focused curriculum, we prepare
            students for successful careers.
          </p>

          <p>
            As a growing center of excellence in Pakistan, we take pride in offering
            a disciplined, innovative, and supportive learning environment.
          </p>

          <p>
            I invite you to join us and move toward a future that is rewarding,
            responsible, and globally competitive.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>



      {/* FEATURES ROW */}
      <section className="w-full max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-10">
          <h3 className="text-lg font-semibold text-[#3D4098] flex items-center justify-center gap-2">
            <span className="w-8 h-[2px] bg-green-500"></span>
            Mission Statement
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-6">
            <div className="h-44 bg-gray-200 rounded-2xl shadow">
              <img src="/Gallery 3.webp" alt="" />
            </div>

            <div className=" border rounded-2xl -mt-4 overflow-hidden">
              <img className="" src="/About gallery design.webp" alt="" />
              <h4 className="font-bold -mt-90 flex px-4 text-3xl mb-2 text-[#3D4098]">
                Professional Growth
              </h4>
              <p className="text-sm text-black font-bold  px-4 mb-44 leading-relaxed">
              ICT helps you build the knowledge, practical skills, and ethical mindset needed to succeed in taxation, corporate law, and financial governance. Our focus is on real-world learning that prepares you for a strong and confident career.
              </p>

              {/* decorative lines */}
              <div className="absolute bottom-0 right-0 w-32 h-32 opacity-10 bg-gradient-to-tr from-blue-500 to-transparent rounded-full">
                
              </div>
            </div>
          </div>

          {/* CENTER COLUMN (STACKED IMAGES) */}
          <div className="flex flex-col gap-6">
            <div className="h-72  rounded-2xl "><img className="h-100 w-96 rounded-2xl" src="/Gallery center.webp" alt="" /></div>
            <div className="h-48 bg-gray-200 mt-24 rounded-2xl shadow"> <img className="rounded-2xl" src="/Gallery center.webp" alt="" /></div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-6">
            <div className=" border rounded-2xl shadow">
               <img className="" src="/About Design.webp" alt="" />
              <h4 className="font-bold -mt-44 flex px-4 text-3xl mb-2 text-[#3D4098]">
                Quality Learning
              </h4>
              <p className="text-sm text-gray-600 px-4 pb-10 leading-relaxed">
                We focus on practical, industry-aligned education that connects classroom learning with real work. Our goal is to develop skilled professionals who support economic growth and strong compliance.
              </p>
            </div>

            <div className="h-44 bg-gray-300 rounded-2xl -mt-4 shadow"> <img src="/Gallery 5.webp" alt="" /></div>
          </div>

        </div>
      </section>
{/* WHY CHOOSE ICT SECTION */}
<section className="relative w-full bg-white overflow-hidden py-16 md:py-24">
  
  {/* Background Decorative Image (Optional - replaces the massive negative margin logic) */}
  <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
    <img src="/Design about.webp" className="object-cover w-full h-full" alt="" />
  </div>

  <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      
      {/* LEFT CONTENT: Text blocks */}
      <div className="space-y-8">
        <div>
          <p className="text-[#3D4098] font-bold flex items-center gap-3 mb-2">
            <span className="w-10 h-[2px] bg-[#15A959]"></span>
            Why Choose ICT?
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#3D4098] leading-tight">
            No Compromise On Excellence
          </h2>
        </div>

        <div className="grid gap-8">
          {[
            { title: "Learn From Real Experts", desc: "Get hands-on insights from seasoned corporate tax professionals and master strategies beyond textbooks." },
            { title: "Tackle Live Tax Challenges", desc: "Engage in real-time corporate tax scenarios and crisis simulations to sharpen your decision-making." },
            { title: "AI-Powered Learning, Anytime", desc: "Access AI-driven quizzes, 24/7 mentor support, and bite-sized tax training videos." },
            { title: "Connect With Elite Tax Pros", desc: "Join a global network of 10,000+ corporate tax professionals spanning 5 countries." }
          ].map((item, index) => (
            <div key={index} className="group">
              <h4 className="font-bold text-xl text-black mb-2 group-hover:text-[#3D4098] transition-colors">{item.title}</h4>
              <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT CONTENT: Image Collage (As per image_2ddd8d.png) */}
      <div className="relative">
        <div className="flex flex-col gap-6">
          {/* Top Image */}
          <div className="rounded-[2rem] overflow-hidden shadow-xl border-4 border-white">
            <img src="/About gallery (1).webp" className="w-full h-48 md:h-64 object-cover" alt="Classroom" />
          </div>
          
          {/* Bottom Row Collage */}
          <div className="grid grid-cols-12 gap-4 items-end">
            <div className="col-span-12 md:col-span-11 rounded-[2rem] overflow-hidden shadow-xl border-4 border-white">
              <img src="/About gallery 0 (1).webp" className="w-full h-56 md:h-72 object-cover" alt="Team" />
            </div>
          </div>
        </div>

        {/* Floating Overlap Image & Badge */}
        <div className="absolute -bottom-10 -left-6 md:-left-16 w-56 md:w-72">
          <div className="relative">
            <img 
              src="/About gallery 1 (1).webp" 
              className="rounded-3xl shadow-2xl border-4 border-white w-full h-44 md:h-56 object-cover" 
              alt="Team Badge" 
            />
            {/* 10+ YEARS BADGE - Styled exactly like the blue box in screenshot */}
            <div className="absolute -bottom-4 -right-4 bg-[#3D4098] text-white p-4 md:p-6 rounded-2xl shadow-2xl text-center min-w-[120px]">
              <p className="text-3xl md:text-5xl font-black leading-none">10+</p>
              <p className="text-sm md:text-lg font-bold uppercase tracking-tighter">Years</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

{/* FEATURES CARDS (4 cards section) */}
<section className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
    {/* Card 1 */}
    <div className="bg-white shadow-lg overflow-hidden">
      <div className="py-3 mt-3 px-3">
        <img src="/Real world.webp" alt="" className="w-full h-auto object-contain" />
      </div>
      <div>
        <img className="-mt-20 sm:-mt-76 mb-20 sm:mb-64 w-full h-auto object-contain" src="pic20.png" alt="" />
      </div>
      <div className="px-4 -mt-2 mb-4 py-1 text-start">
        <p className="text-base sm:text-lg text-black">
          Expert Faculty with <br /> Real-World Experience
        </p>
      </div>
    </div>

    {/* Card 2 */}
    <div className="bg-white shadow-lg overflow-hidden">
      <img className="py-3 mt-3 px-3 w-full h-auto object-contain" src="/Practical Training.webp" alt="" />
      <div>
        <img className="-mt-20 sm:-mt-76 mb-20 sm:mb-64 w-full h-auto object-contain" src="pic21.png" alt="" />
      </div>
      <div className="px-4 -mt-2 mb-4 py-1 text-start">
        <p className="text-base sm:text-lg text-black">100% Practical Training Approach</p>
      </div>
    </div>

    {/* Card 3 */}
    <div className="bg-white shadow-lg overflow-hidden">
      <img className="py-3 mt-3 px-3 w-full h-auto object-contain" src="/Nationaly.webp" alt="" />
      <div>
        <img className="-mt-20 sm:-mt-76 mb-20 sm:mb-64 w-full h-auto object-contain" src="pic22.png" alt="" />
      </div>
      <div className="px-4 -mt-2 mb-4 py-1 text-start">
        <p className="text-base sm:text-lg text-black">Nationally Recognized Excellence</p>
      </div>
    </div>

    {/* Card 4 */}
    <div className="bg-white shadow-lg overflow-hidden">
      <img className="py-3 mt-3 px-3 w-full h-auto object-contain" src="/Focused.webp" alt="" />
      <div>
        <img className="-mt-20 sm:-mt-76 mb-20 sm:mb-64 w-full h-auto object-contain" src="pic23.png" alt="" />
      </div>
      <div className="px-4 -mt-2 mb-4 py-1 text-start">
        <p className="text-base sm:text-lg text-black">Focused Career Development</p>
      </div>
    </div>
  </div>
</section>

{/* CAMPUSES SECTION */}
<section className="w-full mt-12 sm:mt-16 md:mt-20 mx-auto px-4 sm:px-10 md:px-20 lg:px-[160px] py-12 sm:py-16 md:py-20">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
    {/* Left Text */}
    <div className="md:pt-12">
      <h3 className="text-base sm:text-lg font-semibold text-[#3D4098] flex items-center gap-3 mb-4 sm:mb-6">
        <span className="w-8 sm:w-12 h-[2px] sm:h-[3px] bg-green-500"></span>
        Our Campuses
      </h3>
      <p className="text-gray-700 leading-relaxed max-w-sm text-sm sm:text-base">
        We operate in key cities, offering modern classrooms and a supportive learning environment so students can study comfortably and grow with confidence.
      </p>
    </div>

    {/* Islamabad & Karachi */}
    <div className="flex flex-col gap-8">
      {/* Islamabad Campus */}
      <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
        <img src="/isb.webp" alt="Islamabad Campus" className="w-full h-40 sm:h-48 object-cover" />
        <div className="p-4 sm:p-6">
          <h4 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4">Islamabad Campus</h4>
          <div className="space-y-2 sm:space-y-3 text-sm sm:text-base">
            <p className="flex items-center gap-2 sm:gap-3 text-gray-600">
              <span className="text-xl sm:text-2xl text-[#3D4098]"><MdCallEnd /></span>
              03377774852
            </p>
            <p className="flex items-start gap-2 sm:gap-3 text-gray-600">
              <span className="text-xl sm:text-2xl text-[#3D4098]"><RiMapPinLine /></span>
              Plot No. 63, Service Road, I-10/3 North, Islamabad 44000
            </p>
          </div>
        </div>
      </div>

      {/* Karachi Campus */}
      <div className="bg-white shadow-lg overflow-hidden rounded-2xl flex flex-col sm:flex-row w-full sm:w-[790px] h-auto sm:h-[250px]">
        <div>
          <img className="w-full sm:w-[340px] h-40 sm:h-[250px] object-cover" src="/kar.webp" alt="Karachi Campus" />
        </div>
        <div className="p-4 sm:p-6">
          <h1 className="text-lg sm:text-2xl font-bold">Karachi Campus</h1>
          <p className="flex items-center gap-2 mt-4 sm:mt-8 text-sm sm:text-base">
            <span className="text-xl sm:text-2xl text-[#3D4098]"><MdCallEnd /></span>03710194615
          </p>
          <p className="flex items-start gap-2 mt-2 sm:mt-3 text-sm sm:text-base">
            <span className="text-xl sm:text-2xl text-[#3D4098]"><RiMapPinLine /></span>
            Office 504, 5th Floor, Caesars Tower, Shahrah-E-Faisal, Karachi
          </p>
        </div>
      </div>
    </div>

    {/* Lahore Campus */}
    <div className="flex flex-col gap-8 md:pt-20 -mt-8 sm:-mt-12 md:-mt-20">
      <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
        <img src="/lah.webp" alt="Lahore Campus" className="w-full h-40 sm:h-48 object-cover" />
        <div className="p-4 sm:p-6">
          <h4 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4">Lahore Campus</h4>
          <div className="space-y-2 sm:space-y-3 text-sm sm:text-base">
            <p className="flex items-center gap-2 sm:gap-3 text-gray-600">
              <span className="text-xl sm:text-2xl text-[#3D4098]"><MdCallEnd /></span>
              03308880211
            </p>
            <p className="flex items-start gap-2 sm:gap-3 text-gray-600">
              <span className="text-xl sm:text-2xl text-[#3D4098]"><RiMapPinLine /></span>
              5th Floor , Pace Shopping Mall, Model Town, Link Road, Lahore
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

 <section>

  {/* Who Will You Learn About Section */}
 <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-28 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
    
    {/* Left Logos */}
 <div className="flex flex-wrap gap-6 sm:gap-8 lg:gap-10 items-center justify-center lg:justify-start">
      {[
        "/FBR5.webp",
        "/FBR2.webp",
        "/FBR3.webp",
        "/FBR4.webp",
      ].map((logo, index) => (
        <div
          key={index}
          className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full bg-white shadow-lg flex items-center justify-center"
        >
          <img src={logo} alt="Authority Logo" className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 object-contain" />
        </div>
      ))}
    </div>

    {/* Right Content */}
    <div className="text-center lg:text-left">
      <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
        <span className="w-8 sm:w-10 h-0.5 bg-[#15A959]"></span>
        <p className="text-[#3D4098] font-bold uppercase text-sm sm:text-base">At ICT</p>
      </div>

      <h2 className="text-3xl sm:text-4xl font-extrabold text-black mb-4 sm:mb-6">
        Who will you learn about?
      </h2>

      <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-full sm:max-w-xl mx-auto lg:mx-0">
        You will explore and understand the different regulatory authorities
        that play a key role in governing and monitoring today’s business
        environment
      </p>
    </div>
  </div>

{/* TRUSTED BY CUSTOMERS WORLDWIDE – IMAGE MATCHED */}
<section className="w-full py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-white via-cyan-50 to-white mb-12 sm:mb-16 lg:mb-20 overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">

    {/* LEFT CONTENT */}
    <div className="text-center lg:text-left">
      <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
        <span className="w-8 sm:w-10 lg:w-12 h-[2px] sm:h-[3px] bg-green-600"></span>
        <span className="text-blue-700 font-semibold text-sm sm:text-base">
          Trusted by Customers Worldwide
        </span>
      </div>

      <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 sm:mb-6">
        Who will you learn about?
      </h2>

      <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
        Our clients share their experiences and feedback to help you understand
        the quality and reliability of our services. Read authentic reviews and
        join the growing community of satisfied customers.
      </p>

      {/* Dots */}
      <div className="flex gap-3 mt-6 sm:mt-8 lg:mt-10 justify-center lg:justify-start">
        <span className="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-gray-300"></span>
        <span className="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-gray-300"></span>
        <span className="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-blue-800"></span>
      </div>
    </div>

    {/* RIGHT REVIEWS */}
    <div className="relative w-full">
      {/* Purple Shape */}
      <div className="absolute inset-0 bg-indigo-500 rounded-[40px] sm:rounded-[50px] lg:rounded-[60px] -z-10"></div>

      {/* Review Card 1 */}
      <div className="relative bg-white rounded-2xl sm:rounded-3xl shadow-lg p-4 sm:p-6 mb-4 sm:mb-6 ml-0 sm:ml-6 lg:ml-10">
        <div className="flex items-start gap-3 sm:gap-4">
          <img
            src="/About Student 1.webp"
            className="w-10 sm:w-12 h-10 sm:h-12 rounded-full object-cover"
            alt="Student"
          />
          <p className="text-gray-700 italic text-sm sm:text-base">
            “On the silent meeting carried forward, its arranged matters remain unclear. Certain steps followed as expected, yet no final direction appeared. Belief stayed divided, and the message passed without conclusion.”
          </p>
        </div>
      </div>

      {/* Review Card 2 */}
      <div className="relative bg-white rounded-2xl sm:rounded-3xl shadow-lg p-4 sm:p-6 ml-0 sm:ml-10 lg:ml-20">
        <div className="flex items-start gap-3 sm:gap-4">
          <img
            src="About Student 2.webp"
            className="w-10 sm:w-12 h-10 sm:h-12 rounded-full object-cover"
            alt="Student"
          />
          <div>
            <p className="text-gray-700 italic mb-2 sm:mb-4 text-sm sm:text-base">
              “On the Windows talking painted pasture yet its express parties use.
              Sure last upon he same as knew next. Of believed or diverted no.”
            </p>
            <p className="font-semibold text-gray-900 text-sm sm:text-base">Ahmed Ali</p>
            <p className="text-xs sm:text-sm text-gray-500">Delhi, India</p>
          </div>
        </div>
      </div>

      {/* Decorative Star */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 text-green-500 text-3xl sm:text-4xl lg:text-5xl">
        ✦
      </div>
    </div>
  </div>
</section>


      </section>

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
    </div>
  );
}
