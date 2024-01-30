import React from 'react'
import "../styling/PRojectp1.css"
function Projectp1() {
  return (
   <>
   
  <div className="projects" id="projects">
    <h1>PROJECTs</h1>
    <div className="project-box-container">
      <div className="project-box">
        {/* yaha pe icons daal */}
        <p>
          Amazon clone created using html css and javascript is basically a
          prototypical representation of skills which i have gained during my
          academic college years
        </p>
        <a href="https://github.com/Lakshya9545/Amazon-clone">Learn more</a>
      </div>
      <div className="project-box">
        {/* yaha pe icons daal */}
        <p>
          Word nerd basically a random new word generator which provide users
          new words on refreshing the page helping them to improve their vocab{" "}
        </p>
        <a href="https://github.com/Lakshya9545/Word-Nerd">Learn more</a>
      </div>
      <div className="project-box">
        {/* yaha pe icons daal */}
        <p>
          It is a project created using python. Basically it is a game in which
          computer generated random number and the player has to guess the
          number in 5 guess.
        </p>
        <a href="https://github.com/Lakshya9545/Guess-the-number-game">
          Learn more
        </a>
      </div>
    </div>
    <div className="know-more">
      <a href="#aboutme">View more</a>
    </div>
  </div>
   </>
  )
}

export default Projectp1