import React from "react";
import "./UserLocationShareScreen.css";

const UserLocationShareScreen = ({ setUserLocation }) => {
  console.log("UserLocationShareScreen");
  return (
    <div>
      <div>UserLocationShareScreen</div>
      <button onClick={() => setUserLocation(true)}>CommunityMap</button>
    </div>
  );
};

export default UserLocationShareScreen;
