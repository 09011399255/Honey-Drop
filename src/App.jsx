import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Craftsmanship from './components/Craftsmanship'
import NewExpression from './components/NewExpression'
import HeritageStack from './components/HeritageStack'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import Shop from './components/Shop'

function App() {
  const [currentView, setCurrentView] = useState('LANDING');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  return (
    <div className="min-h-screen bg-cream selection:bg-gold selection:text-maroon">
      <Navbar onNavigate={(view) => setCurrentView(view)} activeView={currentView} />

      <main>
        {currentView === 'LANDING' ? (
          <>
            <Hero />
            <Craftsmanship />
            <NewExpression />
            <HeritageStack />
            <Testimonials />
          </>
        ) : (
          <Shop
            category={currentView}
            onBack={() => setCurrentView('LANDING')}
          />
        )}
      </main>

      <Footer />

      {/* Subtle overlay texture across the whole site */}
      <div className="fixed inset-0 pointer-events-none opacity-20 bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')] z-50"></div>
    </div>
  )
}

export default App
