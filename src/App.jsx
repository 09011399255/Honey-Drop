import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Craftsmanship from './components/Craftsmanship'
import NewExpression from './components/NewExpression'
import HeritageStack from './components/HeritageStack'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import Shop from './components/Shop'

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-cream selection:bg-gold selection:text-maroon">
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Craftsmanship />
                <NewExpression />
                <HeritageStack />
                <Testimonials />
              </>
            } />
            <Route path="/shop/:category" element={<Shop />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <Footer />

        {/* Subtle overlay texture across the whole site */}
        <div className="fixed inset-0 pointer-events-none opacity-20 bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')] z-50"></div>
      </div>
    </Router>
  )
}

export default App
