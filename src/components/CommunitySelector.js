import { useState, React, useRef } from "react";
import { db } from "../firebase";
import { getDoc, doc } from "firebase/firestore";
import { customAlphabet } from "nanoid";

const CommunitySelector = props => {
    const nanoid = customAlphabet("1234567890abcdef", 5);
    const communityCode = useRef(nanoid()).current;
    const [code, setCode] = useState("");

    const queryDatabase = async () => {
        const docRef = doc(db, "communities", code);
        const docSnap = await getDoc(docRef);
        if (docSnap.data()) {
            props.setCommunity(true);
        } else {
            alert("Community code " + code + " does not yet exist.");
        }
    };

    const handleCodeSubmit = event => {
        setCode(event.target.value);
        console.log(code);
    };

    const createNewCommunity = () => {
      props.setCommunity(true);
      setCode(communityCode);
      console.log(communityCode)

    }

    return (
        <div>
            <h4>CommunitySelector</h4>
            <h1>Please enter your Green Dot community code.</h1>
            <input
                onChange={e => handleCodeSubmit(e)}
                placeholder="Enter your community code."
                value={code}
            />
            <button onClick={queryDatabase}>Submit</button>
            <button onClick={createNewCommunity}>
                <h4>Or click here to create a new community.</h4>
            </button>
        </div>
    );
};

export default CommunitySelector;
