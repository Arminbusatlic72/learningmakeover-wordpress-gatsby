import React from "react"
import Menu from "../menu/Menu"
import Logo from "../logo/Logo"

const Header = () => {
  return (
    <header className="global-header">
      <Logo />
      <Menu />
    </header>
  )
}

export default Header
