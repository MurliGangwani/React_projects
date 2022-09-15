import React from 'react'
import Title from './components/Title/Title'
import About from './components/About/About'
import ContactMe from './components/ContactMe/ContactMe'
import Experience from './components/Experience/Experience'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Testimonial from './components/Testimonial/Testimonial'

const App = () => {
  return (
    <div>
      <Title />
      <Navbar />
      <About />
      <Experience />
      <Testimonial/>
      <ContactMe />
      <Footer />
      

    </div>
  )
}

export default App
