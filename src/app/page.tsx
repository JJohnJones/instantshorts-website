'use client';

import React, { useState } from "react";
import { Menu } from "lucide-react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <div className="">
      <nav className="h-16 bg-gray-900 text-white flex items-center px-12 shadow-md font-inter justify-between">
      {/* Left Side - Logo and Links */}
      <div className="flex items-center space-x-6">
        <div className="text-xl font-bold">InstantShorts</div>
        <div className="hidden md:flex items-center space-x-6 font-medium">
          <a href="#" className="relative hover:text-gray-400 transition duration-300 after:content-[''] after:absolute after:left-1/2 after:bottom-[-3px] after:w-0 after:h-0.5 after:bg-gray-400 after:transition-all after:duration-300 hover:after:w-[80%] hover:after:left-[10%]">Home</a>
          <a href="#" className="relative hover:text-gray-400 transition duration-300 after:content-[''] after:absolute after:left-1/2 after:bottom-[-3px] after:w-0 after:h-0.5 after:bg-gray-400 after:transition-all after:duration-300 hover:after:w-[80%] hover:after:left-[10%]">About</a>
          <a href="#" className="relative hover:text-gray-400 transition duration-300 after:content-[''] after:absolute after:left-1/2 after:bottom-[-3px] after:w-0 after:h-0.5 after:bg-gray-400 after:transition-all after:duration-300 hover:after:w-[80%] hover:after:left-[10%]">Services</a>
          <a href="#" className="relative hover:text-gray-400 transition duration-300 after:content-[''] after:absolute after:left-1/2 after:bottom-[-3px] after:w-0 after:h-0.5 after:bg-gray-400 after:transition-all after:duration-300 hover:after:w-[80%] hover:after:left-[10%]">Contact</a>
        </div>
      </div>
      
      {/* Right Links & Mobile Menu */}
      <div className="flex items-center space-x-4">
        <a href="#" className="font-medium relative hover:text-gray-400 transition duration-300 after:content-[''] after:absolute after:left-1/2 after:bottom-[-3px] after:w-0 after:h-0.5 after:bg-gray-400 after:transition-all after:duration-300 hover:after:w-[80%] hover:after:left-[10%]">Login</a>
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg transition duration-300 hover:bg-blue-600">
          <a href="#">Sign Up</a>
        </button>
        {/* Hamburger Menu */}
        <button 
          className="md:hidden p-2 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Menu size={24} />
        </button>
      </div>
    </nav>

    <div className="flex flex-col items-center justify-start h-screen bg-gray-800 text-white text-center px-6 font-inter pt-20">
      <h1 className="text-7xl font-bold mb-20">Revolutionizing Content Creation, One Clip at a Time.</h1>
      <button className="bg-blue-500 text-white font-bold py-3 px-6 rounded-lg text-lg uppercase tracking-widest transition-shadow duration-500 shadow-[0_0_25px_rgb(0,140,255)] hover:shadow-[0_0_5px_rgb(0,140,255),0_0_25px_rgb(0,140,255),0_0_50px_rgb(0,140,255),0_0_100px_rgb(0,140,255)]">
        Start Generating for Free
      </button>
    </div>
    </div>
  );
}
