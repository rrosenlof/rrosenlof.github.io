import React from "react"
import { Link } from "gatsby"

const SiteLinks = () => (
    <div class="site-links">
      <ul>
        <Link to="/"><b>Home</b></Link>
        <Link to="/work/">Work</Link>
        <Link to="/school/">School</Link>
        <Link to="/projects/">Projects</Link>
        <Link to="/hobbies/">Hobbies</Link>
      </ul>
    </div>
)

export default SiteLinks