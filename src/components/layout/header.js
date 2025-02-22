import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      icon: file(relativePath: { eq: "philippines.png" }) {
        childImageSharp {
          fluid(maxWidth: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const icon = data.icon.childImageSharp.fluid
  return (
    <nav
      className="px-2 has-background-purple"
      role="navigation"
      aria-label="main navigation"
      style={{
        position: "fixed",
        width: "100%",
        top: 0,
        zIndex: 9,
        color: "white",
      }}
    >
      <div className="columns is-centered py-1">
        <div className="column is-12-mobile is-10-tablet is-6-desktop">
          <div className="columns is-mobile is-vcentered">
            <div className="column px-0">
              <div className="ml-1 has-text-weight-bold is-size-5">
                <Link className="mr-2" to="/">
                  <span className="icon">
                    <Img
                      fluid={icon}
                      alt="Presidential Shopping Spree"
                      style={{ width: 70, marginRight: ".5rem" }}
                    />
                  </span>
                  Home
                </Link>{" "}
                <Link className="mr-2" to="/shop">
                  Shop
                </Link>
              </div>
            </div>

            <div className="column is-narrow px-0">
              <Link className="button is-primary mr-1 is-medium" to="/cart">
                <span className="icon is-medium">
                  <FontAwesomeIcon icon={faShoppingCart} />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
