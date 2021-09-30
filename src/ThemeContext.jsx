import React, { createContext, useState } from 'react'

export const ThemeContext = createContext()

function ThemeContextProvider({children}) {
    const [darkMode, setDarkMode] = useState(false)
    darkMode? document.body.style.background = 'black': document.body.style.background = 'white'
    return (
        <ThemeContext.Provider value={{darkMode, setDarkMode}} >
            {children}
        </ThemeContext.Provider>
    )
}
export default ThemeContextProvider;
