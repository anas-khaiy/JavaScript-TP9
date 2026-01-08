// src/components/MeasureBox.js
import React, { useRef, useState, useLayoutEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

function MeasureBox() {
    const boxRef = useRef(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    const [boxWidth, setBoxWidth] = useState(50);
    const { theme } = useTheme();

    // useLayoutEffect s'exécute de manière synchrone après toutes les mutations DOM
    // mais avant que le navigateur n'affiche les changements
    useLayoutEffect(() => {
        if (boxRef.current) {
            const { width, height } = boxRef.current.getBoundingClientRect();
            setDimensions({ width, height });
        }
    }, [boxWidth]); // Se déclenche quand boxWidth change

    const boxStyle = {
        width: `${boxWidth}%`,
        padding: '20px',
        backgroundColor: theme === 'dark' ? '#555' : '#e0f7fa',
        border: `1px solid ${theme === 'dark' ? '#777' : '#b2ebf2'}`,
        borderRadius: '4px',
        transition: 'width 0.3s ease'
    };

    return (
        <div className="measure-box" style={{ margin: '20px 0' }}>
            <h3>Mesure de boîte avec useLayoutEffect</h3>

            <div>
                <label>
                    Largeur de la boîte:
                    <input
                        type="range"
                        min="10"
                        max="100"
                        value={boxWidth}
                        onChange={(e) => setBoxWidth(parseInt(e.target.value))}
                        style={{ margin: '0 10px' }}
                    />
                    {boxWidth}%
                </label>
            </div>

            <div ref={boxRef} style={boxStyle}>
                Cette boîte est mesurée avec useLayoutEffect
            </div>

            <p>
                Dimensions mesurées: {Math.round(dimensions.width)}px × {Math.round(dimensions.height)}px
            </p>
        </div>
    );
}

export default MeasureBox;
