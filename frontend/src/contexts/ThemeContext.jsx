import React, { createContext } from 'react'
import { usePersistState } from '../hooks/state'

export const ThemeContext = createContext()

export function ThemeProvider({ children }) {
    const [theme, setTheme] = usePersistState('theme', 'is-info')

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}
