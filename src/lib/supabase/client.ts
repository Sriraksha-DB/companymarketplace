import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL='https://fgiptqqhrvaxllhranzz.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZnaXB0cXFocnZheGxsaHJhbnp6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAyOTYxMTYsImV4cCI6MjA1NTg3MjExNn0.Qs7YHP0wJgNOOmpowUh8Guk3_Po_x6kndudzAaEscMM'

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Supabase URL or key is missing. Please check your environment variables.');
}

export const supabase = createClient(supabaseUrl, supabaseKey);


