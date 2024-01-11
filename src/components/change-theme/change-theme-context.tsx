'use client'
import createCtx from '@/lib/create-ctx'
import React from 'react'

export const ChangeThemeContext = createCtx<string>('')

export const ChangeThemeProvider: React.FC<React.ProviderProps<string>> = ({ value, children }) => {
  return <ChangeThemeContext.ContextProvider value={value}>{children}</ChangeThemeContext.ContextProvider>
}
