import { FaBolt } from "react-icons/fa"
import { NavLink } from "react-router-dom"

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#222831] text-[#EEEEEE]">

      {/* 🔥 Animated Electric Background */}
      {/* <div className="absolute inset-0"> */}
        {/* gradient glow */}
        {/* <div className="absolute -top-40 -left-40 w-125 h-125 bg-[#00ADB5]/20 rounded-full blur-[120px] animate-pulse"></div> */}
        {/* <div className="absolute bottom-0 right-0 w-125 h-125 bg-[#393E46]/40 rounded-full blur-[120px] animate-pulse"></div> */}

        {/* moving light line */}
        {/* {/* <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(238,238,238,0.08),transparent)] bg-size-[200%_100%] animate-[shine_6s_linear_infinite]" /> */} 
      {/* </div> */}

      {/* 🔹 CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <div data-aos="fade-right">
          <div className="flex items-center gap-3 mb-4 text-[#00ADB5]">
            <FaBolt className="text-3xl" />
            <span className="uppercase tracking-widest text-sm">
              Electrical • Mechanical • Plumbing
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Powering <br />
            <span className="text-[#00ADB5]">Modern Infrastructure</span>
          </h1>

          <p className="text-[#EEEEEE]/80 max-w-xl mb-6 text-lg">
            We deliver reliable, safe, and future-ready MEP solutions for
            residential, commercial, and industrial projects.
          </p>

          <blockquote className="border-l-4 border-[#00ADB5] pl-4 italic text-[#EEEEEE]/60 mb-8">
            “Good engineering is not just about power — it’s about
            precision, safety, and trust.”
          </blockquote>

          {/* CTA */}
          <div className="flex gap-4 flex-wrap">
            <NavLink
              to="/contact"
              className="bg-[#00ADB5] text-[#222831] px-6 py-3 rounded-lg font-semibold 
              hover:bg-[#00c2cc] active:scale-95 transition-all duration-300"
            >
              Get a Quote
            </NavLink>

            <NavLink
              to="/work"
              className="border border-[#EEEEEE] text-[#EEEEEE] px-6 py-3 rounded-lg 
              hover:bg-[#EEEEEE] hover:text-[#222831] active:scale-95 transition-all duration-300"
            >
              Our Services
            </NavLink>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div data-aos="fade-left" className="hidden md:block">
          <img
            src="/images/img/light.jpg"
            alt="Electrical Engineering"
            className="bg-gradient-to-br from-[#393E46] to-[#222831] rounded-2xl shadow-lg hover:shadow-lg hover:-translate-y-2 transition-all duration-300 border border-[#00ADB5]/20 shadow-[#00ADB5]/20 object-cover h-105 w-full"
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
