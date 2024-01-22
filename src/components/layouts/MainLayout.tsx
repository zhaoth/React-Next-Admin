'use client';
import '@/app/globals.css';
import React, { useEffect, useState } from 'react';
import AntdStyledComponentsRegistry from '@/lib/antd-registry';
import { PageContainer, ProCard, ProLayout } from '@ant-design/pro-components';
import { LogoutOutlined } from '@ant-design/icons';
import { Dropdown, MenuProps } from 'antd';
import { useRouter } from '@/lib/language';
import { Props } from '@/typing/Layout';
import { NextIntlClientProvider } from 'next-intl';
import en from '@/i18n/en';
import zh from '@/i18n/zh';
import useMainLayoutProps from '@/components/layouts/useMainLayoutProps';
import { staticRouter } from '@/static/staticRouter';
import { timeZone } from '@/static/locales';
import { ChangeLanguage, Navigation, NoSSR } from '@/components';

export default function MainLayout({ children, params: { locale } }: Props) {
  useEffect(() => {
  }, []);

  const router = useRouter();
  const [pathname, setPathname] = useState(`${staticRouter.welcome}`);
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
                  // eslint-disable-next-line react/jsx-key
                  <ChangeLanguage></ChangeLanguage>,
                ];
              }}
              menuDataRender={(menuData) => {
                return menuData.map((item: any) => {
                  return item.access && item;
                });
              }}
              menuItemRender={(item: any) => {
                return (
                  <Navigation item={item} onNavCLick={() => {
                    router.push(`${item.path}`);
                    setPathname(`${item.path || staticRouter.welcome}`);
                  }}></Navigation>
                );
              }}
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
        </NoSSR>
      </AntdStyledComponentsRegistry>
    </NextIntlClientProvider>
  )
    ;
}
