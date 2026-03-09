"use client"

import { useEffect, useRef } from "react"

export function GradientOrb() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    let time = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resize()
    window.addEventListener("resize", resize)

    const draw = () => {
      time += 0.002

      ctx.fillStyle = "#0a0a0a"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Create large gradient orb with slow drift
      const centerX = canvas.width * 0.5 + Math.sin(time * 0.5) * 100
      const centerY = canvas.height * 0.4 + Math.cos(time * 0.3) * 50
      const radius = Math.min(canvas.width, canvas.height) * 0.8

      // Create gradient from teal to rust
      const gradient = ctx.createRadialGradient(
        centerX,
        centerY,
        0,
        centerX,
        centerY,
        radius
      )

      gradient.addColorStop(0, "rgba(13, 148, 136, 0.4)") // deep teal
      gradient.addColorStop(0.4, "rgba(100, 100, 100, 0.2)") // transition
      gradient.addColorStop(0.7, "rgba(200, 82, 42, 0.3)") // rust
      gradient.addColorStop(1, "rgba(10, 10, 10, 0)")

      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2)
      ctx.fill()

      // Add noise texture overlay
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
      const data = imageData.data

      for (let i = 0; i < data.length; i += 4) {
        const noise = (Math.random() - 0.5) * 15
        data[i] = Math.max(0, Math.min(255, data[i] + noise))
        data[i + 1] = Math.max(0, Math.min(255, data[i + 1] + noise))
        data[i + 2] = Math.max(0, Math.min(255, data[i + 2] + noise))
      }

      ctx.putImageData(imageData, 0, 0)

      animationId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ filter: "blur(80px)" }}
    />
  )
}
