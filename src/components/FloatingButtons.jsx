import { FaWhatsapp, FaPhone } from "react-icons/fa"

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      <a
        href="https://wa.me/919994202384"
        target="_blank"
        className="bg-[#00ADB5] p-4 rounded-full text-[#EEEEEE] hover:scale-110 transition"
      >
        <FaWhatsapp size={22} />
      </a>

      <a
        href="tel:+919994202384"
        className="bg-[#393E46] p-4 rounded-full text-[#EEEEEE] hover:scale-110 transition"
      >
        <FaPhone size={20} />
      </a>
    </div>
  )
}
