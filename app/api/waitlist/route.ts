import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, name, useCase } = body

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Пожалуйста, укажите корректный email' },
        { status: 400 }
      )
    }

    // Check if email already exists
    const existingEntry = await prisma.waitlistEntry.findUnique({
      where: { email },
    })

    if (existingEntry) {
      return NextResponse.json(
        { error: 'Этот email уже зарегистрирован в листе ожидания' },
        { status: 400 }
      )
    }

    // Create new waitlist entry
    const entry = await prisma.waitlistEntry.create({
      data: {
        email,
        name: name || null,
        useCase: useCase || null,
      },
    })

    return NextResponse.json(
      { 
        success: true, 
        message: 'Вы успешно добавлены в лист ожидания!',
        id: entry.id 
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Waitlist error:', error)
    return NextResponse.json(
      { error: 'Произошла ошибка при обработке запроса' },
      { status: 500 }
    )
  }
}
