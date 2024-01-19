'use client';
import '@/app/globals.css';
import React, { useState } from 'react';
import AntdStyledComponentsRegistry from '@/lib/antd-registry';
import { PageContainer, ProCard, ProLayout } from '@ant-design/pro-components';
import { InfoCircleFilled, LogoutOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown } from 'antd';
import { useRouter } from 'next/navigation';
import { Props } from '@/typing/Layout';
import { NextIntlClientProvider } from 'next-intl';
import en from '@/i18n/en';
import zh from '@/i18n/zh';
import useMainLayoutProps from '@/components/layouts/useMainLayoutProps';
import { staticRouter } from '@/static/staticRouter';
import { timeZone } from '@/static/locales';

export default function MainLayout({ children, params: { locale } }: Props) {
  const router = useRouter();
  const [pathname, setPathname] = useState(`/${locale}${staticRouter.welcome}`);
  const onClick: MenuProps['onClick'] = (event: any) => {
    if (event.key === 'logout') router.push(`/${locale}${staticRouter.login}`);
  };

  const [props, settings] = useMainLayoutProps();

  // 右侧菜单
  const items: MenuProps['items'] = [
    {
      key: 'logout',
      icon: <LogoutOutlined />,
      label: '退出登录',
    },
  ];
  const messages = locale === 'en' ? en : zh;
  return (
    <NextIntlClientProvider locale={locale} messages={messages} timeZone={timeZone}>
      <AntdStyledComponentsRegistry>
        <div
          id="pro-layout"
          className="h-full"
        >
          <ProLayout
            {...props}
            siderWidth={216}
            {...settings}
            location={{
              pathname,
            }}
            avatarProps={{
              src: 'https://randomuser.me/api/portraits/lego/2.jpg',
              title: '乐高',
              size: 'small',
              render: (props, dom) => {
                return (
                  <Dropdown
                    menu={{
                      items,
                      mode: 'inline',
                      onClick,
                    }}
                  >
                    {dom}
                  </Dropdown>
                );
              },
            }}
            actionsRender={(props) => {
              if (props.isMobile) return [];
              return [
                <InfoCircleFilled key="InfoCircleFilled" />,
              ];
            }}
            menuDataRender={(menuData) => {
              return menuData.map((item: any) => {
                return item.access && item;
              });
            }}
            menuItemRender={(item: any, dom) => (
              <div onClick={() => {
                router.push(`/${locale}${item.path}`);
                setPathname(`/${locale}${item.path || staticRouter.welcome}`);
              }}> {item.name}</div>
            )}
          >
            <PageContainer>
              <ProCard
                style={{
                  height: '100vh',
                  minHeight: 800,
                }}
              >
                {children}
              </ProCard>
            </PageContainer>
          </ProLayout>
        </div>
      </AntdStyledComponentsRegistry>
    </NextIntlClientProvider>
  );
}
