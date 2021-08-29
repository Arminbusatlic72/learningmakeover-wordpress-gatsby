import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Logo = () => {
  return (
    <Link to={`/`}>
      <StaticImage src="../../images/logo.png" alt="learning makeover logo" />
    </Link>
  )
}

export default Logo
