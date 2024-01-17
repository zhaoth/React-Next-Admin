'use client';
import '@/app/globals.css';
import React, { useState } from 'react';
import AntdStyledComponentsRegistry from '@/lib/antd-registry';
import { PageContainer, ProCard, ProLayout } from '@ant-design/pro-components';
import useDefaultProps from '@/app/(main-layout)/_useDefaultLayoutProps';
import { InfoCircleFilled, LogoutOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/navigation';


export default function MainLayout({
                                     children,
                                   }: React.PropsWithChildren) {
  const router = useRouter();
  const [pathname, setPathname] = useState('/welcome');
  const onClick: MenuProps['onClick'] = (event: any) => {
    if (event.key === 'logout') router.push('/login');
  };
  const [props, settings] = useDefaultProps();
  // 右侧菜单
  const items: MenuProps['items'] = [
    {
      key: 'logout',
      icon: <LogoutOutlined />,
      label: '退出登录',
    },
  ];

  return (
    <AntdStyledComponentsRegistry>
      <div
        id="pro-layout"
        className="h-full"
      >
        <ProLayout
          siderWidth={216}
          {...props}
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
            <Link href={item.path} onClick={() => {
              setPathname(item.path || '/welcome');
            }}> {item.name}</Link>
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
  );
}
