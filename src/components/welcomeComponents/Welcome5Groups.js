import React from "react";

const Welcome5Groups = (props) => {
    return <div>
            <h1>Who can use Green Dot? </h1>
            <ul>
              <li>book clubs</li>
              <li>civic groups</li>
              <li>Meetup groups</li>
              <li>sports teams</li>
              <li> ...and you!</li>
            </ul>
            <button onClick={() => props.displayWelcome("Welcome4GreenDots")}>
                Back
            </button>
        </div>;
};

export default Welcome5Groups;
