import React from "react"
import Menu from "../menu/Menu"
import Button from "../button/Button"
import Logo from "../logo/Logo"

const Header = () => {
  return (
    <header className="global-header">
      <div className="global-header__container">
        <Logo />
        <div className="global-header__wrapper-right">
          <Button>Start learning</Button>
          <Menu />
        </div>
      </div>
    </header>
  )
}

export default Header
