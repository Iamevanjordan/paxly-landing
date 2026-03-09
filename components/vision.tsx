"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const bodyLines = [
  "Most automation tools solve one problem. Paxly is being built to eliminate the category.",
  "Contract generation is live now. What's coming: full transaction coordination — every party, every deadline, every document, tracked and reminded automatically.",
  "The contract was the door. We're building what's behind it.",
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
      {/* Fade from dark at top */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0a0a0a] to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6">
        {/* Section Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[#6b6560] text-xs tracking-[0.3em] uppercase font-medium mb-12"
        >
          Infrastructure, Not a Feature
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#0e0e0e] leading-[1.15] mb-16"
        >
          Real estate has had the same workflow for 40 years.
          <br />
          <span className="text-[#c8522a]">
            That ends with your next deal.
          </span>
        </motion.h2>

        {/* Body Text */}
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

        {/* Industry Notes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-4 border-l-2 border-[#c8522a] pl-6 mb-12"
        >
          <p className="font-sans text-[#c8522a] italic text-lg">
            If you&apos;re in real estate — this was built for your workflow.
          </p>
          <p className="font-sans text-[#c8522a] italic text-lg">
            If you&apos;re in another industry and the infrastructure sounds
            familiar — we&apos;re paying attention.
          </p>
        </motion.div>

        {/* Location Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="font-sans text-[#6b6560] text-sm"
        >
          Currently serving Virginia real estate agents. Watching everything
          else.
        </motion.p>
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
