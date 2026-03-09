"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const features = [
  "PA Contract generation — live now",
  "RDIS Listing Form — page 1 live, page 2 in progress",
  "PropertyDetails PDF parsing",
  "Deal pipeline — New → In Progress → Sent → Closed",
  "Unlimited generations",
  "Direct access to the founder",
]

export function Pricing() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="pricing"
      ref={ref}
      className="relative py-32 md:py-48 bg-[#f5f1eb]"
    >
      {/* Fade from dark at top */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0a0a0a] to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6">
        {/* Section Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-[#6b6560] text-xs tracking-[0.3em] uppercase font-medium mb-12"
        >
          Pricing
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif text-4xl md:text-5xl font-bold text-[#0e0e0e] leading-tight mb-12"
        >
          One price. No surprises.
          <br />
          No &ldquo;contact us.&rdquo;
        </motion.h2>

        {/* Price */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <span className="font-serif text-8xl md:text-9xl font-bold text-[#c8522a]">
            $99
          </span>
          <span className="font-sans text-2xl text-[#6b6560] ml-2">/month</span>
        </motion.div>

        {/* Founder Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="inline-block px-4 py-2 bg-[#c8522a] text-white font-sans text-sm font-medium rounded-lg mb-12"
        >
          Founder pricing — locked forever for the first 100 agents. $199/month
          after that.
        </motion.div>

        {/* Features */}
        <motion.ul
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-4 mb-12"
        >
          {features.map((feature, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              className="flex items-start gap-3 font-sans text-lg text-[#0e0e0e]"
            >
              <span className="text-[#c8522a] font-medium">→</span>
              {feature}
            </motion.li>
          ))}
        </motion.ul>

        {/* Subscribe Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="mb-8"
        >
          <a
            href="https://buy.stripe.com/00w28r0x1gZUbTGcpk4Ja03"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-[#c8522a] text-white font-medium rounded-lg hover:bg-[#b04824] transition-all duration-300 hover:shadow-lg hover:shadow-[#c8522a]/20 text-lg"
          >
            Subscribe Now
            <span className="ml-2">→</span>
          </a>
        </motion.div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 1 }}
          className="font-sans text-[#6b6560] text-sm"
        >
          No contracts. Cancel anytime. Built by someone who answers their
          email.
        </motion.p>
      </div>
    </section>
  )
}
