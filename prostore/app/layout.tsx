import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import { APP_NAME } from '@/lib/constants';
import { APP_DESCRIPTION } from '@/lib/constants';
import { SERVER_URL } from '@/lib/constants';
import { ThemeProvider } from 'next-themes';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: APP_NAME,
  description: APP_DESCRIPTION,
  metadataBase: new URL(SERVER_URL),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <ThemeProvider
          attribute={'class'}
          defaultTheme={'light'}
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

