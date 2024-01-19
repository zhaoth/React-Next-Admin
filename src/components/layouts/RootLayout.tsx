import '@/app/globals.css';
import AntdStyledComponentsRegistry from '@/lib/antd-registry';
import React from 'react';
import { RootProps } from '@/typing/Layout';

export const metadata: { title: string, description: string } = {
  title: 'React Next Admin',
  description: '',
};

export default async function RootLayout({ children }: RootProps) {
  return (
    <html lang="en">
    <body>
    <AntdStyledComponentsRegistry>
      {children}
    </AntdStyledComponentsRegistry>
    </body>
    </html>
  );
}
