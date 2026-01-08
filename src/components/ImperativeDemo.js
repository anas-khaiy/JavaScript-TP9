// src/components/ImperativeDemo.js
import React, { useRef } from 'react';
import CustomInput from './CustomInput';

function ImperativeDemo() {
    // Création d'une ref pour accéder à l'API impérative
    const inputRef = useRef(null);

    // Fonctions qui utilisent l'API impérative
    const handleFocus = () => {
        inputRef.current.focus();
    };

    const handleClear = () => {
        inputRef.current.clear();
    };

    const handleSetValue = () => {
        inputRef.current.setValue('Valeur prédéfinie');
    };

    return (
        <div className="imperative-demo" style={{ margin: '20px 0' }}>
            <h3>Démonstration de useImperativeHandle</h3>

            <div style={{ margin: '10px 0' }}>
                <CustomInput
                    ref={inputRef}
                    placeholder="Input personnalisé avec API impérative"
                />
            </div>

            <div>
                <button onClick={handleFocus}>Focus</button>
                <button onClick={handleClear}>Effacer</button>
                <button onClick={handleSetValue}>Définir valeur</button>
            </div>
        </div>
    );
}

export default ImperativeDemo;
