import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types for our database tables
export type Contact = {
  id: string
  created_at: string
  name: string
  email: string
  company: string
  message: string
  status: 'new' | 'in_progress' | 'completed'
}

export type Project = {
  id: string
  created_at: string
  title: string
  description: string
  image_url: string
  category: string
  technologies: string[]
  client: string
  completion_date: string
}

export type Testimonial = {
  id: string
  created_at: string
  name: string
  role: string
  company: string
  image_url: string
  quote: string
  rating: number
} 