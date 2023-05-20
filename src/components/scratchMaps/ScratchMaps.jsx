import React from "react";
import GoogleMapReact from "google-map-react";
import { useState } from "react";

const AnyReactComponent = ({ text }) => (
  <div className="text-orange-500 rounded-full bg-emerald-500 w-10 h-10">
    {text}
  </div>
);

export default function ScratchMaps() {
  const [isLoaded, setIsLoaded] = useState(false);
  const defaultProps = {
    center: {
      lat: 48.42604439999999,
      lng: -123.3697281,
    },
    zoom: 15,
  };

  const onChange = (e) => {
    console.log(e);
  }

  setTimeout(() => {
    setIsLoaded(true);
  }, 3000);
  return isLoaded ? (
    <>
      <h1>Hello world</h1>
      // Important! Always set the container height explicitly
      <div style={{ height: "50vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDbuOKMGJfPoAbiXmbESa1e6P9Wg1bIaUA" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          onChange={onChange}
        >
          <div
            lat={48.42604439999999}
            lng={-123.3697281}
            className="text-orange-500 rounded-full bg-emerald-500 w-10 h-10"
          >
            dsadsa
          </div>
          {/* <AnyReactComponent lat={48.42604439999999} lng={-123.3697281} text="My Marker" /> */}
        </GoogleMapReact>
      </div>
    </>
  ) : (
    <>
      <h1>nothing rendered</h1>
    </>
  );
}
