import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { motion, useInView } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';

const Slider = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, {
    once: true,
    threshold: 0.2
  });

  const slides = [
    {
      id: 1,
      image: '/Rectangle 4 (1).png',
      description: 'Experience luxury living in our beautifully designed spaces.'
    },
    {
      id: 2,
      image: '/Rectangle 4.png',
      description: 'Discover comfort and style in every corner.'
    },
    {
      id: 3,
      image: '/Rectangle 5.png',
      description: 'Enjoy state-of-the-art facilities and services.'
    },
    {
      id: 4,
      image: '/Rectangle 6.png',
      description: 'Enjoy state-of-the-art facilities and services.'
    }
  ];

  return (
    <motion.div 
      ref={ref}
      className="container mx-auto px-4 py-10 md:py-20 overflow-hidden"
    >
      <motion.h1 
        initial={{ y: 30, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center font-semibold text-xl md:text-3xl mb-8"
      >
        Sample Apartment is Ready to Visit
      </motion.h1>
      <motion.div 
        initial={{ y: 60, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="relative w-full h-[500px] overflow-hidden rounded-lg"
      >
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="w-full h-full"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <motion.div 
                className="relative w-full h-full"
                initial={{ scale: 1.1 }}
                animate={isInView ? { scale: 1 } : { scale: 1.1 }}
                transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
              >
                <img
                  src={slide.image}
                  alt="Apartment view"
                  className="w-full h-full object-cover"
                />
                {/* <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-end text-white p-8">
                  <p className="text-xl text-center max-w-2xl mb-4">
                    {slide.description}
                  </p>
                </div> */}
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </motion.div>
  );
};

export default Slider;