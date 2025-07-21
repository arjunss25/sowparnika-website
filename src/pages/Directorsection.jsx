import React from 'react'
import { FaRegHandPointRight } from "react-icons/fa";
import { motion, useInView } from 'framer-motion';

const Directorsection = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, {
    once: true,
    threshold: 0.2
  });

  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.8 + (i * 0.1),
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <motion.div 
      ref={ref}
      className="bg-white flex items-center justify-center py-10 md:pb-20 md:pt-0 px-4 overflow-hidden"
    >
      <div className="flex flex-col lg:flex-row w-full max-w-7xl mx-auto gap-6 lg:gap-0">
        {/* Left Section - Image */}
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center justify-center p-2 sm:p-4 md:p-6"
        >
          <motion.div 
            initial={{ scale: 0.9 }}
            animate={isInView ? { scale: 1 } : { scale: 0.9 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative w-full max-w-sm sm:max-w-md lg:max-w-none"
          >
            <img
              src="/wpeople.png.png"
              alt="Ramji Subramaniam, Managing Director"
              className="w-full h-auto object-contain"
            />
          </motion.div>
        </motion.div>

        {/* Right Section - Content */}
        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="lg:w-[70%] p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-center"
        >
          <motion.h2 
            initial={{ y: 30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-black mb-3 sm:mb-4"
          >
            Delivering Happiness <span className="text-red-600">Since 2003.</span>
          </motion.h2>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-gray-700 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base"
          >
            Sowparnika Projects is a leading real estate developer with a strong presence in
            Trivandrum (Thiruvananthapuram), the capital city of Kerala, and across South India.
            Our expertise spans the flourishing real estate markets of Karnataka, Kerala, and Tamil
            Nadu, where we have been delivering premium yet affordable residential projects since
            2003. In Trivandrum, Sowparnika has become synonymous with quality, offering a wide
            range of luxury apartments and villas designed to meet the needs of modern
            homebuyers. With a portfolio that includes over 50 successfully completed projects and
            more than 25 ongoing developments across Bengaluru, Trivandrum, and other key
            cities, Sowparnika continues to lead the way in South India's real estate landscape.
          </motion.p>

          {/* Features Section */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {[
              "Safety",
              "Ownership",
              "Integrity",
              "Speed"
            ].map((feature, i) => (
              <motion.div
                key={feature}
                custom={i}
                variants={featureVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="flex items-center"
              >
                <FaRegHandPointRight className="text-red-500 mr-2" size={16} />
                <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Directorsection