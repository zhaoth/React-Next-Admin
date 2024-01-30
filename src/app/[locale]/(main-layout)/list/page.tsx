'use client';
import { redirect } from '@/lib/language';
import useSettingStore from '@/store/useSettingStore';
import { staticRouter } from '@/static/staticRouter';

export default function List() {
  const defaultLocale = useSettingStore((state) => state.defaultLocale);
  // 静态 build 模式下 不能用 next/router 需要用next/navigation
  redirect(`/${staticRouter.ahookTable}`);
}
