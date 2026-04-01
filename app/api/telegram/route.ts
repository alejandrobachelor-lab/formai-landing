import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { formTitle, answers, questions, chatId } = await request.json();

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    
    if (!botToken) {
      console.error('TELEGRAM_BOT_TOKEN not configured');
      return NextResponse.json(
        { error: 'Telegram bot not configured' },
        { status: 500 }
      );
    }

    // Use chatId from request or fallback to env variable
    const targetChatId = chatId || process.env.TELEGRAM_CHAT_ID;

    if (!targetChatId) {
      console.error('No chat ID provided');
      return NextResponse.json(
        { error: 'Chat ID not configured' },
        { status: 500 }
      );
    }

    // Format message
    let message = `📋 *Новая заявка: ${formTitle}*\n\n`;
    
    if (questions && questions.length === answers.length) {
      questions.forEach((question: string, index: number) => {
        message += `*${question}*\n${answers[index]}\n\n`;
      });
    } else {
      answers.forEach((answer: string, index: number) => {
        message += `${index + 1}. ${answer}\n`;
      });
    }

    message += `\n_Получено: ${new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Moscow' })}_`;

    // Send to Telegram
    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: targetChatId,
          text: message,
          parse_mode: 'Markdown',
        }),
      }
    );

    if (!telegramResponse.ok) {
      const errorData = await telegramResponse.json();
      console.error('Telegram API error:', errorData);
      return NextResponse.json(
        { error: 'Failed to send Telegram message', details: errorData },
        { status: 500 }
      );
    }

    const data = await telegramResponse.json();
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error sending Telegram notification:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
