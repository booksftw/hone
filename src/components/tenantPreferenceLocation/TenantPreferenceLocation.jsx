import React, { useEffect } from "react";
import { useState } from "react";
import {
    GoogleMap,
    useJsApiLoader,
    Circle,
    Marker,
} from "@react-google-maps/api";
import Slider from "@mui/material/Slider";

const containerStyle = {
    width: "80%",
    height: "400px",
    margin: "0 auto"
};

export default function TenantPreferenceLocation(props) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [zoom, setZoom] = useState(17);

    const center = {
        lat: props.lat,
        lng: props.lng,
    };

    setTimeout(() => {
        setIsLoaded(true);
    }, 1000);

    useEffect(() => {
        // setZoom(10);
        console.log("coords changed");
        setTimeout(() => {
            setZoom(17);
        }, 500);
    }, [props.lng, props.lat]);

    // const { isLoaded } = useJsApiLoader({
    //     id: 'google-map-script',
    //     googleMapsApiKey: "AIzaSyDbuOKMGJfPoAbiXmbESa1e6P9Wg1bIaUA"
    // })
    // useJsApiLoader({
    //     id: 'google-map-script',
    //     googleMapsApiKey: "AIzaSyDbuOKMGJfPoAbiXmbESa1e6P9Wg1bIaUA"
    // })

    const [map, setMap] = React.useState(null);

    const onLoad = React.useCallback(function callback(map) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        const bounds = new window.google.maps.LatLngBounds(center);
        // const x = new window.google.maps;
        // map.fitBounds(bounds);// zooms in
        // const x = new window.google.maps;
        // x.Circle({
        //     center: center,
        //     radius: 300, 
        //     options: options
        // })
        // const {Circle} = google.maps.importLibrary("maps")
        // x.overlayMapTypes = [Circle];

        const circleOptions = {
            strokeColor: '#FF0000',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#FF0000',
            fillOpacity: 0.35,
            map: map,
            center: { lat: center.lat, lng: center.lng },
            radius: props.radius// 1000 // in meters
        };
        const circle = new window.google.maps.Circle(circleOptions);
        circle.setMap(map);


        setMap(map);
    }, []);

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null);
    }, []);

    const options = {
        strokeColor: "#000000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#000000",
        fillOpacity: 0.35,
        clickable: false,
        draggable: false,
        editable: false,
        visible: true,
        radius: 30000,
        zIndex: 1,
    };


    return isLoaded ? (
        <>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={zoom}
                onLoad={onLoad}
            //   onUnmount={onUnmount}
            >
                {/* <div className="rounded-full w-10 h-10">
                        <img src="public\images\hone-logo.png" alt="" />
                    </div>

                    <h1>Test</h1> */}
                <Circle center={center} radius={300} options={options} />
                <Marker position={center} />
                {/* Child components, such as markers, info windows, etc. */}

                <></>
            </GoogleMap>


        </>
    ) : (
        <> <h1>Loading...</h1> </>
    );
}
