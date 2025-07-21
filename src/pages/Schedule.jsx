import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';

const Schedule = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, {
    once: true,
    threshold: 0.2,
  });

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
      const response = await fetch('/api/contact-info/', {
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
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Something went wrong. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const formControls = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.section
      ref={ref}
      className="bg-[#650C28] text-white text-center px-4 py-16 overflow-hidden"
    >
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="text-2xl font-semibold mb-10"
      >
        Schedule a Visit Today
      </motion.h2>

      {submitStatus.message && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`mb-6 p-3 rounded ${
            submitStatus.type === 'success' ? 'bg-green-600' : 'bg-red-600'
          }`}
        >
          {submitStatus.message}
        </motion.div>
      )}

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="mx-auto flex flex-col items-center gap-6 w-[90%] sm:w-[80%] lg:w-[50%]"
      >
        <motion.input
          variants={formControls}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ duration: 0.5, delay: 0.2 }}
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Name"
          required
          className="w-full bg-transparent border-b border-white/60 placeholder-white/80 focus:outline-none py-2"
        />

        <motion.input
          variants={formControls}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ duration: 0.5, delay: 0.3 }}
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="Phone"
          required
          pattern="[0-9]{10}"
          title="Please enter a valid 10-digit phone number"
          className="w-full bg-transparent border-b border-white/60 placeholder-white/80 focus:outline-none py-2"
        />

        <motion.input
          variants={formControls}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ duration: 0.5, delay: 0.4 }}
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email"
          required
          className="w-full bg-transparent border-b border-white/60 placeholder-white/80 focus:outline-none py-2"
        />

        <motion.button
          initial={{ y: 20, opacity: 0, scale: 0.95 }}
          animate={
            isInView
              ? { y: 0, opacity: 1, scale: 1 }
              : { y: 20, opacity: 0, scale: 0.95 }
          }
          transition={{ duration: 0.5, delay: 0.5 }}
          type="submit"
          disabled={isSubmitting}
          className="mt-8 px-8 py-3 border border-white transition-colors duration-200 hover:bg-white hover:text-[#650C28] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : 'Enquire Now'}
        </motion.button>
      </motion.form>
    </motion.section>
  );
};

export default Schedule;
