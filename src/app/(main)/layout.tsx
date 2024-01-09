import '@/app/globals.css';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function MainLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
    <>
      <AntdRegistry>
        <Header></Header>
        {children}
        <Footer></Footer>
      </AntdRegistry>
    </>
  );
}
