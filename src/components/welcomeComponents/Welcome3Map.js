import React from "react";

const Welcome3Map = props => {
    return <div>
            <h1>Welcome3Map</h1>
            <button
                onClick={() => props.displayWelcome("Welcome2Share")}
            >
                Back
            </button>
            <button
                onClick={() => props.displayWelcome("Welcome4GreenDots")}
            >
                Next
            </button>
        </div>;
};

export default Welcome3Map;
