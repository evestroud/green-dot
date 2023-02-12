import React from "react";
import "./UserLocationShareScreen.css";
import { db } from "../firebase";
import { addDoc, collection, doc, getDoc, setDoc } from "firebase/firestore";
import share from "../components/assets/share.png";

const UserLocationShareScreen = ({ community, setUserLocation, user }) => {
    const shareLocation = () => {
        navigator.geolocation.getCurrentPosition(async res => {
            const [lat, lng] = [res.coords.latitude, res.coords.longitude];
            const communityDoc = doc(db, "communities", community);
            const newMarker = doc(communityDoc, "markers", user.uid);
            await setDoc(newMarker, { lat, lng });
            const postedMarker = await getDoc(newMarker);
            setUserLocation(true);
        });
    };

    return (
        <div>
            <h2 className="share-header">
                Share your location to view your Green Dot community members.
            </h2>
            <div className="share-screen">
                <button
                    className="share-location"
                    onClick={() => shareLocation()}
                >
                    <img src={share} />
                </button>
            </div>
        </div>
    );
};

export default UserLocationShareScreen;
