import { useState, React } from "react";
import { db } from "../firebase";
import { collection, query, getDoc, doc } from "firebase/firestore";

const CommunitySelector = () => {
    const [code, setCode] = useState("");
    console.log(typeof code);
    console.log(code);

    const queryDatabase = async () => {
        const docRef = doc(db, "communities", code);
        const docSnap = await getDoc(docRef);
        if (docSnap.data()) {
            console.log("yes");
        } else {
            console.log("no");
        }
    };

    // const queryDatabase = async () => {
    //     const q = query(doc(db, "communities"));
    //     const querySnapshot = await getDocs(q)
    //     console.log(querySnapshot)
    //     querySnapshot.forEach(doc => {
    //         console.log(doc.id, " => ", doc.data());
    //     });
    // };

    const handleCodeSubmit = event => {
        setCode(event.target.value);
        console.log(code);
    };

    return (
        <div>
            <h1>Please enter your Green Dot community code.</h1>
            <input
                onChange={e => handleCodeSubmit(e)}
                placeholder="Enter your community code."
                value={code}
            />
            <button onClick={queryDatabase}>Submit</button>
        </div>
    );
};

export default CommunitySelector;
