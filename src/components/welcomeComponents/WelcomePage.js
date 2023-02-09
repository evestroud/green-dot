import "./WelcomePage.css";
import { useState, React } from "react";
import Welcome1Code from "./Welcome1Code";
import Welcome2Share from "./Welcome2Share";
import Welcome3Map from "./Welcome3Map";
import Welcome4GreenDots from "./Welcome4GreenDots";
import Welcome5Groups from "./Welcome5Groups";

const WelcomePage = ({ skipWelcome }) => {
    const [welcomePage, setIsWelcomePage] = useState("Welcome1");

    const displayWelcomePage = pageName => {
        setIsWelcomePage(pageName);
    };

    return (
        <div>
            {welcomePage === "Welcome1" &&
                <div>
                    <h1>Welcome to Green Dot</h1>
                    <h2>Connecting in REAL life just got easier.</h2>
                    <button onClick={() => displayWelcomePage("Welcome1Code")}>
                        Next Page
                    </button>
                </div>}
            {welcomePage === "Welcome1Code" &&
                <Welcome1Code displayWelcome={displayWelcomePage} />}
            {welcomePage === "Welcome2Share" &&
                <Welcome2Share displayWelcome={displayWelcomePage} />}
            {welcomePage === "Welcome3Map" &&
                <Welcome3Map displayWelcome={displayWelcomePage} />}
            {welcomePage === "Welcome4GreenDots" &&
                <Welcome4GreenDots displayWelcome={displayWelcomePage} />}
            {welcomePage === "Welcome5Groups" &&
                <Welcome5Groups
                    displayWelcome={displayWelcomePage}
                    skipWelcome={skipWelcome}
                />}
            {welcomePage === "Welcome5Groups"
                ? <button onClick={() => skipWelcome()}>I'm Ready</button>
                : <button onClick={() => skipWelcome()}>Skip Welcome</button>}
        </div>
    );
};

export default WelcomePage;
