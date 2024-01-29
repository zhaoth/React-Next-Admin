'use client';
import { CrownFilled, SmileFilled } from '@ant-design/icons';
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
    logo: false,
    location: {
      pathname: staticRouter.root,
    },
    route: {
      path: staticRouter.root,
      routes: [
        {
          path: staticRouter.welcome,
          name: 'welcome',
          icon: <SmileFilled />,
          access: canAccessSystem,
        },
        {
          path: staticRouter.dashboard,
          name: 'dashboard',
          icon: <CrownFilled />,
          access: canAccessSystem,
        },
        {
          name: 'demo',
          path: staticRouter.list,
          access: canAccessSystem,
          routes: [
            {
              path: staticRouter.ahookTable,
              name: 'ahookList',
              icon: <CrownFilled />,
            },
            {
              path: staticRouter.proTable,
              name: 'proList',
              icon: <CrownFilled />,
            },
            {
              path: staticRouter.proForm,
              name: 'proForm',
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
