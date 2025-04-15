"use client"

import * as React from "react"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

interface LoadingTransitionContextProps {
  isRouteChanging: boolean
}

const LoadingTransitionContext = React.createContext<LoadingTransitionContextProps>({
  isRouteChanging: false
})

export const useLoadingTransition = () => React.useContext(LoadingTransitionContext)

export function LoadingTransitionProvider({
  children
}: {
  children: React.ReactNode
}) {
  const [isRouteChanging, setIsRouteChanging] = useState(false)
  const location = useLocation()

  // Track route changes
  useEffect(() => {
    // Show loading state briefly
    setIsRouteChanging(true)
    
    // Hide loading after a short delay
    const timer = setTimeout(() => {
      setIsRouteChanging(false)
    }, 100) // Very short delay - just enough to trigger state change but not visible to user
    
    return () => clearTimeout(timer)
  }, [location.pathname])

  return (
    <LoadingTransitionContext.Provider value={{ isRouteChanging }}>
      {children}
    </LoadingTransitionContext.Provider>
  )
} 