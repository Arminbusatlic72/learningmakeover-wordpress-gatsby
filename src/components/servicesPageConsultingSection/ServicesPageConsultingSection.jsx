import React from "react"
import Card from "../card/Card"

const ServicesPageConsultingSection = props => {
  let data = props.consultingData
  console.log(data)
  return (
    <section className="consulting-section">
      <div className="global-wrapper">
        <div className="row">
          <div className="column-40">
            <h2 className="consulting-section__heading">
              {data.servicesPage.title}
            </h2>
            <h6 className="consulting-section__subheading">
              {data.servicesPage.subtitle}
            </h6>
            <p>{data.servicesPage.text}</p>
          </div>
          <div className="column-60">
            <Card
              question={data.servicesPage.question.question}
              answer={data.servicesPage.question.answer}
            />
            <Card
              question={data.servicesPage.question1.question}
              answer={data.servicesPage.question1.answer}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesPageConsultingSection
