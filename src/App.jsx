import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Service'

function App() {
  return (
    <main className=" overflow-hidden bg-white text-dark">
      <Hero />
      <Services />
    </main>
  )
}

export default App