"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"

function SkeletonCard() {
  return (
    <div className="bg-[#1a1a1a] border border-white/5 rounded-xl p-6 space-y-4">
      <div className="space-y-2">
        <div className="h-4 bg-white/10 rounded w-full animate-pulse" />
        <div className="h-4 bg-white/10 rounded w-5/6 animate-pulse" />
        <div className="h-4 bg-white/10 rounded w-4/6 animate-pulse" />
      </div>
      <div className="h-3 bg-white/10 rounded w-2/5 animate-pulse" />
    </div>
  )
}

export function Testimonial() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="testimonial"
      ref={ref}
      className="relative py-32 md:py-48 bg-[#0a0a0a]"
    >
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#f5f1eb] to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6">
        {/* Trust statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="font-serif text-3xl md:text-4xl text-white/80 italic leading-relaxed mb-8">
            Used by Virginia real estate agents.
            <br />
            <span className="text-[#c8522a]">More joining every week.</span>
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link
              href="https://calendly.com/ejfllc23/paxly-demo"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#c8522a] text-white font-medium rounded-lg hover:bg-[#b04824] transition-all duration-300"
            >
              See it work on your deals →
            </Link>
            <Link
              href="https://buy.stripe.com/00w28r0x1gZUbTGcpk4Ja03"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              Get Started — $99/mo
            </Link>
          </motion.div>
        </motion.div>

        {/* Skeleton loaders */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="space-y-6"
        >
          <p className="text-center font-sans text-sm text-white/40 italic">
            Agent reviews coming in as deals close
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <SkeletonCard />
            <SkeletonCard />
          </div>
        </motion.div>
      </div>
    </section>
  )
}