import { FaBolt } from "react-icons/fa"
import { NavLink } from "react-router-dom"

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-black text-white">

      {/* 🔥 Animated Electric Background */}
      <div className="absolute inset-0">
        {/* gradient glow */}
        <div className="absolute -top-40 -left-40 w-125 h-125 bg-yellow-400/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-125 h-125 bg-orange-500/20 rounded-full blur-[120px] animate-pulse"></div>

        {/* moving light line */}
        <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.08),transparent)] bg-size-[200%_100%] animate-[shine_6s_linear_infinite]" />
      </div>

      {/* 🔹 CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
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

          <p className="text-gray-300 max-w-xl mb-6 text-lg">
            We deliver reliable, safe, and future-ready MEP solutions for
            residential, commercial, and industrial projects.
          </p>

          <blockquote className="border-l-4 border-yellow-400 pl-4 italic text-gray-400 mb-8">
            “Good engineering is not just about power — it’s about
            precision, safety, and trust.”
          </blockquote>

          {/* CTA */}
          <div className="flex gap-4 flex-wrap">
            <NavLink
              to="/contact"
              className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold 
              hover:bg-yellow-300 active:scale-95 transition-all duration-300"
            >
              Get a Quote
            </NavLink>

            <NavLink
              to="/work"
              className="border border-white text-white px-6 py-3 rounded-lg 
              hover:bg-white hover:text-black active:scale-95 transition-all duration-300"
            >
              Our Services
            </NavLink>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div data-aos="fade-left" className="hidden md:block">
          <img
            src="/images/img/3.png"
            alt="Electrical Engineering"
            className="rounded-2xl shadow-2xl shadow-yellow-400/20 object-cover h-105 w-full"
          />
        </div>
      </div>

      {/* 🔹 Tailwind custom animation */}
      <style jsx>{`
        @keyframes shine {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </section>
  )
}
