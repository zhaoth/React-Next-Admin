'use client';
import React from 'react';
import { App, ConfigProvider, theme } from 'antd';
import 'antd/dist/reset.css';
import { ChangeThemeContext } from '@/components/change-theme/change-theme-context';
import { AntdRegistry } from '@ant-design/nextjs-registry';

const AntdConfigProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const select_theme = ChangeThemeContext.useStore();

  return (
    <ConfigProvider
      componentSize="large"
      theme={{
        algorithm: select_theme === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm,
      }}
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
