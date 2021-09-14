import React from "react"
import { Link } from "gatsby"

const Button = props => {
  return (
    <Link className={`button ${props.className}`} to={props.link}>
      {props.children}
    </Link>
  )
}
export default Button
