'use client'

import { motion } from 'framer-motion'
import { DollarSign, Frown, Code } from 'lucide-react'

export default function Problem() {
  const problems = [
    {
      icon: DollarSign,
      title: 'Typeform и Tally — дорого, медленно, не для России',
      description: 'Зарубежные сервисы стоят от $25/мес, работают медленно из России, нет интеграций с российскими CRM и платёжными системами.',
      color: 'text-red-400',
      bgColor: 'bg-red-400/10',
    },
    {
      icon: Frown,
      title: 'Google Forms — примитивно, без AI, без интеграций',
      description: 'Бесплатно, но выглядит устаревшим, нет условной логики, нет AI-диалогов, нет нормальной аналитики и интеграций.',
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-400/10',
    },
    {
      icon: Code,
      title: 'Самописные решения — месяцы разработки и дорого',
      description: 'Разработка своей формы с нуля занимает месяцы, стоит сотни тысяч рублей, требует постоянной поддержки.',
      color: 'text-orange-400',
      bgColor: 'bg-orange-400/10',
    },
  ]

  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-section font-semibold mb-4">
            Почему обычные формы{' '}
            <span className="text-red-400">больше не работают</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Существующие решения не подходят для российского бизнеса
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-bg-card border border-primary/10 rounded-2xl p-8 hover:border-primary/30 transition-all hover:scale-105"
            >
              <div className={`${problem.bgColor} ${problem.color} w-14 h-14 rounded-xl flex items-center justify-center mb-6`}>
                <problem.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{problem.title}</h3>
              <p className="text-text-secondary leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
