import React from "react";

const Welcome4GreenDots = props => {
    return <div>
            <h2>
                Congratulations! You can now see your community members on
                Green Dot.
            </h2>
            <button onClick={() => props.displayWelcome("Welcome3Map")}>
                Back
            </button>
            <button onClick={() => props.displayWelcome("Welcome5Groups")}>
                Next
            </button>
        </div>;
};

export default Welcome4GreenDots;
