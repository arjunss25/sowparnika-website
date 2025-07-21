import React from 'react';

const Bottomcomponent = () => {
  return (
    <div className="w-full font-inter"> {/* Main container for the footer */}
      {/* Disclaimer Section */}
      <div className="bg-white p-6 md:p-8 lg:p-10 text-gray-700 text-xs md:text-sm lg:text-base leading-relaxed rounded-lg shadow-sm">
        <p className="max-w-6xl mx-auto">
          <span className="font-bold">Disclaimer:</span> This content is intended for informational purposes only and does not constitute an offer to avail of any services. Prices and availability are
          subject to change without notice. Images are for representation only and may not depict actual properties. By providing your contact details, you consent to
          receive communications from us via phone, SMS, email, or WhatsApp, even if your number is registered on the DND list. We collect and store personal
          information submitted through our website to respond to your inquiries.
        </p>
      </div>

      {/* Copyright Section */}
      <div className="bg-red-600 text-white p-4 md:p-5 lg:p-6 text-center text-sm md:text-base lg:text-lg mt-0 flex items-center ">
        <p className="font-medium text-left max-w-6xl mx-auto">
          © Sowparnika Projects 2024 All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Bottomcomponent;
