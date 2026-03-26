import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const count = await prisma.waitlistEntry.count()
    
    return NextResponse.json({ count }, { status: 200 })
  } catch (error) {
    console.error('Count error:', error)
    // Return 0 if there's an error (e.g., database not set up yet)
    return NextResponse.json({ count: 0 }, { status: 200 })
  }
}
