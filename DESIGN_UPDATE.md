# Обновление дизайна в стиле Gett

## ✅ Что было сделано

Дизайн сайта был полностью переработан в стиле Gett:

### 1. Цветовая схема
- ✅ Переход от темной темы к светлой
- ✅ Основной цвет: оранжевый (#FF6B00) вместо фиолетового
- ✅ Вторичный цвет: темно-серый (#1A1A1A)
- ✅ Фон: белый (#FFFFFF) и светло-серый (#F5F5F5)

### 2. Обновленные компоненты
- ✅ [`tailwind.config.ts`](tailwind.config.ts:1) - новая цветовая палитра
- ✅ [`app/globals.css`](app/globals.css:1) - светлая тема, убраны неоновые эффекты
- ✅ [`components/Header.tsx`](components/Header.tsx:1) - светлый хедер
- ✅ [`components/sections/Hero.tsx`](components/sections/Hero.tsx:1) - hero с фоновым изображением
- ✅ [`components/sections/Features.tsx`](components/sections/Features.tsx:1) - светлые карточки

## 📸 Добавление hero-изображения

### Шаг 1: Сохраните изображение
Сохраните ваше изображение офиса с названием `hero-bg.jpg` в папку:
```
public/images/hero-bg.jpg
```

### Шаг 2: Проверьте структуру
Убедитесь, что структура папок выглядит так:
```
formai-landing/
├── public/
│   └── images/
│       └── hero-bg.jpg  ← Ваше изображение здесь
├── components/
├── app/
└── ...
```

### Шаг 3: Запустите проект
```bash
npm run dev
```

Откройте http://localhost:3000 и увидите ваше изображение на главной странице!

## 🎨 Основные изменения стиля

### До (темная тема):
- Темный фон с градиентами
- Неоновые эффекты и свечение
- Фиолетово-голубая палитра
- Стеклянные эффекты (glass-effect)

### После (светлая тема в стиле Gett):
- Белый/светло-серый фон
- Чистый минималистичный дизайн
- Оранжево-серая палитра
- Тени и карточки вместо стеклянных эффектов
- Hero с фоновым изображением и оверлеем

## 🔧 Дополнительная настройка

### Изменить основной цвет
Отредактируйте [`tailwind.config.ts`](tailwind.config.ts:12):
```typescript
primary: {
  DEFAULT: "#FF6B00",  // Ваш цвет
  light: "#FF8533",
  dark: "#E65100",
}
```

### Настроить оверлей на hero-изображении
Отредактируйте [`app/globals.css`](app/globals.css:66):
```css
.hero-overlay {
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.3) 100%);
  /* Измените прозрачность (0.7 и 0.3) для настройки затемнения */
}
```

## 📝 Следующие шаги

Рекомендуется также обновить:
- [ ] [`components/sections/Problem.tsx`](components/sections/Problem.tsx:1)
- [ ] [`components/sections/HowItWorks.tsx`](components/sections/HowItWorks.tsx:1)
- [ ] [`components/sections/Pricing.tsx`](components/sections/Pricing.tsx:1)
- [ ] [`components/sections/Waitlist.tsx`](components/sections/Waitlist.tsx:1)
- [ ] [`components/sections/FAQ.tsx`](components/sections/FAQ.tsx:1)
- [ ] [`components/sections/Footer.tsx`](components/sections/Footer.tsx:1)

Эти секции используют старые темные стили и должны быть обновлены для полной консистентности.

## 🚀 Готово!

Основные компоненты обновлены. Сайт теперь имеет светлый, профессиональный дизайн в стиле Gett с вашим корпоративным изображением на главной странице.
