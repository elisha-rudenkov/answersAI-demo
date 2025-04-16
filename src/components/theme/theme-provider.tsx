"use client"

import React, { createContext, useContext, useEffect } from 'react'
import { useTheme } from '@/hooks/use-theme'

type ThemeProviderProps = {
  children: React.ReactNode
}

// Add setTheme method to the context
type ThemeContextType = ReturnType<typeof useTheme> & {
  setTheme: (theme: 'dark' | 'light') => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: ThemeProviderProps) {
  const themeValue = useTheme()
  const [theme, setThemeState] = React.useState<'dark' | 'light'>(themeValue.theme)

  // Always enforce dark mode on initial load
  useEffect(() => {
    setThemeState('dark')
  }, [])

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove('light', 'dark')
    // Always use the theme from state, which we're enforcing as dark
    root.classList.add(theme)
  }, [theme])

  // Custom toggle that only allows switching to dark mode
  const toggleTheme = () => {
    setThemeState(prevTheme => prevTheme === 'dark' ? 'light' : 'dark')
  }

  // Explicit method to force a specific theme
  const setTheme = (newTheme: 'dark' | 'light') => {
    setThemeState(newTheme)
  }

  return (
    <ThemeContext.Provider 
      value={{ 
        ...themeValue,
        theme, // Use our state-controlled theme
        toggleTheme, // Use our custom toggle
        setTheme // Add direct theme setter
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export const useThemeContext = (): ThemeContextType => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useThemeContext must be used within a ThemeProvider')
  }
  return context
} 