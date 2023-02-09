import "./WelcomePage.css";
import { useState, React } from "react";
import Welcome1Code from "./Welcome1Code";
import Welcome2Share from "./Welcome2Share";

const WelcomePage = ({skipWelcome}) => {
    const [welcomePage, setIsWelcomePage] = useState("Welcome1");

    const displayWelcomePage = pageName => {
        setIsWelcomePage(pageName);
    };

    return (
        <div>
            {welcomePage === "Welcome1"
                && <div>
                      <div>WelcomePage</div>
                      <button
                          onClick={() => displayWelcomePage("Welcome1Code")}
                      >
                          Next Page
                      </button>
                      <button onClick={()=> skipWelcome()}>Skip Welcome</button>
                  </div>
                }
            {welcomePage === "Welcome1Code"
                && <Welcome1Code displayWelcome={displayWelcomePage} />
                }
            {welcomePage === "Welcome2Share" && <Welcome2Share /> }
        </div>
    );
};

export default WelcomePage;
