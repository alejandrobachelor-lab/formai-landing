'use client'

import { motion } from 'framer-motion'
import { PenTool, Settings, Rocket } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      icon: PenTool,
      title: 'Создай форму',
      description: 'Выбери шаблон или начни с нуля. Используй drag & drop конструктор или попроси AI сгенерировать форму за тебя.',
      color: 'from-primary to-primary/50',
    },
    {
      number: '02',
      icon: Settings,
      title: 'Настрой и опубликуй',
      description: 'Добавь брендинг, настрой условную логику, подключи интеграции. Получи ссылку или embed-код для сайта.',
      color: 'from-secondary to-secondary/50',
    },
    {
      number: '03',
      icon: Rocket,
      title: 'Собирай заявки',
      description: 'Смотри аналитику в реальном времени, получай данные в CRM и Telegram. Оптимизируй конверсию на основе данных.',
      color: 'from-success to-success/50',
    },
  ]

  return (
    <section id="how-it-works" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-section font-semibold mb-4">
            Как это работает
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Три простых шага до первой заявки
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative"
            >
              {/* Connector Line (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
              )}

              <div className="bg-bg-card border border-primary/10 rounded-2xl p-8 hover:border-primary/30 transition-all relative z-10">
                {/* Number Badge */}
                <div className={`absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center shadow-lg`}>
                  <span className="text-2xl font-bold text-white">{step.number}</span>
                </div>

                {/* Icon */}
                <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 mt-4">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-text-secondary leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <button
            onClick={() => {
              const element = document.getElementById('waitlist')
              if (element) element.scrollIntoView({ behavior: 'smooth' })
            }}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/25"
          >
            Попробовать бесплатно
          </button>
        </motion.div>
      </div>
    </section>
  )
}
