// src/components/CustomHooksDemo.js
import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import useMediaQuery from '../hooks/useMediaQuery';
import useOnlineStatus from '../hooks/useOnlineStatus';
import { useTheme } from '../contexts/ThemeContext';

function CustomHooksDemo() {
    // Utilisation de nos hooks personnalisés
    const [name, setName] = useLocalStorage('demo-name', '');
    const isSmallScreen = useMediaQuery('(max-width: 600px)');
    const isOnline = useOnlineStatus();
    const { theme } = useTheme();

    return (
        <div className="custom-hooks-demo" style={{ margin: '20px 0' }}>
            <h3>Démonstration de hooks personnalisés</h3>

            <div style={{
                padding: '15px',
                backgroundColor: theme === 'dark' ? '#444' : '#f0f0f0',
                borderRadius: '4px',
                marginTop: '10px',
                textAlign: 'left'
            }}>
                <h4>useLocalStorage</h4>
                <div style={{ margin: '10px 0' }}>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Votre nom (sauvegardé dans localStorage)"
                    />
                </div>
                <p>
                    {name ? `Bonjour, ${name}!` : 'Entrez votre nom pour le sauvegarder.'}
                </p>
                <p style={{ fontSize: '0.8em' }}>
                    (Rafraîchissez la page pour voir la persistance)
                </p>
            </div>

            <div style={{
                padding: '15px',
                backgroundColor: theme === 'dark' ? '#444' : '#f0f0f0',
                borderRadius: '4px',
                marginTop: '10px',
                textAlign: 'left'
            }}>
                <h4>useMediaQuery</h4>
                <p>
                    Taille d'écran actuelle: <strong>{isSmallScreen ? 'Petit écran' : 'Grand écran'}</strong>
                </p>
                <p style={{ fontSize: '0.8em' }}>
                    (Redimensionnez la fenêtre pour voir le changement)
                </p>
            </div>

            <div style={{
                padding: '15px',
                backgroundColor: theme === 'dark' ? '#444' : '#f0f0f0',
                borderRadius: '4px',
                marginTop: '10px',
                textAlign: 'left'
            }}>
                <h4>useOnlineStatus</h4>
                <p>
                    Statut de connexion:
                    <strong> {isOnline ? 'En ligne' : 'Hors ligne'}</strong>
                </p>
                <p style={{ fontSize: '0.8em' }}>
                    (Désactivez votre connexion internet pour voir le changement)
                </p>
            </div>
        </div>
    );
}

export default CustomHooksDemo;
