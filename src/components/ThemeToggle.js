// src/components/ThemeToggle.js
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button onClick={toggleTheme}>
            Thème: {theme === 'light' ? '☀️ Clair' : '🌙 Sombre'}
        </button>
    );
}

export default ThemeToggle;
