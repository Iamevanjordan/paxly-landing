import { Nav } from "@/components/nav"
import { HowItWorks } from "@/components/how-it-works"
import { Footer } from "@/components/footer"

export default function HowItWorksPage() {
  return (
    <main className="overflow-x-hidden">
      <Nav subpage />
      <HowItWorks />
      <Footer />
    </main>
  )
}