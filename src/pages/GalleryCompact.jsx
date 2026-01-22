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
  "/images/works/work-11.jpg",
  "/images/works/work-12.jpg",
]

export default function GalleryCompact() {
  const [selectedImg, setSelectedImg] = useState(null)

  return (
    <section className="pt-24 pb-16 bg-gray-50 px-4">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <h2
          data-aos="fade-down"
          className="text-3xl md:text-4xl font-bold text-center mb-10"
        >
          Project <span className="text-yellow-500">Gallery</span>
        </h2>

        {/* COMPACT GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              data-aos="zoom-in"
              onClick={() => setSelectedImg(img)}
              className="relative h-44 md:h-48 rounded-lg overflow-hidden cursor-pointer group shadow"
            >
              <img
                src={img}
                alt="Project"
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <span className="text-white text-sm font-semibold">
                  View Project
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* FULLSCREEN MODAL */}
        {selectedImg && (
          <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
            <button
              onClick={() => setSelectedImg(null)}
              className="absolute top-6 right-6 text-white text-3xl hover:text-yellow-400"
            >
              ✕
            </button>

            <img
              src={selectedImg}
              alt="Full View"
              className="max-w-[90%] max-h-[85%] rounded-lg shadow-2xl"
            />
          </div>
        )}

      </div>
    </section>
  )
}
