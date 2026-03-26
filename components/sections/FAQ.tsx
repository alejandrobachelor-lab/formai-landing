'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'Когда откроется доступ?',
      answer: 'Планируем открыть бету в Q3 2026. Все из листа ожидания получат доступ первыми и смогут протестировать платформу до официального запуска.',
    },
    {
      question: 'Нужны ли технические знания?',
      answer: 'Нет. Конструктор работает по принципу drag & drop. Если умеешь пользоваться PowerPoint — разберёшься. Для AI-форм достаточно описать, что ты хочешь узнать, и система сама создаст диалог.',
    },
    {
      question: 'Как работает AI-форма?',
      answer: 'Пользователь открывает форму и общается с ней как в чате. AI задаёт вопросы, уточняет ответы, адаптирует диалог под контекст. Работает на базе Claude AI от Anthropic — одной из самых продвинутых языковых моделей.',
    },
    {
      question: 'Будут ли интеграции с российскими сервисами?',
      answer: 'Да. В приоритете: Telegram (уведомления и боты), AmoCRM и Битрикс24 (автоматическая отправка лидов), ЮKassa (приём платежей), GetCourse (интеграция с онлайн-школами), SendPulse (email-рассылки).',
    },
    {
      question: 'Можно будет убрать брендинг?',
      answer: 'Да, даже на бесплатном плане водяного знака нет. Это наш принципиальный выбор — мы хотим, чтобы ваши формы выглядели профессионально с первого дня. Полный white-label (включая удаление упоминаний FormAI) доступен на тарифе Business.',
    },
    {
      question: 'Данные хранятся в России?',
      answer: 'Да. Сервера расположены в российских дата-центрах, полное соответствие 152-ФЗ о персональных данных. Все данные шифруются при передаче и хранении. Мы не передаём данные третьим лицам без вашего согласия.',
    },
  ]

  return (
    <section id="faq" className="py-20 lg:py-32 bg-bg-card/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-section font-semibold mb-4">
            Частые вопросы
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Ответы на самые популярные вопросы о FormAI
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-bg-dark border border-primary/10 rounded-xl overflow-hidden hover:border-primary/30 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-semibold text-lg pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6">
                  <p className="text-text-secondary leading-relaxed">{faq.answer}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Additional Help */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-text-secondary mb-4">Не нашли ответ на свой вопрос?</p>
          <button
            onClick={() => {
              const element = document.getElementById('waitlist')
              if (element) element.scrollIntoView({ behavior: 'smooth' })
            }}
            className="text-primary hover:underline font-medium"
          >
            Напишите нам в форме ожидания
          </button>
        </motion.div>
      </div>
    </section>
  )
}
