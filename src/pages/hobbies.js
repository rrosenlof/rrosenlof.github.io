import React from "react"
import Layout from "../components/layout"
import SiteLinks from "../components/siteLinks"
import { graphql, Link } from "gatsby"
import { rhythm } from "../utils/typography"

export const query = graphql`
query {
  allMarkdownRemark {
    edges {
      node {
        id
        frontmatter {
          title
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
    <p>Here are some of hobbies:</p>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <Link
        to={node.fields.slug}
      >
        <div class="post-list" key={node.id}>
          <h3>
            {node.frontmatter.title}{" "}
          </h3>
          <p>{node.excerpt}</p>
        </div>
      </Link>
    ))}
    <SiteLinks></SiteLinks>
  </Layout>
)

export default HobbiesPage

