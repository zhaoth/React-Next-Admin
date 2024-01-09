import '@/app/globals.css';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import React from 'react';

export const metadata: { title: string, description: string } = {
  title: 'React Next Admin',
  description: '',
};

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body>
    <AntdRegistry>
      {children}
    </AntdRegistry>
    </body>
    </html>
  );
}
