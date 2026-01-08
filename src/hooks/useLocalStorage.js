// src/hooks/useLocalStorage.js
import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
    // État pour stocker la valeur
    // Passe une fonction à useState pour que la valeur initiale
    // ne soit calculée qu'une seule fois
    const [storedValue, setStoredValue] = useState(() => {
        try {
            // Récupérer la valeur depuis localStorage
            const item = window.localStorage.getItem(key);
            // Analyser le JSON stocké ou retourner la valeur initiale
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.error(`Erreur lors de la récupération de ${key} depuis localStorage:`, error);
            return initialValue;
        }
    });

    // Fonction pour mettre à jour la valeur dans localStorage
    const setValue = (value) => {
        try {
            // Permettre à value d'être une fonction pour la même API que useState
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            // Sauvegarder l'état
            setStoredValue(valueToStore);
            // Sauvegarder dans localStorage
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            console.error(`Erreur lors de la sauvegarde de ${key} dans localStorage:`, error);
        }
    };

    // Mettre à jour localStorage si la clé change
    useEffect(() => {
        const item = window.localStorage.getItem(key);
        if (item) {
            try {
                setStoredValue(JSON.parse(item));
            } catch (error) {
                console.error(`Erreur lors de l'analyse de ${key} depuis localStorage:`, error);
            }
        }
    }, [key]);

    return [storedValue, setValue];
}

export default useLocalStorage;
