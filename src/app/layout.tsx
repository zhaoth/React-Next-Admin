import '@/app/globals.css';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import AntdStyledComponentsRegistry from '@/lib/antd-registry'
import React from 'react';

export const metadata: { title: string, description: string } = {
  title: 'React Next Admin',
  description: '',
};

export default function RootLayout({ children, }: { children: React.ReactNode }) {
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
