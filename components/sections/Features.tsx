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
      gradient: 'from-primary/20 to-primary/5',
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
      gradient: 'from-secondary/20 to-secondary/5',
    },
  ]

  const additionalFeatures = [
    {
      icon: Send,
      title: 'Интеграция с Telegram',
      description: 'Получай уведомления о новых заявках прямо в Telegram',
    },
    {
      icon: Database,
      title: 'Подключение к AmoCRM и Битрикс24',
      description: 'Автоматическая отправка лидов в вашу CRM-систему',
    },
    {
      icon: CreditCard,
      title: 'Оплата через ЮKassa',
      description: 'Принимай платежи прямо в форме через российский сервис',
    },
    {
      icon: BarChart3,
      title: 'Аналитика конверсий',
      description: 'Отслеживай эффективность каждой формы в реальном времени',
    },
    {
      icon: Eye,
      title: 'White-label (без водяных знаков)',
      description: 'Используй формы под своим брендом даже на бесплатном плане',
    },
    {
      icon: Globe,
      title: 'Полностью на русском',
      description: 'Интерфейс, поддержка и документация на русском языке',
    },
  ]

  return (
    <section id="features" className="py-20 lg:py-32 bg-bg-card/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-section font-semibold mb-4">
            Один инструмент —{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              два режима
            </span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Выбирай подходящий формат для каждой задачи
          </p>
        </motion.div>

        {/* Main Features - Two Columns */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {mainFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className={`bg-gradient-to-br ${feature.gradient} border border-primary/20 rounded-2xl p-8`}
            >
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-text-secondary mb-6">{feature.description}</p>
              <div className="space-y-4">
                {feature.features.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="bg-primary/20 rounded-lg p-2 flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-text-primary pt-1">{item.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Features - Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {additionalFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-bg-dark border border-primary/10 rounded-xl p-6 hover:border-primary/30 transition-all hover:scale-105"
            >
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
              <p className="text-text-secondary text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
