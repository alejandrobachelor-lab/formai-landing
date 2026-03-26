'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Sparkles, CheckCircle2, Loader2 } from 'lucide-react'

export default function Waitlist() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    useCase: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Что-то пошло не так')
      }

      setIsSuccess(true)
      setFormData({ email: '', name: '', useCase: '' })
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ошибка при отправке формы')
    } finally {
      setIsSubmitting(false)
    }
  }

  const useCaseOptions = [
    'Маркетинг',
    'HR',
    'Онлайн-школа',
    'Агентство',
    'Другое',
  ]

  return (
    <section id="waitlist" className="py-20 lg:py-32 bg-gradient-to-br from-primary/10 via-bg-dark to-secondary/10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(108,99,255,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(0,212,255,0.15),transparent_50%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-text-secondary">Ограниченное предложение</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-section font-semibold mb-4">
              Получи{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                ранний доступ
              </span>
            </h2>
            <p className="text-text-secondary text-lg">
              Первые 200 пользователей получают Pro-тариф по цене Free на 3 месяца
            </p>
          </motion.div>

          {!isSuccess ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-bg-card border border-primary/20 rounded-2xl p-8 md:p-12 shadow-2xl"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    className="w-full bg-bg-dark border border-primary/20 rounded-lg px-4 py-3 text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Имя или название компании
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Иван Иванов или ООО «Компания»"
                    className="w-full bg-bg-dark border border-primary/20 rounded-lg px-4 py-3 text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                {/* Use Case */}
                <div>
                  <label htmlFor="useCase" className="block text-sm font-medium mb-2">
                    Как планируете использовать?
                  </label>
                  <select
                    id="useCase"
                    value={formData.useCase}
                    onChange={(e) => setFormData({ ...formData, useCase: e.target.value })}
                    className="w-full bg-bg-dark border border-primary/20 rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-primary transition-colors"
                  >
                    <option value="">Выберите вариант</option>
                    {useCaseOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Error Message */}
                {error && (
                  <div className="bg-red-400/10 border border-red-400/20 rounded-lg p-4">
                    <p className="text-red-400 text-sm">{error}</p>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Отправка...
                    </>
                  ) : (
                    'Занять место в очереди'
                  )}
                </button>

                <p className="text-text-secondary text-xs text-center">
                  Нажимая кнопку, вы соглашаетесь с{' '}
                  <a href="#" className="text-primary hover:underline">
                    политикой конфиденциальности
                  </a>
                </p>
              </form>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-success/10 border border-success/20 rounded-2xl p-8 md:p-12 text-center"
            >
              <CheckCircle2 className="w-16 h-16 text-success mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Вы в списке! 🎉</h3>
              <p className="text-text-secondary mb-6">
                Мы отправили подтверждение на вашу почту. Вы получите доступ к платформе одними из первых.
              </p>
              <button
                onClick={() => setIsSuccess(false)}
                className="text-primary hover:underline text-sm"
              >
                Добавить ещё один email
              </button>
            </motion.div>
          )}

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              { title: '3 месяца Pro бесплатно', description: 'Для первых 200 пользователей' },
              { title: 'Цена заморожена навсегда', description: 'Никаких повышений тарифа' },
              { title: 'Приоритетная поддержка', description: 'Прямая линия с командой' },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="text-center"
              >
                <h4 className="font-semibold mb-2">{benefit.title}</h4>
                <p className="text-text-secondary text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
