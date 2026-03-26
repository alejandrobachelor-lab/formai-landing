'use client'

import { motion } from 'framer-motion'
import { Play, Sparkles, X } from 'lucide-react'
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-bg-dark to-secondary/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(108,99,255,0.1),transparent_50%)]" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-text-secondary">Скоро запуск — присоединяйся первым</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-hero font-bold mb-6 leading-tight"
            >
              Создавай формы,{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                которые разговаривают
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg sm:text-xl text-text-secondary mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              AI-конструктор форм для российского бизнеса. Статические анкеты и живые диалоговые формы — в одном инструменте.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={scrollToWaitlist}
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/25"
              >
                Начать бесплатно
              </button>
              <button
                onClick={() => setShowDemo(true)}
                className="bg-bg-card hover:bg-bg-card/80 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 active:scale-95 border border-primary/20 flex items-center justify-center gap-2"
              >
                <Play className="w-5 h-5" />
                Смотреть демо
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-12 flex flex-wrap gap-8 justify-center lg:justify-start"
            >
              <div>
                <div className="text-3xl font-bold text-primary">3x</div>
                <div className="text-sm text-text-secondary">Рост конверсии</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary">5 мин</div>
                <div className="text-sm text-text-secondary">До запуска формы</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-success">100%</div>
                <div className="text-sm text-text-secondary">Для России</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Mockup Container */}
              <div className="bg-gradient-to-br from-bg-card to-bg-dark border border-primary/20 rounded-2xl p-8 shadow-2xl">
                {/* Chat Interface Mockup */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-primary/10 rounded-2xl rounded-tl-none px-4 py-3 max-w-xs">
                      <p className="text-sm text-text-primary">Привет! Помогу заполнить анкету. Как вас зовут?</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 justify-end">
                    <div className="bg-bg-dark rounded-2xl rounded-tr-none px-4 py-3 max-w-xs">
                      <p className="text-sm text-text-primary">Александр</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-primary/10 rounded-2xl rounded-tl-none px-4 py-3 max-w-xs">
                      <p className="text-sm text-text-primary">Приятно познакомиться, Александр! Какой у вас бизнес?</p>
                    </div>
                  </div>

                  {/* Typing Indicator */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-primary/10 rounded-2xl rounded-tl-none px-4 py-3">
                      <div className="flex gap-1">
                        <motion.div
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
                          className="w-2 h-2 bg-primary rounded-full"
                        />
                        <motion.div
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                          className="w-2 h-2 bg-primary rounded-full"
                        />
                        <motion.div
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
                          className="w-2 h-2 bg-primary rounded-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-success/20 border border-success/40 rounded-lg px-4 py-2 backdrop-blur-sm"
              >
                <p className="text-xs font-semibold text-success">+47% конверсия</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 bg-secondary/20 border border-secondary/40 rounded-lg px-4 py-2 backdrop-blur-sm"
              >
                <p className="text-xs font-semibold text-secondary">AI-powered</p>
              </motion.div>
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
            className="bg-bg-card border border-primary/20 rounded-2xl p-8 max-w-2xl w-full"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold">Демо видео</h3>
              <button
                onClick={() => setShowDemo(false)}
                className="text-text-secondary hover:text-text-primary transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="aspect-video bg-bg-dark rounded-lg flex items-center justify-center">
              <p className="text-text-secondary">Демо видео скоро будет доступно</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
