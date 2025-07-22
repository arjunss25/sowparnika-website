import React, { useState } from 'react'
import { MdLocationPin } from "react-icons/md";
import { motion, useInView, AnimatePresence } from 'framer-motion'

const About = () => {
  const ref = React.useRef(null)
  const isInView = useInView(ref, {
    once: true,
    threshold: 0.2
  })

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      const response = await fetch('https://masontrix.com/Newproject/api/contact-info/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: Number(formData.phone),
          email: formData.email,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setSubmitStatus({
        type: 'success',
        message: 'Thank you for your interest! We will contact you soon.',
      });
      setFormData({ name: '', phone: '', email: '' });
      setTimeout(() => {
        setIsModalOpen(false);
        setSubmitStatus({ type: '', message: '' });
      }, 2000);
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Something went wrong. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <motion.div 
        ref={ref}
        className="main w-full pt-5 md:pt-20 pb-20 px-4 flex items-center justify-center overflow-hidden"
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
                    <button 
                      onClick={() => setIsModalOpen(true)}
                      className="bg-blue-900 text-white py-2 px-6 rounded mt-6 hover:bg-blue-800 transition-colors"
                    >
                      Enquire Now
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4"
            onClick={(e) => {
              if (e.target === e.currentTarget) setIsModalOpen(false);
            }}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-lg p-6 w-full max-w-md"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold text-blue-900">Enquire About Sowparnika Elania</h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>

              {submitStatus.message && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={`mb-6 p-3 rounded text-white ${
                    submitStatus.type === 'success' ? 'bg-green-600' : 'bg-red-600'
                  }`}
                >
                  {submitStatus.message}
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Name"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone"
                    required
                    pattern="[0-9]{10}"
                    title="Please enter a valid 10-digit phone number"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-900 text-white py-2 rounded-md hover:bg-blue-800 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Submit Enquiry'}
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default About
