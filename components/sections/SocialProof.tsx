'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function SocialProof() {
  const [count, setCount] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Fetch waitlist count
    fetch('/api/waitlist/count')
      .then(res => res.json())
      .then(data => {
        setCount(data.count || 0)
        setIsLoading(false)
      })
      .catch(() => {
        setCount(0)
        setIsLoading(false)
      })
  }, [])

  return (
    <section className="py-12 border-y border-gray-200 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-text-secondary text-lg mb-4">
            Уже в листе ожидания:{' '}
            <span className="text-primary font-bold text-3xl">
              {isLoading ? '...' : count}
            </span>{' '}
            {count === 1 ? 'компания' : count < 5 ? 'компании' : 'компаний'}
          </p>
          
          {/* Logo Placeholders */}
          <div className="flex flex-wrap items-center justify-center gap-8 mt-8">
            {[1, 2, 3, 4, 5].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <div className="w-32 h-16 bg-gray-100 rounded-lg border border-gray-200 flex items-center justify-center">
                  <div className="text-text-muted text-xs font-medium">Логотип</div>
                </div>
                <div className="absolute inset-0 bg-white/80 rounded-lg flex items-center justify-center">
                  <span className="text-xs text-text-secondary">Скоро здесь</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
