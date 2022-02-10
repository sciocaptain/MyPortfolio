import React from "react";

function MainPage(){
  return(
    <div className ="container background">
      <nav>
        <div className = "category-div-top">
          <p className = "">HI I'M JAKE, AN HONORS COMPUTER SCIENCE STUDENT AT SBU</p>
        </div>
      </nav>
      <div id="content1">
        <a href="https://github.com/sciocaptain/Sudoku-Solver-Generator">
          <div className = "category-div-top">
            <p>JAVA SUDOKU SOLVER (GITHUB)</p>
          </div>
        </a>
      </div>
      <div id="content2">
        <a href="https://github.com/sciocaptain/SBO-Professional-Website/deployments/activity_log?environment=github-pages">
          <div className = "category-div-top">
            <p>PROFESSIONAL ORTHODONTICS WEBSITE (GITHUB)</p>
          </div>
        </a>
      </div>
      <div id="content3">
        <a href="">
          <div className = "category-div-top">
            <p>REACT JS NOTES APPLICATION</p>
          </div>
        </a>
      </div>
      <div id="content4">
        <a href="https://www.linkedin.com/in/jacob-segal-1691b7185/">
          <div className = "category-div-bottom">
            <p>LINKEDIN</p>
          </div>
        </a>
      </div>
      <div id="content5">
        <a href="">
        <div className = "category-div-bottom">
          <p>RESUME</p>
        </div>
        </a>
      </div>
      <div id="content6">
        <a href="">
          <div className = "category-div-bottom">
            <p>HANDSHAKE</p>
          </div>
        </a>
      </div>
    </div>
  )
}

export default MainPage;
