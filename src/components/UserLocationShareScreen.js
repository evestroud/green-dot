import React from "react";
import "./UserLocationShareScreen.css";
import { db } from "../firebase";
import { doc, addDoc, setDoc, collection } from "firebase/firestore";
import code from "./CommunitySelector";

const UserLocationShareScreen = () => {
    const getCurrentLocation = () => {
        console.log("called getCurrentLocation");
        navigator.geolocation.getCurrentPosition(res => {
            const [lat, lng] = [res.coords.latitude, res.coords.longitude];
            addMarkerToDb(lat, lng);
        });
    };

    const addMarkerToDb = (lat, lng) => {
        addDoc(collection(db, "communities", "5555"), { lat, lng });
        console.log('ran addmarker')
    };

    return (
        <div>
            <h1>Share Your Location</h1>
            <button onClick={() => getCurrentLocation()}>Share Button</button>
        </div>
    );
};

export default UserLocationShareScreen;
