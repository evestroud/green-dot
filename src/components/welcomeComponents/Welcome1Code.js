import React from "react";

const Welcome1Code = props => {
    return (
        <div>
            <h1>Welcome1Code</h1>
            <button onClick={() => props.displayWelcome("Welcome2Share")}>
                Next
            </button>
        </div>
    );
};

export default Welcome1Code;
