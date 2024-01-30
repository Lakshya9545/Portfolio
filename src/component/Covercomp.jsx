import React from 'react'
import "../styling/Covercomp.css"
function Covercomp() {
  return (
    <>
    
  <section className="home" id="home">
  <div className="content">
    <h3>Hi, I'm</h3>
    <h1>Lakshya Pandya</h1>
    <p>
      I'm a student in S.R.M institute of science and technology. <br />
      Currently pursuing my bachleors in Computer science engineering{" "}
    </p>
    <div className="content-links">
      <a href="Resume.pdf">My resume</a>
      <a href="#footer">Contact me!!!</a>
    </div>
  </div>
  <div>
    <img
      src="WhatsApp Image 2023-11-19 at 10.45.00 PM.jpeg"
      alt=""
      className="image"
      />
  </div>
</section>
<div className="know-more">
  <a href="#aboutme">Know More</a>
</div>
</>
  )
}

export default Covercomp