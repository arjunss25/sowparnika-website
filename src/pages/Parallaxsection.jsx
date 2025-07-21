import React from 'react'

const Parallaxsection = () => {
  return (
    <div className='w-full h-[30vh] sm:h-[35vh] md:h-[40vh] bg-[#6B0F2B] relative overflow-hidden flex items-center justify-center px-4 sm:px-6 md:px-8'>
      {/* Background geometric shapes */}
      <div className="absolute inset-0">
        <div className="absolute w-full h-full" style={{
          background: `
            linear-gradient(
              45deg,
              rgba(139, 21, 56, 0.3) 25%,
              transparent 25%
            ),
            linear-gradient(
              -45deg,
              rgba(139, 21, 56, 0.3) 25%,
              transparent 25%
            )
          `,
          backgroundSize: '200% 200%',
          transform: 'scale(1.5)'
        }}></div>
      </div>

      <div className="relative z-10 text-left max-w-xl md:max-w-[80%] mx-auto">
        <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-medium mb-2 sm:mb-3 md:mb-4 tracking-normal leading-tight">
          Looking For An Apartment Or Villa In Kottayam ?
        </h2>
        <p className="text-white text-sm sm:text-base md:text-[16px] mb-4 sm:mb-5 md:mb-6 opacity-90 font-light">
          Sowaparnika projects is here to help you
        </p>
        <button className="bg-[#E31E24] hover:bg-[#cc1a1f] text-white text-xs sm:text-sm md:text-[14px] py-2 sm:py-2.5 px-4 sm:px-5 md:px-6 rounded-[4px] transition duration-300 hover:scale-105">
          Make An Enquiry
        </button>
      </div>
    </div>
  )
}

export default Parallaxsection