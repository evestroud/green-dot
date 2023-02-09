import React from "react";

const Welcome4GreenDots = props => {
    return <div>
            <h1>Welcome4GreenDots</h1>
            <button onClick={() => props.displayWelcome("Welcome3Map")}>
                Back
            </button>
            <button onClick={() => props.displayWelcome("Welcome5Groups")}>
                Next
            </button>
        </div>;
};

export default Welcome4GreenDots;
