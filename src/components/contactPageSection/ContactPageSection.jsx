import React from "react"
import ContactFormBig from "./ContactFormBig"

const ContactPageSection = () => {
  return (
    <section className="contact-form-page-section">
      <div className="global-wrapper">
        <h6 className="contact-form-page-section__heading">Get in touch</h6>
        <h2 className="contact-form-page-section__heading">
          Schedule an appointment
        </h2>
        <ContactFormBig
          name={"Hey my name is"}
          subject={"and I am looking for"}
          email={"Get in touch with me at"}
          message={"And I am looking for"}
          phone={"or via phone number"}
          web={"You can check my website here"}
        />
      </div>
    </section>
  )
}

export default ContactPageSection
