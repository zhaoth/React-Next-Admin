import { RootLayout } from '@/components';
import React from 'react';

export default function Layout({ children, params: { lng } }: {
  children: React.ReactNode,
  params: { lng: string }
}) {
  return (
    <>
      <RootLayout params={{
              lng: lng
          }}>{children}</RootLayout>
    </>
  );
}
