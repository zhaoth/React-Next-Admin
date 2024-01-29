import dynamic from 'next/dynamic';
import React from 'react';
import { RootProps } from '@/typing/Layout';

const NoSSR = (props: RootProps) => <React.Fragment>{props.children}</React.Fragment>;

export default dynamic(() => Promise.resolve(NoSSR), {
  ssr: false,
});
