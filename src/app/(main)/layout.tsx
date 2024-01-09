'use client';

import '@/app/globals.css';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ConfigProvider } from 'antd';
import { useSelectedLayoutSegments } from 'next/navigation';

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  const segments = useSelectedLayoutSegments();
  console.log(segments);
  return (
    <html lang="en">
    <body>
    <AntdRegistry>
      <ConfigProvider>
        <Header></Header>
          {children}
        <Footer></Footer>
      </ConfigProvider>
    </AntdRegistry>
    </body>
    </html>
  );
}
