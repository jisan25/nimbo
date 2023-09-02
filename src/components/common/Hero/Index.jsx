import React from "react";
import "./styles.css";
const Hero = ({ label }) => {
  return (
    <div className="row">
      <div className="bg">
        <div className="caption">
          <span className="border">{label}</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
