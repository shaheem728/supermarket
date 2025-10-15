import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Search } from 'lucide-react';
import { Menu } from 'lucide-react';
import NavIcons from "./NavIcons";
const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="w-full   shadow-sm bg-white">
       <div className="px-6 lg:px-20 py-3 lg:py-4 flex  justify-between">
      {/* Left - Logo */}
      <div className="flex items-center ">
        <img src={assets.Header} alt="Logo" className="h-10" />
      </div>
      <div className="flex w-[50%] justify-between gap-8 ">
      <div className="flex items-center w-full gap-4">
        {/* Location */}
        <div className="flex items-center gap-1">
          <img src={assets.Location} alt="Location" className="w-4 h-4" />
          <span className="font-medium">Location</span>
        </div>

        {/* Search Bar */}
        <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-full">
          <Search  className=" h-5 text-gray-400 mr-2"/>
          <input
            type="text"
            placeholder='Search for "Ice Cream"'
            className="bg-transparent outline-none w-full text-sm text-gray-700"
          />
        </div>
      </div>

      {/* Right - Icons */}
      <div className="hidden md:flex items-center  gap-6">
        <NavIcons/>
      </div>
      </div>
      {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
           <Menu />
        </button>
      </div>

            {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden flex  items-center justify-between bg-white shadow-lg px-6 py-4 ">
          <NavIcons/>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
