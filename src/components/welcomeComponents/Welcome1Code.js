import React from "react";
import "./Welcome1Code.css";
import communitycodeasset from "../assets/communitycodeasset.png";
import keyboardasset from "../assets/keyboardasset.png";
import buttons2 from "../assets/buttons2.png";

const Welcome1Code = props => {
    return (
        <div>
            <h2 className="message">
                First, you will select your community using your community code.
            </h2>
            <img className="communitycode" src={communitycodeasset} />
            <img className="keyboard" src={keyboardasset} />
            <button
                className="next"
                onClick={() => props.displayWelcome("Welcome2Share")}
            >
                Next
            </button>
            <img className="buttons" src={buttons2} />
        </div>
    );
};

export default Welcome1Code;
