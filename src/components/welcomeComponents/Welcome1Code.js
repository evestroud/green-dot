import React from "react";

const Welcome1Code = props => {
    return (
        <div>
            <h2>
                First, you will select your community using your community code.
            </h2>
            <button onClick={() => props.displayWelcome("Welcome2Share")}>
                Next
            </button>
            <h5>Welcome1Code</h5>
        </div>
    );
};

export default Welcome1Code;
