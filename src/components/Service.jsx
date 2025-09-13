import React from "react";
import { BsArrowUpRightCircle } from "react-icons/bs";

const Service = () => {
  return (
    <section className="bg-black text-white min-h-screen px-4 sm:px-8 lg:px-16 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-12 lg:mb-16 gap-8 lg:gap-0">
          <div className="flex-1">
            <p className="text-gray-400 text-sm mb-4 tracking-wider">
              — OUR SERVICES
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug mb-6">
              We Build Your Digital
              <br />
              Business.
            </h1>
            <p className="text-gray-300 max-w-full sm:max-w-lg text-base sm:text-lg leading-relaxed mb-6 lg:mb-8">
              When selecting a web design agency, it's essential to consider its
              reputation, experience, and the specific needs of your project.
            </p>
          </div>

          {/* View Our Works Button */}
          <button className="flex items-center gap-2 bg-white text-black px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium hover:bg-gray-100 transition-colors duration-300 self-start">
            View our works
            <BsArrowUpRightCircle className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Image */}
          <img
            className="w-full lg:w-96 h-64 sm:h-80 rounded-3xl object-cover flex-shrink-0"
            src="https://images.pexels.com/photos/16555682/pexels-photo-16555682.jpeg"
            alt="Service Illustration"
          />

          {/* Services List */}
          <div className="flex-1 space-y-8">
            {/* Other Services */}
            <div className="space-y-4 sm:space-y-6">
  <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-2 [text-shadow:2px_2px_4px_rgba(0,0,0,0.3)] border-b pb-2">
    Digital Marketing Strategy
  </h2>

  <h2 className="text-xl sm:text-2xl font-semibold hover:text-gray-300 transition-colors cursor-pointer border-b pb-2">
    Web Design & Development
  </h2>

  <h2 className="text-xl sm:text-2xl font-semibold hover:text-gray-300 transition-colors cursor-pointer border-b pb-2">
    Branding & Identity
  </h2>

  <h2 className="text-xl sm:text-2xl font-semibold hover:text-gray-300 transition-colors cursor-pointer border-b pb-2">
    Motion & 3D Modeling
  </h2>
</div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
