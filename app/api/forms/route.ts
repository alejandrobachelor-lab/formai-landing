import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// Generate random 8-character ID (letters + numbers)
function generateFormId(): string {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let id = '';
  for (let i = 0; i < 8; i++) {
    id += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return id;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, questions, telegramChatId } = body;

    // Validate required fields
    if (!title || !questions) {
      return NextResponse.json(
        { error: 'Title and questions are required' },
        { status: 400 }
      );
    }

    // Parse questions from string (split by newlines)
    const questionArray = questions
      .split('\n')
      .map((q: string) => q.trim())
      .filter((q: string) => q.length > 0);

    if (questionArray.length === 0) {
      return NextResponse.json(
        { error: 'At least one question is required' },
        { status: 400 }
      );
    }

    // Generate unique form ID
    let formId = generateFormId();
    
    // Ensure ID is unique (retry if collision)
    let attempts = 0;
    while (attempts < 10) {
      try {
        const existing = await prisma.form.findUnique({
          where: { id: formId }
        });
        
        if (!existing) break;
        
        formId = generateFormId();
        attempts++;
      } catch (dbError) {
        console.error('Database connection error during ID check:', dbError);
        return NextResponse.json(
          { error: 'Database connection failed. Please check your Supabase connection settings and ensure the database is running.' },
          { status: 503 }
        );
      }
    }

    // Create form in database
    const form = await prisma.form.create({
      data: {
        id: formId,
        userId: 1, // Temporary, without authorization
        title,
        questions: questionArray,
        telegramChatId: telegramChatId || null,
      },
    });

    return NextResponse.json({
      id: form.id,
      title: form.title,
      createdAt: form.createdAt,
    });
  } catch (error) {
    console.error('Error creating form:', error);
    
    // Check if it's a database connection error
    if (error && typeof error === 'object' && 'code' in error && error.code === 'P1001') {
      return NextResponse.json(
        { error: 'Cannot connect to database. Please verify your Supabase connection settings in .env file.' },
        { status: 503 }
      );
    }
    
    return NextResponse.json(
      { error: 'Failed to create form' },
      { status: 500 }
    );
  }
}
