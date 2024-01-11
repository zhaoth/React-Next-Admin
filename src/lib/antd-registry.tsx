'use client'
import React from 'react'
import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs'
import { useServerInsertedHTML } from 'next/navigation'
import { App, ConfigProvider, Layout, theme } from 'antd'
import 'antd/dist/reset.css'
import { ChangeThemeContext } from '@/components/change-theme/change-theme-context'

const cache = createCache()

const AntdStyledComponentsRegistry: React.FC<React.PropsWithChildren> = ({ children }) => {
  const isServerInserted = React.useRef<boolean>(false)

  useServerInsertedHTML(() => {
    // 避免 css 重复插入
    if (isServerInserted.current) {
      return
    }
    isServerInserted.current = true
    return (
      <>
        <style id="antd" dangerouslySetInnerHTML={{ __html: extractStyle(cache, true) }} />
      </>
    )
  })

  return <StyleProvider cache={cache}>{children}</StyleProvider>
}

const AntdConfigProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const select_theme = ChangeThemeContext.useStore()

  return (
    <ConfigProvider
      componentSize="large"
      theme={{
        algorithm: select_theme === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm,
      }}
    >
      <Layout style={{ height: '100vh' }}>{children}</Layout>
    </ConfigProvider>
  )
}

const AntdRegistry: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <AntdStyledComponentsRegistry>
      <AntdConfigProvider>
        <App style={{ height: '100%' }}>{children}</App>
      </AntdConfigProvider>
    </AntdStyledComponentsRegistry>
  )
}

export default AntdRegistry
