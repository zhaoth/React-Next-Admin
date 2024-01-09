'use client';

import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  console.log(router);
  return (
    <>
      <div>root</div>
    </>
  );
}
