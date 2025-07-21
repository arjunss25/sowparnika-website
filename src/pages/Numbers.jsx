import React from 'react';

const Numbers = () => {
  return (
    <div className="numbers-container bg-[url(/bg-new.png)] bg-cover bg-center bg-no-repeat w-full min-h-[40vh] flex items-center justify-center relative text-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto flex justify-around items-center flex-wrap gap-10 py-10 px-5 relative z-10">
        <div className="stat-item flex flex-col items-center flex-1 min-w-[200px] p-5 text-center">
          <img src="/1.png" alt="Successful Projects Icon" className="mb-4 w-10 h-10" />
          <div className="text-4xl font-bold mb-2">50+</div>
          <div className="text-gray-400">Successful Projects</div>
        </div>

        <div className="stat-item flex flex-col items-center flex-1 min-w-[200px] p-5 text-center">
          <img src="/2.png" alt="Happy Families Icon" className="mb-4 w-10 h-10" />
          <div className="text-4xl font-bold mb-2">10,000</div>
          <div className="text-gray-400">Happy Families</div>
        </div>

        <div className="stat-item flex flex-col items-center flex-1 min-w-[200px] p-5 text-center">
          <img src="/3.png" alt="Awards Icon" className="mb-4 w-10 h-10" />
          <div className="text-4xl font-bold mb-2">25+</div>
          <div className="text-gray-400">Awards Winning</div>
        </div>

        <div className="stat-item flex flex-col items-center flex-1 min-w-[200px] p-5 text-center">
          <img src="/4.png" alt="Experience Icon" className="mb-4 w-10 h-10" />
          <div className="text-4xl font-bold mb-2">20+</div>
          <div className="text-gray-400">Years of Experience</div>        </div>
      </div>
    </div>
  );
};

export default Numbers;