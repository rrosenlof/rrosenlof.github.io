import React from "react"
import Layout from "../components/layout"
import SiteLinks from "../components/siteLinks";
import { graphql, Link } from "gatsby"

export const query = graphql`
query {
  allMarkdownRemark {
    edges {
      node {
        id
        frontmatter {
          title
          description
        }
        fields {
          slug
        }
      }
    }
  }
}
`

const ProjectsPage = ({ data }) => (
  <Layout>
    <h1>Projects</h1>
    <p>Here are a few projects that I have worked on at work, school, and in my free time:</p>
    <p><b>More to come here soon...</b></p>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <Link
        to={node.fields.slug}
      >
        <div class="post-list" key={node.id} >
          <div style={{ display:`inline-block` }}>
            <h3>
              {node.frontmatter.title}{" "}
            </h3>
            <p style={{float: `right`}}>{node.frontmatter.description}</p>
          </div>
        </div>
      </Link>
    ))}
    <SiteLinks></SiteLinks>
  </Layout>
)

export default ProjectsPage