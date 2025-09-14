import React from "react";

const Section = () => {
  return (
    <section className="w-full h-screen relative">
    
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold text-center px-4">
          Welcome to Our Website
        </h1>
      </div>
    </section>
  );
};

export default Section;
