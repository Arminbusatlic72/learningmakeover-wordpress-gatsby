import React from "react"

const ContactForm = props => {
  return (
    <div>
      <form method="post" action="#">
        <label>
          {props.name}
          <input type="text" name="name" id="name" />
        </label>
        <label>
          {props.email}
          <input type="email" name="email" id="email" />
        </label>
        <label>
          {props.subject}
          <input type="text" name="subject" id="subject" />
        </label>
        <label>
          {props.message}
          <textarea name="message" id="message" rows="5" />
        </label>
        <button type="submit">Send</button>
        <input type="reset" value="Clear" />
      </form>
    </div>
  )
}

export default ContactForm
