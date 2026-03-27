'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play, CheckCircle } from 'lucide-react'
import { useState } from 'react'

export default function Hero() {
  const [showDemo, setShowDemo] = useState(false)

  const scrollToWaitlist = () => {
    const element = document.getElementById('waitlist')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/Professionals_talking_in_202603271314.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Анкеты и формы, которые работают на{' '}
              <span className="text-primary">твой бизнес</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-2xl">
              FormAI — простой способ собирать заявки, опросы и обратную связь от клиентов. Без программистов, без сложных настроек
            </p>

            {/* Feature List */}
            <div className="flex flex-col gap-3 mb-10">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-lg text-white/90">Быстрый запуск за 5 минут</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-lg text-white/90">Увеличение конверсии в 3 раза</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-lg text-white/90">100% российское решение</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToWaitlist}
                className="group bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:bg-primary-dark shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                Начать бесплатно
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => setShowDemo(true)}
                className="bg-white text-text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:bg-gray-50 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <Play className="w-5 h-5" />
                Смотреть демо
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Demo Modal */}
      {showDemo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowDemo(false)}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl p-6 max-w-4xl w-full shadow-2xl"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-text-primary">Демо FormAI</h3>
              <button
                onClick={() => setShowDemo(false)}
                className="text-text-secondary hover:text-text-primary transition-colors p-2 hover:bg-gray-100 rounded-lg"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="aspect-video bg-gray-100 rounded-xl flex items-center justify-center border border-gray-200">
              <div className="text-center">
                <Play className="w-16 h-16 text-primary mx-auto mb-4" />
                <p className="text-text-secondary">Демо видео скоро будет доступно</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
