'use client'
import React, { createContext, Dispatch, SetStateAction, useContext, useState } from 'react'

const createCtx = <T extends any>(initial_value?: T) => {
  const storeContext = createContext<T>(null!)
  const dispatchContext = createContext<Dispatch<SetStateAction<T>>>(null!)

  const useStore = () => {
    const context = useContext(storeContext)
    if (context === undefined) {
      throw new Error('useStore：context undefined')
    }
    return context
  }

  const useDispatch = () => {
    const context = useContext(dispatchContext)
    if (context === undefined) {
      throw new Error('useDispatch：context undefined')
    }
    return context
  }

  const ContextProvider: React.FC<React.ProviderProps<T>> = ({ value, children }) => {
    const [state, dispatch] = useState<T>(initial_value || value)

    return (
      <dispatchContext.Provider value={dispatch}>
        <storeContext.Provider value={state}>{children}</storeContext.Provider>
      </dispatchContext.Provider>
    )
  }

  return { ContextProvider, useStore, useDispatch }
}
export default createCtx
