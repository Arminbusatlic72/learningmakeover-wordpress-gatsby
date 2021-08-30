import React from "react"
import Button from "../button/Button"
// import AccordionItem from "./accordionItem/AccordionItem"

const FrontPageAboutSection = props => {
  let data = props.aboutData
  return (
    <section>
      <h2>{data.frontPageAboutSection.title}</h2>

      <div>
        <h6>{data.frontPageAboutSection.accordion.accordion1Title}</h6>
        <p>{data.frontPageAboutSection.accordion.accordion1Text}</p>
      </div>
      <div>
        <h6>{data.frontPageAboutSection.accordion.accordion2Title}</h6>
        <p>{data.frontPageAboutSection.accordion.accordion2Text}</p>
      </div>
      <div>
        <h6>{data.frontPageAboutSection.accordion.accordion3Title}</h6>
        <p>{data.frontPageAboutSection.accordion.accordion3Text}</p>
      </div>
      <Button link={`/${data.frontPageAboutSection.button.title}`}>
        {data.frontPageAboutSection.button.title}
      </Button>
    </section>
  )
}

export default FrontPageAboutSection
