import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';

const Testimonial = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, {
    once: true,
    threshold: 0.2
  });

  const testimonials = [
    {
      name: "Abishek",
      location: "Thrissur",
      image: "/wpeople.png.png",
      text: "From the initial inquiry to the final handover, the experience with Sowparnika has been seamless. The projects are well-planned, and the amenities provided are top-notch."
    },
    {
      name: "Sarah",
      location: "Kerala",
      image: "/wpeople.png.png",
      text: "We found our dream home with Sowparnika. The attention to detail and quality of construction exceeded our expectations."
    },
    {
      name: "John",
      location: "Trivandrum",
      image: "/wpeople.png.png",
      text: "The team at Sowparnika was professional and helpful throughout the entire process. Highly recommended!"
    }
  ];

  const handleDotClick = (index) => {
    setCurrentTestimonial(index);
  };

  return (
    <motion.div 
      ref={ref}
      className="py-8 sm:py-12 md:py-16 px-4 md:px-8 w-full sm:w-[90%] md:w-[80%] mx-auto overflow-hidden"
    >
      <motion.div 
        initial={{ y: 30, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-8 sm:mb-10 md:mb-12"
      >
        <div className="titles flex flex-col justify-center items-center gap-1 sm:gap-2">
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 sm:mb-4"
          >
            Our Testimonial
          </motion.h2>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-600 text-sm sm:text-base w-full sm:w-[90%] md:w-[80%] mx-auto"
          >
            Discover why Sowparnika Projects is the trusted choice for quality apartments and villas in Trivandrum and Kerala. Hear from our satisfied homeowners who have found their dream homes with us.
          </motion.p>
          <motion.img 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            src="/ul-svg.svg" 
            alt="" 
            className='w-[8rem] sm:w-[9rem] md:w-[10rem] mt-3 sm:mt-4 md:mt-5' 
          />
        </div>
      </motion.div>

      <motion.div 
        initial={{ y: 40, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="relative w-full sm:w-[90%] md:w-[80%] mx-auto"
      >
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white rounded-lg p-4 sm:p-6 md:p-8"
        >
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <motion.div 
              initial={{ x: -30, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : { x: -30, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex-shrink-0 w-32 sm:w-40 md:w-48"
            >
              <img
                src="/Group 8.png"
                alt={testimonials[currentTestimonial].name}
                className="w-full h-full object-cover rounded-lg"
              />
            </motion.div>
            <motion.div 
              initial={{ x: 30, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : { x: 30, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-center sm:text-left"
            >
              <div className="mb-3 sm:mb-4">
                <h3 className="text-lg sm:text-xl font-semibold text-red-600">
                  {testimonials[currentTestimonial].name}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">{testimonials[currentTestimonial].location}</p>
              </div>
              <p className="text-sm sm:text-base text-gray-700 italic">
                "{testimonials[currentTestimonial].text}"
              </p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="flex justify-center gap-2 mt-4 sm:mt-5 md:mt-6"
        >
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2 sm:w-3 h-2 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial 
                ? 'border-red-600 w-6 sm:w-8 border-[1px] bg-red-600 h-1.5 sm:h-2' 
                : 'border-red-600 w-6 sm:w-8 border-[1px] h-1.5 sm:h-2'
              }`}
              aria-label={`View testimonial ${index + 1}`}
            />
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Testimonial;