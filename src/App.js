import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import HomePage from './pages/HomePage';
import HooksPage from './pages/HooksPage';
import AboutPage from './pages/AboutPage';
import OnlineStatus from './components/OnlineStatus';

// Composant qui utilise le thème
function ThemedApp() {
  const { theme } = useTheme();

  // Styles dynamiques basés sur le thème
  const appStyle = {
    backgroundColor: theme === 'dark' ? '#333' : '#f5f5f5',
    color: theme === 'dark' ? '#f5f5f5' : '#333',
    minHeight: '100vh',
    transition: 'all 0.3s ease'
  };

  const headerStyle = {
    backgroundColor: theme === 'dark' ? '#222' : '#282c34',
  };

  return (
    <div className="App" style={appStyle}>
      <header className="App-header" style={headerStyle}>
        <h1>Todo App Avancée</h1>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
          <ThemeToggle />
          <OnlineStatus />
        </div>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hooks" element={<HooksPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/about/:section" element={<AboutPage />} />
        </Routes>
      </main>
    </div>
  );
}

// Composant racine qui fournit le contexte
function App() {
  return (
    <ThemeProvider>
      <ThemedApp />
    </ThemeProvider>
  );
}

export default App;
