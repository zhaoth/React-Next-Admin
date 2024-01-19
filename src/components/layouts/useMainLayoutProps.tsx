'use client';
import { CrownFilled, SmileFilled, TabletFilled } from '@ant-design/icons';
import useAccessStore from '@/store/useAccessStore';
import type { ProSettings } from '@ant-design/pro-components';
import React from 'react';
import { staticRouter } from '@/static/staticRouter';

const useDefaultLayoutProps = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const canAccessSystem = useAccessStore((state) => state.canAccessSystem);
  // 设置
  const settings: ProSettings | undefined = {
    fixSiderbar: true,
    layout: 'mix',
    // title: false,
  };
  const props = {
    title: 'React Next Admin',
    siderWidth: 216,
    logo: 'https://randomuser.me/api/portraits/lego/1.jpg',
    location: {
      pathname: staticRouter.root,
    },
    route: {
      path:  staticRouter.root,
      routes: [
        {
          path:  staticRouter.welcome,
          name: '欢迎',
          icon: <SmileFilled />,
          access: canAccessSystem,
        },
        {
          path:  staticRouter.dashboard,
          name: '展示',
          icon: <CrownFilled />,
          access: canAccessSystem,
        },
        {
          name: '列表页',
          icon: <TabletFilled />,
          path: staticRouter.list,
          access: canAccessSystem,
          routes: [
            {
              path: staticRouter.ahookTable,
              name: '基于 ahook 的 table',
              icon: <CrownFilled />,
            },
            {
              path: staticRouter.proTable,
              name: '基于proTable的 table',
              icon: <CrownFilled />,
            },
          ],
        },
      ],
    },
  };
  return [props, settings];
};


export default useDefaultLayoutProps;
