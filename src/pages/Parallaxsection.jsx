import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Parallaxsection = () => {
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
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-[#E31E24] hover:bg-[#cc1a1f] text-white text-xs sm:text-sm md:text-[14px] py-2 sm:py-2.5 px-4 sm:px-5 md:px-6 rounded-[4px] transition duration-300 hover:scale-105"
          >
            Make An Enquiry
          </button>
        </div>
      </div>

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
                <h3 className="text-xl font-semibold text-[#650C28]">Make an Enquiry</h3>
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#650C28] focus:border-transparent"
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#650C28] focus:border-transparent"
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#650C28] focus:border-transparent"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#650C28] text-white py-2 rounded-md hover:bg-[#4a0a1d] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
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
};

export default Parallaxsection;