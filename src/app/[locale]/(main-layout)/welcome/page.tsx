'use client';

import { DatePicker } from 'antd';
import { login } from '@/static/emits';
import { useEvent } from '@/hooks/useEvent';
import { useMount } from 'ahooks';
import Image from 'next/image';
import { useEffect } from 'react';
import Apis from '@/apis';

export default function Welcome() {
  const event = useEvent();
  useMount(() => event.onEvent(login, e => console.log(e)));
  useEffect(() => {
    Apis.getUsers().then(res => {
      console.log(res);
    });
  });
  return (
    <>
      <div>welcome</div>
      {/*     image 组件直接支持 svg 不用二次封装*/}
      <Image src="/2k.svg" height={100} width={100} alt="" />
      <DatePicker />
    </>
  );
}
