import React from "react"

const ButtonExternal = props => {
  return (
    <a
      className={`button ${props.className}`}
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.children}
    </a>
  )
}
export default ButtonExternal
