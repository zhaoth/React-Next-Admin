import { EmptyLayout } from '@/components';
import React from 'react';
import { Props } from '@/types/Layout';
import { locales } from '@/static/locales';

//function to generate the routes for all the locales
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function Layout({ children, params: { locale } }: Props) {
  return (
    <>
      <EmptyLayout params={{
        locale: locale,
      }}>{children}</EmptyLayout>
    </>
  );
}
