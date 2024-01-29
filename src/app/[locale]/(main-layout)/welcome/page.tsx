'use client';

import { DatePicker } from 'antd';
import { login } from '@/static/emits';
import { useEvent } from '@/hooks/useEvent';
import { useEffect } from 'react';
import { useMount } from 'ahooks';

export default function Welcome() {
  const event = useEvent()
useMount(()=>  event.onEvent(login, e => console.log(e) ))
  return (
    <>
      <div>welcome</div>
      <DatePicker />
    </>
  );
}
