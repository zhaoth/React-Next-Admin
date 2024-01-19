'use client';
import '@/app/globals.css';
import React, { useState } from 'react';
import AntdStyledComponentsRegistry from '@/lib/antd-registry';
import { PageContainer, ProCard, ProLayout, type ProSettings } from '@ant-design/pro-components';
import { CrownFilled, InfoCircleFilled, LogoutOutlined, SmileFilled, TabletFilled } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown } from 'antd';
import { notFound, redirect, useRouter } from 'next/navigation';
import { Props } from '@/typing/Layout';
import { NextIntlClientProvider } from 'next-intl';
import useAccessStore from '@/store/useAccessStore';
import en from '@/i18n/en.json'
import zh from '@/i18n/zh.json'

//function to get the translations
function getMessages(locale: string) {
  try {
    return (import(`@/i18n/${locale}.json`));
  } catch (error) {
    notFound();
  }
}

export default function MainLayout({ children, params: { locale } }: Props) {
  console.log(en);
  const router = useRouter();
  const [pathname, setPathname] = useState('/welcome');
  const onClick: MenuProps['onClick'] = (event: any) => {
    if (event.key === 'logout') router.push('/login');
  };
  const settings: ProSettings | undefined = {
    fixSiderbar: true,
    layout: 'mix',
    // title: false,
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const canAccessSystem = useAccessStore((state) => state.canAccessSystem);

  const props = {
    title: 'React Next Admin',
    siderWidth: 216,
    logo: 'https://randomuser.me/api/portraits/lego/1.jpg',
    location: {
      pathname: `/`,
    },
    route: {
      path: `/`,
      routes: [
        {
          path: `/welcome`,
          name: '欢迎',
          icon: <SmileFilled />,
          access: canAccessSystem,
        },
        {
          path: `/dashboard`,
          name: '展示',
          icon: <CrownFilled />,
          access: canAccessSystem,
        },
        {
          name: '列表页',
          icon: <TabletFilled />,
          path: '/list',
          access: canAccessSystem,
          routes: [
            {
              path: '/list/ahook-table',
              name: '基于 ahook 的 table',
              icon: <CrownFilled />,
            },
            {
              path: '/list/pro-table',
              name: '基于proTable的 table',
              icon: <CrownFilled />,
            },
          ],
        },
      ],
    },
  };


  // 右侧菜单
  const items: MenuProps['items'] = [
    {
      key: 'logout',
      icon: <LogoutOutlined />,
      label: '退出登录',
    },
  ];
  const messages =  locale === 'en' ? en : zh
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
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
                router.push(`/zh${item.path}`);
                setPathname(item.path || '/welcome');
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
