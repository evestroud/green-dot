import React from "react";
import "./UserLocationShareScreen.css";
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";

const UserLocationShareScreen = props => {
    const getCurrentLocation = () => {
        navigator.geolocation.getCurrentPosition(res => {
            const [lat, lng] = [res.coords.latitude, res.coords.longitude];
            addMarkerToDb(lat, lng);
        });
    };

    const addMarkerToDb = (lat, lng) => {
        addDoc(collection(db, "communities", props.community, "markers"), {
            lat,
            lng
        }).then(() => console.log("successfully added to DB"));
    };

    return (
        <div>
            <h1>Share Your Location</h1>
            <button onClick={() => getCurrentLocation()}>
                Send Location to DB
            </button>
        </div>
    );
};

export default UserLocationShareScreen;
