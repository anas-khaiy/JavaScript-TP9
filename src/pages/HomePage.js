import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import Greeting from '../components/Greeting';
import TodoList from '../components/TodoList';

function HomePage() {
    const { theme } = useTheme();

    return (
        <div>
            <Greeting name="Utilisateur" />
            <p>Bienvenue dans notre application de démonstration React !</p>

            <div style={{
                padding: '20px',
                backgroundColor: theme === 'dark' ? '#444' : '#f0f0f0',
                borderRadius: '8px',
                marginTop: '20px'
            }}>
                <h3>Fonctionnalités principales</h3>
                <ul style={{ textAlign: 'left' }}>
                    <li>Gestion de tâches avec useReducer</li>
                    <li>Thème personnalisable avec useContext</li>
                    <li>Navigation entre les pages avec React Router</li>
                </ul>

                <div style={{ marginTop: '20px' }}>
                    <Link to="/hooks" className="btn-link">Explorer les hooks</Link>
                    <Link to="/about" className="btn-link">À propos</Link>
                </div>
            </div>

            <TodoList />
        </div>
    );
}

export default HomePage;
