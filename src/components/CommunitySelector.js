import { useState, React } from "react";
import { db } from "../firebase";
import { getDoc, doc, setDoc } from "firebase/firestore";
import { customAlphabet } from "nanoid";
import partialdot from "../components/assets/partialdot.png";
import "./CommunitySelector.css";

const CommunitySelector = ({ user, setCommunity, setUserLocation }) => {
  const nanoid = customAlphabet("1234567890abcdef", 5);
  const [code, setCode] = useState("");

  const queryDatabase = async () => {
    const ref = doc(db, "communities", code);
    const snap = await getDoc(ref);
    if (snap.data()) {
      getDoc(doc(ref, "markers", user.uid))
        .then((userLocation) => {
          if (userLocation.data().expiration) {
            setUserLocation(true);
          }
        })
        .catch(() => null);
      setCommunity(code);
    } else {
      alert("Community code " + code + " does not yet exist.");
    }
  };

  const handleCodeSubmit = (event) => {
    setCode(event.target.value);
  };

  const createNewCommunity = async () => {
    const newCommunityCode = nanoid();
    const docExists = (
      await getDoc(doc(db, "communities", newCommunityCode))
    ).exists();
    while (docExists) {
      newCommunityCode = nanoid();
      docExists = (
        await getDoc(doc(db, "communities", newCommunityCode))
      ).exists();
    }
    setDoc(doc(db, "communities", newCommunityCode), {})
      .then(() => {
        setCommunity(newCommunityCode);
      })
      .catch((e) => console.log(e));
  };

  return (
    <div>
      <h1>Please enter your Green Dot community code.</h1>
      <div className="submit-div">
        <input
          onChange={(e) => handleCodeSubmit(e)}
          placeholder="Enter your community code."
          value={code}
          onKeyDown={(e) => {
            if (e.key == "Enter") {
              queryDatabase();
            }
          }}
        />

        <button onClick={queryDatabase}>Submit</button>
      </div>
      <div className="create-div">
        <button className="create" onClick={createNewCommunity}>
          <h4>Or click here to create a new community.</h4>
        </button>
      </div>
      <div className="partial-dot-div">
        <img className="partial-dot" src={partialdot} />
      </div>
    </div>
  );
};

export default CommunitySelector;
