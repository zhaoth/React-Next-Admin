import dynamic from 'next/dynamic';
import React from 'react';
import { Props } from '@/types/Layout';

const NoSSR = (props: Props) => <React.Fragment>{props.children}</React.Fragment>;

export default dynamic(() => Promise.resolve(NoSSR), {
  ssr: false,
});
