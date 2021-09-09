import React from "react"

const Card = props => {
  return (
    <div>
      <h3>{props.question}</h3>
      <div
        contentEditable="true"
        dangerouslySetInnerHTML={{
          __html: props.answer,
        }}
      ></div>
    </div>
  )
}

export default Card
