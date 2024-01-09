'use client'

import { Button } from 'antd';
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter()
  return (
    <>
      <Button type='primary' onClick={() => router.push('/dashboard')}>登录</Button>
    </>
  );
}
