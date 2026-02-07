import Gallery from "./Gallery"
import Contact from "./Contact"
import Work from "./Work"
import About from "./About"
import GalleryCompact from "./GalleryCompact"
import Team from "./Team"
import Hero from "../components/Hero"

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <GalleryCompact />
      <Work />
      <Team />
      <Gallery />
      <Contact />
   
    </div>
  )
}
