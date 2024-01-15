'use client';
import React from 'react';
import { Dropdown } from 'antd';
import { ChangeThemeContext } from '@/components/change-theme/ChangeThemeContext';
import { useCookieState } from 'ahooks';

const ChangeIhemeDropdown: React.FC = () => {
  const theme = ChangeThemeContext.useStore();
  const changeThemeDispatch = ChangeThemeContext.useDispatch();
  const [, changeCookies] = useCookieState('theme');

  return (
    <Dropdown
      menu={{
        selectedKeys: [theme],
        onClick: (item) => {
          changeThemeDispatch(item.key);
          changeCookies(item.key);
        }
      }}
    >
    </Dropdown>
  );
};

export default ChangeIhemeDropdown;
