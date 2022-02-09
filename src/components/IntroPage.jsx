import React from "react";
import Arrows from "../assets/4-arrows-blue.png";

function IntroPage(){
  return (
    <div className="intro-page-position">
      <h1 className = "intro-page-heading-text">Hi, I'm Jake</h1>
      <h3 className = "intro-page-sub-heading-text">I am an Honors Computer Science student at Stony Brook University actively looking for an intership</h3>
      <img src={Arrows} className = "four-arrows" alt="arrow"/>
    </div>
  );
}

export default IntroPage;
