"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import { GradientOrb } from "./gradient-orb"

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const statsOpacity = useTransform(scrollYProgress, [0, 0.15], [0, 1])
  const statsX = useTransform(scrollYProgress, [0, 0.15], [100, 0])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]"
    >
      {/* Gradient Orb Background */}
      <GradientOrb />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 grid lg:grid-cols-5 gap-12 items-center">
        {/* Left Column - Main Content */}
        <div className="lg:col-span-3">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#c8522a] text-xs tracking-[0.3em] uppercase font-medium mb-8"
          >
            Real Estate Transaction Automation
          </motion.p>

          {/* Headline */}
          <div className="space-y-1 mb-8">
            <motion.h1
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1]"
            >
              You just accepted
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1]"
            >
              an offer.
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-[#c8522a] leading-[1.1] pt-2"
            >
              Now comes the 30 minutes
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-[#c8522a] leading-[1.1]"
            >
              nobody pays you for.
            </motion.h1>
          </div>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-white text-lg md:text-xl max-w-xl mb-10 leading-relaxed"
          >
            Paxly is the system that handles the paperwork so you can focus on
            the next deal. Not someday. Starting with your next transaction.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="flex flex-wrap gap-4 mb-6"
          >
            <Link
              href="https://calendly.com/ejfllc23/paxly-demo"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#c8522a] text-white font-medium rounded-lg hover:bg-[#b04824] transition-all duration-300 hover:shadow-lg hover:shadow-[#c8522a]/20"
            >
              Book a 15-Minute Demo
              <span className="ml-2">→</span>
            </Link>
            <Link
              href="https://youtu.be/K0ZfB9w_8Xo"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              Watch It Work
              <span className="ml-2">▶</span>
            </Link>
          </motion.div>

          {/* Micro-copy */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="text-white text-sm"
          >
            No pitch deck. No contracts. Just a live walkthrough.
          </motion.p>
        </div>

        {/* Right Column - Stats Panel */}
        <motion.div
          style={{ opacity: statsOpacity, x: statsX }}
          className="lg:col-span-2 hidden lg:block"
        >
          <div className="bg-[#141414] border border-white/10 rounded-2xl p-8">
            <div className="space-y-8">
              {/* Stat 1 */}
              <div>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="font-mono text-4xl font-bold text-white">
                    20s
                  </span>
                </div>
                <p className="text-white/50 text-sm">
                  To generate a filled contract from a PDF
                </p>
              </div>

              {/* Divider */}
              <div className="h-px bg-white/10" />

              {/* Stat 2 */}
              <div>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="font-mono text-4xl font-bold text-white">
                    12
                  </span>
                </div>
                <p className="text-white/50 text-sm">
                  Fields auto-populated right now — more every week
                </p>
              </div>

              {/* Divider */}
              <div className="h-px bg-white/10" />

              {/* Stat 3 */}
              <div>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="font-mono text-4xl font-bold text-white">
                    0
                  </span>
                </div>
                <p className="text-white/50 text-sm">
                  Minutes of manual data entry when you use it
                </p>
              </div>
            </div>

            {/* Note */}
            <p className="mt-8 text-white/40 text-sm italic border-t border-white/10 pt-6">
              We&apos;re building this in public. 12 fields today. 194 in the map.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-white/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
