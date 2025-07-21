import React from 'react'
import { MdLocationPin } from "react-icons/md";
import { motion, useInView } from 'framer-motion'

const About = () => {
  const ref = React.useRef(null)
  const isInView = useInView(ref, {
    once: true,
    threshold: 0.2
  })

  return (
    <motion.div 
      ref={ref}
      className="main w-full pt-20 pb-20 px-4 flex items-center justify-center overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="titles flex flex-col justify-center items-center gap-1"
        >
          <h2 className="text-center font-semibold text-xl md:text-3xl">Best Apartments In Changanassery & Kottayam</h2>
          <p className="text-center text-xs md:text-base text-gray-500 mt-2">Affordable & Premium 2 & 3BHK Apartments In Changanassery, Kottayam</p>
          <motion.img 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            src="/ul-svg.svg" 
            alt="" 
            className='w-[10rem]' 
          />
        </motion.div>
        <motion.div 
          initial={{ y: 60, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-8 bg-white rounded-lg overflow-hidden"
        >
          <div className="flex flex-col md:flex-row">
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="relative w-full md:w-1/2"
            >
              <img
                src="/Background.jpg"
                alt="Sowparnika Elania"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="p-6 w-full md:w-1/2 bg-gray-100"
            >
              <div className="content">
                <motion.h3 
                  initial={{ y: 20, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="text-xl font-semibold"
                >
                  Sowparnika Elania
                </motion.h3>

                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="flex items-center text-sm text-gray-600 mt-2"
                >
                  <MdLocationPin className='text-[#650C28]'/>
                  <span>Changanassery, Kottayam</span>
                </motion.div>

                <motion.div 
                  initial={{ y: 30, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="space-y-4 mt-6"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Unit Types</span>
                    <span className="font-medium">2 & 3BHK</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Price Range</span>
                    <span className="font-medium">₹ 65.5 Lakhs onwards</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Possession</span>
                    <span className="font-medium">2025</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Square Feet</span>
                    <span className="font-medium">1064 - 1629 Sq.ft</span>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                  transition={{ duration: 0.5, delay: 1 }}
                  className="btn-main w-full flex justify-end"
                >
                  <button className="bg-blue-900 text-white py-2 px-6 rounded mt-6 hover:bg-blue-800 transition-colors">
                    Enquire Now
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default About
