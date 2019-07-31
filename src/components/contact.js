import React from "react"
import { FaSpotify, FaTwitter, FaLinkedin, FaGithub, FaInstagram  } from "react-icons/fa"
import { Link } from "gatsby"

const Contact = () => (
  <div class="contact">
    <h3>Contact Info</h3>
    <p>Email me at <a href="mailto:rosenlof.ross@gmail.com" style={{ fontWeight: "bolder"}}>rosenlof.ross@gmail.com</a> or follow me on these platforms:</p>
    <ul style={{
      textAlign: `center`,
      marginLeft: "0"
    }}>
      <a href="https://www.linkedin.com/in/ross-rosenlof/" target="_blank"><FaLinkedin /></a>
      <a href="https://github.com/rrosenlof" target="_blank"><FaGithub /></a>
      <a href="https://www.instagram.com/ross_rosenlof/" target="_blank"><FaInstagram /></a>
      <a href="https://twitter.com/rrosenlof" target="_blank"><FaTwitter /></a>
      <a href="https://open.spotify.com/user/ross.rosenlof?si=U5lI1_C0TiqxUO1EkNrR6g" target="_blank"><FaSpotify /></a>
    </ul>
  </div>
)

export default Contact