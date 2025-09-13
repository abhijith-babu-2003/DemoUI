import React from "react";
import FooterIcon from "../assets/Footer.jpg";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { TiSocialDribbble } from "react-icons/ti";
import { FaSquareBehance } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 font-sans ">
      {/* Top Section */}
      <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-start justify-between">
        {/* Left side */}
        <h1 className="text-7xl mb-4 sm:mb-0 flex-1 font-bold">
          Let's Work Together
        </h1>

        {/* Right side */}
        <div className="flex-1 text-center sm:text-right">
          <p className="text-sm mb-4 max-w-lg mx-auto sm:mx-0 sm:text-right">
            Avanta team quickly understood our business requirements
            <br />
            and were proactive and flexible with our ongoing support
            <br />
            and developments. You can definitely.
          </p>
          <img
            src={FooterIcon}
            alt="Footer Icon"
            className="mx-auto sm:mx-0 mb-6 w-32 h-auto" loading="lazy"
          />
        </div>
      </div>

      {/* Middle Section */}
      <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row sm:justify-between gap-6  border-t border-gray-700 pt-7">
        <div className="flex-1 min-w-[200px]">
          <h3 className="text-lg mb-2">Averix</h3>
          <p className="text-sm">
            Creative design agency specializes in innovative visual solutions
          </p>
          <p className="text-sm mt-1">info@example.com</p>
        </div>

        <div className="flex-1 min-w-[150px]">
          <h3 className="text-lg mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li>About Us</li>
            <li>Service</li>
            <li>Portfolio</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="flex-1 min-w-[150px]">
          <h3 className="text-lg mb-2">Support</h3>
          <ul className="space-y-1 text-sm">
            <li>Style guide</li>
            <li>License</li>
            <li>Changelog</li>
            <li>Help</li>
          </ul>
        </div>

        <div className="flex-1 min-w-[200px]">
          <h3 className="text-lg mb-2">Contact Us</h3>
          <p className="text-sm">Call Us: 888 456 7890</p>
          <p className="text-sm mt-1">
            Location: 410 Santown, California #4001, USA
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      {/* Bottom Section */}
      <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        {/* Left side text */}
        <p className="text-sm text-center sm:text-left">
          All rights reserved - 2024 © Huraytheme
        </p>

        {/* Right side icons */}
        <div className="flex gap-5 justify-center sm:justify-end text-xl">
          <FaSquareXTwitter className="hover:text-gray-400 cursor-pointer" />
          <FaInstagramSquare className="hover:text-gray-400 cursor-pointer" />
          <FaLinkedin className="hover:text-gray-400 cursor-pointer" />
          <TiSocialDribbble className="hover:text-gray-400 cursor-pointer" />
          <FaSquareBehance className="hover:text-gray-400 cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
