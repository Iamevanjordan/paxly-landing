"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"

const beforeItems = [
  { task: "Open blank PA form", time: "1 min" },
  { task: "Pull up MLS listing", time: "3 min" },
  { task: "Copy property details", time: "5 min" },
  { task: "Fill in buyer/seller info", time: "10 min" },
  { task: "Cross-check for errors", time: "7 min" },
  { task: "Save, export, send", time: "2 min" },
]

const afterItems = [
  { task: "Upload PropertyDetails PDF", time: "10 sec" },
  { task: "Click Generate", time: "5 sec" },
  { task: "Download completed contract", time: "5 sec" },
]

export function BeforeAfter() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [showAfter, setShowAfter] = useState(false)

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setShowAfter(true)
      }, beforeItems.length * 150 + 500)
      return () => clearTimeout(timer)
    }
  }, [isInView])

  return (
    <section
      id="before-after"
      ref={ref}
      className="relative py-32 md:py-48 bg-[#f5f1eb]"
    >
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0a0a0a] to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6">
        {/* Three questions — the gut check */}
        <div className="text-center mb-24 space-y-6">
          {[
            "How many minutes did your last contract take?",
            "How many times have you caught a typo before sending?",
            "What would you do with 30 extra minutes per deal?",
          ].map((q, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="font-serif text-2xl md:text-3xl text-[#0e0e0e]"
            >
              {q}
            </motion.p>
          ))}
        </div>

        {/* Before / After columns */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-0">
          {/* Before */}
          <div className="md:pr-16 md:border-r border-[#d9d4cc]">
            <motion.h3
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="font-sans text-sm tracking-widest uppercase text-[#6b6560] mb-10"
            >
              Before Paxly
            </motion.h3>

            <ul className="space-y-5">
              {beforeItems.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.15 }}
                  className="flex justify-between items-center font-sans text-[#6b6560] text-lg"
                >
                  <span>{item.task}</span>
                  <span className="font-mono text-sm">{item.time}</span>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: beforeItems.length * 0.15 }}
              className="mt-10 pt-6 border-t border-[#d9d4cc]"
            >
              <p className="font-sans text-[#6b6560]">
                Total:{" "}
                <span className="font-semibold text-[#0e0e0e]">
                  28 minutes. Per deal. Every deal.
                </span>
              </p>
            </motion.div>
          </div>

          {/* After */}
          <div className="md:pl-16">
            <motion.h3
              initial={{ opacity: 0 }}
              animate={showAfter ? { opacity: 1 } : {}}
              transition={{ duration: 0.3 }}
              className="font-sans text-sm tracking-widest uppercase text-[#c8522a] mb-10"
            >
              After Paxly
            </motion.h3>

            <ul className="space-y-5">
              {afterItems.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={showAfter ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                  className="flex justify-between items-center font-sans text-[#c8522a] text-lg"
                >
                  <span className="font-medium">{item.task}</span>
                  <span className="font-mono text-sm font-semibold">{item.time}</span>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0 }}
              animate={showAfter ? { opacity: 1 } : {}}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="mt-10 pt-6 border-t border-[#c8522a]/30"
            >
              <p className="font-serif text-3xl md:text-4xl font-bold text-[#c8522a]">
                Total: 20 seconds.
              </p>
            </motion.div>
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={showAfter ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center font-sans text-[#6b6560] italic mt-20 text-lg"
        >
          The math doesn&apos;t change. Your role in it does.
        </motion.p>
      </div>
    </section>
  )
}