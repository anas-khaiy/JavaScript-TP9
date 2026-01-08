// src/components/Clock.js
import React, { useState, useEffect } from 'react';

function Clock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        // Effet: mise à jour de l'heure chaque seconde
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        // Fonction de nettoyage: s'exécute avant la prochaine exécution de l'effet
        // ou lors du démontage du composant
        return () => {
            clearInterval(intervalId);
        };
    }, []); // Tableau de dépendances vide: l'effet s'exécute une seule fois après le montage

    return (
        <div className="clock">
            <h3>Heure actuelle:</h3>
            <p>{time.toLocaleTimeString()}</p>
        </div>
    );
}

export default Clock;
