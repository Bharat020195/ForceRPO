import { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import '../app/globals.css';

const Map = () => {
    const [mapWidth, setMapWidth] = useState('600px');
    const [mapHeight, setMapHeight] = useState('400px');

    useEffect(() => {
        function handleResize() {

            if (window.innerWidth <= 768) {
                setMapWidth('400px');
                setMapHeight('300px');
            } else {
                setMapWidth('600px');
                setMapHeight('400px');
            }
        }        
        window.addEventListener('resize', handleResize); 
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const containerStyle = {
        width: mapWidth,
        height: mapHeight
    };

    const center = {
        lat: 17.4484, 
        lng: 78.3905  
    };

    const madhapurLocation = {
        lat: 17.4484,
        lng: 78.3905
    };

    return (
        <LoadScript googleMapsApiKey='AIzaSyC5osbna5eGncUgq9MdFTNdOeIBtVuWq8U'>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
            >
                <Marker position={madhapurLocation} />
            </GoogleMap>
        </LoadScript>
    );
};

export default Map;
