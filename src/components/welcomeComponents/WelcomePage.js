import "./WelcomePage.css";
import { useState, React } from "react";
import SingleWelcomePage from "./SingleWelcomePage";
import buttons1 from "../assets/buttons1.png";
import buttons2 from "../assets/buttons2.png";
import buttons3 from "../assets/buttons3.png";
import buttons4 from "../assets/buttons4.png";
import buttons5 from "../assets/buttons5.png";
import mapdemo from "../assets/mapdemo.png";
import communitycodeasset from "../assets/communitycodeasset.png";
import keyboardasset from "../assets/keyboardasset.png";
import share from "../assets/share.png";
import sharelocation from "../assets/sharelocation.png";
import javajunction from "../assets/javajunction.png";
import ready from "../assets/ready.png";

const WelcomePage = props => {
    const welcome6 = {
        name: "welcome6",
        image1: null,
        header: "Who can use Green Dot?",
        subText: (
            <ul>
                <li id="bookClubs">book clubs</li>
                <li id="civicGroups">civic groups</li>
                <li id="meetupGroups">Meetup groups</li>
                <li id="sportsTeams">sports teams</li>
                <li id="andYou">...and you!</li>
            </ul>
        ),
        image2: javajunction,
        image3: null,
        greenDots: "",
        ready: (
            <button
                className="ready-button"
                onClick={() => props.skipWelcome()}
            >
                <img className="ready" src={ready} />
            </button>
        ),
        back: "welcome5"
    };
    const welcome5 = {
        name: "welcome5",
        image1: null,
        header: null,
        subText:
            "Congratulations!  You can now see your community members on Green Dot",
        image2: mapdemo,
        image3: null,
        next: welcome6,
        greenDots: buttons5,
        back: "welcome4"
    };
    const welcome4 = {
        name: "welcome4",
        image1: null,
        header: null,
        subText: "Be sure to grant Green Dot permission to view your location.",
        image2: sharelocation,
        image3: null,
        greenDots: buttons4,
        next: welcome5,
        skip: true,
        back: "welcome3"
    };
    const welcome3 = {
        name: "welcome3",
        image1: null,
        header: null,
        subText:
            "Then, share your green dot.  It's anonymous, and only your community will see your dot!",
        image2: share,
        image3: null,
        greenDots: buttons3,
        next: welcome4,
        skip: true,
        back: "welcome2"
    };
    const welcome2 = {
        name: "welcome2",
        image1: null,
        header: null,
        subText: "First, select your community using your community code",
        image2: communitycodeasset,
        image3: keyboardasset,
        greenDots: buttons2,
        next: welcome3,
        skip: true,
        back: "welcome1"
    };
    const welcome1 = {
        name: "welcome1",
        image1: mapdemo,
        header: "Welcome to Green Dot!",
        subText: "Connecting in REAL life just got easier",
        image2: null,
        image3: null,
        greenDots: buttons1,
        next: welcome2,
        skip: true
    };
    const [welcomePage, setIsWelcomePage] = useState(welcome1);

    const goBack = page => {
        if (page == "welcome1") {
            setIsWelcomePage(welcome1);
        }
        if (page == "welcome2") {
            setIsWelcomePage(welcome2);
        }
        if (page == "welcome3") {
            setIsWelcomePage(welcome3);
        }
        if (page == "welcome4") {
            setIsWelcomePage(welcome4);
        }
        if (page == "welcome5") {
            setIsWelcomePage(welcome5);
        }
    };

    console.log(welcomePage.buttons);

    return (
        <div>
            <SingleWelcomePage
                classNameRender={welcomePage.name}
                image1={welcomePage.image1}
                header={welcomePage.header}
                subText={welcomePage.subText}
                image2={welcomePage.image2}
                image3={welcomePage.image3}
                greenDots={welcomePage.greenDots}
                next={welcomePage.next}
                back={welcomePage.back}
                goBack={goBack}
                skipWelcome={props.skipWelcome}
                setWelcome={setIsWelcomePage}
                ready={welcomePage.ready}
            />
        </div>
    );
};

export default WelcomePage;
