'use client';

import { Button } from 'antd';
import { useRouter } from 'next/navigation';
import useAuthStore from '@/store/useAuthStore';
import DemoTable from '@/components/DemoTable';

export default function Login() {
  const router = useRouter();
  const setToken = useAuthStore((state) => state.setToken);
  setToken('1');
  return (
    <>
      <Button type="primary" onClick={() => router.push('/dashboard')}>登录</Button>
    </>
  );
}
