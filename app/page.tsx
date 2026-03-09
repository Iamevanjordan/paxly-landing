import { Nav } from "@/components/nav"
import { Hero } from "@/components/hero"
import { BeforeAfter } from "@/components/before-after"
import { HowItWorks } from "@/components/how-it-works"
import { Vision } from "@/components/vision"
import { Testimonial } from "@/components/testimonial"
import { Pricing } from "@/components/pricing"
import { BookDemo } from "@/components/book-demo"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Nav />
      <Hero />
      <BeforeAfter />
      <HowItWorks />
      <Vision />
      <Testimonial />
      <Pricing />
      <BookDemo />
      <Footer />
    </main>
  )
}
