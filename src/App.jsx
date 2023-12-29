import { useState } from 'react'
import Navbar from './componenets/Navbar'
import Hero from './componenets/Hero'
import Analytics from './componenets/Analytics'
import NewsLetter from './componenets/NewsLetter'
import Cards from './componenets/Cards'
import Footer from './componenets/Footer'

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Analytics/>
      <NewsLetter/>
      <Cards/>
      <Footer/>
    </>
  )
}

export default App
