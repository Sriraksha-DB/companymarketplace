'use client'; // This marks the file as a Client Component

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import { Database } from '@/types/supabase';

export default function SupabaseProvider({
  children,
  initialSession,
}: {
  children: React.ReactNode;
  initialSession: any; // Pass the session from the server
}) {
  const supabaseClient = createClientComponentClient<Database>();

  return (
    <SessionContextProvider supabaseClient={supabaseClient} initialSession={initialSession}>
      {children}
    </SessionContextProvider>
  );
}