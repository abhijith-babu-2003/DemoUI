import React from 'react';
import { AiOutlineCheck } from "react-icons/ai";
import { BsArrowUpRightCircle } from "react-icons/bs";

const plans = [
  {
    title: "Basic Plan",
    description: "Ideal for scalable businesses or startups.",
    price: "$99.00/Monthly",
    features: [
      "Access to all basic features",
      "Work customization",
      "Access to all design templates",
      "Priority customer support",
    ],
  },
  {
    title: "Standard Plan",
    description: "Perfect for growing businesses.",
    price: "$199.00/Monthly",
    features: [
      "All features in Basic",
      "Advanced analytics",
      "Team collaboration tools",
      "24/7 customer support",
    ],
  },
  {
    title: "Premium Plan",
    description: "For enterprise-level businesses.",
    price: "$299.00/Monthly",
    features: [
      "All features in Standard",
      "Dedicated account manager",
      "Custom integrations",
      "Priority support",
    ],
  },
];

const PricingPlan = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <p className="text-sm text-gray-500 mb-2 text-center">--- PRICING PLAN</p>
      <h1 className="text-3xl sm:text-4xl font-bold mb-10 text-center">Discover Your Ideal Plan</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="border rounded-2xl p-6 flex flex-col justify-between shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white"
          >
            <div>
              <h5 className="text-xl font-semibold mb-2">{plan.title}</h5>
              <p className="text-gray-500 mb-4">{plan.description}</p>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">{plan.price}</h2>

              <ul className="space-y-2 sm:space-y-3 mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-700">
                    <AiOutlineCheck className="text-green-500 w-5 h-5 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <button className="flex items-center justify-center gap-2 bg-white text-black px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-black hover:bg-black hover:text-white transition-colors duration-300 text-sm sm:text-base">
              View our works
              <BsArrowUpRightCircle className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlan;
