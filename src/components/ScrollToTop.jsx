import { useEffect, useState } from "react"
import { FaArrowUp } from "react-icons/fa"

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300)
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-6 left-6 z-50
        bg-yellow-400 text-black
        p-3 rounded-full shadow-lg
        hover:bg-yellow-300 hover:scale-110
        transition-all duration-300
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}
      `}
      aria-label="Scroll to top"
    >
      <FaArrowUp />
    </button>
  )
}
