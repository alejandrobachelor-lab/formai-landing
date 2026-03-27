'use client'

import { motion } from 'framer-motion'
import { Check, Zap, Crown, Rocket, Sparkles } from 'lucide-react'

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
      gradient: 'from-bg-card to-bg-darker',
      borderColor: 'border-white/10',
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
      gradient: 'from-bg-card to-bg-darker',
      borderColor: 'border-white/10',
    },
  ]

  const scrollToWaitlist = () => {
    const element = document.getElementById('waitlist')
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="pricing" className="py-16 lg:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-dark via-bg-card/20 to-bg-dark" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 glass-effect rounded-full px-4 py-2 mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-text-secondary">Прозрачные цены</span>
          </div>
          <h2 className="text-section-mobile lg:text-section font-bold mb-3">
            Честные тарифы.{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Без сюрпризов.
            </span>
          </h2>
          <p className="text-text-secondary text-base lg:text-lg max-w-2xl mx-auto">
            Выбери план, который подходит твоему бизнесу
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`relative glass-effect border-2 ${plan.borderColor} rounded-2xl p-6 lg:p-8 ${
                plan.popular ? 'lg:scale-105 shadow-2xl shadow-primary/20' : ''
              } hover:scale-[1.02] transition-all`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-primary px-5 py-1.5 rounded-full shadow-lg">
                  <span className="text-xs font-bold text-white uppercase tracking-wider">Популярный</span>
                </div>
              )}

              {/* Icon & Name */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`${plan.popular ? 'bg-gradient-primary' : 'bg-primary/10'} w-11 h-11 rounded-lg flex items-center justify-center`}>
                  <plan.icon className={`w-5 h-5 ${plan.popular ? 'text-white' : 'text-primary'}`} />
                </div>
                <h3 className="text-xl font-bold">{plan.name}</h3>
              </div>

              <p className="text-text-secondary text-sm mb-6">{plan.description}</p>

              {/* Price */}
              <div className="mb-6">
                {plan.earlyPrice ? (
                  <div>
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{plan.earlyPrice}</span>
                      <span className="text-text-secondary text-lg">₽</span>
                    </div>
                    <div className="text-sm text-text-muted mb-1">/ {plan.period}</div>
                    <div className="flex items-center gap-2">
                      <span className="text-text-muted line-through text-xs">было {plan.originalPrice} ₽</span>
                      <span className="bg-success/20 text-success text-xs px-2 py-0.5 rounded-full font-semibold">
                        -50%
                      </span>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl lg:text-5xl font-bold">{plan.price}</span>
                      <span className="text-text-secondary text-lg">₽</span>
                    </div>
                    <div className="text-sm text-text-muted">/ {plan.period}</div>
                  </div>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-success" />
                    </div>
                    <span className="text-text-secondary text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                onClick={scrollToWaitlist}
                className={`w-full py-3 rounded-xl font-semibold text-sm transition-all hover:scale-105 active:scale-95 ${
                  plan.popular
                    ? 'bg-gradient-primary text-white shadow-lg shadow-primary/25 hover:shadow-primary/40'
                    : 'glass-effect text-text-primary border border-white/20 hover:bg-white/10'
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
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 glass-effect border border-success/30 rounded-full px-5 py-2.5">
            <Zap className="w-4 h-4 text-success" />
            <span className="text-success font-semibold text-sm">
              Цены для первых 200 пользователей заморожены навсегда
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
