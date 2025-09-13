import React from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const Questions = () => {
  return (
    <section className="bg-gray-100 px-4 sm:px-8 md:px-20 py-12 font-sans">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Side - Header */}
        <div className="md:w-1/2 pb-4 md:pr-8 flex flex-col justify-center">
          <p className="text-gray-600 text-sm mb-2">--Question</p>
          <h1 className="text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug">
            Questions and <br />
            Answers
          </h1>
        </div>

        {/* Right Side - Questions List */}
        <div className="md:w-1/2 flex flex-col gap-2 sm:gap-4">
          <ul className="flex flex-col gap-2 sm:gap-4">
            <li className="border-b flex justify-between items-center py-2 cursor-pointer">
              What Services Does Your Agency Offer?
              <FiChevronDown className="text-gray-500 w-5 h-5 sm:w-6 sm:h-6" />
            </li>
            <li className="flex flex-col">
              <div className="flex justify-between items-center py-2 cursor-pointer border-b">
                How Long Does It Take To See Results?
                <FiChevronUp className="text-gray-500 w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <p className="text-gray-700 text-sm sm:text-base mt-2 px-2 sm:px-0">
                Identify the key barriers that prevent your business from reaching its full potential. Addressing these issues can transform your path to success.
              </p>
            </li>
            <li className="border-b flex justify-between items-center py-2 cursor-pointer">
              What do I need to give you to get started?
              <FiChevronDown className="text-gray-500 w-5 h-5 sm:w-6 sm:h-6" />
            </li>
            <li className="border-b flex justify-between items-center py-2 cursor-pointer">
              What industries do you specialize in?
              <FiChevronDown className="text-gray-500 w-5 h-5 sm:w-6 sm:h-6" />
            </li>
            <li className="flex justify-between items-center py-2 cursor-pointer">
              What sets your Agency apart from others?
              <FiChevronDown className="text-gray-500 w-5 h-5 sm:w-6 sm:h-6" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Questions;
