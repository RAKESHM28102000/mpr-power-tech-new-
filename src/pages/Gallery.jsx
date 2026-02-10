import { useState } from "react"

const images = [
  "/images/works/work-1.jpg",
  "/images/works/work-2.jpg",
  "/images/works/work-3.jpg",
  "/images/works/work-4.jpg",
  "/images/works/work-5.jpg",
  "/images/works/work-6.jpg",
  "/images/works/work-7.jpg",
  "/images/works/work-8.jpg",
  "/images/works/work-9.jpg",
  "/images/works/work-10.jpg",
]

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null)

  return (
    <section className="pt-24 pb-16 bg-[#222831] px-4">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-3xl font-bold text-center mb-10 text-[#EEEEEE]">
          Project <span className="text-[#00ADB5]">Gallery</span>
        </h2>

        {/* MASONRY */}
        <div className="columns-2 sm:columns-3 md:columns-4 gap-4 space-y-4">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              data-aos="zoom-in"
              onClick={() => setSelectedImg(img)}
              className="w-full rounded-lg cursor-pointer hover:opacity-90 transition border border-[#393E46]"
              alt="Project"
            />
          ))}
        </div>

        {/* MODAL */}
        {selectedImg && (
          <div className="fixed inset-0 bg-[#222831]/95 flex items-center justify-center z-50">
            <button
              onClick={() => setSelectedImg(null)}
              className="absolute top-6 right-6 text-[#EEEEEE] text-3xl"
            >
              ✕
            </button>
            <img
              src={selectedImg}
              className="max-w-[90%] max-h-[85%] rounded-lg border border-[#393E46]"
              alt="Full View"
            />
          </div>
        )}

      </div>
    </section>
  )
}
