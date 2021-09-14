import React from "react"
import ContactForm from "../contactForm/ContactForm"

const PageContactFormSection = () => {
  return (
    <section className="contact-form-section">
      <div className="global-wrapper">
        <h6 className="contact-form-section__subheading">Get in touch</h6>
        <h2 className="contact-form-section__heading">
          Schedule an Appointment
        </h2>
        <ContactForm
          name="Hey, may name is"
          email="My email is"
          subject="And I am looking for"
          message="This is my message"
        />
      </div>
    </section>
  )
}

export default PageContactFormSection
