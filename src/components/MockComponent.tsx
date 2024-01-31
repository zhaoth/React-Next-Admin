'use client';
import { useEffect } from 'react';

export default function MockComponent() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (process.env.NEXT_PUBLIC_MOCK === 'true') {
        require('@/mock/index');
      }
    }
  }, []);

  return null;
};
