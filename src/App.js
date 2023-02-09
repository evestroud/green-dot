import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useEffect, useRef, useState } from "react";
import {
    addDoc,
    query,
    collection,
    onSnapshot,
    deleteDoc,
    doc
} from "firebase/firestore";
import { onAuthStateChanged, signInAnonymously } from "firebase/auth";
import { auth, db } from "./firebase";
import "./App.css";
import CommunitySelector from "./components/CommunitySelector";
import WelcomePage from "./components/welcomeComponents/WelcomePage";
import CommunityMap from "./components/CommunityMap";
import UserLocationShareScreen from "./components/UserLocationShareScreen";

function App() {
    const [user, setUser] = useState(null);
    const [community, setCommunity] = useState(null);
    const [userLocation, setUserLocation] = useState(null);
    const [welcome, setWelcome] = useState(true);

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            console.log("auth");
            if (user) {
                setUser(user);
            } else {
                signInAnonymously(auth);
            }
        });
    }, []);

    const skipWelcome = () => {
        setWelcome(false);
    };

    return user
        ? <div className="App">
              {/* <h1>Green Dot.</h1> */}
              {welcome == true
                  ? <WelcomePage skipWelcome={skipWelcome} />
                  : community
                    ? userLocation
                      ? <CommunityMap />
                      : <UserLocationShareScreen
                            setUserLocation={setUserLocation}
                        />
                    : <CommunitySelector setCommunity={setCommunity} />}
          </div>
        : <h1>Loading...</h1>;
}

export default App;
