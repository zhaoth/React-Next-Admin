import '@/app/[lng]/globals.css';
import AntdStyledComponentsRegistry from '@/lib/antd-registry';
import React from 'react';
import { dir } from 'i18next'
import { languages } from '@/i18n/settings'

export const metadata: { title: string, description: string } = {
  title: 'React Next Admin',
  description: '',
};

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

// @ts-ignore
export default function RootLayout({ children, params: { lng } }: {
  children: React.ReactNode,
  params: { lng: string }
}) {
  return (
    <html lang={lng}>
    <body>
    <AntdStyledComponentsRegistry>
      {children}
    </AntdStyledComponentsRegistry>
    </body>
    </html>
  );
}
