import React, { useEffect, useRef, useState } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import "./CommunityMap.css";
import share from "./assets/share.png";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  Timestamp,
  where,
} from "firebase/firestore";
import { db, auth } from "../firebase";

const MAPS_API_KEY = `${process.env.REACT_APP_MAPS_API_KEY}`;

const CommunityMap = ({ community, user, setUserLocation }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: MAPS_API_KEY,
  });
  const [markers, setMarkers] = useState([]);
  const [center, setCenter] = useState({ lat: 39, lng: -95 });
  const [zoom, setZoom] = useState(4);
  const [refreshListener, setRefreshListener] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const q = query(
      collection(doc(db, "communities", community), "markers"),
      where("expiration", ">", Timestamp.now())
    );

    const unsubscribe = onSnapshot(
      q,
      (QuerySnapshot) => {
        let markers = [];
        QuerySnapshot.forEach((marker) => {
          markers.push({ ...marker.data(), id: marker.id });
        });
        setMarkers(markers);
      },
      (e) => {
        if (refreshListener < 6) {
          setTimeout(() => {
            console.log(
              "An error has occurred, trying again in ten seconds..."
            );
            setRefreshListener(refreshListener + 1);
          });
        } else {
          console.log("Aborting retry");
          console.log(e);
          stopShareLocation();
        }
      }
    );
  }, [refreshListener]);

  const stopShareLocation = async () => {
    await deleteDoc(doc(db, "communities", community, "markers", user.uid));
    setUserLocation(false);
  };

  return (
    <div id="community-map">
      {isLoaded ? (
        <>
          <p>Community code: {community}</p>
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
              <Marker position={{ lat, lng }} key={id} />
            ))}
          </GoogleMap>
          <button onClick={stopShareLocation}>Stop sharing</button>
        </>
      ) : (
        <h2>Loading map...</h2>
      )}
    </div>
  );
};

export default CommunityMap;
