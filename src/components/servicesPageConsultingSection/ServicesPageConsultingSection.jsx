import React from "react"
import Card from "../card/Card"

const ServicesPageConsultingSection = props => {
  let data = props.consultingData
  return (
    <section>
      <h2>{data.servicesPage.title}</h2>
      <h6>{data.servicesPage.subtitle}</h6>
      <p>{data.servicesPage.text}</p>
      <Card
        question={data.servicesPage.question.question}
        answer={data.servicesPage.question.answer}
      />
      <Card
        question={data.servicesPage.question1.question}
        answer={data.servicesPage.question1.answer}
      />
    </section>
  )
}

export default ServicesPageConsultingSection
