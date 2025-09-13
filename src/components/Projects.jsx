import React from 'react';
import { VscArrowCircleLeft, VscArrowCircleRight } from "react-icons/vsc";

const Projects = () => {
  return (
    <div className="bg-white min-h-screen p-6 sm:p-8 lg:p-16">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-gray-400 text-sm mb-4 sm:mb-6 tracking-wider">— OUR PROJECTS</p>

          {/* Title with Navigation Arrows */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8">
            <VscArrowCircleLeft className="w-10 h-10 sm:w-12 sm:h-12 text-gray-400 hover:text-black cursor-pointer transition-colors" />
            <h1 className="text-black text-3xl sm:text-4xl lg:text-6xl font-bold text-center">
              See Our Works In Action
            </h1>
            <VscArrowCircleRight className="w-10 h-10 sm:w-12 sm:h-12 text-gray-400 hover:text-black cursor-pointer transition-colors" />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Project Box 1 */}
          <div className="group cursor-pointer">
            <div className="rounded-3xl overflow-hidden mb-4 sm:mb-6 aspect-[4/3] relative">
              <img
                src="https://images.pexels.com/photos/9574453/pexels-photo-9574453.jpeg"
                alt="Digital Printing Project"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy"
              />
            </div>
            <h2 className="text-black text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">
              Digital Printing
            </h2>
            <p className="text-gray-700 text-base sm:text-lg">
              Web Design · Unique Visual Identity
            </p>
          </div>

          {/* Project Box 2 */}
          <div className="group cursor-pointer">
            <div className="rounded-3xl overflow-hidden mb-4 sm:mb-6 aspect-[4/3] relative">
              <img
                src="https://images.pexels.com/photos/3391128/pexels-photo-3391128.jpeg"
                alt="Frame Project"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy"
              />
            </div>
            <h2 className="text-black text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">
              Creative Framework
            </h2>
            <p className="text-gray-700 text-base sm:text-lg">
              Branding · Motion Graphics
            </p>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-8 sm:mt-12 gap-3">
          <div className="w-3 h-3 bg-black rounded-full"></div>
          <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
