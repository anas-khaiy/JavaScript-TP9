// src/components/SearchWithTransition.js
import React, { useState, useTransition, useMemo } from 'react';
import { useTheme } from '../contexts/ThemeContext';

// Génération d'une grande liste d'éléments pour la démonstration
const generateItems = (count) => {
    return Array.from({ length: count }, (_, i) => ({
        id: i,
        name: `Item ${i + 1}`,
        description: `Description de l'item ${i + 1} avec des détails supplémentaires pour la recherche.`
    }));
};

function SearchWithTransition() {
    const [query, setQuery] = useState('');
    const [inputValue, setInputValue] = useState('');
    // useTransition permet de marquer les mises à jour d'état comme non urgentes
    const [isPending, startTransition] = useTransition();
    const { theme } = useTheme();

    // Génération d'une grande liste (simulant une base de données)
    const allItems = useMemo(() => generateItems(10000), []);

    // Filtrage des éléments en fonction de la requête
    const filteredItems = useMemo(() => {
        if (!query) return [];

        return allItems.filter(
            item =>
                item.name.toLowerCase().includes(query.toLowerCase()) ||
                item.description.toLowerCase().includes(query.toLowerCase())
        );
    }, [allItems, query]);

    const handleChange = (e) => {
        const value = e.target.value;

        // Mise à jour immédiate de l'input pour la réactivité
        setInputValue(value);

        // Mise à jour du filtrage dans une transition (non bloquante)
        startTransition(() => {
            setQuery(value);
        });
    };

    return (
        <div className="search-transition" style={{ margin: '20px 0' }}>
            <h3>Recherche avec useTransition</h3>

            <div style={{ margin: '10px 0' }}>
                <input
                    value={inputValue}
                    onChange={handleChange}
                    placeholder="Rechercher dans 10 000 items..."
                    style={{ width: '100%', maxWidth: '300px' }}
                />
            </div>

            {isPending ? (
                <p>Chargement des résultats...</p>
            ) : (
                <>
                    <p>Résultats: {filteredItems.length}</p>
                    <ul style={{
                        maxHeight: '200px',
                        overflowY: 'auto',
                        padding: '0',
                        margin: '10px 0',
                        listStyle: 'none',
                        textAlign: 'left'
                    }}>
                        {filteredItems.slice(0, 100).map(item => (
                            <li key={item.id} style={{
                                padding: '8px',
                                margin: '4px 0',
                                backgroundColor: theme === 'dark' ? '#444' : '#f5f5f5',
                                borderRadius: '4px'
                            }}>
                                <strong>{item.name}</strong>
                                <p style={{ margin: '4px 0 0', fontSize: '0.9em' }}>{item.description}</p>
                            </li>
                        ))}
                        {filteredItems.length > 100 && (
                            <li style={{ padding: '8px', fontStyle: 'italic' }}>
                                ... et {filteredItems.length - 100} autres résultats
                            </li>
                        )}
                    </ul>
                </>
            )}
        </div>
    );
}

export default SearchWithTransition;
