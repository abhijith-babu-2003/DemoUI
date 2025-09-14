import React from 'react';
import groupOne from '../assets/Groupone.webp';
import groupTwo from '../assets/GroupTwo.webp';
import groupThree from '../assets/GroupThree.webp';

const steps = [
  {
    img: groupOne,
    title: "Initiation & Planning",
    desc: "Nemo enim ipsam voluptatem quia aut consequuntur on magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    img: groupTwo,
    title: "Execution & Development",
    desc: "Nemo enim ipsam voluptatem quia aut consequuntur on magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    img: groupThree,
    title: "Testing & Maintenance",
    desc: "Nemo enim ipsam voluptatem quia aut consequuntur on magni dolores eos qui ratione voluptatem sequi nesciunt."
  }
];

const WorkingProcess = () => {
  return (
    <section className="flex flex-col md:flex-row bg-gray-100 px-4 sm:px-8 md:px-16 py-12 gap-8">
      
      {/* Left Section */}
      <div className="w-full md:w-1/2 flex flex-col">
        <p className="text-sm text-gray-500 mb-2">--- Working Process</p>
        <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold mb-8 leading-snug">
          How We Help Grow<br />Your Business
        </h1>

        {/* Steps */}
        <div className="flex flex-col gap-6">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col sm:flex-row items-start gap-4">
              <img src={step.img} alt={step.title} className="w-12 h-12 flex-shrink-0" />
              <div>
                <h5 className="text-lg font-semibold mb-1">{step.title}</h5>
                <p className="text-gray-600 text-sm sm:text-base">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <img
          src="https://images.pexels.com/photos/19089106/pexels-photo-19089106.jpeg"
          alt="Right Side Illustration"
          className="w-full sm:w-4/5 md:w-auto max-w-lg h-auto rounded-lg object-cover" loading="lazy"
        />
      </div>
    </section>
  );
};

export default WorkingProcess;
