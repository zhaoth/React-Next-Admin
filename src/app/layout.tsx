import React from 'react';
import { Props } from '@/typing/Layout';

export default function Layout({ children, params: { locale } }: Props) {
  return (
    <html lang="en">
    <body className="bg-gray-100">
    {children}
    </body>
    </html>
  );
}
