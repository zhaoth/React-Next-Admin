'use client';

import { redirect, usePathname } from 'next/navigation';

export default function Home() {
  // 静态 build 模式下 不能用 next/router 需要用next/navigatio
  if (usePathname() === '/') {
    redirect('/login');
  }
  return (
    <>
    </>
  );
}
