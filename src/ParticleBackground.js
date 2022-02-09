import React from "react";
import Particles from "react-tsparticles";
import ParticleConfig from "./config/ParticleConfig";
import "./index.css";

function ParticleBackground() {
  return (
    <div>
      <Particles params={ParticleConfig}> </Particles>
    </div>
  );
}

export default ParticleBackground;
