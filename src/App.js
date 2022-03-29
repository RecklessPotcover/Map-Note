import React from "react";
import { useEffect, useState } from "react";

import Map from "./features/map/Map";

function App() {
  const defaultLocation = {
    address: "Apple Park Cupertino",
    lat: 37.33472,
    lng: -122.00889,
  };

  const [userLocation, setUserLocation] = useState(defaultLocation);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setUserLocation({
        ...userLocation,
        address: "You are here",
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  }, []);

  return (
    <div className="App">
      <Map
        defaultLocation={defaultLocation}
        location={userLocation}
        zoomLevel={17}
      />
    </div>
  );
}

export default App;
