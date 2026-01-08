// src/components/WindowSize.js
import React, { useState, useEffect } from 'react';

function WindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    useEffect(() => {
        // Fonction pour mettre à jour les dimensions
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        // Ajout de l'écouteur d'événement
        window.addEventListener('resize', handleResize);

        // Nettoyage: retrait de l'écouteur d'événement
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); // Exécuté une seule fois au montage

    return (
        <div className="window-size">
            <h3>Dimensions de la fenêtre:</h3>
            <p>Largeur: {windowSize.width}px, Hauteur: {windowSize.height}px</p>
        </div>
    );
}

export default WindowSize;
