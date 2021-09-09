import React from "react"
import ContactForm from "../contactForm/ContactForm"

const PageContactFormSection = () => {
  return (
    <section>
      <h6>Get in touch</h6>
      <h2>Schedule an Appointment</h2>
      <ContactForm
        name="Hey, may name is"
        email="My email is"
        subject="And I am looking for"
        message="This is my message"
      />
    </section>
  )
}

export default PageContactFormSection
