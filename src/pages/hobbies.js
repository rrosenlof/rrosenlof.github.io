import React from "react"
import Layout from "../components/layout"
import SiteLinks from "../components/siteLinks"
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
        excerpt(pruneLength: 75)
      }
    }
  }
}

`

const HobbiesPage = ({ data }) => (
  <Layout>
    <h1>Hobbies</h1>
    <p>Here are some of my hobbies:</p>
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

export default HobbiesPage

