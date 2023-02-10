import React from "react";
import "./Welcome2Code.css";
import buttons3 from "../assets/buttons3.png";
import share from "../assets/share.png";

const Welcome2Share = props => {
    return (
        <div>
            <button
                className="back"
                onClick={() => props.displayWelcome("Welcome1Code")}
            >
                {"<<"}
            </button>
            <h2 className="message">
                Then, share your green dot. It’s anonymous, and only your
                community will see your dot!
            </h2>
            <img className="share" src={share} />

            <button
                className="next"
                onClick={() => props.displayWelcome("Welcome3Map")}
            >
                Next
            </button>
            <img className="buttons" src={buttons3} />
        </div>
    );
};

export default Welcome2Share;
