import React from "react";

const Welcome5Groups = (props) => {
    return <div>
            <h1>Welcome5Groups</h1>
            <button onClick={() => props.displayWelcome("Welcome4GreenDots")}>
                Back
            </button>
        </div>;
};

export default Welcome5Groups;
