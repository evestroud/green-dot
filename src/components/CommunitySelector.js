import { useState, React } from "react";
import { db } from "../firebase";
import { getDoc, doc } from "firebase/firestore";

const CommunitySelector = props => {
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
            <button onClick={() => props.setCommunity(true)}>
                <h4>Or click here to create a new community.</h4>
            </button>
        </div>
    );
};

export default CommunitySelector;
