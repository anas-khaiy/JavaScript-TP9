// src/components/Counter.js
import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    // Utilisation de la forme fonctionnelle pour garantir l'accès à la valeur la plus récente
    const increment = () => setCount(prevCount => prevCount + 1);
    const decrement = () => setCount(prevCount => prevCount - 1);
    const reset = () => setCount(0);

    return (
        <div className="counter">
            <h3>Compteur: {count}</h3>
            <button onClick={increment}>Incrémenter</button>
            <button onClick={decrement}>Décrémenter</button>
            <button onClick={reset}>Réinitialiser</button>
        </div>
    );
}

export default Counter;
