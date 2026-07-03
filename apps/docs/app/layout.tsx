import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Design System — Docs',
  description: 'Component documentation and playground',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
