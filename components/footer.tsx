import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-10 bg-[#f5f1eb] border-t border-[#d9d4cc]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm font-sans text-[#6b6560]">
          <p>© 2026 Paxly — Endless Joi Forever, LLC</p>

          <p className="text-center">Built in Virginia. For agents who close.</p>

          <Link
            href="https://calendly.com/ejfllc23/paxly-demo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0e0e0e] hover:text-[#c8522a] transition-colors font-medium"
          >
            Book a Demo
            <span className="ml-1">↗</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
