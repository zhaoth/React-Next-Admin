'use client';
import '@/app/globals.css';
import React, { Suspense, useEffect, useState } from 'react';
import AntdStyledComponentsRegistry from '@/lib/antd-registry';
import { PageContainer, ProCard, ProLayout } from '@ant-design/pro-components';
import { LogoutOutlined } from '@ant-design/icons';
import { Dropdown, MenuProps, Spin } from 'antd';
import { usePathname, useRouter } from '@/lib/language';
import { Props } from '@/types/Layout';
import { NextIntlClientProvider } from 'next-intl';
import useMainLayoutProps from '@/components/layouts/useMainLayoutProps';
import { staticRouter } from '@/static/staticRouter';
import { timeZone } from '@/static/locales';
import { ChangeLanguage, MockComponent, Navigation, NoSSR } from '@/components';
import { en } from '@/i18n/en';
import { zh } from '@/i18n/zh';

export default function MainLayout({ children, params: { locale } }: Props) {
  useEffect(() => {
  }, []);

  const router = useRouter();
  const currentRoute = usePathname() as string;
  const [pathname, setPathname] = useState(currentRoute || `${staticRouter.welcome}`);
  const onClick: MenuProps['onClick'] = (event: any) => {
    if (event.key === 'logout') router.push(`${staticRouter.login}`);
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
        <MockComponent></MockComponent>
        <NoSSR>
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
                        onClick,
                      }}
                    >
                      {dom}
                    </Dropdown>
                  );
                },
              }}
              itemRender={(route: any) => {
                return <Navigation name={route.title}></Navigation>;
              }}
              actionsRender={(props) => {
                if (props.isMobile) return [];
                return [
                  <ChangeLanguage key="ChangeLanguage"></ChangeLanguage>,
                ];
              }}
              menuDataRender={(menuData) => {
                return menuData.map((item: any) => {
                  return item.access && item;
                });
              }}
              menuItemRender={(item: any) => {
                return (
                  <Navigation name={item.name} onNavCLick={() => {
                    setPathname(`${item.path || staticRouter.welcome}`);
                    router.push(`${item.path}`);
                  }}></Navigation>
                );
              }}
              subMenuItemRender={(item) => {
                return (
                  <Navigation name={item.name} onNavCLick={() => {
                    if (!item.children) {
                      setPathname(`${item.path || staticRouter.welcome}`);
                      router.push(`${item.path}`);
                    }
                  }}></Navigation>
                );
              }}
            >
              <PageContainer
                header={
                  {
                    title: false,
                  }
                }>
                <ProCard
                  style={{
                    height: '100vh',
                    minHeight: 800,
                  }}
                >
                  <Suspense fallback={<Spin />}>
                    {children}
                  </Suspense>
                </ProCard>
              </PageContainer>

            </ProLayout>
          </div>
        </NoSSR>
      </AntdStyledComponentsRegistry>
    </NextIntlClientProvider>
  )
    ;
}
