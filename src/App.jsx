import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useEffect } from "react"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import FloatingButtons from "./components/FloatingButtons"

import Home from "./pages/Home"
import About from "./pages/About"
import Work from "./pages/Work"
import Gallery from "./pages/Gallery"
import Contact from "./pages/Contact"

import AOS from "aos"
import "aos/dist/aos.css"
import ScrollToTop from "./components/ScrollToTop"

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    })
  }, [])

  return (
    <BrowserRouter>
      {/* App Wrapper */}
      <div className="min-h-screen flex flex-col">
        
        {/* Navbar (Fixed at Top) */}
        <Navbar />

        {/* Main Content */}
        <main className="grow pt-16">
          {/* pt-16 = navbar height */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer (Always at Bottom) */}
        <Footer />
        
        {/* Floating Buttons */}
        <FloatingButtons />
        <ScrollToTop/>
      </div>
    </BrowserRouter>
  )
}

export default App
