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
    <footer className="bg-[#222831] text-[#EEEEEE] pt-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* LOGO & ABOUT */}
        <div>
          <h2 className="text-2xl font-bold text-[#00ADB5]">
            MPR POWER TECH
          </h2>
          <p className="mt-4 text-[#EEEEEE]/70 text-sm leading-relaxed">
            Powering homes, businesses and industries with reliable Electrical,
            Mechanical and Plumbing engineering solutions.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#EEEEEE]">Quick Links</h3>
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
                    `transition-all duration-300 ${
                      isActive
                        ? "text-[#00ADB5]"
                        : "text-[#EEEEEE]/70 hover:text-[#00ADB5]"
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
          <h3 className="text-lg font-semibold mb-4 text-[#EEEEEE]">Get in Touch</h3>

          <div className="space-y-3 text-[#EEEEEE]/70 text-sm">
            <p className="flex items-center gap-3 hover:text-[#00ADB5] transition">
              <FaEnvelope />
              mprpowertech@gmail.com
            </p>

            <p className="flex items-center gap-3 hover:text-[#00ADB5] transition">
              <FaPhoneAlt />
              +91 99942 02384
            </p>
          </div>

          <div className="flex gap-4 mt-5">
            <a
              href="https://www.linkedin.com/in/mano-k-189891279/"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full bg-[#393E46] hover:bg-[#00ADB5] transition transform hover:scale-110"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://www.linkedin.com/in/mano-k-189891279/"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full bg-[#393E46] hover:bg-pink-500 transition transform hover:scale-110"
            >
              <FaInstagram />
            </a>

            <a
              href="https://wa.me/919994202384"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full bg-[#393E46] hover:bg-green-500 transition transform hover:scale-110"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="mt-10 border-t border-[#393E46] py-4 text-center text-sm text-[#EEEEEE]/60">
        © {new Date().getFullYear()} MPR POWER TECH. All Rights Reserved.
        <div className="mt-2">
          Website created by{" "}
          <a
            href="https://inspireloop.onrender.com/"
            target="_blank"
            rel="noreferrer"
            className="text-[#00ADB5] hover:underline"
          >
            Rakesh – Inspireloop Tech
          </a>
        </div>
      </div>
    </footer>
  )
}