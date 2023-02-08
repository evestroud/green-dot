import React, { useRef, useState } from 'react'
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import './CommunityMap.css'
import share from "./assets/share.png"

const MAPS_API_KEY = `${process.env.REACT_APP_MAPS_API_KEY}`;

const CommunityMap = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: MAPS_API_KEY,
  });
  const [markers, setMarkers] = useState([]);
  const [center, setCenter] = useState({ lat: 39, lng: -95 });
  const [zoom, setZoom] = useState(4);
  const ref = useRef(null);

  return (
    <div id="community-map">
    isLoaded ? (
        <GoogleMap
          mapContainerClassName="map-container"
          onTilesLoaded={() => {
            setCenter(null);
            setZoom(null);
          }}
          center={center}
          zoom={zoom}
          onLoad={(map) => (ref.current = map)}
        >
        </GoogleMap>
      ) : (
        <h2>Loading map...</h2>
      )
    </div>
  )
}

export default CommunityMap