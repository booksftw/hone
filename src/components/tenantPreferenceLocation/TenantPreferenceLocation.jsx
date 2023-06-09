import React from "react";
import { useState } from "react";
import { GoogleMap, useJsApiLoader, Circle } from '@react-google-maps/api';
import Slider from '@mui/material/Slider';

const containerStyle = {
    width: '400px',
    height: '400px'
};



export default function TenantPreferenceLocation(props) {
    const center = {
        lat: props.lat,
        lng: props.lng
    };
    const [isLoaded, setIsLoaded] = useState(false);
    const [zoom, setZoom] = useState(15);

    setTimeout(() => {
        setIsLoaded(true)

    }, 3000)
    setTimeout(() => {
        setZoom(2)

    }, 3500)
    // const { isLoaded } = useJsApiLoader({
    //     id: 'google-map-script',
    //     // googleMapsApiKey: "AIzaSyCJtncQqXCRQleNhLFo1YXP5_bq_1zH7Ck"
    // })
    // useJsApiLoader({
    //     id: 'google-map-script',
    //     googleMapsApiKey: "AIzaSyCJtncQqXCRQleNhLFo1YXP5_bq_1zH7Ck"
    // })

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

    const options = {
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35,
        clickable: false,
        draggable: false,
        editable: false,
        visible: true,
        radius: 30000,
        zIndex: 1
    }

    return (

        isLoaded ?
            <>
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={zoom}
                    onLoad={onLoad}
                    onUnmount={onUnmount}
                >
                    {/* <div className="rounded-full w-10 h-10">
                        <img src="public\images\hone-logo.png" alt="" />
                    </div>

                    <h1>Test</h1> */}
                    <Circle center={center} radius={3000} options={options} />
                    { /* Child components, such as markers, info windows, etc. */}
                    <></>
                </GoogleMap>

                <Slider onChange={(e) => console.log(e.target.value)} defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
            </>
            : <></>
    )
}