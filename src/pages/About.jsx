import { useEffect, useState } from "react"
import CountUp from "react-countup"
import { useInView } from "react-intersection-observer"
import {
  FaBolt,
  FaTools,
  FaWater,
  FaIndustry,
  FaUsers,
  FaProjectDiagram,
} from "react-icons/fa"

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true })
  const [startCount, setStartCount] = useState(false)

  useEffect(() => {
    if (inView) setStartCount(true)
  }, [inView])

  return (
    <section className="pt-24 pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* ================= SECTION 1 : ABOUT INTRO ================= */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
          <div data-aos="fade-right">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              About <span className="text-yellow-500">MPR POWER TECH</span>
            </h2>

            <p className="text-gray-600 leading-7 mb-4">
              MPR POWER TECH is a trusted Mechanical, Electrical & Plumbing (MEP)
              engineering company delivering reliable solutions for residential,
              commercial, and industrial projects.
            </p>

            <p className="text-gray-600 leading-7">
              With over <strong>25+ years of industry expertise</strong>, we
              specialize in end-to-end electrical works — from individual homes
              to large-scale industrial power systems — executed with precision,
              safety, and compliance.
            </p>
          </div>

          <div data-aos="fade-left">
            <img
              src="/images/animation/transformer.jpg"
              alt="MEP Engineering"
              className="rounded-xl shadow-lg w-full object-cover"
            />
          </div>
        </div>

        {/* ================= SECTION 2 : COUNTERS ================= */}
        <div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-20"
        >
          {startCount && (
            <>
              <Counter
                icon={<FaUsers />}
                number={50}
                label="Happy Clients"
              />
              <Counter
                icon={<FaProjectDiagram />}
                number={100}
                label="Projects Completed"
              />
              <Counter
                icon={<FaIndustry />}
                number={25}
                label="Years Experience"
              />
              <Counter
                icon={<FaTools />}
                number={5}
                label="Expert Engineers"
              />
            </>
          )}
        </div>

        {/* ================= SECTION 3 : SERVICES ================= */}
        <div>
          <h3
            data-aos="fade-up"
            className="text-3xl font-bold text-center mb-12 text-gray-800"
          >
            Our Core <span className="text-yellow-500">Services</span>
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              icon={<FaBolt />}
              title="Electrical Works"
              desc="Residential, commercial & industrial electrical installations, testing & commissioning."
            />

            <ServiceCard
              icon={<FaWater />}
              title="Plumbing Systems"
              desc="Efficient plumbing, drainage, and water distribution systems with quality fittings."
            />

            <ServiceCard
              icon={<FaTools />}
              title="Mechanical Systems"
              desc="HVAC installation, maintenance, and climate control solutions."
            />

            <ServiceCard
              icon={<FaIndustry />}
              title="Industrial Solutions"
              desc="High-voltage systems, safety compliance, and power distribution solutions."
            />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ================= REUSABLE COMPONENTS ================= */

function Counter({ icon, number, label }) {
  return (
    <div
      data-aos="zoom-in"
      className="bg-white rounded-xl shadow p-6"
    >
      <div className="text-4xl text-yellow-500 mb-3 mx-auto">
        {icon}
      </div>
      <h4 className="text-3xl font-bold text-gray-800">
        <CountUp end={number} duration={2} />+
      </h4>
      <p className="text-gray-600 mt-1">{label}</p>
    </div>
  )
}

function ServiceCard({ icon, title, desc }) {
  return (
    <div
      data-aos="fade-up"
      className="bg-white rounded-xl shadow-md p-6 hover:-translate-y-2 transition-all duration-300"
    >
      <div className="text-4xl text-yellow-500 mb-4">
        {icon}
      </div>
      <h4 className="text-xl font-semibold mb-2 text-gray-800">
        {title}
      </h4>
      <p className="text-gray-600 text-sm leading-6">
        {desc}
      </p>
    </div>
  )
}
