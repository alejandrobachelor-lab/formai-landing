'use client'

import { motion } from 'framer-motion'
import { Sparkles, MessageSquare, CheckCircle2, TrendingUp } from 'lucide-react'

interface Message {
  type: 'ai' | 'user'
  text: string
  delay?: number
}

interface AIScreenshotProps {
  variant?: 'chat' | 'form' | 'analytics'
  className?: string
}

export default function AIScreenshot({ variant = 'chat', className = '' }: AIScreenshotProps) {
  if (variant === 'chat') {
    return (
      <div className={`screenshot-frame bg-gradient-to-br from-bg-card to-bg-darker p-6 ${className}`}>
        {/* Header */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-text-primary">AI Ассистент</h4>
              <p className="text-xs text-text-muted">Онлайн</p>
            </div>
          </div>
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
          </div>
        </div>

        {/* Chat Messages */}
        <div className="space-y-4 mb-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-start gap-3"
          >
            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-4 h-4 text-primary" />
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl rounded-tl-none px-4 py-3 max-w-[80%] border border-white/10">
              <p className="text-sm text-text-primary">Привет! 👋 Я помогу вам заполнить заявку. Как вас зовут?</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-start gap-3 justify-end"
          >
            <div className="bg-gradient-primary rounded-2xl rounded-tr-none px-4 py-3 max-w-[80%]">
              <p className="text-sm text-white font-medium">Александр Петров</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex items-start gap-3"
          >
            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-4 h-4 text-primary" />
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl rounded-tl-none px-4 py-3 max-w-[80%] border border-white/10">
              <p className="text-sm text-text-primary">Отлично, Александр! Расскажите о вашем бизнесе?</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex items-start gap-3 justify-end"
          >
            <div className="bg-gradient-primary rounded-2xl rounded-tr-none px-4 py-3 max-w-[80%]">
              <p className="text-sm text-white font-medium">Интернет-магазин электроники</p>
            </div>
          </motion.div>

          {/* Typing Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex items-start gap-3"
          >
            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-4 h-4 text-primary" />
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl rounded-tl-none px-4 py-3 border border-white/10">
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
          </motion.div>
        </div>

        {/* Input Area */}
        <div className="flex items-center gap-2 p-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
          <input
            type="text"
            placeholder="Введите сообщение..."
            className="flex-1 bg-transparent text-sm text-text-primary placeholder:text-text-muted outline-none"
            disabled
          />
          <button className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
            <MessageSquare className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>
    )
  }

  if (variant === 'form') {
    return (
      <div className={`screenshot-frame bg-gradient-to-br from-bg-card to-bg-darker p-6 ${className}`}>
        {/* Header */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-text-primary mb-2">Заявка на консультацию</h3>
          <p className="text-sm text-text-secondary">Заполните форму, и мы свяжемся с вами</p>
        </div>

        {/* Form Fields */}
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <label className="block text-sm font-medium text-text-secondary mb-2">Имя *</label>
            <div className="relative">
              <input
                type="text"
                value="Александр Петров"
                className="w-full bg-white/5 border border-success/50 rounded-lg px-4 py-3 text-sm text-text-primary outline-none"
                disabled
              />
              <CheckCircle2 className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-success" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <label className="block text-sm font-medium text-text-secondary mb-2">Email *</label>
            <div className="relative">
              <input
                type="email"
                value="alex@example.com"
                className="w-full bg-white/5 border border-success/50 rounded-lg px-4 py-3 text-sm text-text-primary outline-none"
                disabled
              />
              <CheckCircle2 className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-success" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <label className="block text-sm font-medium text-text-secondary mb-2">Компания</label>
            <input
              type="text"
              placeholder="Введите название..."
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-text-primary placeholder:text-text-muted outline-none focus:border-primary/50 transition-colors"
              disabled
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <label className="block text-sm font-medium text-text-secondary mb-2">Сообщение</label>
            <textarea
              placeholder="Расскажите о вашем проекте..."
              rows={3}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-text-primary placeholder:text-text-muted outline-none focus:border-primary/50 transition-colors resize-none"
              disabled
            />
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="w-full bg-gradient-primary text-white font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity"
            disabled
          >
            Отправить заявку
          </motion.button>
        </div>
      </div>
    )
  }

  if (variant === 'analytics') {
    return (
      <div className={`screenshot-frame bg-gradient-to-br from-bg-card to-bg-darker p-6 ${className}`}>
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold text-text-primary">Аналитика форм</h3>
          <div className="flex items-center gap-2 text-success">
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm font-semibold">+47%</span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10"
          >
            <p className="text-xs text-text-muted mb-1">Конверсия</p>
            <p className="text-2xl font-bold text-primary">68%</p>
            <p className="text-xs text-success mt-1">+12% за неделю</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10"
          >
            <p className="text-xs text-text-muted mb-1">Заявки</p>
            <p className="text-2xl font-bold text-secondary">1,247</p>
            <p className="text-xs text-success mt-1">+234 за неделю</p>
          </motion.div>
        </div>

        {/* Chart Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10"
        >
          <div className="flex items-end justify-between h-32 gap-2">
            {[40, 65, 45, 80, 60, 90, 75].map((height, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${height}%` }}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                className="flex-1 bg-gradient-to-t from-primary to-secondary rounded-t-lg"
              />
            ))}
          </div>
          <div className="flex justify-between mt-2 text-xs text-text-muted">
            <span>Пн</span>
            <span>Вт</span>
            <span>Ср</span>
            <span>Чт</span>
            <span>Пт</span>
            <span>Сб</span>
            <span>Вс</span>
          </div>
        </motion.div>
      </div>
    )
  }

  return null
}
