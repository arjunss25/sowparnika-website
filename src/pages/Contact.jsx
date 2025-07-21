import React from 'react';
import { CiLocationOn } from "react-icons/ci";

const Contact = () => {
  return (
    <div className="py-8 sm:py-12 md:py-16 px-4 md:px-8 w-full sm:w-[90%] md:w-[80%] mx-auto">
      <div className="text-center mb-8 sm:mb-10 md:mb-12">
        <div className="titles flex flex-col justify-center items-center gap-1 sm:gap-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 sm:mb-4">Contact Us</h2>
          <p className="text-gray-600 text-sm sm:text-base w-full sm:w-[90%] md:w-[80%] mx-auto">
            Let's discuss how Sowparnika can fulfill your dream home aspirations. Enquire Now!
          </p>
          <img src="/ul-svg.svg" alt="" className='w-[8rem] sm:w-[9rem] md:w-[10rem] mt-3 sm:mt-4 md:mt-5' />
        </div>
      </div>

      <div className="mt-8 sm:mt-10 md:mt-12">
        <div className="text-left mb-8 sm:mb-10 md:mb-12">
          <h3 className="text-lg sm:text-xl md:text-2xl font-medium mb-4 sm:mb-5 md:mb-6">Lets Get In Touch</h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Sowparnika Projects is here to help you find your dream home in Kerala's vibrant capital city. With our strong presence in Trivandrum & Kottayam, we are committed to delivering exceptional real estate solutions tailored to your needs. Whether you're interested in our ongoing residential projects, have questions about our completed developments, or need assistance with your investment decisions, our team is ready to assist you.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">
          <div className="flex items-center gap-2 sm:gap-3 hover:text-red-600 transition-colors duration-300 cursor-pointer">
            <img src="/6.png" alt="Phone" className="h-5 sm:h-6" />
            <span className="text-sm sm:text-base">+91 9746 9020 12</span>
          </div>
          
          <div className="flex items-center gap-2 sm:gap-3 hover:text-red-600 transition-colors duration-300 cursor-pointer">
            <img src="/7.png" alt="Email" className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="text-sm sm:text-base">cksales@sowparnika.com</span>
          </div>

          <div className="mt-2 sm:mt-3 md:mt-4">
            <div className="flex items-start gap-2 sm:gap-3">
              <CiLocationOn className='w-5 h-5 sm:w-6 sm:h-6 text-gray-600 mt-1'/>
              <div>
                <span className="font-medium text-sm sm:text-base">Kerala:</span>
                <p className="text-sm sm:text-base text-gray-600 mt-1">
                  Vettukulam Arcade,<br />
                  Opp.Mar Ivanios College Main Gate Nalanchira P.O.,<br />
                  Trivandrum 695 015.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
