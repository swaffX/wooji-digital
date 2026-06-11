'use client'
import { useCallback } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

interface ServiceCard3DProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  intensity?: number
}

export default function ServiceCard3D({
  children,
  className = '',
  style,
  intensity = 9,
}: ServiceCard3DProps) {
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rotX = useSpring(mx, { stiffness: 250, damping: 22 })
  const rotY = useSpring(my, { stiffness: 250, damping: 22 })

  const onMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const r = e.currentTarget.getBoundingClientRect()
      mx.set((0.5 - (e.clientY - r.top) / r.height) * intensity)
      my.set(((e.clientX - r.left) / r.width - 0.5) * intensity)
    },
    [mx, my, intensity],
  )

  const onLeave = useCallback(() => {
    mx.set(0)
    my.set(0)
  }, [mx, my])

  return (
    <motion.div
      className={className}
      style={{
        rotateX: rotX,
        rotateY: rotY,
        transformStyle: 'preserve-3d',
        willChange: 'transform',
        ...style,
      }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </motion.div>
  )
}
