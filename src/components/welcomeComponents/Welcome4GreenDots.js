import React from "react";
import "./Welcome4GreenDots.css";
import mapdemo from "../assets/mapdemo.png"

const Welcome4GreenDots = props => {
    return <div>
            <button className="back" onClick={() => props.displayWelcome("Welcome3Map")}>
                {"<<"}
            </button>
            <h2 className="message-final">
                Congratulations! You can now see your community members on
                Green Dot.
            </h2>

            <button className="next-final" onClick={() => props.displayWelcome("Welcome5Groups")}>
                Next
            </button>
            <img className="map-final" src={mapdemo} />
        </div>;
};

export default Welcome4GreenDots;
