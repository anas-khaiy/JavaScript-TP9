// src/components/ExpensiveCalculation.js
import React, { useState, useMemo, useCallback } from 'react';
import { useTheme } from '../contexts/ThemeContext';

// Fonction de calcul coûteuse
function calculateFactorial(n) {
    if (n <= 1) return 1;

    console.log(`Calculating factorial for ${n}...`);
    // Simulation d'un calcul coûteux
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

function ExpensiveCalculation() {
    const [number, setNumber] = useState(5);
    const [increment, setIncrement] = useState(1);
    const { theme } = useTheme();

    // Utilisation de useMemo pour mémoriser le résultat du calcul coûteux
    const factorial = useMemo(() => {
        return calculateFactorial(number);
    }, [number]); // Recalcule uniquement si number change

    // Utilisation de useCallback pour mémoriser les fonctions
    const incrementNumber = useCallback(() => {
        setNumber(n => n + increment);
    }, [increment]); // Recréée uniquement si increment change

    const decrementNumber = useCallback(() => {
        setNumber(n => Math.max(0, n - increment));
    }, [increment]);

    const handleIncrementChange = (e) => {
        setIncrement(parseInt(e.target.value) || 1);
    };

    return (
        <div className="expensive-calculation" style={{ margin: '20px 0' }}>
            <h3>Calcul de factorielle</h3>

            <div>
                <label>
                    Pas d'incrémentation:
                    <input
                        type="number"
                        value={increment}
                        onChange={handleIncrementChange}
                        min="1"
                    />
                </label>
            </div>

            <div style={{ margin: '10px 0' }}>
                <button onClick={decrementNumber}>-</button>
                <span style={{ margin: '0 15px', fontWeight: 'bold' }}>{number}</span>
                <button onClick={incrementNumber}>+</button>
            </div>

            <p>
                Factorielle de {number}: {factorial}
            </p>

            <p style={{ fontSize: '0.8em', color: theme === 'dark' ? '#aaa' : '#666' }}>
                (Ouvrez la console pour voir quand le calcul est effectué)
            </p>
        </div>
    );
}

export default ExpensiveCalculation;
