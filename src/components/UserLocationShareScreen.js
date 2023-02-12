import React from "react";
import "./UserLocationShareScreen.css";
import { db } from "../firebase";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  setDoc,
  serverTimestamp,
  Timestamp,
} from "firebase/firestore";

const UserLocationShareScreen = ({ community, setUserLocation, user }) => {
  const shareLocation = () => {
    navigator.geolocation.getCurrentPosition(async (res) => {
      const [lat, lng] = [res.coords.latitude, res.coords.longitude];
      const communityDoc = doc(db, "communities", community);
      const newMarker = doc(communityDoc, "markers", user.uid);
      await setDoc(newMarker, {
        timestamp: serverTimestamp(),
      });
      const postedMarker = (await getDoc(newMarker)).data();
      const expiration = postedMarker.timestamp.toDate();
      expiration.setHours(expiration.getHours() + 1);
      await setDoc(newMarker, {
        lat,
        lng,
        expiration,
        timestamp: serverTimestamp(),
      });
      setUserLocation(true);
    });
  };

  return (
    <div>
      <h1>Share Your Location</h1>
      <p>Community code: {community}</p>
      <button onClick={() => shareLocation()}>Send Location to DB</button>
    </div>
  );
};

export default UserLocationShareScreen;
