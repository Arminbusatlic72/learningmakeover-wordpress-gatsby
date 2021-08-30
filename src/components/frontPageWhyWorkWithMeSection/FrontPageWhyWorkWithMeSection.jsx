import React from "react"
import Item from "./Item"
const FrontPageWhyWorkWithMeSection = props => {
  let data = props.whyWorkWithMeData
  return (
    <section>
      <h2>{data.frontPageWhyWorkWithMeSection.whytitle}</h2>
      <Item>{data.frontPageWhyWorkWithMeSection.whyWorkWithMeText1}</Item>
      <Item>{data.frontPageWhyWorkWithMeSection.whyWorkWithMeText2}</Item>
      <Item>{data.frontPageWhyWorkWithMeSection.whyWorkWithMeText3}</Item>
    </section>
  )
}

export default FrontPageWhyWorkWithMeSection
