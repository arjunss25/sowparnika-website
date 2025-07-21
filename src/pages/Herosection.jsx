import React from 'react'
import { motion, useInView } from 'framer-motion'

const Herosection = () => {
  const ref = React.useRef(null)
  const isInView = useInView(ref, {
    once: true,
    threshold: 0.1
  })

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="main w-full flex items-start justify-center hidden lg:block overflow-hidden"
    >
      <motion.img 
        initial={{ scale: 1.1 }}
        animate={isInView ? { scale: 1 } : { scale: 1.1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        src="/sl-2.png.jpg" 
        alt="" 
        className='w-full h-auto object-contain' 
      />
    </motion.div>
  )
}

export default Herosection