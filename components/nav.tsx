"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [isLight, setIsLight] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      // Check which section we're in to determine nav color
      const sections = [
        { id: "problem", light: true },
        { id: "before-after", light: true },
        { id: "how-it-works", light: false },
        { id: "vision", light: true },
        { id: "testimonial", light: false },
        { id: "pricing", light: true },
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
      
      // Default to dark (hero)
      setIsLight(false)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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
          className={`font-serif text-2xl font-bold tracking-tight transition-colors duration-500 ${
            isLight && scrolled ? "text-[#0e0e0e]" : "text-white"
          }`}
        >
          Paxly
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
    </motion.nav>
  )
}
