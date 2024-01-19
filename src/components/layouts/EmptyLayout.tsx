
import '@/app/globals.css';
import AntdStyledComponentsRegistry from '@/lib/antd-registry';
import React from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { Props } from '@/typing/Layout';
import { notFound } from 'next/navigation';

export const metadata: { title: string, description: string } = {
  title: 'React Next Admin',
  description: '',
};
//function to get the translations
async function getMessages(locale: string) {
  try {
    return (import(`@/i18n/${locale}.json`))
  } catch (error) {
    notFound()
  }
}

export default async function EmptyLayout({ children, params: { locale } }: Props) {
  const messages = await getMessages(locale)
  return (
      <NextIntlClientProvider  locale={locale} messages={messages}>
        <AntdStyledComponentsRegistry>
        {children}
        </AntdStyledComponentsRegistry>
      </NextIntlClientProvider>
  );
}
