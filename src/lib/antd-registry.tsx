'use client';
import React, { useEffect, useState } from 'react';
import { App, ConfigProvider, ConfigProviderProps } from 'antd';
import 'antd/dist/reset.css';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import enUS from 'antd/locale/en_US';
import zhCN from 'antd/locale/zh_CN';
import dayjs from 'dayjs';
import useSettingStore from '@/store/useSettingStore';
import { locales } from '@/static/locales';

type Locale = ConfigProviderProps['locale'];
const AntdConfigProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const defaultLocale = useSettingStore((state) => state.defaultLocale);
  const [locale, setLocal] = useState<Locale>(enUS);
  useEffect(() => {
    dayjs.locale('en');
    if (defaultLocale === locales[0]) {
      setLocal(enUS);
      dayjs.locale('en');
    } else {
      setLocal(zhCN);
      dayjs.locale('zh-cn');
    }
  }, [defaultLocale]);
  return (
    <ConfigProvider
      componentSize="large"
      locale={locale}
    >
      <div style={{ height: '100vh' }}>{children}</div>
    </ConfigProvider>
  );
};

const AntdStyleRegistry: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <AntdRegistry>
      <AntdConfigProvider>
        <App className="max-h-full min-h-full bg-white">{children}</App>
      </AntdConfigProvider>
    </AntdRegistry>
  );
};

export default AntdStyleRegistry;
