import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useEffect, useRef, useState } from "react";
import {
  addDoc,
  query,
  collection,
  onSnapshot,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { onAuthStateChanged, signInAnonymously } from "firebase/auth";
import { auth, db } from "./firebase";
import "./App.css";
import CommunitySelector from "./components/CommunitySelector";
import WelcomePage from "./components/welcomeComponents/WelcomePage";
import CommunityMap from "./components/CommunityMap";
import UserLocationShareScreen from "./components/UserLocationShareScreen";

const MAPS_API_KEY = `${process.env.REACT_APP_MAPS_API_KEY}`;

function App() {
  const [user, setUser] = useState(null);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);
    } else {
      signInAnonymously(auth);
    }
  });

  const [page, setIsPage] = useState("WelcomePage");

  const displayPage = (pageName) => {
    setIsPage(pageName);
  };

  return user ? (
    <div className="App">
      <h1>Green Dot.</h1>
      {page == "WelcomePage" ? <WelcomePage displayPage={displayPage} /> : null}
      {page == "CommunityMap" ? (
        <CommunityMap displayPage={displayPage} />
      ) : null}
      {page == "CommunitySelector" ? (
        <CommunitySelector displayPage={displayPage} />
      ) : null}
      {page == "UserLocationShareScreen" ? (
        <UserLocationShareScreen displayPage={displayPage} />
      ) : null}
    </div>
  ) : (
    <h1>Loading...</h1>
  );
}

export default App;
