import { useEffect, useState } from "react";
import { onAuthStateChanged, signInAnonymously } from "firebase/auth";
import { auth } from "./firebase";
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
    onAuthStateChanged(auth, (user) => {
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

  return user ? (
    <div className="App">
      {welcome == true ? (
        <WelcomePage skipWelcome={skipWelcome} />
      ) : community ? (
        userLocation ? (
          <CommunityMap
            community={community}
            user={user}
            setUserLocation={setUserLocation}
          />
        ) : (
          <UserLocationShareScreen
            setUserLocation={setUserLocation}
            community={community}
            user={user}
          />
        )
      ) : (
        <CommunitySelector
          setCommunity={setCommunity}
          user={user}
          setUserLocation={setUserLocation}
        />
      )}
    </div>
  ) : (
    <h1>Loading...</h1>
  );
}

export default App;
