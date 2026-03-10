"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Nav({ subpage = false }: { subpage?: boolean }) {
  const [scrolled, setScrolled] = useState(false)
  const [isLight, setIsLight] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === "/"

  useEffect(() => {
    if (!isHome) return

    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      const sections = [
        { id: "before-after", light: true },
        { id: "vision", light: true },
        { id: "testimonial", light: false },
        { id: "demo", light: false },
      ]
      const scrollY = window.scrollY + 80
      for (const section of sections) {
        const el = document.getElementById(section.id)
        if (el) {
          const top = el.offsetTop
          const bottom = top + el.offsetHeight
          if (scrollY >= top && scrollY < bottom) {
            setIsLight(section.light)
            return
          }
        }
      }
      setIsLight(false)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isHome])

  // Subpage nav — clean solid dark
  if (subpage) {
    return (
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="font-serif text-2xl font-bold tracking-tight text-white"
          >
            Paxly
          </Link>
          <div className="flex items-center gap-6">
            <Link
              href="/how-it-works"
              className={`font-sans text-sm font-medium transition-colors duration-200 ${
                pathname === "/how-it-works"
                  ? "text-[#c8522a]"
                  : "text-white/60 hover:text-white"
              }`}
            >
              How It Works
            </Link>
            <Link
              href="/pricing"
              className={`font-sans text-sm font-medium transition-colors duration-200 ${
                pathname === "/pricing"
                  ? "text-[#c8522a]"
                  : "text-white/60 hover:text-white"
              }`}
            >
              Pricing
            </Link>
            <Link
              href="https://buy.stripe.com/00w28r0x1gZUbTGcpk4Ja03"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex px-5 py-2.5 rounded-full text-sm font-medium bg-[#c8522a] text-white hover:bg-[#b04824] transition-all duration-300"
            >
              Get Started
            </Link>
            <Link
              href="https://calendly.com/ejfllc23/paxly-demo"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full text-sm font-medium border border-white/30 text-white hover:bg-white hover:text-[#0a0a0a] transition-all duration-300"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </motion.nav>
    )
  }

  // Homepage nav — scroll-aware
  const textColor = isLight && scrolled ? "text-[#0e0e0e]" : "text-white"

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? isLight
            ? "bg-[#f5f1eb]/90 backdrop-blur-md border-b border-[#d9d4cc]"
            : "bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className={`font-serif text-2xl font-bold tracking-tight transition-colors duration-500 ${textColor}`}
        >
          Paxly
        </Link>
        <div className="flex items-center gap-3">
          <Link
            href="/how-it-works"
            className={`hidden sm:inline-flex font-sans text-sm font-medium transition-colors duration-200 mr-2 ${
              isLight && scrolled
                ? "text-[#0e0e0e]/60 hover:text-[#0e0e0e]"
                : "text-white/60 hover:text-white"
            }`}
          >
            How It Works
          </Link>
          <Link
            href="/pricing"
            className={`hidden sm:inline-flex font-sans text-sm font-medium transition-colors duration-200 mr-2 ${
              isLight && scrolled
                ? "text-[#0e0e0e]/60 hover:text-[#0e0e0e]"
                : "text-white/60 hover:text-white"
            }`}
          >
            Pricing
          </Link>
          <Link
            href="https://buy.stripe.com/00w28r0x1gZUbTGcpk4Ja03"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex px-5 py-2.5 rounded-full text-sm font-medium bg-[#c8522a] text-white hover:bg-[#b04824] transition-all duration-300"
          >
            Get Started
          </Link>
          <Link
            href="https://calendly.com/ejfllc23/paxly-demo"
            target="_blank"
            rel="noopener noreferrer"
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              isLight && scrolled
                ? "border border-[#0e0e0e]/20 text-[#0e0e0e] hover:bg-[#0e0e0e] hover:text-[#f5f1eb]"
                : "border border-white/30 text-white hover:bg-white hover:text-[#0a0a0a]"
            }`}
          >
            Book a Demo
          </Link>
        </div>
      </div>
    </motion.nav>
  )
}