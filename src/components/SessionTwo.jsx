import React from 'react';
import sessionOne from '../assets/SessionOne.png';

const awardsData = [
  { award: 'Winner - Best eCommerce Websites', year: '2020', location: 'NY-America' },
  { award: 'Winner - Best eCommerce Websites', year: '2021', location: 'NY-America' },
  { award: 'Winner - Best eCommerce Websites', year: '2022', location: 'NY-America' },
  { award: 'Winner - Best eCommerce Websites', year: '2023', location: 'NY-America' },
];

const SessionTwo = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-8 md:px-12 py-12">
      {/* Testimonial Section */}
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 mb-12">
        <img
          src={sessionOne}
          alt="Client Testimonial"
          className="w-full md:w-1/2 rounded-xl shadow-lg object-cover"
        />
        <p className="text-gray-700 text-base sm:text-lg md:text-xl font-medium leading-relaxed md:leading-loose text-center md:text-left">
          "Ovanta team quickly understood our requirements and were proactive and flexible 
          with support and ongoing complex developments. You can definitely trust them 
          for complex project requirements as they are top-notch in their field and 
          highly recommended."
        </p>
      </div>

      {/* Awards Section */}
      <div className="flex justify-center mt-8 md:mt-12">
        <div className="w-full max-w-lg">
          <h4 className="text-center mb-6 text-lg sm:text-xl font-semibold">Awards</h4>

          {awardsData.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-gray-200 py-2 px-3 ${
                index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
              }`}
            >
              <div className="sm:w-1/2 text-gray-800">{item.award}</div>
              <div className="sm:w-1/6 text-gray-600">{item.year}</div>
              <div className="sm:w-1/3 text-gray-600">{item.location}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SessionTwo;
