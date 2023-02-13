import React, { useEffect, useRef, useState } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import "./CommunityMap.css";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  Timestamp,
  where,
} from "firebase/firestore";
import { db } from "../firebase";

const MAPS_API_KEY = `${process.env.REACT_APP_MAPS_API_KEY}`;

const CommunityMap = ({ community, user, setUserLocation }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: MAPS_API_KEY,
  });
  const [markers, setMarkers] = useState([]);
  const [center, setCenter] = useState({ lat: 33.75, lng: -84.38 });
  const [zoom, setZoom] = useState(4);
  const [refreshListener, setRefreshListener] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const q = query(
      collection(doc(db, "communities", community), "markers"),
      where("expiration", ">", Timestamp.now())
    );

    onSnapshot(
      q,
      (QuerySnapshot) => {
        let markers = [];
        QuerySnapshot.forEach((marker) => {
          markers.push({ ...marker.data(), id: marker.id });
        });
        setMarkers(markers);
        zoomToFit(markers);
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
  }, [isLoaded, refreshListener]);

  const zoomToFit = (markers) => {
    console.log(markers);
    if (markers.length === 1) {
      setCenter(markers[0]);
      setZoom(12);
    } else {
      const bounds = new window.google.maps.LatLngBounds();
      markers.forEach(({ lat, lng }) => {
        bounds.extend({ lat, lng });
        console.log(bounds)
      });
      ref.current.fitBounds(bounds);
    }
  };

  const stopShareLocation = async () => {
    await deleteDoc(doc(db, "communities", community, "markers", user.uid));
    setUserLocation(false);
  };

  return (
    <div className="share-community">
      <h2>
        Congratulations! You can now see your community members on Green Dot.{" "}
      </h2>
      <h4>Community Code: {community}</h4>
      <div id="community-map">
        {isLoaded ? (
          <>
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
    </div>
  );
};

export default CommunityMap;
