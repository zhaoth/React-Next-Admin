import { CrownFilled, SmileFilled, TabletFilled } from '@ant-design/icons';

export default {
  title: 'React Next Admin',
  logo: 'https://randomuser.me/api/portraits/lego/1.jpg',
  layout: 'mix',
  location: {
    pathname: '/',
  },
  route: {
    path: '/',
    routes: [
      {
        path: '/welcome',
        name: '欢迎',
        icon: <SmileFilled />,
      },
      {
        path: '/dashboard',
        name: '展示',
        icon: <CrownFilled />,
        access: 'canAdmin',
      },
      {
        name: '列表页',
        icon: <TabletFilled />,
        path: '/list',
        routes: [
          {
            path: '/list/ahook-table',
            name: '基于 ahook 的 table',
            icon: <CrownFilled />,
          },
        ],
      },
    ],
  },
};
