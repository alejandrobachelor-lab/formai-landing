import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Начинаем заполнение базы данных...');

  // Создаём пользователя
  const user = await prisma.user.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      email: 'test@formai.ru',
      name: 'Тест',
    },
  });

  console.log('Пользователь создан:', user);

  // Создаём форму
  const form = await prisma.form.upsert({
    where: { id: 'test-form' },
    update: {},
    create: {
      id: 'test-form',
      userId: 1,
      title: 'Заявка на консультацию',
      questions: [
        'Как вас зовут?',
        'Название вашей компании?',
        'Что хотите автоматизировать?',
        'Как с вами связаться?',
      ],
      isActive: true,
    },
  });

  console.log('Форма создана:', form);
  console.log('База данных успешно заполнена!');
}

main()
  .catch((e) => {
    console.error('Ошибка при заполнении базы данных:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
