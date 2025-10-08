import '../styles/globals.css';
import type { Metadata } from 'next';
import { PropsWithChildren } from 'react';

export const metadata: Metadata = {
  title: 'PermitAssist Pro',
  description:
    'PermitAssist Pro delivers guided compliance workflows for SMBs operating across Canadian municipalities.',
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className="min-h-full">
      <body className="min-h-screen bg-midnight text-slate-100">{children}</body>
    </html>
  );
}
