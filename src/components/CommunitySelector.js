import { useState, React, useRef } from "react";
import { db } from "../firebase";
import { getDoc, doc, collection, setDoc } from "firebase/firestore";
import { customAlphabet } from "nanoid";

const CommunitySelector = props => {
    const nanoid = customAlphabet("1234567890abcdef", 5);
    // const communityCode = useRef(nanoid()).current;
    const [code, setCode] = useState("");

    const queryDatabase = async () => {
        const docRef = doc(db, "communities", code);
        const docSnap = await getDoc(docRef);
        if (docSnap.data()) {
            props.setCommunity(code);
        } else {
            alert("Community code " + code + " does not yet exist.");
        }
    };

    const handleCodeSubmit = event => {
        setCode(event.target.value);
        console.log(code);
    };

    const createNewCommunity = async () => {
        const communities = collection(db, "communities");
        const newCommunityCode = nanoid();
        const docExists = (await getDoc(
            doc(db, "communities", newCommunityCode)
        )).exists();
        console.log(docExists);
        while (docExists) {
            newCommunityCode = nanoid();
            docExists = (await getDoc(
                doc(db, "communities", newCommunityCode)
            )).exists();
            console.log(docExists);
        }
        setDoc(doc(db, "communities", newCommunityCode), {})
            .then(() => {
                props.setCommunity(newCommunityCode);
                console.log(
                    "this is the new community code" + newCommunityCode
                );
            })
            .catch(e => console.log(e));
    };

    return (
        <div>
            <h4>CommunitySelector</h4>
            <h1>Please enter your Green Dot community code.</h1>
            <input
                onChange={e => handleCodeSubmit(e)}
                placeholder="Enter your community code."
                value={code}
                onKeyDown={e => {
                    if (e.key == "Enter") {
                        queryDatabase();
                    }
                }}
            />
            <button onClick={queryDatabase}>Submit</button>
            <button onClick={createNewCommunity}>
                <h4>Or click here to create a new community.</h4>
            </button>
        </div>
    );
};

export default CommunitySelector;
