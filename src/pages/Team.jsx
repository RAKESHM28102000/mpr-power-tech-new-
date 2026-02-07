import { FaLinkedin, FaInstagram } from "react-icons/fa"

const team = [
  {
    name: "Prasanna Kumar M",
    role: "CEO & MEP Engineer",
    image: "/images/emp/jack.jpg",
    linkedin: "https://www.linkedin.com/in/prasannakumar-m-a9691b36a/",
    instagram: "https://www.linkedin.com/in/prasannakumar-m-a9691b36a/",
    experience: "7+ Years",
    leader: true,
  },
  {
    name: "Mano K",
    role: "Founder & Electrical Specialist",
    image: "/images/emp/mano.jpeg",
    linkedin: "https://www.linkedin.com/in/mano-k-189891279/",
    instagram: "https://www.linkedin.com/in/mano-k-189891279/",
    experience: "25+ Years",
    leader: true,
  },
  {
    name: "Pradeep Kumar M",
    role: "Civil Engineer",
    image: "/images/emp/pradeep.jpeg",
    linkedin: "https://inspireloop.onrender.com/",
     instagram: "https://www.linkedin.com/in/mano-k-189891279/",
    experience: "7+ Years",
  },
  {
    name: "Perumal K",
    role: "Head Electrician",
    image: "/images/emp/perumal.jpg",
    linkedin: "https://www.linkedin.com/in/perumal-k-0917b7274/",
    instagram: "https://www.linkedin.com/in/perumal-k-0917b7274/",
    experience: "20+ Years",
  },
  {
  name: "Gopinath ",
  role: "Head Electrician",
  image: "/images/emp/gopinath.jpg",
  linkedin: "https://www.linkedin.com/in/mano-k-189891279/",
  instagram: "https://www.linkedin.com/in/mano-k-189891279/",
  experience: "20+ Years",
},
  {
    name: "Rakesh M",
    role: "web dev & Graphic Designer",
    image: "/images/emp/rakesh.jpg",
    linkedin:"https://www.linkedin.com/in/rakesh-m-b67121217/",
    instagram: "https://inspireloop.onrender.com/",
    experience: " Years",
  },
]

export default function Team() {
  const leaders = team.filter(m => m.leader)
  const members = team.filter(m => !m.leader)

  return (
    <section className="pt-24 pb-16 bg-gray-50 px-4">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 data-aos="fade-down" className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-yellow-500">Team</span>
          </h2>
          <p data-aos="fade-up" className="text-gray-600 max-w-2xl mx-auto">
            Experienced engineers and technicians delivering reliable
            electrical, mechanical, and plumbing solutions.
          </p>
        </div>

        {/* LEADERSHIP */}
        <div className="grid md:grid-cols-2 gap-10 mb-20">
          {leaders.map((leader, i) => (
            <a
              key={i}
              href={leader.linkedin}
              target="_blank"
              rel="noreferrer"
              data-aos="zoom-in"
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition group"
            >
              <div className="flex flex-col md:flex-row">
                <div className="relative md:w-1/3 h-72">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition"
                  />
                  <span className="absolute top-4 left-4 bg-yellow-400 text-black text-xs font-semibold px-3 py-1 rounded-full">
                    {leader.experience}
                  </span>
                </div>

                <div className="p-6 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold">{leader.name}</h3>
                  <p className="text-yellow-500 font-semibold mt-1">
                    {leader.role}
                  </p>
                  <p className="text-gray-600 mt-4 text-sm leading-6">
                    Leadership backed by decades of experience in engineering,
                    project execution, and team management.
                  </p>

                  <div className="flex gap-4 mt-5 text-xl">
                    <FaLinkedin className="hover:text-yellow-500" />
                    <FaInstagram className="hover:text-yellow-500" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* TEAM GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {members.map((member, i) => (
            <a
              key={i}
              href={member.linkedin}
              target="_blank"
              rel="noreferrer"
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="group bg-white rounded-xl shadow hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <span className="absolute top-4 left-4 bg-yellow-400 text-black text-xs font-semibold px-3 py-1 rounded-full">
                  {member.experience}
                </span>

                {/* SOCIAL OVERLAY */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-4 text-white text-xl">
                  <FaLinkedin className="hover:text-yellow-400" />
                  <FaInstagram className="hover:text-yellow-400" />
                </div>
              </div>

              <div className="p-5 text-center">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{member.role}</p>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}
