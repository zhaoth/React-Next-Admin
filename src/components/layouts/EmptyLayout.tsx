import '@/app/globals.css';
import AntdStyledComponentsRegistry from '@/lib/antd-registry';
import React from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { Props } from '@/typing/Layout';
import en from '@/i18n/en';
import zh from '@/i18n/zh';
import { timeZone } from '@/static/locales';
import { MockComponent } from '@/components';

export const metadata: { title: string, description: string } = {
  title: 'React Next Admin',
  description: '',
};

export default function EmptyLayout({ children, params: { locale } }: Props) {
  const messages = locale === 'en' ? en : zh;
  return (
    <NextIntlClientProvider locale={locale} messages={messages} timeZone={timeZone}>
      <AntdStyledComponentsRegistry>
        <MockComponent></MockComponent>
        {children}
      </AntdStyledComponentsRegistry>
    </NextIntlClientProvider>
  );
}
