import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'

const THEME_KEY = 'theme'
const LIGHT_COLOR = '#f4f7fb'
const DARK_COLOR = '#030712'

const ThemeContext = createContext(null)

export function getStoredTheme() {
  try {
    const stored = localStorage.getItem(THEME_KEY)
    if (stored === 'light' || stored === 'dark') return stored
  } catch {
    /* ignore */
  }
  return 'light'
}

export function applyTheme(theme) {
  const root = document.documentElement
  root.setAttribute('data-theme', theme)
  root.style.colorScheme = theme
  root.classList.toggle('dark', theme === 'dark')
  root.classList.toggle('light', theme === 'light')
  const meta = document.querySelector('meta[name="theme-color"]')
  if (meta) meta.content = theme === 'light' ? LIGHT_COLOR : DARK_COLOR
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() =>
    typeof document !== 'undefined'
      ? document.documentElement.getAttribute('data-theme') || getStoredTheme()
      : 'light'
  )

  useEffect(() => {
    applyTheme(theme)
    try {
      localStorage.setItem(THEME_KEY, theme)
    } catch {
      /* ignore */
    }
  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme((current) => (current === 'light' ? 'dark' : 'light'))
  }, [])

  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}
