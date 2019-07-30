import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>Sorry, this page does not exist.</p>
    <p>Try going back <Link to="/">home</Link></p>
  </Layout>
)

export default NotFoundPage
