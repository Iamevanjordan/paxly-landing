import { Nav } from "@/components/nav"
import { Pricing } from "@/components/pricing"
import { Footer } from "@/components/footer"

export default function PricingPage() {
  return (
    <main className="overflow-x-hidden">
      <Nav subpage />
      <Pricing />
      <Footer />
    </main>
  )
}