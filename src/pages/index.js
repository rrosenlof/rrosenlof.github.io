import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import Contact from "../components/contact";

const IndexPage = () => (
  <Layout>
    <h1>Hello!</h1>
    <p>I'm a student in the Masters of Information Systems Management program at Brigham Young University in Provo, Utah. Look around at some things that I've worked on and that I am interested in!</p>
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image /> 
    </div> */}

    <div class="row">
      <Link to="/work/">
        <div class="card-link">
          <h4>Work</h4>
          <p>Read about some work experience that I have had</p>
        </div>
      </Link>
      <Link to="/school/">
        <div class="card-link">
          <h4>School</h4>
          <p>Read about my coursework at BYU</p>
        </div>
      </Link>
    </div>
    <div class="row">
    <Link to="/projects/">
        <div class="card-link">
          <h4>Projects</h4>
          <p>See some projects that I have worked on</p>
        </div>
      </Link>
      <Link to="/hobbies/">
        <div class="card-link">
          <h4>Hobbies</h4>
          <p>Learn more about my interests</p>
        </div>
      </Link>
    </div>

    {/* <div class="contact">
      <h3>Contact me</h3>
      <p>Email me at <a href="mailto:rosenlof.ross@gmail.com">rosenlof.ross@gmail.com</a> or follow me on one these platforms:</p>
    </div> */}
    <Contact></Contact>
  </Layout>
)

export default IndexPage
