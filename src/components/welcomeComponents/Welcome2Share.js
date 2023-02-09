import React from "react";

const Welcome2Share = props => {
    return (
        <div>
            <h2>
                Then, share your green dot. It’s anonymous, and only your
                community will see your dot!
            </h2>
            <button onClick={() => props.displayWelcome("Welcome1Code")}>
                Back
            </button>
            <button onClick={() => props.displayWelcome("Welcome3Map")}>
                Next
            </button>
        </div>
    );
};

export default Welcome2Share;
