import '@/app/globals.css';
import AntdStyledComponentsRegistry from '@/lib/antd-registry';
import React from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { Props } from '@/typing/Layout';
import { notFound } from 'next/navigation';
import en from '@/i18n/en.json';
import zh from '@/i18n/zh.json';

export const metadata: { title: string, description: string } = {
  title: 'React Next Admin',
  description: '',
};

export default function EmptyLayout({ children, params: { locale } }: Props) {
  const messages = locale === 'en' ? en : zh;
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <AntdStyledComponentsRegistry>
        {children}
      </AntdStyledComponentsRegistry>
    </NextIntlClientProvider>
  );
}
