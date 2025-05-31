import React from 'react';

const Pricing = () => {
  return (
    <section data-aos="fade-up" id="pricing" className="p-60 bg-black text-white flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-10">Pricing Plans</h2>
        <p className='mb-5 text-white'>(All prices in NZD)</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
        {/* Basic Plan */}
        <div className="border-r border-yellow-400 p-8 text-center shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Basic</h3>
          <p className="text-4xl font-bold mb-4 text-yellow-300">$100</p>
          <ul className="space-y-2">
            <li>Simple Design</li>
            <li>Fast Delivery</li>
            <li>Modern Look</li>
          </ul>
        </div>

        {/* Advanced Plan */}
        <div className="border-none p-8 text-center shadow-lg scale-110">
          <h3 className="text-2xl font-semibold mb-4">Advanced</h3>
          <p className="text-4xl font-bold mb-4 text-yellow-300">$120</p>
          <ul className="space-y-2">
            <li>Simple Design</li>
            <li>Fast Delivery</li>
            <li>Responsive Layout</li>
          </ul>
        </div>

        {/* Premium Plan */}
        <div className="border-l border-yellow-400 p-8 text-center shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Premium</h3>
          <p className="text-4xl font-bold mb-4 text-yellow-300">$160</p>
          <ul className="space-y-2">
            <li>Simple Design</li>
            <li>Fast Delivery</li>
            <li>Fully Custom + Modern</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
