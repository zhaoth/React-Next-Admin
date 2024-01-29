'use client';
import Link from 'next/link';
import { staticRouter } from '@/static/staticRouter';
import { Result } from 'antd';

export default function NotAuthorized() {
  return (
    <Result
      status="403"
      title="403"
      subTitle="Sorry, you are not authorized to access this page."
      extra={<Link href={`${staticRouter.root}`}>Return Home</Link>}
    />
  );
}
