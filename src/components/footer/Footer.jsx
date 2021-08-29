import React from "react"
import Menu from "../menu/Menu"
import Logo from "../logo/Logo"

const Footer = () => {
  return (
    <footer>
      <Logo />
      <Menu />© {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.com">Gatsby</a>
      {` `}
      And <a href="https://wordpress.org/">WordPress</a>
    </footer>
  )
}

export default Footer
