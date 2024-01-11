import { ChangeThemeProvider } from '@/components/change-theme/change-theme-context'
import React from 'react'
import { cookies } from 'next/headers'

const InjectCookieChangeThemeProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const theme = cookies().get('theme')?.value || 'dark'

  return <ChangeThemeProvider value={theme}>{children}</ChangeThemeProvider>
}

export default InjectCookieChangeThemeProvider
