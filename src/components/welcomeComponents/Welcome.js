import React from "react";

const Welcome = (props) => {
    return (
        <div>
            <h2 className="message">
                First, you will select your community using your community code.
            </h2>
            <img className="communitycode" src={props.communitycodeasset} />
            {/* <img className="keyboard" src={keyboardasset} /> */}
            <button
                className="next"
                onClick={() => props.displayWelcome("Welcome2Share")}
            >
                Next
            </button>
            {/* <img className="buttons" src={buttons2} /> */}
        </div>
    );
};

export default Welcome;
