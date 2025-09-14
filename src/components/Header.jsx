import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { HiMenuAlt3 } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const message = encodeURIComponent("Hello! I want to get in touch.");

  return (
    <header className="w-full bg-gray-100 px-6 py-4 flex items-center justify-between shadow-sm">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white font-bold">
          <span className="text-sm">✦</span>
        </div>
        <h1 className="text-xl font-bold">Averix</h1>
      </div>

      {/* Desktop Nav */}
      <nav
        className="hidden md:flex items-center bg-white rounded-full px-6 py-2 shadow gap-6"
        aria-label="Main Navigation"
      >
        <ul className="flex gap-6 text-sm font-medium text-gray-800">
          <li>
            <Link to="/" className="cursor-pointer hover:text-black">
              Home
            </Link>
          </li>
          <li className="cursor-pointer hover:text-black">About Us</li>
          <li className="cursor-pointer hover:text-black">Pages</li>
          <li className="cursor-pointer hover:text-black">Portfolio</li>
          <li className="cursor-pointer hover:text-black">Blog</li>
          <li>
            <Link to="/contact" className="hover:text-black">
              Contact
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-3">
          {/* WhatsApp Icon */}
          <a
            href="https://wa.me/919207257133"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 text-2xl hover:text-green-600"
          >
            <FaWhatsapp />
          </a>

          <AiOutlineCloseCircle className="text-2xl text-gray-700 cursor-pointer hover:text-black" />
          <button
            onClick={() => navigate("/contact")}
            className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full font-medium hover:bg-gray-800 transition"
          >
            Let&apos;s Talk <BsArrowUpRightCircle className="text-lg" />
          </button>
        </div>
      </nav>

      {/* Mobile Toggle */}
      <button
        className="md:hidden text-3xl text-gray-800"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
      >
        {isOpen ? <AiOutlineCloseCircle /> : <HiMenuAlt3 />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="absolute top-16 left-0 w-full bg-white shadow-md py-6 px-8 flex flex-col gap-4 z-50"
        >
          <ul className="flex flex-col gap-4 text-base font-medium text-gray-800">
            <li className="cursor-pointer hover:text-black">Home</li>
            <li className="cursor-pointer hover:text-black">About Us</li>
            <li className="cursor-pointer hover:text-black">Pages</li>
            <li className="cursor-pointer hover:text-black">Portfolio</li>
            <li className="cursor-pointer hover:text-black">Blog</li>
            <li>
              <Link to="/contact" className="hover:text-black">
                Contact
              </Link>
            </li>
          </ul>

          {/* WhatsApp + Button */}
          <div className="flex items-center justify-center gap-4 mt-4">
            <a
              href={`https://wa.me/919207257133?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 text-2xl hover:text-green-600"
            >
              <FaWhatsapp />
            </a>
            <button
              onClick={() => navigate("/contact")}
              className="flex items-center justify-center gap-2 bg-black text-white px-4 py-2 rounded-full font-medium hover:bg-gray-800 transition"
            >
              Let&apos;s Talk <BsArrowUpRightCircle className="text-lg" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
