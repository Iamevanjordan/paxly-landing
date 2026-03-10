"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"

const bodyLines = [
  "Contract generation is live now. What's coming next: full transaction coordination — every party, every deadline, every document, tracked automatically.",
  "Most tools add more steps. Paxly removes them. The contract was the door. We're building what's behind it.",
]

export function Vision() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  return (
    <section
      id="vision"
      ref={containerRef}
      className="relative py-32 md:py-48 bg-[#f5f1eb]"
    >
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0a0a0a] to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[#6b6560] text-xs tracking-[0.3em] uppercase font-medium mb-12"
        >
          Built for Agents
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#0e0e0e] leading-[1.15] mb-16"
        >
          The paperwork doesn&apos;t close deals.
          <br />
          <span className="text-[#c8522a]">You do.</span>
        </motion.h2>

        <div className="space-y-8 mb-16">
          {bodyLines.map((line, index) => {
            const start = 0.2 + index * 0.1
            const end = start + 0.15
            return (
              <BodyLine
                key={index}
                text={line}
                progress={scrollYProgress}
                start={start}
                end={end}
              />
            )
          })}
        </div>

        {/* Trust line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="font-sans text-[#6b6560] text-sm mb-12"
        >
          Currently serving Virginia real estate agents. Purchase Agreement and RDIS forms live now.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap gap-4"
        >
          <Link
            href="https://buy.stripe.com/00w28r0x1gZUbTGcpk4Ja03"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-[#c8522a] text-white font-medium rounded-lg hover:bg-[#b04824] transition-all duration-300 hover:shadow-lg hover:shadow-[#c8522a]/20"
          >
            Get Started — $99/mo →
          </Link>
          <Link
            href="https://calendly.com/ejfllc23/paxly-demo"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-[#0e0e0e]/20 text-[#0e0e0e] font-medium rounded-lg hover:bg-[#0e0e0e] hover:text-[#f5f1eb] transition-all duration-300"
          >
            Book a Demo
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

function BodyLine({
  text,
  progress,
  start,
  end,
}: {
  text: string
  progress: ReturnType<typeof useScroll>["scrollYProgress"]
  start: number
  end: number
}) {
  const opacity = useTransform(progress, [start, end], [0.3, 1])
  const y = useTransform(progress, [start, end], [20, 0])
  return (
    <motion.p
      style={{ opacity, y }}
      className="font-sans text-xl md:text-2xl text-[#0e0e0e] leading-relaxed"
    >
      {text}
    </motion.p>
  )
}