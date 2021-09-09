import React, { useState } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

const Menu = props => {
  const data = useStaticQuery(graphql`
    {
      allWpMenu(filter: { name: { eq: "Primary Menu" } }) {
        edges {
          node {
            menuItems {
              nodes {
                id
                label
                url
              }
            }
          }
        }
      }
    }
  `)
  const [open, setOpen] = useState(false)
  return (
    <nav className="main__nav">
      <div
        className={open === true ? "btn__rotate" : "nav__btn"}
        onClick={() => setOpen(!open)}
        onKeyDown={() => setOpen(!open)}
        role="button"
        tabIndex="0"
      >
        <div className="nav__line"> </div>

        <div className="nav__line"> </div>
      </div>
      <ul className={open === true ? "nav__menu menu-show" : "nav__menu"}>
        {data.allWpMenu.edges[0].node.menuItems.nodes.map(node => {
          return (
            <li key={node.id} className="nav__menu-item">
              <Link
                className="nav__menu-link"
                to={`${
                  node.url !== "https://learningmakeover.com/" ? node.url : "/"
                }`}
              >
                {node.label}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Menu
