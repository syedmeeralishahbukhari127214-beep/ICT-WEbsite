import Image from "next/image";
import { FaFacebookF } from "react-icons/fa6";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";
import { LuYoutube } from "react-icons/lu";
import Link from "next/dist/client/link";


export default function Home() {
  return (
    <div className="">
  {/* Hero Section */}
  <div className="flex flex-col md:flex-row justify-start px-4 sm:px-6 md:px-28 py-4 sm:py-6 md:py-10 gap-4 sm:gap-6 md:gap-10">

    {/* LEFT SOCIAL SECTION — hidden on mobile */}
    <div className="hidden md:block items-center md:items-start justify-center md:justify-start">

      <h1 className="rotate-270 text-base sm:text-lg -ml-1 font-extrabold text-[#15A959]">
        ICT
      </h1>

      <p className="w-1 h-16 sm:h-20 md:h-28 font-bold bg-black ml-3 mt-3 mb-3"></p>

      <div className="md:block">
        <a className="mt-3 sm:mt-5 flex text-[#3D4098] ml-1 text-base sm:text-lg" href="">
          <FaFacebookF/>
        </a>

        <a className="mt-3 sm:mt-5 flex ml-1.5 text-[#3D4098] text-base sm:text-lg" href="">
          <FiTwitter />
        </a>

        <a className="mt-3 sm:mt-5 flex ml-1.5 text-[#3D4098] text-base sm:text-lg" href="">
          <AiOutlineInstagram />
        </a>

        <a className="mt-3 sm:mt-5 flex ml-1.5 text-[#3D4098] text-base sm:text-lg" href="">
          <LuYoutube />
        </a>
      </div>

      <p className="w-1 h-24 sm:h-40 md:h-54 bg-black ml-3 mt-3 mb-3"></p>
    </div>

    {/* TEXT SECTION */}
    <div className="text-center md:text-left">

      <h1 className="text-xl sm:text-2xl md:text-4xl text-[#3D4098] mt-4 sm:mt-6 md:mt-12 font-extrabold">
        Develop Global Business <br /> 
        Skills With <span className="text-[#15A959]">ICT.</span>
      </h1>

      <p className="text-base sm:text-lg md:text-3xl font-sans mt-4 sm:mt-6 md:mt-9">
        Master practical skills in Taxation, <br /> 
        Accounting, Finance, Corporate Affairs <br />  
        and more through 
        <span className="text-[#15A959]"> ICT's online in- <br /> person classes.</span>
      </p>

      <div className="mt-6 sm:mt-8 md:mt-12 gap-4 flex flex-col sm:flex-row justify-center md:justify-start">

        <a
          className="bg-[#3D4098] py-3 md:py-4 px-6 md:px-10 text-white font-bold text-base sm:text-lg md:text-xl rounded-lg text-center"
          href="https://docs.google.com/forms/d/e/1FAIpQLSe0xltybDdhgmuadGDd6MJ8YU_wQejb9qRXZ5wYEIJgTIeQag/viewform"
          target="_blank"
          rel="noopener noreferrer"
        >
          Enroll Now
        </a>

        <a
          className="py-3 px-6 sm:px-8 md:px-12 border-[#3D4098] border-2 md:border-3 text-[#3D4098] font-bold text-base sm:text-lg md:text-xl rounded-lg text-center"
          href="/membership"
        >
          Membership
        </a>
      </div>
    </div>




  {/* IMAGE SECTION */}
  <div className="flex justify-center md:ml-40 mt-6 md:mt-0 gap-3 sm:gap-4 md:gap-0">

    <img
      className="h-[150px] w-[90px] sm:h-[200px] sm:w-[120px] md:h-[500px] md:w-[300px]"
      src="h1.png"
      alt=""
    />

    <img
      className="h-[90px] w-[90px] sm:h-[120px] sm:w-[120px] md:h-[200px] md:w-[200px]"
      src="t1.png"
      alt=""
    />

    <img
      className="h-[110px] w-[110px] sm:h-[150px] sm:w-[150px] md:h-[270px] md:w-[270px] 
      mt-4 sm:mt-6 md:mt-50 -ml-0 md:-ml-48"
      src="28.png"
      alt=""
    />

  </div>

</div>

      
      {/* Second Section */}
<div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16 px-6 md:px-32">
   {/* one */}
   <div className="flex justify-center md:justify-start w-full md:w-[1100px] gap-2 md:gap-1 mt-6 md:mt-0">
    <img className="w-40 md:w-56 h-[250px] md:h-[400px]" src="/Rectangle 8.png" alt="" />
    <img className="w-28 md:w-36 h-[300px] md:h-[450px] pt-6 md:pt-12" src="/Rectangle 9.png" alt="" />
    <img className="w-40 md:w-56 h-[300px] md:h-[450px] pt-8 md:pt-16" src="/Rectangle 7.png" alt="" />
   </div>

   {/* Second */}
   <div className="w-full md:w-[1100px] mt-6 md:mt-0">
    <p className="bg-[#15A959] w-1 h-20 md:h-28 rotate-90 font-bold"></p> 
    <p className="text-[#3D4098] font-bold pb-3"> Welcome to ICT</p>
    <h1 className="text-2xl md:text-3xl font-extrabold pb-3">About us</h1>
    <p className="mb-6 w-full md:w-[500px] font-semibold">
      ICT turns complex tax rules into practical skills and real results. As Pakistan’s leading taxation institute, we offer expert-led training and corporate solutions that help professionals and businesses stay compliant, confident, and ahead.
    </p>
    <a className="bg-[#3D4098] py-2 px-6 md:px-9 text-white font-bold text-md md:text-lg rounded-lg" href="/about">Explore</a>
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
      { title: 'UK TAXATION', img: '/uk.png', slug: "uk-taxation" },
      { title: 'USA TAXATION', img: '/usa.png', slug: "/usa-taxation" },
      { title: 'UAE TAXATION', img: '/uae.png', slug: "uae-taxation" },
      { title: 'SAUDI TAXATION', img: '/saudi.png', slug: "saudi-taxation" },
      { title: 'CERTIFIED TAX ADVISOR', img: '/fbr.png', slug: "certified-tax-advisor" },
      { title: 'ADVANCE TAXATION AND LITIGATION', img: '/advance-tax.png', slug: "advance-taxation-and-litigation" },
      { title: 'MASTER SALES TAX', img: '/sales-tax.png', slug: "master-sales-tax" },
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
            src="/h2.png"
            alt="Campus Session"
            className="w-full h-[360px] object-cover"
          />
        </div>

        {/* Center Image */}
        <div className="relative overflow-hidden rounded-2xl shadow-2xl scale-105">
          <img
            src="/h3.png"
            alt="ICT Campus Group"
            className="w-full h-[420px] object-cover"
          />
        </div>

        {/* Right Image */}
        <div className="relative overflow-hidden rounded-2xl rotate-3 shadow-lg">
          <img
            src="/pic1.png"
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
        "/FBR5.png",
        "/FBR2.png",
        "/FBR3.png",
        "/FBR4.png",
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
      <img className="w-64 sm:w-80 md:w-96 h-auto" src="rba.png" alt="" />
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
      <img className="w-20 sm:w-28 h-20 sm:h-28" src="Buttob.png" alt="" />
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
      <img className="w-full max-w-[570px]" src="pic1.png" alt="" />
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
  <div className="text-center mt-10">
    <p className="text-[#3D4098] font-bold">Insights</p>
    <h1 className="text-3xl sm:text-4xl font-bold mt-2">Stay Ahead in Tax & Finance</h1>
    <img className="mt-3 w-full max-w-md mx-auto" src="pic3.png" alt="" />
  </div>

</div>

    </div>
  );
}

