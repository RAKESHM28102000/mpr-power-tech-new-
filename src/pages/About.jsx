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
  FaShieldAlt,
  FaLightbulb,
  FaHandshake,
} from "react-icons/fa"

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })
  const [startCount, setStartCount] = useState(false)

  useEffect(() => {
    if (inView) setStartCount(true)
  }, [inView])

  return (
    <section className="pt-24 pb-20 bg-[#222831]">
      <div className="max-w-7xl mx-auto px-4">

        {/* ================= SECTION 1 : ABOUT INTRO ================= */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
          <div data-aos="fade-right">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#EEEEEE]">
              About <span className="text-[#00ADB5]">MPR POWER TECH</span>
            </h2>

            <p className="text-[#EEEEEE]/80 leading-7 mb-4">
              MPR POWER TECH is a trusted Mechanical, Electrical & Plumbing (MEP)
              engineering company delivering reliable solutions for residential,
              commercial, and industrial projects.
            </p>

            <p className="text-[#EEEEEE]/80 leading-7 mb-4">
              With over <strong>25+ years of industry expertise</strong>, we
              specialize in end-to-end electrical works — from individual homes
              to large-scale industrial power systems — executed with precision,
              safety, and statutory compliance.
            </p>

            <p className="text-[#EEEEEE]/80 leading-7">
              All technical activities are carried out under the direct
              supervision of a <strong>Qualified Electrical Engineer </strong>
              with more than <strong>25 years of professional experience </strong>,
              aspiring a valid <strong>Supervisory Competency Certificate </strong>
              issued by the Electrical Licensing Board.
            </p>
          </div>

          <div data-aos="fade-left">
            <img
              src="/images/img/about-1.jpg"
              alt="MEP Engineering"
              className="bg-gradient-to-br from-[#393E46] to-[#222831] rounded-2xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-2 border border-[#00ADB5]/20 shadow-2xl w-full object-cover "
            />
          </div>
        </div>

        {/* ================= SECTION 2 : COUNTERS ================= */}
        <div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-24"
        >
          <Counter start={startCount} icon={<FaUsers />} number={50} label="Happy Clients" />
          <Counter start={startCount} icon={<FaProjectDiagram />} number={100} label="Projects Completed" />
          <Counter start={startCount} icon={<FaIndustry />} number={25} label="Years Experience" />
          <Counter start={startCount} icon={<FaTools />} number={10} label="Core Services" />
        </div>

        {/* ================= SECTION 3 : MISSION & VISION ================= */}
        <div className="grid md:grid-cols-2 gap-10 mb-24">
          <GradientCard title="Our Mission">
            Our mission is to provide the best possible electrical and MEP
            services to our customers by maintaining strict quality,
            safety, and engineering standards — ensuring reliable and
            long-lasting solutions in every project we deliver.
          </GradientCard>

          <GradientCard title="Our Vision">
            Our vision is to become a recognized industry expert and a leading
            provider of electrical and MEP solutions, known for delivering
            safety, innovation, and engineering excellence across all sectors.
          </GradientCard>
        </div>

        {/* ================= SECTION 4 : SERVICES ================= */}
        <div className="mb-24">
          <h3
            data-aos="fade-up"
            className="text-3xl font-bold text-center mb-12 text-[#EEEEEE]"
          >
            Our <span className="text-[#00ADB5]">Services</span>
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <ServiceCard key={i} {...service} />
            ))}
          </div>
        </div>

        {/* ================= SECTION 5 : CORE VALUES ================= */}
        <div>
          <h3
            data-aos="fade-up"
            className="text-3xl font-bold text-center mb-12 text-[#EEEEEE]"
          >
            Our <span className="text-[#00ADB5]">Core Values</span>
          </h3>

          <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-6 text-center">
            <ValueCard icon={<FaShieldAlt />} label="Safety" />
            <ValueCard icon={<FaTools />} label="Professional Development" />
            <ValueCard icon={<FaHandshake />} label="Confidence" />
            <ValueCard icon={<FaLightbulb />} label="Innovation" />
            <ValueCard icon={<FaUsers />} label="Community" />
          </div>
        </div>

      </div>
    </section>
  )
}

/* ================= COMPONENTS ================= */

function Counter({ start, icon, number, label }) {
  return (
    <div className="bg-gradient-to-br from-[#393E46] to-[#222831] rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-6 border border-[#00ADB5]/20">
      <div className="text-4xl text-[#00ADB5] mb-3">{icon}</div>
      <h4 className="text-3xl font-bold text-[#EEEEEE]">
        {start ? <CountUp end={number} duration={2} /> : 0}+
      </h4>
      <p className="text-[#EEEEEE]/70 mt-1">{label}</p>
    </div>
  )
}

function ServiceCard({ icon, title, desc }) {
  return (
    <div className="bg-gradient-to-br from-[#393E46] to-[#222831] rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-6 border border-[#00ADB5]/20">
      <div className="text-4xl text-[#00ADB5] mb-4">{icon}</div>
      <h4 className="text-lg font-semibold mb-2 text-[#EEEEEE]">{title}</h4>
      <p className="text-[#EEEEEE]/70 text-sm leading-6">{desc}</p>
    </div>
  )
}

function ValueCard({ icon, label }) {
  return (
    <div className="bg-gradient-to-br from-[#393E46] to-[#222831] rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-6 border border-[#00ADB5]/20">
      <div className="text-3xl text-[#00ADB5] mb-3">{icon}</div>
      <p className="font-semibold text-[#EEEEEE]">{label}</p>
    </div>
  )
}

function GradientCard({ title, children }) {
  return (
    <div className="bg-gradient-to-br from-[#393E46] to-[#222831] p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-[#00ADB5]/20">
      <h3 className="text-2xl font-bold mb-4 text-[#00ADB5]">{title}</h3>
      <p className="text-[#EEEEEE]/80 leading-7">{children}</p>
    </div>
  )
}

/* ================= SERVICE DATA ================= */

const services = [
  { icon: <FaBolt />, title: "11KV & 33KV Systems", desc: "DP structures, transformer yards, HT/LT panel erection and commissioning." },
  { icon: <FaTools />, title: "Cable & Bus Duct Works", desc: "Cable tray fabrication, laying, termination, bus duct & rising main erection." },
  { icon: <FaIndustry />, title: "Industrial Installations", desc: "Industrial lighting, DG installation, chillers, air compressors as per PCB norms." },
  { icon: <FaWater />, title: "Utility & Infrastructure", desc: "Airline, waterline, plumbing and mechanical utility systems." },
  { icon: <FaBolt />, title: "Power & Backup Systems", desc: "UPS systems, raw power works, solar power projects." },
  { icon: <FaTools />, title: "Testing & Maintenance", desc: "Energy auditing, relay testing, transformer oil filtration, AMC services." },
]
