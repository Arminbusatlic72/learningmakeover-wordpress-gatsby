import React from "react"
import { Link } from "gatsby"

const Button = props => {
  return (
    <Link className="button" to={props.link}>
      {props.children}
    </Link>
  )
}
export default Button
