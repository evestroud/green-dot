import React from "react";

const Welcome2Share = (props) => {
    return <div>
            <h1>Welcome2Share</h1>
            <button onClick={() => props.displayWelcome("Welcome1Code")}>
                Back
            </button>
            <button onClick={() => props.displayWelcome("Welcome3Map")}>
                Next
            </button>
        </div>;
};

export default Welcome2Share;
