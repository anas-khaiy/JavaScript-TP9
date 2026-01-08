// src/contexts/ThemeContext.js
import React, { createContext, useState, useContext } from 'react';

// Création du contexte avec une valeur par défaut
const ThemeContext = createContext({
    theme: 'light',
    setTheme: () => { }
});

// Hook personnalisé pour utiliser le contexte de thème
export function useTheme() {
    return useContext(ThemeContext);
}

// Composant Provider qui fournit le contexte à ses enfants
export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light');

    const value = {
        theme,
        setTheme,
        toggleTheme: () => setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
    };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}
