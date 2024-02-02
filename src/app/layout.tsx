import React from 'react';
import { Props } from '@/types/Layout';

export default function Layout({ children }: Props) {
  return (
    <html lang="en">
    <body className="bg-gray-100">
    {children}
    </body>
    </html>
  );
}
