import { Parallax } from "react-parallax"
import { FaBolt } from "react-icons/fa"
import Gallery from "./Gallery"
import Contact from "./Contact"
import Work from "./Work"
import About from "./About"
import GalleryCompact from "./GalleryCompact"
import { NavLink } from "react-router-dom"
import Team from "./Team"

export default function Home() {
  return (
    <div className="overflow-hidden">

      {/* HERO SECTION */}
      <Parallax
        bgImage="https://images.unsplash.com/photo-1581092919535-7146d6c8c9a7"
        strength={250}
      >
        <div className="min-h-[90vh] bg-black/70 flex items-center">
          <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center text-white">

            {/* LEFT CONTENT */}
            <div data-aos="fade-right">
              <div className="flex items-center gap-3 mb-4 text-yellow-400">
                <FaBolt className="text-3xl" />
                <span className="uppercase tracking-widest text-sm">
                  Electrical • Mechanical • Plumbing
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
                Powering <br />
                <span className="text-yellow-400">Modern Infrastructure</span>
              </h1>

              <p className="text-gray-200 max-w-xl mb-6 text-lg">
                We deliver reliable, safe, and future-ready MEP solutions for
                residential, commercial, and industrial projects.
              </p>

              {/* QUOTE */}
              <blockquote className="border-l-4 border-yellow-400 pl-4 italic text-gray-300 mb-8">
                “Good engineering is not just about power — it’s about
                precision, safety, and trust.”
              </blockquote>

              {/* CTA */}
              <div className="flex gap-4 flex-wrap">
              <NavLink to="/contact" className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold 
               hover:bg-yellow-300 active:scale-95 transition-all duration-300">
                 Get a Quote
              </NavLink>

  {/* SERVICES PAGE */}
             <NavLink
               to="/work"
               className="border border-white text-white px-6 py-3 rounded-lg 
                          hover:bg-white hover:text-black active:scale-95 
                          transition-all duration-300"
             >
               Our Services
             </NavLink>
              </div>
            </div>

            {/* RIGHT VISUAL */}
            <div
              data-aos="fade-left"
              className="relative hidden md:block"
            >
              {/* Decorative shapes */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-yellow-400 rounded-full blur-3xl opacity-40"></div>
              <div className="absolute bottom-0 right-0 w-56 h-56 bg-orange-500 rounded-full blur-3xl opacity-30"></div>

              <img
                src="/images/img/10.jpg"
                alt="Electrical Engineering"
                className="relative z-10 rounded-2xl shadow-2xl object-cover h-[420px] w-full"
              />
            </div>

          </div>
        </div>
      </Parallax>

      {/* SERVICE HIGHLIGHTS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            "Electrical Systems",
            "HVAC & Mechanical",
            "Plumbing & Fire Safety",
          ].map((item, i) => (
            <div
              key={i}
              data-aos="fade-up"
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition"
            >
              <h3 className="text-xl font-bold mb-2">{item}</h3>
              <p className="text-gray-600">
                Designed, installed, and maintained with industry standards
                and long-term performance in mind.
              </p>
            </div>
          ))}
        </div>
      </section>
      <About/>
      <GalleryCompact/>
      <Work/>
      <Team/>
      <Gallery/>
      <Contact/>

    </div>
  )
}
