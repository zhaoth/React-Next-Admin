'use client';
import React from 'react';
import { App, ConfigProvider } from 'antd';
import 'antd/dist/reset.css';
import { AntdRegistry } from '@ant-design/nextjs-registry';

const AntdConfigProvider: React.FC<React.PropsWithChildren> = ({ children }) => {

  return (
    <ConfigProvider
      componentSize="large"
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
