// src/hooks/useMediaQuery.js
import { useState, useEffect } from 'react';

function useMediaQuery(query) {
    // État pour stocker le résultat de la media query
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        // Créer un MediaQueryList
        const mediaQuery = window.matchMedia(query);

        // Définir la valeur initiale
        setMatches(mediaQuery.matches);

        // Fonction de callback pour les changements
        const handleChange = (event) => {
            setMatches(event.matches);
        };

        // Ajouter l'écouteur d'événement
        mediaQuery.addEventListener('change', handleChange);

        // Nettoyer l'écouteur d'événement
        return () => {
            mediaQuery.removeEventListener('change', handleChange);
        };
    }, [query]);

    return matches;
}

export default useMediaQuery;
