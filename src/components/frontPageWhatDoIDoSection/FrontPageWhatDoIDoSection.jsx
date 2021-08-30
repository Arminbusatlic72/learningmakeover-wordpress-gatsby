import React from "react"
import Button from "../button/Button"
const FrontPageWhatDoIDoSection = props => {
  let data = props.whatDoIDoData
  return (
    <section>
      <h2>{data.frontPageWhatDoIDoSection.whatDoIDoTitle}</h2>
      <h3>{data.frontPageWhatDoIDoSection.whatDoIDoSubtitle}</h3>
      <p>{data.frontPageWhatDoIDoSection.whatDoIDoSmall}</p>
      <ul>
        <li>{data.frontPageWhatDoIDoSection.whatDoIDoText1}</li>
        <li>{data.frontPageWhatDoIDoSection.whatDoIDoText2}</li>
      </ul>
      <h2>{data.frontPageWhatDoIDoSection.whatDoIDoSubtitle1}</h2>
      <Button link={`/${data.frontPageWhatDoIDoSection.whatDoIDoButton.title}`}>
        {data.frontPageWhatDoIDoSection.whatDoIDoButton.title}
      </Button>
    </section>
  )
}

export default FrontPageWhatDoIDoSection
