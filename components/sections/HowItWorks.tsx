'use client'

import { motion } from 'framer-motion'
import { PenTool, Settings, Rocket, CheckCircle } from 'lucide-react'
import Image from 'next/image'

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      icon: PenTool,
      title: 'Создай форму',
      description: 'Выбери шаблон или начни с нуля. Используй drag & drop конструктор или попроси AI сгенерировать форму за тебя.',
      features: [
        'Готовые шаблоны для любых задач',
        'AI-генерация форм за секунды',
        'Drag & drop конструктор'
      ],
      image: '/images/Professionals_in_business_202603271321.webp',
      imageAlt: 'Команда обсуждает создание формы'
    },
    {
      number: '02',
      icon: Settings,
      title: 'Настрой и опубликуй',
      description: 'Добавь брендинг, настрой условную логику, подключи интеграции. Получи ссылку или embed-код для сайта.',
      features: [
        'Кастомизация под ваш бренд',
        'Интеграции с CRM и платежами',
        'Готовый код для встраивания'
      ],
      image: '/images/Woman_typing_on_202603271301.webp',
      imageAlt: 'Настройка и публикация формы'
    },
    {
      number: '03',
      icon: Rocket,
      title: 'Собирай заявки',
      description: 'Смотри аналитику в реальном времени, получай данные в CRM и Telegram. Оптимизируй конверсию на основе данных.',
      features: [
        'Аналитика в реальном времени',
        'Уведомления в Telegram',
        'Автоматическая отправка в CRM'
      ],
      image: '/images/Professionals_discussing_in_202603271842.webp',
      imageAlt: 'Анализ результатов и заявок'
    },
  ]

  return (
    <section id="how-it-works" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <span className="text-sm font-semibold text-primary">Простой процесс</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-text-primary">
            Как это работает
          </h2>
          <p className="text-text-secondary text-lg lg:text-xl max-w-2xl mx-auto">
            Три простых шага до первой заявки
          </p>
        </motion.div>

        {/* Steps with Images */}
        <div className="max-w-6xl mx-auto space-y-20">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative"
            >
              <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Content Side */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative">
                    {/* Number Badge */}
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-2xl mb-6 shadow-lg">
                      <span className="text-2xl font-bold text-white">{step.number}</span>
                    </div>

                    {/* Icon */}
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 mb-4">
                      <step.icon className="w-7 h-7 text-primary" />
                    </div>

                    {/* Content */}
                    <h3 className="text-3xl lg:text-4xl font-bold mb-4 text-text-primary">{step.title}</h3>
                    <p className="text-text-secondary leading-relaxed text-lg mb-6">{step.description}</p>

                    {/* Features List */}
                    <div className="space-y-3">
                      {step.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-text-primary text-base">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Image Side */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="relative rounded-2xl overflow-hidden shadow-2xl"
                  >
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={step.image}
                        alt={step.imageAlt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Connector Line (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute left-1/2 -bottom-10 w-0.5 h-20 bg-gradient-to-b from-primary/50 to-transparent transform -translate-x-1/2" />
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
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
            className="bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:bg-primary-dark shadow-lg hover:shadow-xl"
          >
            Начать бесплатно
          </button>
          <p className="text-text-muted text-sm mt-4">Без кредитной карты • Бесплатный план навсегда</p>
        </motion.div>
      </div>
    </section>
  )
}
