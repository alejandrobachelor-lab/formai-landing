'use client'

import { motion } from 'framer-motion'
import { DollarSign, Frown, Code, X, Check } from 'lucide-react'

export default function Problem() {
  const problems = [
    {
      icon: DollarSign,
      title: 'Typeform и Tally',
      subtitle: 'дорого, медленно, не для России',
      description: 'Зарубежные сервисы стоят от $25/мес, работают медленно из России, нет интеграций с российскими CRM и платёжными системами.',
      color: 'text-error',
      bgColor: 'bg-error/10',
      borderColor: 'border-error/20',
    },
    {
      icon: Frown,
      title: 'Google Forms',
      subtitle: 'примитивно, без AI, без интеграций',
      description: 'Бесплатно, но выглядит устаревшим, нет условной логики, нет AI-диалогов, нет нормальной аналитики и интеграций.',
      color: 'text-warning',
      bgColor: 'bg-warning/10',
      borderColor: 'border-warning/20',
    },
    {
      icon: Code,
      title: 'Самописные решения',
      subtitle: 'месяцы разработки и дорого',
      description: 'Разработка своей формы с нуля занимает месяцы, стоит сотни тысяч рублей, требует постоянной поддержки.',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
      borderColor: 'border-secondary/20',
    },
  ]

  const solution = [
    'Российский сервис с быстрой работой',
    'AI-диалоги для роста конверсии',
    'Интеграции с AmoCRM, Битрикс24, ЮKassa',
    'От 0₽/мес — бесплатный план навсегда',
  ]

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-text-primary">
            Почему обычные формы{' '}
            <span className="text-error">больше не работают</span>
          </h2>
          <p className="text-text-secondary text-lg lg:text-xl max-w-2xl mx-auto">
            Существующие решения не подходят для российского бизнеса
          </p>
        </motion.div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`bg-white rounded-xl p-6 border-2 ${problem.borderColor} hover:scale-[1.02] transition-all group relative shadow-md`}
            >
              {/* X Mark in corner */}
              <div className={`absolute top-4 right-4 w-7 h-7 rounded-full ${problem.bgColor} flex items-center justify-center`}>
                <X className={`w-4 h-4 ${problem.color}`} />
              </div>

              <div className={`${problem.bgColor} w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <problem.icon className={`w-7 h-7 ${problem.color}`} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-text-primary">{problem.title}</h3>
              <p className={`text-sm ${problem.color} mb-3 font-semibold`}>{problem.subtitle}</p>
              <p className="text-text-secondary text-base leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Solution Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-success/5 to-primary/5 rounded-2xl p-8 lg:p-10 border-2 border-success/20 shadow-lg">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-white rounded-full px-5 py-2 mb-4 border border-success/30 shadow-sm">
                <Check className="w-5 h-5 text-success" />
                <span className="text-sm font-semibold text-success">Решение</span>
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold mb-4 text-text-primary">
                FormAI — современная альтернатива{' '}
                <span className="text-primary">для России</span>
              </h3>
              <p className="text-text-secondary text-lg">
                Всё, что нужно для эффективного сбора заявок
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {solution.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="flex items-start gap-3 bg-white rounded-lg p-4 shadow-sm"
                >
                  <div className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-success" />
                  </div>
                  <p className="text-text-primary text-base font-medium leading-relaxed">{item}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
              className="text-center mt-8"
            >
              <button
                onClick={() => {
                  const element = document.getElementById('waitlist')
                  if (element) element.scrollIntoView({ behavior: 'smooth' })
                }}
                className="bg-primary text-white px-8 py-3 rounded-lg font-semibold text-lg transition-all hover:bg-primary-dark shadow-lg hover:shadow-xl"
              >
                Попробовать бесплатно
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
