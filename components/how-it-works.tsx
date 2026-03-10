"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const steps = [
  {
    number: "01",
    title: "Upload",
    body: "Upload your Property Details PDF. Paxly reads it — address, price, parties, terms. Automatically.",
    badge: "10 seconds",
    gif: "Screen recording: PDF upload → fields extracting from document",
  },
  {
    number: "02",
    title: "Generate",
    body: "Click generate. 12 fields populate right now — more added every week. Zero typing.",
    badge: "5 seconds",
    gif: "Screen recording: Generate button click → contract fields populating",
  },
  {
    number: "03",
    title: "Done",
    body: "Download the completed contract. Review it. Send it. Move on.",
    badge: "5 seconds",
    gif: "Screen recording: Download → filled PDF opening",
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
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#f5f1eb] to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-[#c8522a] text-xs tracking-[0.3em] uppercase font-medium mb-16"
        >
          How It Works
        </motion.p>

        <div className="space-y-32 md:space-y-40">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              {/* Text side */}
              <div className={index % 2 === 1 ? "md:order-2" : ""}>
                <span className="font-mono text-white/30 text-sm block mb-4">
                  Step {step.number}
                </span>
                <h3 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
                  {step.title}
                </h3>
                <p className="font-sans text-white/60 text-lg leading-relaxed mb-6">
                  {step.body}
                </p>
                <span className="inline-block px-4 py-2 bg-white/5 border border-white/10 rounded-full font-mono text-white text-sm">
                  {step.badge}
                </span>
              </div>

              {/* GIF placeholder side */}
              <div className={index % 2 === 1 ? "md:order-1" : ""}>
                <div
                  className="w-full rounded-xl flex items-center justify-center"
                  style={{
                    aspectRatio: "16/9",
                    background: "#1a1a1a",
                    border: "1.5px dashed rgba(255,255,255,0.15)",
                  }}
                >
                  <p className="font-sans text-white/30 text-sm text-center px-6">
                    [{step.gif}]
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.5 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center font-sans text-white text-sm mt-24"
        >
          That&apos;s actually the whole thing... Yea. We know.
        </motion.p>
      </div>
    </section>
  )
}