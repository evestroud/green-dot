import { useState, React } from "react";
import "./SingleWelcomePage.css";
import MetaTags from "react-meta-tags";

const SingleWelcomePage = props => {
    return (
        <div className={props.classNameRender}>
            <MetaTags>
                <meta
                    name="viewport"
                    content="width=device-width, height=device-height, initial-scale=1"
                />
            </MetaTags>
            <div className="back-button">
                <button onClick={() => props.goBack(props.back)}>
                    {"<<"}
                </button>
            </div>
            <div className="image1">
                <img className={props.classNameRender} src={props.image1} />
            </div>
            <div className="header-text">
                <h1>
                    {props.header}
                </h1>
            </div>
            <div className="sub-text">
                <h2>
                    {props.subText}
                </h2>
            </div>
            <div className="image2">
                <img src={props.image2} />
            </div>
            <div className="image3">
                <img src={props.image3} />
            </div>
            <div className="skip-next">
                <button className="skip" onClick={() => props.skipWelcome()}>
                    Skip Intro
                </button>
                <button
                    className="next-page"
                    onClick={() => props.setWelcome(props.next)}
                >
                    Next
                </button>
            </div>
            <div className="green-dots">
                <img src={props.greenDots} />
            </div>
            <div className="ready-div">
                {props.ready}
            </div>
        </div>
    );
};

export default SingleWelcomePage;
