'use client'

import { motion } from 'framer-motion'
import { Target, GraduationCap, Users, Briefcase, Store } from 'lucide-react'

export default function UseCases() {
  const useCases = [
    {
      icon: Target,
      title: 'Маркетологи',
      description: 'Создавай квизы и лид-формы для рекламных кампаний. Повышай конверсию с помощью AI-диалогов.',
      examples: ['Квизы для таргета', 'Лид-формы', 'Опросы аудитории'],
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: GraduationCap,
      title: 'Онлайн-школы',
      description: 'Собирай заявки на курсы, квалифицируй учеников, автоматизируй запись на вебинары.',
      examples: ['Анкеты записи', 'Квалификация', 'Обратная связь'],
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
    },
    {
      icon: Users,
      title: 'HR-отделы',
      description: 'Автоматизируй подбор персонала с помощью умных анкет и AI-собеседований.',
      examples: ['Анкеты кандидатов', 'Онбординг', 'Опросы сотрудников'],
      color: 'text-success',
      bgColor: 'bg-success/10',
    },
    {
      icon: Briefcase,
      title: 'Агентства',
      description: 'Создавай white-label формы для клиентов. Подключай их CRM и получай комиссию.',
      examples: ['White-label решения', 'Формы для клиентов', 'Интеграции'],
      color: 'text-purple-400',
      bgColor: 'bg-purple-400/10',
    },
    {
      icon: Store,
      title: 'Малый бизнес',
      description: 'Принимай заявки, собирай обратную связь, проводи опросы клиентов.',
      examples: ['Формы заявок', 'Обратная связь', 'Опросы клиентов'],
      color: 'text-orange-400',
      bgColor: 'bg-orange-400/10',
    },
  ]

  return (
    <section className="py-20 lg:py-32 bg-bg-card/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-section font-semibold mb-4">
            Кому подойдёт
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            FormAI решает задачи разных сфер бизнеса
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-bg-dark border border-primary/10 rounded-2xl p-8 hover:border-primary/30 transition-all hover:scale-105"
            >
              <div className={`${useCase.bgColor} ${useCase.color} w-14 h-14 rounded-xl flex items-center justify-center mb-6`}>
                <useCase.icon className="w-7 h-7" />
              </div>
              
              <h3 className="text-xl font-bold mb-3">{useCase.title}</h3>
              <p className="text-text-secondary mb-6 leading-relaxed">{useCase.description}</p>
              
              <div className="space-y-2">
                {useCase.examples.map((example, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className={`w-1.5 h-1.5 rounded-full ${useCase.bgColor}`} />
                    <span className="text-sm text-text-secondary">{example}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
