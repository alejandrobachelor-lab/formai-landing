'use client'

import { motion } from 'framer-motion'
import { PenTool, Settings, Rocket, ArrowRight, Sparkles } from 'lucide-react'
import AIScreenshot from '../AIScreenshot'

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      icon: PenTool,
      title: 'Создай форму',
      description: 'Выбери шаблон или начни с нуля. Используй drag & drop конструктор или попроси AI сгенерировать форму за тебя.',
      color: 'from-primary to-primary/50',
      highlight: 'text-primary',
    },
    {
      number: '02',
      icon: Settings,
      title: 'Настрой и опубликуй',
      description: 'Добавь брендинг, настрой условную логику, подключи интеграции. Получи ссылку или embed-код для сайта.',
      color: 'from-secondary to-secondary/50',
      highlight: 'text-secondary',
    },
    {
      number: '03',
      icon: Rocket,
      title: 'Собирай заявки',
      description: 'Смотри аналитику в реальном времени, получай данные в CRM и Telegram. Оптимизируй конверсию на основе данных.',
      color: 'from-success to-success/50',
      highlight: 'text-success',
    },
  ]

  return (
    <section id="how-it-works" className="py-16 lg:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-card/30 via-bg-dark to-bg-card/30" />
      
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
            <span className="text-sm font-semibold text-text-secondary">Простой процесс</span>
          </div>
          <h2 className="text-section-mobile lg:text-section font-bold mb-3">
            Как это работает
          </h2>
          <p className="text-text-secondary text-base lg:text-lg max-w-2xl mx-auto">
            Три простых шага до первой заявки
          </p>
        </motion.div>

        {/* Steps with Visual Flow */}
        <div className="max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative mb-8 last:mb-0"
            >
              <div className={`grid lg:grid-cols-2 gap-6 lg:gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Content Side */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="glass-effect rounded-2xl p-6 lg:p-8 border border-white/10 relative">
                    {/* Number Badge */}
                    <div className={`absolute -top-3 -left-3 w-14 h-14 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center shadow-lg shadow-primary/20`}>
                      <span className="text-xl font-bold text-white">{step.number}</span>
                    </div>

                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${step.color} mb-4 mt-2`}>
                      <step.icon className="w-6 h-6 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl lg:text-2xl font-bold mb-3">{step.title}</h3>
                    <p className="text-text-secondary leading-relaxed text-sm lg:text-base">{step.description}</p>

                    {/* Features List */}
                    <div className="mt-4 space-y-2">
                      {index === 0 && (
                        <>
                          <div className="flex items-center gap-2 text-sm text-text-secondary">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            <span>Готовые шаблоны</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-text-secondary">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            <span>AI-генерация форм</span>
                          </div>
                        </>
                      )}
                      {index === 1 && (
                        <>
                          <div className="flex items-center gap-2 text-sm text-text-secondary">
                            <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                            <span>Условная логика</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-text-secondary">
                            <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                            <span>Интеграции с CRM</span>
                          </div>
                        </>
                      )}
                      {index === 2 && (
                        <>
                          <div className="flex items-center gap-2 text-sm text-text-secondary">
                            <div className="w-1.5 h-1.5 rounded-full bg-success" />
                            <span>Реальная аналитика</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-text-secondary">
                            <div className="w-1.5 h-1.5 rounded-full bg-success" />
                            <span>Уведомления в Telegram</span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Visual Side */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.2, duration: 0.6 }}
                    className="relative"
                  >
                    {index === 0 && <AIScreenshot variant="form" />}
                    {index === 1 && <AIScreenshot variant="chat" />}
                    {index === 2 && <AIScreenshot variant="analytics" />}
                    
                    {/* Glow effect */}
                    <div className={`absolute inset-0 ${index === 0 ? 'bg-primary' : index === 1 ? 'bg-secondary' : 'bg-success'} opacity-20 blur-3xl -z-10`} />
                  </motion.div>
                </div>
              </div>

              {/* Arrow Connector */}
              {index < steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.2 }}
                  className="flex justify-center my-6"
                >
                  <div className="flex flex-col items-center">
                    <ArrowRight className={`w-6 h-6 ${step.highlight} rotate-90 animate-bounce`} />
                    <div className={`w-0.5 h-8 bg-gradient-to-b ${step.color} opacity-50`} />
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <button
            onClick={() => {
              const element = document.getElementById('waitlist')
              if (element) element.scrollIntoView({ behavior: 'smooth' })
            }}
            className="group bg-gradient-primary text-white px-8 py-4 rounded-xl font-semibold text-base lg:text-lg transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/25 hover:shadow-primary/40 inline-flex items-center gap-2"
          >
            Попробовать бесплатно
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
