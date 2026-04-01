import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: NextRequest) {
  try {
    const { formId, answers } = await request.json();

    if (!formId || !answers || !Array.isArray(answers)) {
      return NextResponse.json(
        { error: 'Invalid request data' },
        { status: 400 }
      );
    }

    // Verify form exists
    const form = await prisma.form.findUnique({
      where: { id: formId },
    });

    if (!form) {
      return NextResponse.json(
        { error: 'Form not found' },
        { status: 404 }
      );
    }

    // Create response
    const response = await prisma.response.create({
      data: {
        formId,
        answers,
      },
    });

    // Send Telegram notification (non-blocking)
    if (process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_CHAT_ID) {
      try {
        const questions = form.questions as string[];
        
        await fetch(`${request.nextUrl.origin}/api/telegram`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            formTitle: form.title,
            answers,
            questions,
            chatId: form.telegramChatId || process.env.TELEGRAM_CHAT_ID,
          }),
        });
      } catch (telegramError) {
        // Log error but don't fail the response creation
        console.error('Failed to send Telegram notification:', telegramError);
      }
    }

    return NextResponse.json({ success: true, response });
  } catch (error) {
    console.error('Error creating response:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
