import React from "react";
// import GoogleMapReact from "google-map-react";
import { useState, useRef } from "react";
import { ref } from "yup";

const AnyReactComponent = ({ text }) => (
  <div className="text-orange-500 rounded-full bg-emerald-500 w-10 h-10">
    {text}
  </div>
);

export default function ScratchMaps() {
  const [isLoaded, setIsLoaded] = useState(false);
  const test = useRef();
  const [lat, setLat] = useState(48.42604439999999)
  const [lng, setLng] = useState(-123.3697281)
  const defaultProps = {
    center: {
      lat: 48.42604439999999,
      lng: -123.3697281,
    },
    zoom: 15,
  };



  setTimeout(() => {
    setIsLoaded(true);
  }, 500);
  return isLoaded ? (
    <>
      <h1>Hello world</h1>
      // Important! Always set the container height explicitly
      <div style={{ height: "50vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDbuOKMGJfPoAbiXmbESa1e6P9Wg1bIaUA" }}
          defaultCenter={defaultProps.center}
          center={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          onDragEnd={() => {
            setLat(48.42)
            setLng(-123.36)
          }}
        >
          {/* <div
            lat={48.42604439999999}
            lng={-123.3697281}
            className="text-orange-500 rounded-full bg-emerald-500 w-10 h-10"
            style={{width: '300px'}}
          >
            dsadsa
          </div> */}
          <AnyReactComponent lat={lat} lng={lng} text="My Marker" ref={test} />
        </GoogleMapReact>
      </div>
    </>
  ) : (
    <>
      <h1>nothing rendered</h1>
    </>
  );
}
