import { Nav } from "@/components/nav"
import { Hero } from "@/components/hero"
import { BeforeAfter } from "@/components/before-after"
import { Vision } from "@/components/vision"
import { Testimonial } from "@/components/testimonial"
import { BookDemo } from "@/components/book-demo"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Nav />
      <Hero />
      <BeforeAfter />
      <Vision />
      <Testimonial />
      <BookDemo />
      <Footer />
    </main>
  )
}