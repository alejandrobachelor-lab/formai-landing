'use client'

import { Send } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-bg-card border-t border-primary/10 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Tagline */}
          <div className="md:col-span-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-3">
              FormAI
            </div>
            <p className="text-text-secondary text-sm max-w-sm">
              AI-конструктор форм для российского бизнеса. Создавай формы, которые разговаривают.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Документы</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-text-secondary hover:text-text-primary transition-colors text-sm">
                  Политика конфиденциальности
                </a>
              </li>
              <li>
                <a href="#" className="text-text-secondary hover:text-text-primary transition-colors text-sm">
                  Пользовательское соглашение
                </a>
              </li>
              <li>
                <a href="#" className="text-text-secondary hover:text-text-primary transition-colors text-sm">
                  Оферта
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Связь</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-text-secondary hover:text-text-primary transition-colors text-sm flex items-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Telegram-канал
                </a>
              </li>
              <li>
                <a href="mailto:hello@formai.ru" className="text-text-secondary hover:text-text-primary transition-colors text-sm">
                  hello@formai.ru
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-secondary text-sm">
            © {currentYear} FormAI. Все права защищены.
          </p>
          <p className="text-text-secondary text-sm">
            Сделано с ❤️ для российского бизнеса
          </p>
        </div>
      </div>
    </footer>
  )
}
