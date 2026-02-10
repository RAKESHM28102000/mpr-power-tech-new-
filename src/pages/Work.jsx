import {
  FaBolt,
  FaIndustry,
  FaSnowflake,
  FaWater,
  FaFireExtinguisher,
  FaBuilding,
} from "react-icons/fa"

const services = [
  {
    title: "Electrical Works",
    icon: <FaBolt />,
    image: "/images/works/transformer1.jpg",
    desc: "End-to-end electrical solutions for residential, commercial and industrial projects.",
    works: [
      { name: "House Wiring & Lighting", desc: "Safe and efficient internal wiring, lighting fixtures, and power points for homes and apartments." },
      { name: "HT & LT Panel Installation", desc: "Installation of high tension and low tension panels with safety compliance and testing." },
      { name: "Transformer Installation", desc: "Supply, erection, and commissioning of distribution transformers." },
      { name: "Testing & Commissioning", desc: "Comprehensive electrical testing to ensure performance, safety, and reliability." },
      { name: "Power Distribution Systems", desc: "Design and execution of power distribution networks for optimal load management." },
    ],
  },
  {
    title: "Industrial Electrical",
    icon: <FaIndustry />,
    image: "/images/works/panel1.jpg",
    desc: "Robust and scalable electrical systems for factories and industrial plants.",
    works: [
      { name: "Industrial Power Systems", desc: "High-capacity electrical systems designed for heavy industrial loads." },
      { name: "Machine Wiring", desc: "Precise wiring of industrial machinery ensuring safety and efficiency." },
      { name: "Control Panel Wiring", desc: "Customized control panel wiring for automation and process control." },
      { name: "Energy Audits", desc: "Detailed energy analysis to improve efficiency and reduce operational costs." },
      { name: "Preventive Maintenance", desc: "Scheduled maintenance to avoid breakdowns and extend equipment lifespan." },
    ],
  },
  {
    title: "HVAC & Mechanical",
    icon: <FaSnowflake />,
    image: "/images/works/mech2.jpg",
    desc: "Mechanical systems focused on thermal comfort and indoor air quality.",
    works: [
      { name: "HVAC Installation", desc: "Complete installation of air conditioning and ventilation systems." },
      { name: "Ducting Works", desc: "Fabrication and installation of air ducts for efficient airflow." },
      { name: "Chiller Systems", desc: "Installation and servicing of chiller plants for large facilities." },
      { name: "Ventilation Systems", desc: "Fresh air and exhaust ventilation solutions for healthy environments." },
      { name: "Maintenance & Repair", desc: "Routine servicing and breakdown maintenance of HVAC equipment." },
    ],
  },
  {
    title: "Plumbing Systems",
    icon: <FaWater />,
    image: "/images/works/pluming.jpg",
    desc: "Efficient plumbing systems with quality materials and workmanship.",
    works: [
      { name: "Water Supply Systems", desc: "Design and installation of reliable water supply networks." },
      { name: "Drainage & Sewage", desc: "Proper drainage and sewage systems for buildings and industries." },
      { name: "Pipe Fittings", desc: "Installation of high-quality pipes, valves, and fittings." },
      { name: "Pump Installation", desc: "Installation and maintenance of water and booster pumps." },
      { name: "Leak Detection & Repair", desc: "Advanced leak detection and quick repair services." },
    ],
  },
  {
    title: "Fire Fighting Systems",
    icon: <FaFireExtinguisher />,
    image: "/images/works/firealarm.jpg",
    desc: "Fire protection systems designed as per national safety standards.",
    works: [
      { name: "Fire Alarm Systems", desc: "Early warning fire alarm systems for buildings and industries." },
      { name: "Sprinkler Systems", desc: "Automatic sprinkler systems for fire suppression." },
      { name: "Hydrant Systems", desc: "External and internal fire hydrant installations." },
      { name: "Fire Extinguishers", desc: "Supply and installation of certified fire extinguishers." },
      { name: "Safety Compliance Testing", desc: "Inspection and testing to meet fire safety regulations." },
    ],
  },
  {
    title: "Facility Management",
    icon: <FaBuilding />,
    image: "/images/works/highvoltage1.jpg",
    desc: "Complete facility management for smooth day-to-day operations.",
    works: [
      { name: "Electrical Maintenance", desc: "Routine inspection and upkeep of electrical systems." },
      { name: "HVAC Maintenance", desc: "Preventive and corrective HVAC maintenance services." },
      { name: "Plumbing Maintenance", desc: "Regular plumbing inspection and repairs." },
      { name: "Energy Management", desc: "Monitoring and optimizing energy consumption." },
      { name: "On-site Technical Support", desc: "Dedicated technicians available for on-site support." },
    ],
  },
]

export default function Work() {
  return (
    <section className="pt-24 pb-16 bg-[#222831] text-[#EEEEEE]">
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 data-aos="fade-down" className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-[#00ADB5]">Services</span>
          </h2>
          <p data-aos="fade-up" className="text-[#EEEEEE]/70 max-w-3xl mx-auto">
            Comprehensive Mechanical, Electrical & Plumbing solutions built with
            safety, precision, and reliability.
          </p>
        </div>

        {/* SERVICES */}
        <div className="space-y-28">
          {services.map((service, i) => {
            const isReverse = i % 2 !== 0

            return (
              <div
                key={i}
                className="grid md:grid-cols-2 gap-12 items-center"
              >
                {/* IMAGE */}
                <div
                  data-aos={isReverse ? "fade-left" : "fade-right"}
                  className={`relative overflow-hidden rounded-xl shadow-lg ${
                    isReverse ? "md:order-2" : ""
                  }`}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-80 object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>

                {/* CONTENT */}
                <div
                  data-aos={isReverse ? "fade-right" : "fade-left"}
                  className={isReverse ? "md:order-1" : ""}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-4xl text-[#00ADB5]">{service.icon}</div>
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                  </div>

                  <p className="text-[#EEEEEE]/70 mb-6">{service.desc}</p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {service.works.map((work, idx) => (
                      <div
                        key={idx}
                        data-aos="zoom-in"
                        className="bg-gradient-to-br from-[#393E46] to-[#222831] rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-6 border border-[#00ADB5]/20 bg-[#393E46]"
                      >
                        <h4 className="font-semibold text-[#EEEEEE] mb-1">
                          {work.name}
                        </h4>
                        <p className="text-sm text-[#EEEEEE]/70 leading-6">
                          {work.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
