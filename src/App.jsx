import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Craftsmanship from './components/Craftsmanship'
import NewExpression from './components/NewExpression'
import HeritageStack from './components/HeritageStack'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-cream selection:bg-gold selection:text-maroon">
      <Navbar />
      <main>
        <Hero />
        <Craftsmanship />
        <NewExpression />
        <HeritageStack />
        <Testimonials />
      </main>
      <Footer />

      {/* Subtle overlay texture across the whole site */}
      <div className="fixed inset-0 pointer-events-none opacity-20 bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')] z-50"></div>
    </div>
  )
}

export default App
