import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

function AboutPage() {
    const { section } = useParams();
    const { theme } = useTheme();

    const renderSection = () => {
        switch (section) {
            case 'hooks':
                return (
                    <div>
                        <h3>À propos des Hooks</h3>
                        <p>Les Hooks sont une fonctionnalité introduite dans React 16.8 qui permettent d'utiliser l'état et d'autres fonctionnalités de React sans écrire de classe.</p>
                        <p>Ils permettent d'extraire la logique d'état des composants pour la réutiliser facilement.</p>
                    </div>
                );
            case 'context':
                return (
                    <div>
                        <h3>À propos du Context API</h3>
                        <p>Le Context API permet de partager des données entre des composants sans avoir à passer explicitement les props à chaque niveau.</p>
                        <p>C'est particulièrement utile pour des données globales comme le thème, l'utilisateur connecté, etc.</p>
                    </div>
                );
            default:
                return (
                    <div>
                        <h3>À propos de cette application</h3>
                        <p>Cette application a été créée pour démontrer l'utilisation des hooks React et d'autres fonctionnalités modernes.</p>
                        <p>Elle a été développée dans le cadre d'un TP sur React.</p>

                        <div style={{ marginTop: '20px' }}>
                            <Link to="/about/hooks" className="btn-link">À propos des Hooks</Link>
                            <Link to="/about/context" className="btn-link">À propos du Context</Link>
                        </div>
                    </div>
                );
        }
    };

    return (
        <div>
            <h2>À propos</h2>

            <div style={{ marginBottom: '20px' }}>
                <Link to="/" className="btn-link">Retour à l'accueil</Link>
            </div>

            <div style={{
                padding: '20px',
                backgroundColor: theme === 'dark' ? '#444' : '#f0f0f0',
                borderRadius: '8px',
                marginTop: '20px',
                textAlign: 'left'
            }}>
                {renderSection()}
            </div>
        </div>
    );
}

export default AboutPage;
