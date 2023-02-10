import React, { useEffect, useRef, useState } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import "./CommunityMap.css";
import share from "./assets/share.png";
import { collection, doc, onSnapshot, query } from "firebase/firestore";
import { db, auth } from "../firebase"

const MAPS_API_KEY = `${process.env.REACT_APP_MAPS_API_KEY}`;

const CommunityMap = ({ community }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: MAPS_API_KEY,
  });
  const [markers, setMarkers] = useState([]);
  const [center, setCenter] = useState({ lat: 39, lng: -95 });
  const [zoom, setZoom] = useState(4);
  const ref = useRef(null);

  useEffect(() => {
    const q = query(collection(doc(db, "communities", community), "markers"));

    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      let markers = [];
      QuerySnapshot.forEach((marker) => {
        markers.push({ ...marker.data(), id: marker.id });
      });
      setMarkers(markers);
      // setMyDot(markers.find((m) => m.uid === auth.currentUser.uid));
    });
  });

  return (
    <div id="community-map">
      {isLoaded ? (
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
          {markers.map(({ lat, lng, id }) => (
            <Marker
              position={{ lat, lng }}
              key={id}
            />
          ))}
        </GoogleMap>
      ) : (
        <h2>Loading map...</h2>
      )}
    </div>
  );
};

export default CommunityMap;
