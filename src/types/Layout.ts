import { ReactNode } from 'react';

interface PropsParams {
  locale:string
}

export interface Props  {
  children: ReactNode
  params: Partial<PropsParams>
}

