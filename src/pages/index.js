import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import styles from "./"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello!</h1>
    <p>I'm a student in the Masters of Information Systems Management at Brigham Young University in Provo, Utah. Look around at some things that I've worked on and that I am interested in!</p>
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image /> 
    </div> */}

    <div class="row">
      <div class="card-link">
        <h4>Work</h4>
        <p>information about work, link to view more, blah blah blah</p>
      </div>
      <div class="card-link">
        <h4>School</h4>
        <p>information about school, link to view more, blah blah blah</p>
      </div>
    </div>
    <div class="row">
      <div class="card-link">
        <h4>Projects</h4>
        <p>information about projects, link to view more, blah blah blah</p>
      </div>
      <div class="card-link">
        <h4>Hobbies</h4>
        <p>information about hobbies, link to view more, blah blah blah</p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
