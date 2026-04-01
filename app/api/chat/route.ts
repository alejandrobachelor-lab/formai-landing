import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  baseURL: 'https://openrouter.ai/api/v1',
  apiKey: process.env.OPENROUTER_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const { messages, questions, currentIndex, userMessage } = await request.json();

    // Validate input
    if (!questions || !Array.isArray(questions) || questions.length === 0) {
      return NextResponse.json(
        { error: 'Invalid questions array' },
        { status: 400 }
      );
    }

    if (typeof currentIndex !== 'number' || currentIndex < 0) {
      return NextResponse.json(
        { error: 'Invalid currentIndex' },
        { status: 400 }
      );
    }

    // Build system prompt
    const systemPrompt = `Ты вежливый AI-ассистент который помогает заполнить заявку. Тебе дан список вопросов которые нужно задать пользователю по порядку. Вопросы: ${JSON.stringify(questions)}. Ты уже задал вопросы с 0 по ${currentIndex - 1} и получил на них ответы. Сейчас пользователь ответил на вопрос номер ${currentIndex}. Твоя задача: 1) если ответ понятный и полный — задай следующий вопрос из списка естественным образом, 2) если ответ непонятный или слишком короткий — вежливо уточни не переходя к следующему вопросу, 3) когда все вопросы заданы и получены ответы — скажи что-то тёплое и сообщи что заявка принята. Общайся дружелюбно, естественно, по-русски. Не нумеруй вопросы. Будь кратким.`;

    // Prepare messages for OpenAI
    const chatMessages = [
      { role: 'system', content: systemPrompt },
      ...messages.map((msg: { role: string; content: string }) => ({
        role: msg.role === 'ai' ? 'assistant' : 'user',
        content: msg.content,
      })),
    ];

    // Call OpenRouter API
    const completion = await openai.chat.completions.create({
      model: 'meta-llama/llama-3.2-3b-instruct:free',
      messages: chatMessages as any,
    });

    const aiReply = completion.choices[0]?.message?.content || 'Извините, произошла ошибка.';

    // Determine if answer was acceptable and we should move to next question
    // Simple heuristic: if AI response contains the next question text, increment index
    let nextIndex = currentIndex;
    let isComplete = false;

    // Check if AI is asking the next question
    if (currentIndex < questions.length - 1) {
      const nextQuestion = questions[currentIndex + 1];
      // If AI response seems to be asking next question (contains significant part of it)
      // or if the response is positive/confirmatory, move to next
      if (aiReply.includes(nextQuestion) || 
          aiReply.toLowerCase().includes('спасибо') && aiReply.length < 200) {
        nextIndex = currentIndex + 1;
      }
    } else if (currentIndex === questions.length - 1) {
      // Last question - check if AI is wrapping up
      if (aiReply.toLowerCase().includes('заявка') || 
          aiReply.toLowerCase().includes('принята') ||
          aiReply.toLowerCase().includes('спасибо')) {
        nextIndex = currentIndex + 1;
        isComplete = true;
      }
    }

    return NextResponse.json({
      reply: aiReply,
      nextIndex,
      isComplete,
    });
  } catch (error) {
    console.error('Error in chat API:', error);
    return NextResponse.json(
      { error: 'Failed to process chat request' },
      { status: 500 }
    );
  }
}
