import React from "react";
import "./Welcome3Map.css";
import sharelocation from "../assets/sharelocation.png";
import buttons4 from "../assets/buttons4.png";

const Welcome3Map = props => {
    return (
        <div>
            <button
                className="back"
                onClick={() => props.displayWelcome("Welcome2Share")}
            >
                {"<<"}
            </button>
            <h2 className="grant">
                Be sure to grant Green Dot permission to view your location
            </h2>
            <img className="sharelocation" src={sharelocation} />

            <button
                className="next"
                onClick={() => props.displayWelcome("Welcome4GreenDots")}
            >
                Next
            </button>
            <img className="buttons" src={buttons4} />
        </div>
    );
};

export default Welcome3Map;
