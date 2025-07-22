import React, { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import Herosection from './pages/Herosection'
import About from './pages/About'
import Schedule from './pages/Schedule'
import Slider from './pages/Slider'
import Directorsection from './pages/Directorsection'
import Parallaxsection from './pages/Parallaxsection'
import Testimonial from './pages/Testimonial'
import Numbers from './pages/Numbers'
import Contact from './pages/Contact'
import Bottomcomponent from './pages/Bottomcomponent'
import Navbar from './pages/Navbar'

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <div>
      <Navbar/>
      <Herosection/>
      <About/>
      <Schedule/>
      <Slider/>
      <Directorsection/>
      <Parallaxsection/>
      <Testimonial/>
      <Numbers/>
      <Contact/>
      <Bottomcomponent/>
    </div>
  )
}

export default App