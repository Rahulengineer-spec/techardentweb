import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, company, message, subject } = body // Added subject

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Missing required fields: name and email' },
        { status: 400 }
      )
    }

    // Insert into Supabase
    const { error } = await supabase
      .from('contacts')
      .insert([
        {
          name,
          email,
          company,
          message,
          subject: subject || 'General Inquiry', // Add subject, default if not provided
          status: 'new'
        }
      ])

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { error: 'Failed to submit contact form' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: 'Contact form submitted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Server error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}