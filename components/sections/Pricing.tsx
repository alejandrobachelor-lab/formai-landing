'use client'

import { motion } from 'framer-motion'
import { Check, Zap, Crown, Rocket } from 'lucide-react'

export default function Pricing() {
  const plans = [
    {
      name: 'FREE',
      icon: Zap,
      price: '0',
      period: 'навсегда',
      description: 'Для старта и небольших проектов',
      features: [
        '3 формы',
        '100 ответов/мес',
        'Базовые поля',
        'Без водяного знака',
        'Email поддержка',
      ],
      cta: 'Начать бесплатно',
      popular: false,
      gradient: 'from-bg-card to-bg-dark',
      borderColor: 'border-primary/10',
    },
    {
      name: 'PRO',
      icon: Crown,
      price: '990',
      originalPrice: '990',
      earlyPrice: '490',
      period: 'в месяц',
      description: 'Для профессионалов и растущего бизнеса',
      features: [
        'Безлимитные формы',
        '5000 ответов/мес',
        'AI-диалоговые формы',
        'Все интеграции (CRM, Telegram, ЮKassa)',
        'Условная логика',
        'Аналитика и отчёты',
        'Кастомный брендинг',
        'Приоритетная поддержка',
      ],
      cta: 'Получить ранний доступ',
      popular: true,
      gradient: 'from-primary/20 to-secondary/10',
      borderColor: 'border-primary',
    },
    {
      name: 'BUSINESS',
      icon: Rocket,
      price: '2990',
      period: 'в месяц',
      description: 'Для агентств и крупного бизнеса',
      features: [
        'Всё из Pro',
        'Безлимитные ответы',
        'White-label (полное удаление брендинга)',
        'API доступ',
        'Приоритетная поддержка 24/7',
        'Персональный менеджер',
        'Кастомные интеграции',
        'SLA 99.9%',
      ],
      cta: 'Связаться с нами',
      popular: false,
      gradient: 'from-bg-card to-bg-dark',
      borderColor: 'border-primary/10',
    },
  ]

  const scrollToWaitlist = () => {
    const element = document.getElementById('waitlist')
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="pricing" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-section font-semibold mb-4">
            Честные тарифы.{' '}
            <span className="text-primary">Без сюрпризов.</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Выбери план, который подходит твоему бизнесу
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`relative bg-gradient-to-br ${plan.gradient} border-2 ${plan.borderColor} rounded-2xl p-8 ${
                plan.popular ? 'lg:scale-105 shadow-2xl shadow-primary/20' : ''
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary px-6 py-2 rounded-full">
                  <span className="text-sm font-bold text-white">ПОПУЛЯРНЫЙ</span>
                </div>
              )}

              {/* Icon */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`${plan.popular ? 'bg-primary' : 'bg-primary/10'} w-12 h-12 rounded-xl flex items-center justify-center`}>
                  <plan.icon className={`w-6 h-6 ${plan.popular ? 'text-white' : 'text-primary'}`} />
                </div>
                <h3 className="text-2xl font-bold">{plan.name}</h3>
              </div>

              <p className="text-text-secondary mb-6">{plan.description}</p>

              {/* Price */}
              <div className="mb-6">
                {plan.earlyPrice ? (
                  <div>
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-5xl font-bold text-primary">{plan.earlyPrice}</span>
                      <span className="text-text-secondary">₽</span>
                      <span className="text-text-secondary">/ {plan.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-text-secondary line-through text-sm">было {plan.originalPrice} ₽</span>
                      <span className="bg-success/20 text-success text-xs px-2 py-1 rounded-full font-semibold">
                        -50% РАННИЙ ДОСТУП
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold">{plan.price}</span>
                    <span className="text-text-secondary">₽</span>
                    <span className="text-text-secondary">/ {plan.period}</span>
                  </div>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-text-secondary text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                onClick={scrollToWaitlist}
                className={`w-full py-4 rounded-lg font-semibold transition-all hover:scale-105 active:scale-95 ${
                  plan.popular
                    ? 'bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25'
                    : 'bg-bg-dark hover:bg-bg-dark/80 text-white border border-primary/20'
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 bg-success/10 border border-success/20 rounded-full px-6 py-3">
            <Zap className="w-5 h-5 text-success" />
            <span className="text-success font-semibold">
              Цены для первых 200 пользователей заморожены навсегда
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
