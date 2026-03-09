"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

function StarIcon() {
  return (
    <svg
      className="w-6 h-6 text-[#c8522a]"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

function SkeletonCard() {
  return (
    <div className="bg-[#1a1a1a] border border-white/5 rounded-xl p-6 space-y-4">
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-4 h-4 bg-white/10 rounded animate-pulse" />
        ))}
      </div>
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
      {/* Fade from cream at top */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#f5f1eb] to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6">
        {/* Main Testimonial */}
        <div className="text-center space-y-8 mb-20">
          {/* Stars */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="flex justify-center gap-1"
          >
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} />
            ))}
          </motion.div>

          {/* Quote */}
          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-serif text-3xl md:text-4xl lg:text-5xl text-white italic leading-[1.3]"
          >
            &ldquo;I generated my first contract in 20 seconds. I kept clicking
            refresh thinking something was wrong.&rdquo;
          </motion.blockquote>

          {/* Attribution */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 0.5 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="font-sans text-xs tracking-[0.2em] uppercase text-white"
          >
            — Early Access Agent, EXP Realty — Virginia
          </motion.p>
        </div>

        {/* Skeleton Loaders for upcoming testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="space-y-6"
        >
          <p className="text-center font-sans text-sm text-white/40 italic">
            More coming in as agents close their first Paxly deal
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
