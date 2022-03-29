import GoogleMapReact from "google-map-react";

import LocationPin from "../location-pin/LocationPin";

function Map({ defaultLocation, location, zoomLevel }) {
  return (
    <div className="google-map" style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDlBA1DHUbXYWOfM1nhiLAt9hqgKVsHef4" }}
        defaultCenter={defaultLocation}
        center={location}
        defaultZoom={zoomLevel}
        yesIWantToUseGoogleMapApiInternals
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
    </div>
  );
}

export default Map;
