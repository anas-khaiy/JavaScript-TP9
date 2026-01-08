// src/components/OnlineStatus.js
import React from 'react';
import useOnlineStatus from '../hooks/useOnlineStatus';

function OnlineStatus() {
    const isOnline = useOnlineStatus();

    return (
        <div className="online-status" style={{ margin: '20px 0' }}>
            <h3>Statut de connexion</h3>
            <p>
                Vous êtes actuellement{' '}
                <strong>
                    {isOnline ? 'en ligne ✅' : 'hors ligne ❌'}
                </strong>
            </p>

            <p style={{ fontSize: '0.8em' }}>
                (Ouvrez les React DevTools pour voir useDebugValue en action)
            </p>
        </div>
    );
}

export default OnlineStatus;
