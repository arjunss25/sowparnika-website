
import React from 'react';
import { motion, useInView } from 'framer-motion';

const Schedule = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, {
    once: true,
    threshold: 0.2
  });

  const formControls = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <motion.section 
      ref={ref}
      className="bg-[#650C28] text-white text-center px-4 py-16 overflow-hidden"
    >
      <motion.h2 
        initial={{ y: -20, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-2xl font-semibold mb-10"
      >
        Schedule a Visit Today
      </motion.h2>

      <motion.form 
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="mx-auto flex flex-col items-center gap-6 w-[90%] sm:w-[80%] lg:w-[50%]"
      >
        <motion.input
          variants={formControls}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.5, delay: 0.2 }}
          type="text"
          placeholder="Name"
          className="w-full bg-transparent border-b border-white/60 placeholder-white/80 focus:outline-none py-2"
        />

        <motion.input
          variants={formControls}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.5, delay: 0.3 }}
          type="tel"
          placeholder="Phone"
          className="w-full bg-transparent border-b border-white/60 placeholder-white/80 focus:outline-none py-2"
        />

        <motion.input
          variants={formControls}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.5, delay: 0.4 }}
          type="email"
          placeholder="Email"
          className="w-full bg-transparent border-b border-white/60 placeholder-white/80 focus:outline-none py-2"
        />

        <motion.button
          initial={{ y: 20, opacity: 0, scale: 0.95 }}
          animate={isInView ? { y: 0, opacity: 1, scale: 1 } : { y: 20, opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          type="submit"
          className="mt-8 px-8 py-3 border border-white transition-colors duration-200 hover:bg-white hover:text-[#650C28]"
        >
          Enquire Now
        </motion.button>
      </motion.form>
    </motion.section>
  );
};

export default Schedule;
