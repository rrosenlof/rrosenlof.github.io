import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Contact from "../components/contact";
import Img from 'gatsby-image'

export default (props) => {
  // console.log(props.data)
  return (
  <Layout>
    <h1>Hello!</h1>
    <p>I'm a student in the Masters of Information Systems Management program at Brigham Young University in Provo, Utah. Look around at some things that I've worked on and that I am interested in!</p>
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
      <Link to="/projects/">
        <div class="card-link">
          <h4>Projects</h4>
          <p>See some projects that I have worked on</p>
        </div>
      </Link>
    </div>
    {/* <div class="row">
      
      <Link to="/hobbies/">
        <div class="card-link">
          <h4>Hobbies</h4>
          <p>Learn more about my interests</p>
        </div>
      </Link>
    </div> */}
    <div class="home-picture">
      <Img fluid={props.data.ross2.childImageSharp.fluid} />
    </div>
    <Contact></Contact>
  </Layout>
  )
}

export const pageQuery = graphql`
  query {
    ross2: file(relativePath: { eq: "ross2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }    
  }
`;
