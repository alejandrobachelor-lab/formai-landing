import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Telegram webhook payload structure
    const message = body.message;
    
    if (!message) {
      return NextResponse.json({ ok: true });
    }

    const chatId = message.chat.id;
    const text = message.text;

    // Handle /start command
    if (text === '/start') {
      const botToken = process.env.TELEGRAM_BOT_TOKEN;
      
      if (!botToken) {
        console.error('TELEGRAM_BOT_TOKEN not configured');
        return NextResponse.json(
          { error: 'Telegram bot not configured' },
          { status: 500 }
        );
      }

      const responseText = `Ваш Chat ID: ${chatId}\n\n📋 Скопируйте это число и вставьте в поле Telegram Chat ID при создании формы в FormAI`;

      // Send response to user
      const telegramResponse = await fetch(
        `https://api.telegram.org/bot${botToken}/sendMessage`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            chat_id: chatId,
            text: responseText,
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

      return NextResponse.json({ ok: true });
    }

    // For other messages, just acknowledge
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Error processing Telegram webhook:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
