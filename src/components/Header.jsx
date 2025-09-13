import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { HiMenuAlt3 } from "react-icons/hi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-gray-100 px-6 py-4 flex items-center justify-between shadow-sm">
      {/* Left Logo + Brand */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white font-bold">
          {/* Replace with your actual logo */}
          <span className="text-sm">✦</span>
        </div>
        <h1 className="text-xl font-bold">Averix</h1>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center bg-white rounded-full px-6 py-2 shadow gap-6">
        <ul className="flex gap-6 text-sm font-medium text-gray-800">
          <li className="cursor-pointer hover:text-black">Home</li>
          <li className="cursor-pointer hover:text-black">About Us</li>
          <li className="cursor-pointer hover:text-black">Pages</li>
          <li className="cursor-pointer hover:text-black">Portfolio</li>
          <li className="cursor-pointer hover:text-black">Blog</li>
          <li className="cursor-pointer hover:text-black">Contact</li>
        </ul>

        {/* Icons and Button */}
        <div className="flex items-center gap-3">
          <AiOutlineCloseCircle className="text-2xl text-gray-700 cursor-pointer hover:text-black" />
          <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full font-medium hover:bg-gray-800 transition">
            Let&apos;s Talk <BsArrowUpRightCircle className="text-lg" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-3xl text-gray-800"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <AiOutlineCloseCircle /> : <HiMenuAlt3 />}
      </button>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md py-6 px-8 flex flex-col gap-4 z-50">
          <ul className="flex flex-col gap-4 text-base font-medium text-gray-800">
            <li className="cursor-pointer hover:text-black">Home</li>
            <li className="cursor-pointer hover:text-black">About Us</li>
            <li className="cursor-pointer hover:text-black">Pages</li>
            <li className="cursor-pointer hover:text-black">Portfolio</li>
            <li className="cursor-pointer hover:text-black">Blog</li>
            <li className="cursor-pointer hover:text-black">Contact</li>
          </ul>

          <button className="mt-4 flex items-center justify-center gap-2 bg-black text-white px-4 py-2 rounded-full font-medium hover:bg-gray-800 transition">
            Let&apos;s Talk <BsArrowUpRightCircle className="text-lg" />
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
