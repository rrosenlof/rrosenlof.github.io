import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem`, textDecoration: `underline` }}>
      <Link to={props.to}>{props.children}</Link>
  </li>
)

const Header = ({ siteTitle }) => (
  <header style={{ 
    marginBottom: `1.5rem`,
    margin: `1.5rem auto`,
    maxWidth: 800,
    padding: `1.45rem 1.0875rem`,
    backgroundColor: `#e6ecff`
    }}
  >
    <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        <h3 style={{ display: `inline` }}>Ross Rosenlof</h3>
    </Link>
    <ul style={{ listStyle: `none`, float: 'right' }}>
        <ListLink to="/work/">Work</ListLink>
        <ListLink to="/school/">School</ListLink>
        <ListLink to="/projects/">Projects</ListLink>
        <ListLink to="/hobbies/">Hobbies</ListLink>
    </ul>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
