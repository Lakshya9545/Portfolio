import React from 'react'
import "../styling/Skillsp1.css"
import { FaBootstrap } from "react-icons/fa6";
import { FaReact } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaSass } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa6";
import { FaPython } from "react-icons/fa6";

function Skillsp1() {
  return (
    <>
      <div className="skills" id="skills">
    <h1>Tech stats</h1>
    <div className="icon-division">
    <FaBootstrap className="icon"/>
    <FaReact className="icon"/>
    <FaNodeJs className="icon"/>
    <FaCss3Alt className="icon"/>
  </div>
    {/* <div class="skills-expansion">
    <img src="cyberpunk.jpg" alt="">
    <div class="skills-expansion-box1">
  <h2>Experience</h2>
  <br>
  <ul class="unorder-list">
      <h3>C language</h3>
      <li>1.5 years of experience</li>
      <li>projects created based on CLI</li>
      <br>
      <h3>C++ language</h3>
      <li>1.5 years of experience</li>
      <li>DSA beginner level proficiency</li>
      <br>
      <h3>React </h3>
      <li>Weather web-application</li>
      <li>Currently working with full stack</li>
      <br>
      <h3>Python</h3>
      <li>1 year of experience</li>
      <li>Currently working on ML</li>
      <br>
      <h3>Html,Css,Javascript</h3>
      <li>1.5 years of experience</li>
      <li>Portfolio website</li>
      <h3>Java</h3>
      <li>Currently learning</li>
      <li>Project based on swing and gui</li>
  </ul>
    </div>
</div> */}
    <div className="icon-division">
    <FaSass className="icon"/>
    <FaHtml5 className="icon"/>
    <FaPython className="icon"/>
    </div>
  </div>
    </>
  )
}

export default Skillsp1