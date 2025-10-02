import React from 'react'
import Header from './component/header'
import Footer from './component/footer'
import Home from './pages/home' 
import { Route, Routes } from 'react-router-dom'
import Services from './pages/services'
import About from './pages/about'
import Contact from './pages/contact'
import Portfolio from './pages/portfolio'
import Resume from './pages/resume'   

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header fixé */}
      <Header />

      {/* Contenu principal décalé pour ne pas passer sous le header */}
      <main className="flex-grow pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </main>

      {/* Footer collé en bas */}
      <Footer />
    </div>
  )
}

export default App
