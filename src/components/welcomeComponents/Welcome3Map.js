import React from "react";

const Welcome3Map = props => {
    return <div>
            <h2>
                Be sure to grant Green Dot permission to view your location
            </h2>
            <button onClick={() => props.displayWelcome("Welcome2Share")}>
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
