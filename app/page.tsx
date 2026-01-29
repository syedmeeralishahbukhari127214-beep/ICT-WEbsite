import Image from "next/image";
import { FaFacebookF,FaLinkedinIn, FaTiktok } from "react-icons/fa6";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";
import { LuYoutube } from "react-icons/lu";
import Link from "next/dist/client/link"; 
import { FaWhatsapp } from "react-icons/fa6";


export default async function Home() {
  return (
     <div className="w-full bg-white">

    <div className="">
  {/* Hero Section */}
  <div className="flex flex-col md:flex-row justify-start px-4 sm:px-6 md:px-28 py-4 sm:py-6 md:py-10 gap-4 sm:gap-6 md:gap-10">

    {/* LEFT SOCIAL SECTION — hidden on mobile */}
    <div className="hidden md:block items-center md:items-start justify-center md:justify-start">

      <h1 className="rotate-270 text-base sm:text-lg -ml-1 font-extrabold text-[#15A959]"style={{ letterSpacing: '2px' }}>
        ICT
      </h1>

      <p className="w-1 h-16 sm:h-20 md:h-28 font-bold bg-black ml-3 mt-3 mb-3"></p>

      <div className="md:block">
        <a className="mt-3 sm:mt-5 flex text-[#3D4098] ml-1 text-base sm:text-lg" href="https://www.facebook.com/Instituteofcorporateandtaxation?rdid=2WCHFvVL9UeBaktA&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1AMUrXLsPZ%2F#">
          <FaFacebookF/>
        </a>

        <a className="mt-3 sm:mt-5 flex ml-1.5 text-[#3D4098] text-base sm:text-lg" href="https://x.com/IctIsbd2022">
          <FiTwitter />
        </a>

        <a className="mt-3 sm:mt-5 flex ml-1.5 text-[#3D4098] text-base sm:text-lg" href="https://www.instagram.com/ict_pakistan/?igsh=MXRwNDR6ZnpiN3pqNg%3D%3D#">
          <AiOutlineInstagram />
        </a>

        <a className="mt-3 sm:mt-5 flex ml-1.5 text-[#3D4098] text-base sm:text-lg" href="https://www.youtube.com/@ICTPakistanofficial">
          <LuYoutube />
        </a>
            <a className="mt-5 flex ml-1.5 text-[#3D4098] text-lg" href="https://www.linkedin.com/company/ict-isb/"><FaLinkedinIn /></a>  
    <a className="mt-5 flex ml-1.5 text-[#3D4098] text-lg" href="https://www.tiktok.com/@icttaxation?lang=en"><FaTiktok /></a> 
      </div>

      <p className="w-1 h-24 sm:h-40 md:h-54 bg-black ml-3 mt-3 mb-3"></p>
    </div>

    {/* TEXT SECTION */}
    <div className="flex-1 text-center md:text-left">

  {/* Heading: Font sizes ko fluid kiya hai (laptop par khud choti ho jayegi) */}
  <h1 className="text-2xl sm:text-3xl lg:text-5xl text-[#3D4098] mt-4 md:mt-12 font-extrabold leading-tight">
    Develop Global Business <br className="hidden lg:block" /> 
    Skills With <span className="text-[#15A959]">ICT.</span>
  </h1>

  {/* Paragraph: md:text-3xl bohot bara tha laptop ke liye, isay optimize kiya hai */}
  <p className="text-base sm:text-lg lg:text-2xl font-sans mt-4 md:mt-8 text-gray-700 leading-relaxed">
    Master practical skills in Taxation, Accounting, Finance, 
    <br className="hidden lg:block" /> Corporate Affairs and more through 
    <span className="text-[#15A959]"> ICT's online in-person classes.</span>
  </p>

  {/* Buttons Container */}
  {/* Buttons Container: Gap aur margins ko responsive kiya hai */}
<div className="mt-8 md:mt-12 flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center md:justify-start items-center">

  {/* Solid Button: Enroll Now */}
  <a
    className="bg-[#3D4098] hover:bg-[#2e317a] transition-all duration-300 py-3 px-10 md:py-4 md:px-12 text-white font-bold text-lg md:text-xl rounded-xl text-center min-w-[200px] shadow-md"
    href="https://docs.google.com/forms/d/e/1FAIpQLSe0xltybDdhgmuadGDd6MJ8YU_wQejb9qRXZ5wYEIJgTIeQag/viewform"
    target="_blank"
    rel="noopener noreferrer"
  >
    Enroll Now
  </a>

  {/* Outline Button: Membership */}
  <a
    className="bg-white border-[#3D4098] border-2 md:border-[3px] text-[#3D4098] hover:bg-[#3D4098] hover:text-white transition-all duration-300 py-3 px-10 md:py-4 md:px-12 font-bold text-lg md:text-xl rounded-xl text-center min-w-[200px]"
    href="/membership"
  >
    Membership
  </a>
  
</div>
</div>



  {/* IMAGE SECTION */}
   <div className="hero-container flex-1 h-[600px] relative bg-white ">
          <div className="watch-orbit-window bg-white">
  <div className="needle-pill p1"><div className="pill-content"><img src="/tax animation.webp" alt="1" /></div></div>
  <div className="needle-pill p2"><div className="pill-content"><img src="/tax animation 2.webp" alt="2" /></div></div>
  <div className="needle-pill p3"><div className="pill-content"><img src="/tax animation 3.webp" alt="3" /></div></div>
  <div className="needle-pill p4"><div className="pill-content"><img src="/tax animation 4.webp" alt="4" /></div></div>
  <div className="needle-pill p5"><div className="pill-content"><img src="/tax animation.webp" alt="5" /></div></div>
  <div className="needle-pill p6"><div className="pill-content"><img src="/tax animation 2.webp" alt="6" /></div></div>
  <div className="needle-pill p7"><div className="pill-content"><img src="/tax animation 3.webp" alt="7" /></div></div>
  <div className="needle-pill p8"><div className="pill-content"><img src="/tax animation 4.webp" alt="8" /></div></div>
  <div className="needle-pill p9"><div className="pill-content"><img src="/tax animation.webp" alt="9" /></div></div>
  <div className="needle-pill p10"><div className="pill-content"><img src="/tax animation 2.webp" alt="10" /></div></div>
  <div className="needle-pill p11"><div className="pill-content"><img src="/tax animation 4.webp" alt="11" /></div></div>
</div>
        </div>
      

</div>

      
      {/* Second Section */}
{/* Second Section (About Us) - Fixed for Laptop/PC */}
<div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-10 md:gap-16 px-6 md:px-12 py-10">
   
   {/* Column One: Images (Ab ye screen ke mutabiq resize hon gi) */}
   <div className="flex-1 flex justify-center md:justify-start items-baseline gap-2 md:gap-4 w-full">
    <img className="w-1/3 h-auto max-h-[400px] rounded-xl shadow-md" src="/Basharat.webp" />
    <img className="w-1/4 h-auto max-h-[450px] rounded-xl shadow-md mt-6 md:mt-12" src="/Building Professionals (2).webp" alt="ICT 2" />
    <img className="w-1/3 h-auto max-h-[450px] rounded-xl shadow-md mt-8 md:mt-16" src="/Building Professionals.webp" alt="ICT 3" />
   </div>

   {/* Column Second: Text Content */}
   <div className="flex-1 w-full">
    {/* Line design */}
    <div className="bg-[#15A959] w-1 h-20 md:h-28 rotate-90 font-bold mb-6 ml-10"></div> 
    
    <p className="text-[#3D4098] font-bold pb-2 uppercase tracking-wide"> Welcome to ICT</p>
    <h1 className="text-3xl md:text-5xl font-extrabold pb-4">About us</h1>
    
    <p className="mb-8 text-gray-700 text-lg font-semibold leading-relaxed max-w-xl">
      ICT turns complex tax rules into practical skills and real results. As Pakistan’s leading taxation institute, we offer expert-led training and corporate solutions that help professionals and businesses stay compliant, confident, and ahead.
    </p>
    
    <a className="bg-[#3D4098] hover:bg-[#15A959] transition-colors py-3 px-10 text-white font-bold text-lg rounded-lg inline-block" href="/about">
      Explore
    </a>
   </div>
</div>



      {/* third section */}
<div className="flex flex-col sm:flex-row justify-center gap-8 sm:gap-14 mt-6 md:mt-10">
   {/* one */}
   <div className="text-center">
     <h1 className="text-5xl md:text-[80px] text-[#3D4098]">09+</h1>
     <p className="text-[#15A959] text-md md:text-lg">Years of Excellence in Tax & Consultancy</p>
   </div>
   {/* two */}
   <div className="text-center">
     <h1 className="text-5xl md:text-[80px] text-[#3D4098]">07+</h1>
     <p className="text-[#15A959] text-md md:text-lg">Innovative Tax Online Courses</p>
   </div>
   {/* three */}
   <div className="text-center">
     <h1 className="text-5xl md:text-[80px] text-[#3D4098]">06+</h1>
     <p className="text-[#15A959] text-md md:text-lg">Qualified Teachers and language experts</p>
   </div>
   {/* four */}
   <div className="text-center">
     <h1 className="text-5xl md:text-[80px] text-[#3D4098]">8k+</h1>
     <p className="text-[#15A959] text-md md:text-lg">Learners Enrolled in Tax Courses</p>
   </div>
</div>


      <div className="flex justify-center flex-col items-center mt-16 -mb-10">
        <p className="text-[#3D4098] font-bold text-md">Course we offer's</p>
        <h1 className="text-black text-3xl font-extrabold">Build Your Skills</h1>
        <p>From taxation to corporate affairs, our courses help you grow with clear, practical learning</p>
      </div>
      {/* Courses Grid Section */}
<div className="px-4 sm:px-10 lg:px-28 py-14">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">

    {[
      { title: 'UK TAXATION', img: '/uk (2).png', slug: "uk-taxation" },
      { title: 'USA TAXATION', img: '/USA (1).png', slug: "/usa-taxation" },
      { title: 'UAE TAXATION', img: '/UAE.png', slug: "uae-taxation" },
      { title: 'SAUDI TAXATION', img: '/saudi.png', slug: "saudi-taxation" },
      { title: 'CERTIFIED TAX ADVISOR', img: '/fbr (1) (1).png', slug: "certified-tax-advisor" },
      { title: 'ADVANCE TAXATION AND LITIGATION', img: '/advance-tax (2).png', slug: "advance-taxation-and-litigation" },
      { title: 'MASTER SALES TAX', img: '/sales-tax (2).png', slug: "master-sales-tax" },
      { title: 'CANADIAN TAXATION', img: '/canada.png', slug: "canadian-taxation" },
    ].map((course, index) => (
   
      <Link href={`/courses/${course.slug}`} key={index}>
        <div className="relative h-[330px] w-64 sm:w-56 md:w-60 lg:w-64 rounded-xl overflow-hidden group cursor-pointer">

          <img
            src={course.img}
            alt={course.title}
            className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
          />

          <div className="absolute inset-0 bg-[#3D4098]/70 flex justify-center items-end p-4">
            <h3 className="text-white font-bold text-lg text-center">
              {course.title}
            </h3>
          </div>

        </div>
      </Link>

    ))}

  </div>

  {/* Button */}
  <div className="flex justify-center mt-12">
    <a
      href="/courses"
      className="bg-[#3D4098] hover:bg-[#15A959] text-white px-10 py-3 rounded-lg font-bold transition"
    >
      Explore Courses
    </a>
  </div>
</div>



  {/* Inside Our Campus Section */}
  <div className="bg-[#F9FAFB] py-20 mt-16">
    <div className="max-w-7xl mx-auto px-6 text-center">

      <p className="text-sm text-[#15A959] font-semibold mb-2">
        — About Campus
      </p>

      <h2 className="text-4xl font-extrabold text-black mb-4">
        Inside Our Campus
      </h2>

      <p className="text-gray-600 max-w-3xl mx-auto mb-14">
        A reliable name in tax education, with well-equipped campuses in
        Islamabad, Karachi, and Lahore to support your learning journey
      </p>

      {/* Images */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

        {/* Left Image */}
        <div className="relative overflow-hidden rounded-2xl -rotate-3 shadow-lg">
          <img
            src="/Campus Faculty-compressed.webp"
            alt="Campus Session"
            className="w-full h-[360px] object-cover"
          />
        </div>

        {/* Center Image */}
        <div className="relative overflow-hidden rounded-2xl shadow-2xl scale-105">
          <img
            src="/gallery-compressed.webp"
            alt="ICT Campus Group"
            className="w-full h-[420px] object-cover"
          />
        </div>

        {/* Right Image */}
        <div className="relative overflow-hidden rounded-2xl rotate-3 shadow-lg">
          <img
            src="/ICT Campus Group-compressed.webp"
            alt="Campus Faculty"
            className="w-full h-[360px] object-cover"
          />
        </div>

      </div>
    </div>
  </div>

{/* Who Will You Learn About Section */}
<div className="relative overflow-hidden py-24 bg-linear-to-r from-[#EAF3FF] via-[#E6FBF5] to-white">

  {/* Wave Lines Background */}
  <div className="absolute bottom-0 left-0 w-full">
    {/* <img src="/12.png" alt="Wave Lines" className="w-full h-40 object-cover" /> */}
  </div>

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
</div>


{/* Testimonials Section */}
<div className="relative py-16 sm:py-20 md:py-28 overflow-hidden bg-gradient-to-br from-[#F1F5FF] via-[#ECFBF6] to-white">

  {/* Decorative Circle */}
  <div className="absolute right-[-100px] sm:right-[-150px] md:right-[-200px] top-10 w-[250px] sm:w-[350px] md:w-[500px] h-[250px] sm:h-[350px] md:h-[500px] bg-[#3D4098] rounded-full opacity-90"></div>

  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-10 md:px-20 lg:px-28 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-center">

    {/* Left Content */}
    <div className="text-center lg:text-left">
      <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
        <span className="w-8 sm:w-10 h-0.5 bg-[#15A959]"></span>
        <p className="text-[#3D4098] font-semibold text-sm sm:text-base">
          Trusted by Learners
        </p>
      </div>

      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 sm:mb-6">
        What Our Students Say
      </h2>

      <p className="text-gray-700 text-base sm:text-lg max-w-full sm:max-w-xl leading-relaxed mx-auto lg:mx-0">
        Hear directly from our learners about their journey, experience,
        and success with ICT’s professional training programs.
      </p>

      {/* Dots */}
      <div className="flex gap-3 mt-6 sm:mt-8 md:mt-10 justify-center lg:justify-start">
        <span className="w-3 h-3 rounded-full bg-[#3D4098]"></span>
        <span className="w-3 h-3 rounded-full bg-gray-300"></span>
        <span className="w-3 h-3 rounded-full bg-gray-300"></span>
      </div>
    </div>

    {/* Right Card */}
    <div className="relative flex justify-center lg:justify-end">
      <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 max-w-md sm:max-w-lg w-full">

        {/* Avatar */}
        <div className="absolute -top-6 sm:-top-8 left-6 sm:left-8">
          <img
            src="/front-view-male-student-green-checkered-shirt-wearing-black-backpack-holding-files-blue-wall.jpg"
            alt="Student"
            className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-4 border-white shadow-md object-cover"
          />
        </div>

        {/* Feedback */}
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 mt-6">
          “ICT provided me with practical taxation knowledge that helped me
          grow professionally. The mentors are highly experienced and supportive.”
        </p>

        <h4 className="font-bold text-[#3D4098]">
          Ali Raza
        </h4>
        <p className="text-gray-500 text-sm">
          Tax Consultant — Islamabad
        </p>
      </div>
    </div>

  </div>
</div>



<div className="px-4 sm:px-10 lg:px-28">

  {/* Heading */}
  <div className="flex flex-col lg:flex-row justify-around text-3xl sm:text-4xl font-bold mt-10 text-center lg:text-left gap-6">
    <div>
      <h1>
        Why Choose <br />
        <span className="text-[#3D4098]"> ICT?</span>
      </h1>
    </div>
    <div className="text-[#3D4098]">
      <h1>No Compromise <br /> on Excellence</h1>
    </div>
  </div>

  {/* Line Image */}
  <div className="flex justify-center mt-10 sm:mt-20">
    <img className="w-full max-w-[1120px]" src="line 2.png" alt="" />
  </div>

  {/* Features Section */}
  <div className="flex flex-col lg:flex-row justify-center lg:justify-between gap-10 mt-10 sm:mt-20">

    {/* Left Features */}
    <div className="flex flex-col gap-10 lg:gap-24">
      {/* 1st */}
      <div>
        <h1 className="text-xl font-bold mt-14">Industry Titans as Trainers</h1>
        <h2 className="mt-3 font-bold">Learn from real experts</h2>
        <p className="mt-2 text-sm sm:text-base">
          Get hands-on insights from seasoned corporate <br /> tax professionals and master strategies beyond <br /> textbooks.
        </p>
      </div>

      {/* 2nd */}
      <div>
        <h1 className="text-xl font-bold">War Room Simulations</h1>
        <h2 className="mt-3 font-bold">Tackle live tax challenges</h2>
        <p className="mt-2 text-sm sm:text-base">
          Engage in real-time corporate tax scenarios and <br /> crisis simulations to sharpen your decision <br />-making and strategic skills under pressure.
        </p>
      </div>
    </div>

    {/* Center Image */}
    <div className="flex justify-center">
      <img className="w-64 sm:w-80 md:w-96 h-auto" src="/Center Image Rai.webp" alt="" />
    </div>

    {/* Right Features */}
    <div className="flex flex-col gap-10 lg:gap-24">
      {/* 3rd */}
      <div>
        <h1 className="text-xl font-bold mt-14">Next‑Gen LMS</h1>
        <h2 className="mt-3 font-bold">AI-powered learning, anytime</h2>
        <p className="mt-2 text-sm sm:text-base">
          Access AI-driven quizzes, 24/7 mentor support, <br /> and bite-sized tax training videos to learn at <br /> your own pace and master corporate <br /> taxation efficiently
        </p>
      </div>

      {/* 4th */}
      <div>
        <h1 className="text-xl font-bold">Alumni Firepower</h1>
        <h2 className="mt-3 font-bold">Connect with elite tax pros</h2>
        <p className="mt-2 text-sm sm:text-base">
          Join a global network of 10,000+ corporate <br /> tax professionals spanning 5 countries, <br /> expanding your connections, opportunities, <br /> and influence in the industry.
        </p>
      </div>
    </div>

  </div>
</div>

    <div className="px-4 sm:px-10 lg:px-28">

  {/* Logo & Lines */}
  <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-7">
    <div className="w-full sm:w-[450px] flex justify-center">
      <img src="line.png" alt="" className="w-full" />
    </div>

    <div className="flex justify-center">
      <img className="w-20 sm:w-28 h-20 sm:h-28" src="/ICTLogo.webp" alt="" />
    </div>

    <div className="w-full sm:w-[450px] flex justify-center">
      <img src="line 1.png" alt="" className="w-full" />
    </div>
  </div>

  {/* Headings */}
  <div className="text-center mt-10">
    <p className="font-bold text-[#3D4098]">Crack the Code of Tax Like a Pro</p>
    <h1 className="text-xl sm:text-2xl font-bold mb-5">
      More Than Tax Education — It’s a Career Transformation.
    </h1>
  </div>

  {/* Images and Steps */}
  <div className="flex flex-col lg:flex-row justify-center gap-8 mt-6">

    <div className="flex justify-center">
      <img className="w-full max-w-[570px]" src="/Campus Faculty-compressed.webp" alt="" />
    </div>

    <div className="flex justify-center">
      <img className="h-[300px] sm:h-[458px] mt-2 object-cover" src="pic2.png" alt="" />
    </div>

    <div className="flex flex-col gap-6">
      {/* Step 1 */}
      <div>
        <p className="bg-[#3D4098] rounded-full w-8 flex justify-center text-white text-2xl">1</p>
        <h1 className="text-xl font-bold mt-2">Corporate Tax Proficiency</h1>
        <p className="mt-2 text-sm sm:text-base">
          From seamless tax filings to strategic boardroom <br /> planning, this program equips you with the skills <br /> and confidence to handle corporate taxation with <br /> expertise.
        </p>
      </div>

      {/* Step 2 */}
      <div>
        <p className="bg-[#3D4098] rounded-full w-8 flex justify-center text-white text-2xl mt-5">2</p>
        <h1 className="text-xl font-bold mt-2">The International Tax Playbook</h1>
        <p className="mt-2 text-sm sm:text-base">
          Master global tax treaties, navigate cross-border <br /> opportunities, and achieve compliance success.
        </p>
      </div>

      {/* Step 3 */}
      <div>
        <p className="bg-[#3D4098] rounded-full w-8 flex justify-center text-white text-2xl mt-5">3</p>
        <h1 className="text-xl font-bold mt-2">Tax Labs Powered by AI</h1>
        <p className="mt-2 text-sm sm:text-base">
          Simulate real-world corporate tax scenarios, navigate <br /> complex challenges, and enhance your strategic decision- <br /> making skills
        </p>
      </div>
    </div>

  </div>

  {/* Insights Section */}
  {/* Insights Section — Now with proper Types and Image Helper */}
{/* Container ki width barha di gayi hai taake cards door door hon */}
<div className="max-w-[1200px] mx-auto px-4 py-16">
  <div className="text-center mb-12">
    <p className="text-[#3D4098] font-bold uppercase tracking-widest text-sm">Insights</p>
    <h1 className="text-3xl sm:text-4xl font-extrabold mt-2 text-black">Stay Ahead in Tax & Finance</h1>
  </div>

  {/* Gap-10 se cards ke beech mein wazay farq aayega */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
    {await (async () => {
      const { client } = await import("@/sanity/lib/client");
      const imageUrlBuilder = await import("@sanity/image-url");
      const builder = imageUrlBuilder.default(client);
      const urlFor = (source: any) => builder.image(source);

      const posts = await client.fetch(`*[_type == "post"] | order(publishedAt desc) [0...3]{
        _id,
        title,
        "slug": slug.current,
        "mainImage": image,
        publishedAt
      }`);

      return posts.map((post: any) => (
        
        <div key={post._id} className="bg-white rounded-none shadow-sm border border-gray-100 flex flex-col h-[450px] w-full overflow-hidden transition-all hover:shadow-md">
          
          {/* Image Container — No Rounding */}
          <div className="relative w-full h-[200px] overflow-hidden bg-gray-50">
            {post.mainImage ? (
              <img 
                src={urlFor(post.mainImage).width(600).height(300).fit('crop').url()} 
                alt={post.title}
                className="w-full h-full object-cover rounded-none" 
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400">No Image</div>
            )}
          </div>

          <div className="p-6 flex flex-col flex-grow text-left">
            <p className="text-[#3D4098] font-bold text-[10px] uppercase tracking-[0.1em] mb-2">
              Education
            </p>
            
            <h3 className="text-lg font-bold text-black mb-3 line-clamp-2 leading-tight">
              {post.title}
            </h3>
            
            <p className="text-gray-500 text-sm mb-6 line-clamp-2">
              Read the latest update from ICT Pakistan experts.
            </p>
            
            <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#15A959] flex items-center justify-center text-white text-[10px] font-bold">
                  I
                </div>
                <div className="flex flex-col">
                  <p className="text-xs font-bold text-gray-800 leading-tight">ICT Admin</p>
                  <p className="text-[10px] text-gray-400">2026</p>
                </div>
              </div>
              
              <Link 
                href={`/blogs/${post.slug}`} 
                className="text-[#3D4098] font-bold text-sm hover:underline flex items-center gap-1"
              >
                Read More →
              </Link>
            </div>
          </div>
        </div>
      ));
    })()}
  </div>
</div>

</div>

    </div>
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

