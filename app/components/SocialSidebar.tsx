"use client";

import { FaFacebookF } from "react-icons/fa6";
import { FiTwitter } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { LuYoutube } from "react-icons/lu";

export default function SocialSidebar() {
  return (

<div className="flex justify-start px-28 py-10 gap-10">

        <div>
          <h1 className="rotate-270 text-lg -ml-1 font-extrabold text-[#15A959]">ICT</h1>
          <p className="w-1 h-28 font-bold bg-black ml-3 mt-3 mb-3"></p>

                <a className="mt-5 flex text-[#3D4098] ml-1 text-lg" href=""><FaFacebookF/></a> 
                <a className="mt-5 flex ml-1.5 text-[#3D4098] text-lg" href=""><FiTwitter /></a> 
                <a className="mt-5 flex ml-1.5 text-[#3D4098] text-lg" href=""><AiOutlineInstagram /></a> 
                <a className="mt-5 flex ml-1.5 text-[#3D4098] text-lg" href=""><LuYoutube /></a> 
          
          <p className="w-1 h-54 bg-black ml-3 mt-3 mb-3"></p>
          </div>
        <div>

        </div>
        </div>
  )
}   