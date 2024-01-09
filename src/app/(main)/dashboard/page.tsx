'use client'

import APIS from '@/apis'
import { useEffect } from 'react';

export default  function Dashboard(){
  const getTodos = async ()=>{
    const res = await APIS.getTodos()
    console.log(res);
  }
  useEffect(()=>{
    getTodos()
  })
  return (
    <div>
      DashBord
    </div>
  )
}
