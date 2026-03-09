"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"

const headlineWords = ["See", "it", "work", "on", "your", "actual", "contracts."]

export function BookDemo() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [displayedWords, setDisplayedWords] = useState<string[]>([])

  useEffect(() => {
    if (isInView) {
      headlineWords.forEach((word, index) => {
        setTimeout(() => {
          setDisplayedWords((prev) => [...prev, word])
        }, index * 200)
      })
    }
  }, [isInView])

  return (
    <section
      id="demo"
      ref={ref}
      className="relative py-32 md:py-48 bg-[#0a0a0a] overflow-hidden"
    >
      {/* Fade from cream at top */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#f5f1eb] to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Headline - Word by word animation */}
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-10 min-h-[1.5em]">
          {displayedWords.map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="inline-block mr-[0.3em]"
            >
              {word}
            </motion.span>
          ))}
        </h2>

        {/* Body */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.6 } : {}}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="font-sans text-white text-lg md:text-xl max-w-xl mx-auto mb-12 leading-relaxed"
        >
          15 minutes. No slides. No deck. You&apos;ll either see it solve your
          problem or you won&apos;t. Either way you&apos;ll know in 15 minutes.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.8 }}
        >
          <Link
            href="https://calendly.com/ejfllc23/paxly-demo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-5 bg-[#c8522a] text-white font-sans font-semibold text-lg rounded-lg hover:bg-[#b04824] transition-all duration-300 hover:shadow-xl hover:shadow-[#c8522a]/20"
          >
            Pick a Time
            <span className="ml-2">→</span>
          </Link>
        </motion.div>

        {/* Scarcity */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 2 }}
          className="font-sans text-[#c8522a] text-sm mt-8"
        >
          77 of 100 founder pricing spots remaining.
        </motion.p>
      </div>
    </section>
  )
}
