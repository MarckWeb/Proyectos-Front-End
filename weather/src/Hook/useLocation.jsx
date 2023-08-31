import { useEffect, useState } from 'react';

function useLocation() {
    const [location, setLocation] = useState(null);
    const [error, setError] = useState(null);


    useEffect(() => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;
                    setLocation({ latitude, longitude });
                },
                (error) => {
                    setError(error.message);
                }
            );
        } else {
            setError('La geolocalización no es compatible con este navegador.');
        }
    }, []);

    return { location, error };
}

export default useLocation;