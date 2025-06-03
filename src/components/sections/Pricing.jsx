import React from 'react';

const Pricing = () => {
  return (
    <section
      data-aos="fade-up"
      id="pricing"
      className="px-6 py-20 bg-black text-white flex flex-col items-center"
    >
      <h2 className="text-4xl font-bold mb-4">Pricing Plans</h2>
      <p className="mb-10 text-white">(All prices in NZD)</p>

      <div className="flex flex-col md:flex-row gap-8 max-w-6xl w-full">
        {/* Basic Plan */}
        <div className="flex-1 border-r md:border-r border-yellow-400 p-8 text-center shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Basic</h3>
          <p className="text-4xl font-bold mb-4 text-yellow-300">$125</p>
          <ul className="space-y-2">
            <li>Single Page Site</li>
            <li>Navigation bar</li>
            <li>Hero Section</li>
            <li>About Section</li>
            <li>Past Work Section</li>
            <li>Contact Section</li>
          </ul>
        </div>

        {/* Advanced Plan */}
        <div className="flex-1 border md:border-none p-8 text-center shadow-lg md:scale-110">
          <h3 className="text-2xl font-semibold mb-4">Advanced</h3>
          <p className="text-4xl font-bold mb-4 text-yellow-300">$200</p>
          <ul className="space-y-2">
            <li>Single Page Site</li>
            <li>Navigation bar</li>
            <li>Hero Section</li>
            <li>About Section</li>
            <li>Past Work Section</li>
            <li>Contact Section</li>
            <li>Clean Animations</li>
          </ul>
        </div>

        {/* Premium Plan */}
        <div className="flex-1 border-l md:border-l border-yellow-400 p-8 text-center shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Premium</h3>
          <p className="text-4xl font-bold mb-4 text-yellow-300">$300</p>
          <ul className="space-y-2">
            <li>Single Page Site</li>
            <li>Navigation bar</li>
            <li>Hero Section</li>
            <li>About Section</li>
            <li>Past Work Section</li>
            <li>Contact Section</li>
            <li>Clean Animations</li>
            <li>Mobile Friendly</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
