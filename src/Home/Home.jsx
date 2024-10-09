import About from '../components/About'
import Banner from '../components/Banner'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Process from '../components/Process'
import React from 'react'
import Services from '../components/Services'
import TechStack from '../components/TechStack'

function Home() {
  return (
    <>
    <Navbar/>
      <Banner/>
      <About/>
      <Services/>
    <TechStack/>
      <Process/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default Home
