import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  const post = data.markdownRemark
  const cat = post.frontmatter.category
  return (
    <Layout>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <div class="blog-post" dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
      View more posts about my <Link to={cat}>{cat}</Link>
      <br/>
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        category
      }
    }
  }
`