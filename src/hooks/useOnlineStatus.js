// src/hooks/useOnlineStatus.js
import { useState, useEffect, useDebugValue } from 'react';

function useOnlineStatus() {
    const [isOnline, setIsOnline] = useState(navigator.onLine);

    // useDebugValue affiche une étiquette pour ce hook dans React DevTools
    useDebugValue(isOnline ? 'En ligne' : 'Hors ligne');

    useEffect(() => {
        const handleOnline = () => setIsOnline(true);
        const handleOffline = () => setIsOnline(false);

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, []);

    return isOnline;
}

export default useOnlineStatus;
