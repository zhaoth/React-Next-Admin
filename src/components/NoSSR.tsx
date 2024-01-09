import dynamic from 'next/dynamic';
import React from 'react';

// @ts-ignore
const NoSSR = props => <React.Fragment>{props.children}</React.Fragment>;

export default dynamic(() => Promise.resolve(NoSSR), {
  ssr: false,
});
