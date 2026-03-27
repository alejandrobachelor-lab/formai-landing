'use client'

import { motion } from 'framer-motion'
import { 
  MousePointerClick, 
  GitBranch, 
  Palette, 
  Grid3x3, 
  MessageSquare, 
  Zap, 
  Brain,
  TrendingUp,
  Send,
  Database,
  CreditCard,
  BarChart3,
  Eye,
  Globe
} from 'lucide-react'
import AIScreenshot from '../AIScreenshot'

export default function Features() {
  const mainFeatures = [
    {
      title: 'Статические формы',
      description: 'Классический конструктор для быстрого создания форм',
      features: [
        { icon: MousePointerClick, text: 'Drag & drop конструктор' },
        { icon: GitBranch, text: 'Условная логика' },
        { icon: Palette, text: 'Кастомный брендинг' },
        { icon: Grid3x3, text: 'Все типы полей' },
      ],
      screenshot: 'form',
    },
    {
      title: 'AI-диалоговые формы',
      description: 'Формы нового поколения с искусственным интеллектом',
      features: [
        { icon: MessageSquare, text: 'Форма общается как живой человек' },
        { icon: Brain, text: 'Адаптирует вопросы под ответы' },
        { icon: Zap, text: 'Работает на Claude AI' },
        { icon: TrendingUp, text: 'Повышает конверсию до 3x' },
      ],
      screenshot: 'chat',
    },
  ]

  const additionalFeatures = [
    {
      icon: Send,
      title: 'Интеграция с Telegram',
      description: 'Получай уведомления о новых заявках прямо в Telegram',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: Database,
      title: 'Подключение к AmoCRM и Битрикс24',
      description: 'Автоматическая отправка лидов в вашу CRM-систему',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
    },
    {
      icon: CreditCard,
      title: 'Оплата через ЮKassa',
      description: 'Принимай платежи прямо в форме через российский сервис',
      color: 'text-success',
      bgColor: 'bg-success/10',
    },
    {
      icon: BarChart3,
      title: 'Аналитика конверсий',
      description: 'Отслеживай эффективность каждой формы в реальном времени',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: Eye,
      title: 'White-label (без водяных знаков)',
      description: 'Используй формы под своим брендом даже на бесплатном плане',
      color: 'text-warning',
      bgColor: 'bg-warning/10',
    },
    {
      icon: Globe,
      title: 'Полностью на русском',
      description: 'Интерфейс, поддержка и документация на русском языке',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
    },
  ]

  return (
    <section id="features" className="py-16 lg:py-24 bg-bg-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-text-primary">
            Один инструмент —{' '}
            <span className="text-primary">два режима</span>
          </h2>
          <p className="text-text-secondary text-lg lg:text-xl max-w-2xl mx-auto">
            Выбирай подходящий формат для каждой задачи
          </p>
        </motion.div>

        {/* Main Features with Screenshots */}
        <div className="space-y-16 mb-20">
          {mainFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-lg">
                  <div className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 mb-4">
                    <div className={`w-2 h-2 rounded-full ${index === 0 ? 'bg-primary' : 'bg-secondary'} animate-pulse`} />
                    <span className="text-sm font-semibold text-text-secondary uppercase tracking-wider">
                      {index === 0 ? 'Классика' : 'Инновация'}
                    </span>
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold mb-4 text-text-primary">{feature.title}</h3>
                  <p className="text-text-secondary mb-8 text-lg">{feature.description}</p>
                  <div className="space-y-4">
                    {feature.features.map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        className="flex items-start gap-3 group"
                      >
                        <div className={`${index === 0 ? 'bg-primary/10' : 'bg-secondary/10'} rounded-lg p-2.5 flex-shrink-0 group-hover:scale-110 transition-transform`}>
                          <item.icon className={`w-5 h-5 ${index === 0 ? 'text-primary' : 'text-secondary'}`} />
                        </div>
                        <p className="text-text-primary text-base pt-2 leading-relaxed">{item.text}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="relative"
                >
                  <AIScreenshot variant={feature.screenshot as 'chat' | 'form'} />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Features - Compact Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-3xl lg:text-4xl font-bold text-center mb-10 text-text-primary">
            Всё необходимое{' '}
            <span className="text-primary">из коробки</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all hover:scale-[1.02] group"
              >
                <div className={`${feature.bgColor} w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-text-primary">{feature.title}</h4>
                <p className="text-text-secondary text-base leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
