import React from "react"

import "../../scss/index.scss"
import Header from "../header/Header"
import Footer from "../footer/Footer"

const Layout = ({ children }) => {
  return (
    <div className="global-wrapper">
      <Header />
      <main>{children}</main>

      <Footer />
    </div>
  )
}

export default Layout
