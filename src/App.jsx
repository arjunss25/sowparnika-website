import React from 'react'
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