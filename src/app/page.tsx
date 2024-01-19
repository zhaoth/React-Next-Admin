'use client';

import { redirect } from 'next/navigation';
import useAccessStore from '@/store/useAccessStore';
import useSettingStore from '@/store/useSettingStore';
export default function Home() {
  const defaultLocale = useSettingStore((state) => state.defaultLocale);
  // 静态 build 模式下 不能用 next/router 需要用next/navigation
  redirect(`/${defaultLocale}/login`);
}
