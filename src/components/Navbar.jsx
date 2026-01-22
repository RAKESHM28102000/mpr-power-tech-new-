import { NavLink } from "react-router-dom"
import { useState, useEffect } from "react"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [show, setShow] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  // 🔹 Scroll hide / show logic
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 80) {
        setShow(false) // scroll down → hide
      } else {
        setShow(true) // scroll up → show
      }
      setLastScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const linkClass = ({ isActive }) =>
    `relative px-2 py-1 transition-all duration-300
     ${
       isActive
         ? "text-yellow-400"
         : "text-white hover:text-yellow-300"
     }
     after:absolute after:left-0 after:-bottom-1
     after:h-[2px] after:w-full after:scale-x-0
     after:bg-gradient-to-r after:from-yellow-400 after:to-orange-500
     after:transition-transform after:duration-300
     hover:after:scale-x-100
     ${isActive ? "after:scale-x-100" : ""}`

  return (
    <nav
      className={`fixed top-0 w-full z-50 bg-black/90 backdrop-blur shadow-lg
      transition-transform duration-500
      ${show ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-around">
        
        {/* LOGO */}
        <h1 className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
          MPR POWER TECH
        </h1>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex space-x-6">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/work" className={linkClass}>Services</NavLink>
          <NavLink to="/gallery" className={linkClass}>Gallery</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
        </div>

        {/* HAMBURGER / CLOSE */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden relative w-8 h-8 focus:outline-none"
        >
          <span
            className={`absolute h-0.5 w-8 bg-white transition-all duration-300
              ${open ? "rotate-45 top-4" : "top-2"}`}
          />
          <span
            className={`absolute h-0.5 w-8 bg-white transition-all duration-300
              ${open ? "opacity-0" : "top-4"}`}
          />
          <span
            className={`absolute h-0.5 w-8 bg-white transition-all duration-300
              ${open ? "-rotate-45 top-4" : "top-6"}`}
          />
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500
        ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="flex flex-col px-6 py-4 space-y-4 bg-black">
          {[
            { path: "/", label: "Home" },
            { path: "/about", label: "About" },
            { path: "/work", label: "Services" },
            { path: "/gallery", label: "Gallery" },
            { path: "/contact", label: "Contact" },
          ].map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `text-lg transition-all duration-300
                ${
                  isActive
                    ? "text-yellow-400"
                    : "text-white hover:text-yellow-300"
                }
                hover:translate-x-2 active:scale-95`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  )
}
