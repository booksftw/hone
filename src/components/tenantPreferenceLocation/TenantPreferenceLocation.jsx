import React from "react";

import { GoogleMap, useJsApiLoader, Circle } from '@react-google-maps/api';

const containerStyle = {
    width: '400px',
    height: '400px'
};



export default function TenantPreferenceLocation(props) {
    const center = {
        lat: props.lat,
        lng: props.lng
    };

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyCJtncQqXCRQleNhLFo1YXP5_bq_1zH7Ck"
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);

        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={15}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            <div className="rounded-full w-10 h-10">
                <img src="public\images\hone-logo.png" alt="" />
            </div>

            <Circle center={{
                lat: -3.745,
                lng: -38.523
            }} radius={300} />
            { /* Child components, such as markers, info windows, etc. */}
            <></>
        </GoogleMap>
    ) : <></>
}