'use client';

import { redirect, usePathname } from 'next/navigation';

export default function Home({ params: { lng } }:{
  params:{
    lng:any
  }
}) {
  console.log(`/${lng}`);
  // 静态 build 模式下 不能用 next/router 需要用next/navigatio
  if (usePathname() === `/${lng}`) {
    redirect(`/${lng}/login`);
  }
  return (
    <>
    </>
  );
}
