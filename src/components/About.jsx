import React from "react";
import star from '../assets/Group.webp';
import clients from '../assets/Clients.webp';

const About = () => {
  return (
    <section className="w-full bg-white px-6 md:px-20 py-16">
      {/* Top Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <p className="uppercase text-sm tracking-widest font-medium text-gray-600 mb-6">
            --- About Company
          </p>
          <img src={star} alt="Company Star" className="max-w-full h-auto" loading="lazy" />
        </div>

        {/* Right Side */}
        <div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight text-black mb-8">
            A Full-Service Digital Agency <br />
            Dedicated to Outstanding Brand <br />
            Creating Experiences.
          </h1>

          {/* Images Row */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-6 mb-8 justify-center md:justify-start">
            <img
              src="https://images.pexels.com/photos/33839225/pexels-photo-33839225.jpeg"
              alt="Work 1"
              className="w-full sm:w-40 h-48 md:w-48 md:h-56 rounded-lg object-cover"
            />
            <img
              src="https://images.pexels.com/photos/3607542/pexels-photo-3607542.jpeg"
              alt="Work 2"
              className="w-full sm:w-40 h-48 md:w-48 md:h-56 rounded-lg object-cover"
            />

            {/* Stats and Avatars */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <div className="flex -space-x-3 mb-2 sm:mb-0">
                <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold">
                  3.2M
                </div>
              </div>
              <div className="text-center sm:text-left">
                <h5 className="font-bold text-lg text-sky-900">300+ Happy Clients</h5>
                <p className="text-sm text-gray-600 max-w-xs sm:max-w-sm">
                  Identify the key barriers that prevent your business from reaching its full
                  potential. Addressing these issues can transform your path to success.
                </p>
              </div>
            </div>
          </div>

          {/* Clients Section */}
          <div className="flex flex-wrap items-center gap-4"></div>
        </div>
      </div>

      {/* Bottom Clients Image */}
      <div className="mt-12">
        <img src={clients} alt="Clients" className="w-full h-auto object-cover" />
      </div>
    </section>
  );
};

export default About;
