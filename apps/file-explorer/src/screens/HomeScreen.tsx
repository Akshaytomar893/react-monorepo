import React from "react";
import LeftSection from "../components/LeftSection";
import RightSection from "../components/RightSection";
import "./HomeScreen.css";

const HomeScreen = () => {
  return (
    <div className="homescreen">
      <div className="leftSection">
        <LeftSection />
      </div>
      <div className="rightSection">
        <RightSection />
      </div>
    </div>
  );
};

export default HomeScreen;
