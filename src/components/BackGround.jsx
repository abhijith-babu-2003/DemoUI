import React from "react";
import earth from '../assets/Mask group.jpg';

const BackGround = () => {
  return (
    <section className="w-full bg-gray-100 relative overflow-hidden px-6 md:px-20 py-24 grid md:grid-cols-2 items-center gap-12">
      {/* Subtle vertical stripes background */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 bg-[length:40px_100%] opacity-30" />

      {/* Left Content */}
      <div className="relative z-10 text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight text-black">
          Bold Brands <br />
          Creative Design <br />
          Studio.
        </h1>
      </div>

      {/* Right Image with caption */}
      <div className="relative z-10 flex flex-col items-center md:items-end text-center md:text-right mt-10 md:mt-0">
        <img
          src={earth}
          alt="Earth Illustration"
          className="w-48 sm:w-64 md:w-80 object-contain drop-shadow-lg"
        />
        <p className="mt-3 text-sm sm:text-base md:text-sm text-gray-500 max-w-xs sm:max-w-sm md:max-w-xs leading-relaxed">
          Identify the key barriers that prevent your business from reaching its full potential. 
          Addressing these issues can transform your path to success.
        </p>
      </div>
    </section>
  );
};

export default BackGround;
