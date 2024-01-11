'use client';
import '@/app/globals.css';
import React, { useState } from 'react';
import AntdStyledComponentsRegistry from '@/lib/antd-registry';
import { PageContainer, ProCard, ProLayout } from '@ant-design/pro-components';
import defaultProps from './_defaultProps';
import { InfoCircleFilled, LogoutOutlined } from '@ant-design/icons';
import { Dropdown } from 'antd';
import Link from 'next/link';

export default function MainLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  const [pathname, setPathname] = useState('/list/sub-page/sub-sub-page1');

  // @ts-ignore
  return (
    <>
      <AntdStyledComponentsRegistry>
        <div
          id="pro-layout"
          className="h-full"
        >
          <ProLayout
            siderWidth={216}
            {...defaultProps}
            location={{
              pathname,
            }}
            fixedHeader={true}
            avatarProps={{
              src: 'https://randomuser.me/api/portraits/lego/2.jpg',
              title: '乐高',
              size: 'small',
              render: (props, dom) => {
                return (
                  <Dropdown
                    menu={{
                      items: [
                        {
                          key: 'logout',
                          icon: <LogoutOutlined />,
                          label: '退出登录',
                        },
                      ],
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
            menuItemRender={(item: any, dom) => (
              <Link href={item.path}> {item.name}</Link>
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
    </>
  );
}
