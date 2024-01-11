import '@/app/globals.css';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import AntdStyledComponentsRegistry from '@/lib/antd-registry';

export default function MainLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
    <>
      <AntdStyledComponentsRegistry>
        <Header></Header>
        {children}
        <Footer></Footer>
      </AntdStyledComponentsRegistry>
    </>
  );
}
