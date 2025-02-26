import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { Database } from '@/types/supabase';
import SupabaseProvider from '@/components/providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Marketplace',
  description: 'Buy and sell businesses online',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createServerComponentClient<Database>({ cookies: () => cookies() });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <SupabaseProvider initialSession={session}>
          <main className="min-h-screen flex flex-col">
            <div className="flex-1 container py-8">{children}</div>
            <footer className="border-t">
              <div className="container py-4 text-center text-sm text-muted-foreground">
                © {new Date().getFullYear()} Marketplace. All rights reserved.
              </div>
            </footer>
          </main>
        </SupabaseProvider>
      </body>
    </html>
  );
}