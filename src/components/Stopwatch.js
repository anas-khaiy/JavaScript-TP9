// src/components/Stopwatch.js
import React, { useState, useRef, useEffect } from 'react';

function Stopwatch() {
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);

    // useRef pour stocker des valeurs qui persistent entre les rendus
    // sans déclencher de re-rendu lorsqu'elles changent
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);
    const previousTimeRef = useRef(elapsedTime);

    // Démarrer ou arrêter le chronomètre
    const toggleStopwatch = () => {
        if (isRunning) {
            // Arrêter le chronomètre
            clearInterval(intervalIdRef.current);
            previousTimeRef.current = elapsedTime;
        } else {
            // Démarrer le chronomètre
            startTimeRef.current = Date.now() - previousTimeRef.current;
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current);
            }, 10); // Mise à jour toutes les 10ms
        }
        setIsRunning(!isRunning);
    };

    // Réinitialiser le chronomètre
    const resetStopwatch = () => {
        clearInterval(intervalIdRef.current);
        setElapsedTime(0);
        previousTimeRef.current = 0;
        if (isRunning) {
            setIsRunning(false);
        }
    };

    // Nettoyer l'intervalle lors du démontage
    useEffect(() => {
        return () => {
            if (intervalIdRef.current) {
                clearInterval(intervalIdRef.current);
            }
        };
    }, []);

    // Formater le temps écoulé (mm:ss:ms)
    const formatTime = (time) => {
        const minutes = Math.floor(time / 60000);
        const seconds = Math.floor((time % 60000) / 1000);
        const milliseconds = Math.floor((time % 1000) / 10);

        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(2, '0')}`;
    };

    return (
        <div className="stopwatch">
            <h3>Chronomètre</h3>
            <div style={{ fontSize: '2em', fontFamily: 'monospace', margin: '10px 0' }}>
                {formatTime(elapsedTime)}
            </div>
            <div>
                <button onClick={toggleStopwatch}>
                    {isRunning ? 'Arrêter' : 'Démarrer'}
                </button>
                <button onClick={resetStopwatch}>Réinitialiser</button>
            </div>
        </div>
    );
}

export default Stopwatch;
