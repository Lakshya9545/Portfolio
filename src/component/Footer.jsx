import React from 'react'
import "../styling/Footer.css"
function Footer() {
  return (
    <>
      <div className="footer" id="footer">
    <h1>Contact me!!!</h1>
    <div className="contact-in">
      <div className="contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.3149593258845!2d80.04290322945499!3d12.822912682956147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f712b82a78d9%3A0xfdb944a3aee53831!2sSRM%20Institute%20of%20Science%20and%20Technology!5e0!3m2!1sen!2sin!4v1699953729081!5m2!1sen!2sin"
          width="100%"
          height="auto"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className="contact-form">
        <h1>Contact me</h1>
        <form action="submit">
          <input
            type="text"
            placeholder="Name"
            className="contact-form-txt"
            required=""
          />
          <input
            type="email"
            placeholder="Email"
            className="contact-form-txt"
            required=""
          />
          <textarea
            name="message"
            id=""
            placeholder="Message"
            className="contact-form-txtarea"
            required=""
            defaultValue={""}
          />
          <input
            type="submit"
            defaultValue="Send Message "
            className="contact-form-btn"
          />
        </form>
      </div>
    </div>
    <div className="socialmedia">
      <i className="fa-brands fa-instagram" />
      <i className="fa-brands fa-github" />
      <i className="fa-brands fa-square-x-twitter" />
      <i className="fa-brands fa-discord" />
      <i className="fa-brands fa-reddit-alien" />
      <i className="fa-brands fa-linkedin" />
    </div>
  </div>
    </>
  )
}

export default Footer