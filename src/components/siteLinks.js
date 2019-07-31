import React from "react"
import { Link } from "gatsby"

const SiteLinks = () => (
    <div class="site-links">
      <ul style={{
        textAlign: `center`,
        marginLeft: "0"
      }}>
        <Link to="/">Home</Link>
        <Link to="/work/">Work</Link>
        <Link to="/school/">School</Link>
        <Link to="/projects/">Projects</Link>
        <Link to="/hobbies/">Hobbies</Link>
      </ul>
    </div>
)

export default SiteLinks