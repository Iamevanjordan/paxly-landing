"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const steps = [
  {
    number: "01",
    title: "Upload",
    body: "Upload your Property Details PDF. Paxly reads it — address, price, parties, terms. All of it. Automatically.",
    badge: "10 seconds",
  },
  {
    number: "02",
    title: "Generate",
    body: "Select your contract. Over 50 fields map to your data right now. More get added every week. Zero typing.",
    badge: "5 seconds",
  },
  {
    number: "03",
    title: "Done",
    body: "Download. Review. Send. Close the deal. Do it again.",
    badge: "5 seconds",
  },
]

export function HowItWorks() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="how-it-works"
      ref={ref}
      className="relative py-32 md:py-48 bg-[#0a0a0a] overflow-hidden"
    >
      {/* Fade from cream at top */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#f5f1eb] to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-[#c8522a] text-xs tracking-[0.3em] uppercase font-medium mb-16"
        >
          How It Works
        </motion.p>

        {/* Steps */}
        <div className="space-y-24 md:space-y-32">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="grid md:grid-cols-12 gap-8 items-start"
            >
              {/* Step Number */}
              <div className="md:col-span-2">
                <span className="font-mono text-white/30 text-sm">
                  Step {step.number}
                </span>
              </div>

              {/* Content */}
              <div className="md:col-span-7 space-y-4">
                <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                  {step.title}
                </h3>
                <p className="font-sans text-white/60 text-lg md:text-xl leading-relaxed max-w-xl">
                  {step.body}
                </p>
              </div>

              {/* Badge */}
              <div className="md:col-span-3 md:text-right">
                <span className="inline-block px-4 py-2 bg-white/5 border border-white/10 rounded-full font-mono text-white text-sm">
                  {step.badge}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.5 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center font-sans text-white text-sm mt-24"
        >
          That&apos;s actually the whole thing. We know.
        </motion.p>
      </div>
    </section>
  )
}
