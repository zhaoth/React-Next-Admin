import { ReactNode } from 'react';

export type Props = {
  children: ReactNode
  params: { locale: string }
}
export type RootProps = {
  children: ReactNode
}
export type PageProps = {
  params: { locale: string }
}
