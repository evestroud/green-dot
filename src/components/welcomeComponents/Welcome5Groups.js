import React from "react";

const Welcome5Groups = props => {
    return (
        <div>
            <button onClick={() => props.displayWelcome("Welcome4GreenDots")}>
                {"<<"}
            </button>
            <h1>Who can use Green Dot? </h1>
            <ul>
                <li>book clubs</li>
                <li>civic groups</li>
                <li>Meetup groups</li>
                <li>sports teams</li>
                <li> ...and you!</li>
            </ul>
        </div>
    );
};

export default Welcome5Groups;
