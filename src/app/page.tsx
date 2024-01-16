'use client';

import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  // 当路由变化时进行判断并重定向
  if (router.pathname === '/') {
    router.push('/login');
  }

  return (
    <></>
  );
}
