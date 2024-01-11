'use client'
import React from 'react'
import { Button, Dropdown } from 'antd'
import { DarkIcon, LightIcon } from '@/components/icon/theme'
import { ChangeThemeContext } from '@/components/change-theme/change-theme-context'
import { useCookieState } from 'ahooks'

const ChangeThemeDropdown: React.FC = () => {
  const theme = ChangeThemeContext.useStore()
  const changeThemeDispatch = ChangeThemeContext.useDispatch()
  const [, changeCookies] = useCookieState('theme')

  return (
    <Dropdown
      menu={{
        selectedKeys: [theme],
        onClick: (item) => {
          changeThemeDispatch(item.key)
          changeCookies(item.key)
        },
        items: [
          { key: 'light', icon: <LightIcon />, label: '明亮模式' },
          { key: 'dark', icon: <DarkIcon />, label: '暗黑模式' },
        ],
      }}
    >
      <Button type="text" icon={theme === 'dark' ? <DarkIcon /> : <LightIcon />} />
    </Dropdown>
  )
}

export default ChangeThemeDropdown
