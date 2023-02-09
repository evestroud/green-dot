import { useState, React } from "react";
import { db } from "../firebase";
import { collection, query, getDocs } from "firebase/firestore";

const CommunitySelector = () => {
    const [code, setCode] = useState("");

    const queryDatabase = async () => {
        const q = query(collection(db, "communities"));
        const querySnapshot = await getDocs(q)
        querySnapshot.forEach(doc => {
            console.log(doc.id, " => ", doc.data());
        });
    };

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
