import { NavLink } from "react-router-dom"
import {
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* LOGO & ABOUT */}
        <div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            MPR POWER TECH
          </h2>
          <p className="mt-4 text-gray-400 text-sm leading-relaxed">
            Powering homes, businesses and industries with reliable Electrical,
            Mechanical and Plumbing engineering solutions.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Us" },
              { to: "/work", label: "Services" },
              { to: "/gallery", label: "Gallery" },
              { to: "/contact", label: "Contact" },
            ].map((link, i) => (
              <li key={i}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `transition-all duration-300
                    ${
                      isActive
                        ? "text-yellow-400"
                        : "text-gray-400 hover:text-yellow-300"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT & SOCIAL */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>

          <div className="space-y-3 text-gray-400 text-sm">
            <p className="flex items-center gap-3 hover:text-yellow-300 transition">
              <FaEnvelope />
              mprpowertech@gmail.com
            </p>

            <p className="flex items-center gap-3 hover:text-yellow-300 transition">
              <FaPhoneAlt />
              +91 99942 02384
            </p>
          </div>

          <div className="flex gap-4 mt-5">
            <a
              href="https://www.linkedin.com/in/mano-k-189891279/"
              target="_blank"
              className="p-3 rounded-full bg-gray-800 hover:bg-blue-600 transition transform hover:scale-110"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://www.linkedin.com/in/mano-k-189891279/"
              target="_blank"
              className="p-3 rounded-full bg-gray-800 hover:bg-pink-500 transition transform hover:scale-110"
            >
              <FaInstagram />
            </a>

            <a
              href="https://wa.me/919994202384"
              target="_blank"
              className="p-3 rounded-full bg-gray-800 hover:bg-green-500 transition transform hover:scale-110"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="mt-10 border-t border-gray-800 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} MPR POWER TECH. All Rights Reserved.
      </div>
    </footer>
  )
}
